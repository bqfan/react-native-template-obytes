('use client');
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { SafeAreaView, Text, View } from '@/components/ui';
import { useIsFirstTime } from '@/lib/hooks';

const { width, height } = Dimensions.get('window');

export default function Onboarding() {
  const [_, setIsFirstTime] = useIsFirstTime();
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('../../assets/images/healthq-splash-icon.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Welcome to Your App</Text>

        <Text style={styles.subtitle}>
          Your new favorite app for exploring amazing content
        </Text>

        <View style={styles.featuresContainer}>
          <View style={styles.featureItem}>
            <View style={styles.featureIcon}>
              <Text style={styles.featureIconText}>🚀</Text>
            </View>
            <Text style={styles.featureText}>Discover trending content</Text>
          </View>

          <View style={styles.featureItem}>
            <View style={styles.featureIcon}>
              <Text style={styles.featureIconText}>🔍</Text>
            </View>
            <Text style={styles.featureText}>Search for your interests</Text>
          </View>

          <View style={styles.featureItem}>
            <View style={styles.featureIcon}>
              <Text style={styles.featureIconText}>👤</Text>
            </View>
            <Text style={styles.featureText}>Personalized for you</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setIsFirstTime(false);
          router.replace('/login');
        }}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  logo: {
    width: width * 0.3,
    height: width * 0.3,
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 48,
    maxWidth: '80%',
  },
  featuresContainer: {
    width: '100%',
    marginBottom: 48,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  featureIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#e0f2fe',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  featureIconText: {
    fontSize: 20,
  },
  featureText: {
    fontSize: 16,
    color: '#334155',
    flex: 1,
  },
  button: {
    backgroundColor: '#0891b2',
    paddingVertical: 16,
    borderRadius: 12,
    marginHorizontal: 24,
    marginBottom: height > 700 ? 48 : 24,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
