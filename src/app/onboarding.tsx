('use client');
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, Image, TouchableOpacity } from 'react-native';

import { SafeAreaView, Text, View } from '@/components/ui';
import { useIsFirstTime } from '@/lib/hooks';

const { width, height } = Dimensions.get('window');

export default function Onboarding() {
  const [_, setIsFirstTime] = useIsFirstTime();
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center px-6">
        <Image
          source={require('../../assets/images/healthq-splash-icon.png')}
          style={{
            width: width * 0.3,
            height: width * 0.3,
          }}
          className="mb-10"
          resizeMode="contain"
        />

        <Text className="mb-3 text-center text-2xl font-bold text-slate-900">
          Welcome to Your App
        </Text>

        <Text className="mb-12 max-w-[80%] text-center text-base text-slate-500">
          Your new favorite app for exploring amazing content
        </Text>

        <View className="mb-12 w-full">
          {[
            { icon: '🚀', text: 'Discover trending content' },
            { icon: '🔍', text: 'Search for your interests' },
            { icon: '👤', text: 'Personalized for you' },
          ].map((feature, _index) => (
            <View key={feature.text} className="mb-6 flex-row items-center">
              <View className="mr-4 size-12 items-center justify-center rounded-full bg-sky-100">
                <Text className="text-xl">{feature.icon}</Text>
              </View>
              <Text className="flex-1 text-base text-slate-700">
                {feature.text}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <TouchableOpacity
        className={`mx-6 rounded-xl bg-cyan-600 py-4 ${height > 700 ? 'mb-12' : 'mb-6'}`}
        onPress={() => {
          setIsFirstTime(false);
          router.replace('/login');
        }}
      >
        <Text className="text-center text-base font-bold text-white">
          Get Started
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
