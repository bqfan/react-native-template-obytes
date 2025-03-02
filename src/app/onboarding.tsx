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

const { width, height } = Dimensions.get('window');
const HEADER_PERCENTAGE = 20; // % of screen height
const CAROUSEL_PERCENTAGE = 40; // % of screen height
const BOTTOM_PERCENTAGE = 15; // % of screen height

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
      '🚀 We wanted to ensure that this starter was ready for real-world use, providing a solid foundation for building production-grade apps.',
  },
  {
    image: require('../../assets/images/onboarding3.png'),
    title: 'Developer experience and productivity',
    description:
      '🥷 Our focus was on creating a starter that would enhance the developer experience and increase productivity.',
  },
];

// eslint-disable-next-line max-lines-per-function
export default function Onboarding() {
  const [_, setIsFirstTime] = useIsFirstTime();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);

  // Height calculations
  const headerHeight = (height * HEADER_PERCENTAGE) / 100;
  const carouselHeight = (height * CAROUSEL_PERCENTAGE) / 100;
  const bottomHeight = (height * BOTTOM_PERCENTAGE) / 100;

  return (
    <View className="flex-1 bg-white">
      <FocusAwareStatusBar />

      {/* Header Section (20% of screen height) */}
      <SafeAreaView style={{ height: headerHeight }}>
        <View className="flex-1 items-center justify-center">
          <Image
            source={require('../../assets/images/healthq-splash-icon.png')}
            style={{
              width: width * 0.3,
              height: width * 0.3,
            }}
            resizeMode="contain"
          />
        </View>
      </SafeAreaView>

      {/* Carousel Section (60% of screen height) */}
      <View style={{ height: carouselHeight }}>
        <PagerView
          style={{ flex: 1 }}
          initialPage={0}
          onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}
        >
          {onboardingContent.map((page, index) => (
            <View
              key={index.toString()}
              className="flex-1 items-center justify-center p-4"
            >
              <Image
                source={page.image}
                style={{
                  width: width * 0.8,
                  height: carouselHeight * 0.6,
                  resizeMode: 'contain',
                }}
                className="mb-4"
              />
              <Text className="mb-2 px-4 text-center text-2xl font-bold">
                {page.title}
              </Text>
              <Text className="px-4 text-center text-base text-gray-600">
                {page.description}
              </Text>
            </View>
          ))}
        </PagerView>

        {/* Pagination Dots */}
        <View className="absolute -bottom-5 w-full">
          <View className="flex-row justify-center">
            {onboardingContent.map((_, index) => (
              <View
                key={index.toString()}
                className={`mx-2 h-2 rounded-full ${
                  currentPage === index ? 'w-6 bg-blue-500' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </View>
        </View>
      </View>

      {/* Bottom Section (20% of screen height) */}
      <SafeAreaView style={{ height: bottomHeight }}>
        <View className="flex-1 justify-between px-6 pb-4">
          <Button
            label="Let's Get Started"
            onPress={() => {
              setIsFirstTime(false);
              router.replace('/login');
            }}
          />
        </View>
      </SafeAreaView>
      <View className="flex items-center  justify-center">
        <Text className="my-1 text-left text-lg">
          🧩 Minimal code and dependencies
        </Text>
        <Text className="my-1 text-left text-lg">
          💪 well maintained third-party libraries
        </Text>
      </View>
    </View>
  );
}
