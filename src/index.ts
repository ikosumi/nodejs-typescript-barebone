import { AppConfig } from './types';
import App from './app';

const config: AppConfig = {
  name: 'users',
  version: '1.0',
  environment: 'development',
};

const app = new App(config);

app.start();
