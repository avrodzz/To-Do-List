import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.avrodzz.ionic.todolist',
  appName: 'To-Do-List',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
