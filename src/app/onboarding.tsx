import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, Image } from 'react-native';
import PagerView from 'react-native-pager-view';

import {
  Button,
  FocusAwareStatusBar,
  SafeAreaView,
  Text,
  View,
} from '@/components/ui';
import { useIsFirstTime } from '@/lib/hooks';

const onboardingContent = [
  {
    image: require('../../assets/images/onboarding1.png'),
    title: 'Obytes Starter',
    description:
      '👏 Welcome to the Obytes Mobile Tribe’s Expo / React Native Starter Kit!',
  },
  {
    image: require('../../assets/images/onboarding2.png'),
    title: 'Production Ready',
    description:
      ' 🚀 We wanted to ensure that this starter was ready for real-world use, providing a solid foundation for building production-grade apps.',
  },
  {
    image: require('../../assets/images/onboarding3.png'),
    title: 'Developer experience and productivity',
    description:
      '🥷  Our focus was on creating a starter that would enhance the developer experience and increase productivity.',
  },
];

const { width } = Dimensions.get('window');

// eslint-disable-next-line max-lines-per-function
export default function Onboarding() {
  const [_, setIsFirstTime] = useIsFirstTime();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <View className="flex h-full items-center justify-center">
      <FocusAwareStatusBar />

      <SafeAreaView className="mt-4">
        <Image
          source={require('../../assets/images/healthq-splash-icon.png')}
          style={{
            width: width * 0.3,
            height: width * 0.3,
          }}
          className="mb-0"
          resizeMode="contain"
        />
      </SafeAreaView>

      {/* Carousel Section */}
      <View className="-mt-32 w-full flex-1">
        <PagerView
          style={{ flex: 1 }} // ← Required inline style
          initialPage={0}
          onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}
        >
          {onboardingContent.map((page, index) => (
            <View
              key={index.toString()}
              className="flex-1 justify-center p-4" // ← Added flex-1
            >
              <Image
                source={page.image}
                className="mb-4 h-[300px] w-full" // ← Fixed dimensions
                resizeMode="contain"
              />
              <Text className="mb-2 text-center text-3xl font-bold">
                {page.title}
              </Text>
              <Text className="text-center text-lg text-gray-600">
                {page.description}
              </Text>
            </View>
          ))}
        </PagerView>

        {/* Pagination Dots */}
        <View className="-mb-12 flex-row justify-center">
          {onboardingContent.map((_, index) => (
            <View
              key={index.toString()}
              className={`mx-2 h-2 rounded-full transition-all duration-300 ${
                currentPage === index ? 'w-6 bg-blue-500' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </View>
      </View>

      <SafeAreaView className="mt-12">
        <Button
          label="Let's Get Started"
          onPress={() => {
            setIsFirstTime(false);
            router.replace('/login');
          }}
        />
        <Text className="my-1 text-left text-lg">
          🧩 Minimal code and dependencies
        </Text>
        <Text className="my-1 text-left text-lg">
          💪 Well-maintained third-party libraries
        </Text>
      </SafeAreaView>
    </View>
  );
}
