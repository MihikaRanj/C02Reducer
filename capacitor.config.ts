import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mranj.carbonreducer',
  appName: 'carbon-reducer',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
