import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image } from 'react-native';
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
    description: 'The right way to build your mobile app',
  },
  {
    image: require('../../assets/images/onboarding2.png'),
    title: 'Production Ready',
    description: '🚀 Built with best practices in mind',
  },
  {
    image: require('../../assets/images/onboarding3.png'),
    title: 'Developer Experience',
    description: '🥷 Focus on productivity and efficiency',
  },
];

// eslint-disable-next-line max-lines-per-function
export default function Onboarding() {
  const [_, setIsFirstTime] = useIsFirstTime();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <View className="flex h-full items-center justify-center">
      <FocusAwareStatusBar />

      {/* Carousel Section */}
      <View className="w-full flex-1">
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
        <View className="mb-4 flex-row justify-center">
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

      {/* Existing Features List */}
      <View className="justify-end px-4">
        <Text className="my-1 pt-6 text-left text-lg">🚀 Production-ready</Text>
        <Text className="my-1 text-left text-lg">
          🥷 Developer experience + Productivity
        </Text>
        <Text className="my-1 text-left text-lg">
          � Minimal code and dependencies
        </Text>
        <Text className="my-1 text-left text-lg">
          💪 Well maintained third-party libraries
        </Text>
      </View>

      <SafeAreaView className="mt-6">
        <Button
          label="Let's Get Started"
          onPress={() => {
            setIsFirstTime(false);
            router.replace('/login');
          }}
        />
      </SafeAreaView>
    </View>
  );
}
