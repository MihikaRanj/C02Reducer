import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mranj.carbonreducer',
  appName: 'Carb0',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
