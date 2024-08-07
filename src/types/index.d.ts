// src/types/index.ts

/**
 * This file serves as a central location for custom type definitions.
 * Add your project-wide types, interfaces, and type aliases here.
 */

/**
 * Represents the configuration for the App.
 */
export type AppConfig = {
  /** The name of the application */
  name: string;
  /** The version of the application */
  version: string;
  /** The environment in which the application is running */
  environment: 'development' | 'production' | 'test';
};

// If you need to declare global augmentations, you can do so like this:
declare global {
  // Add any global augmentations here
}

// re-export types from other files if present. E.g.:
// export * from './user-types';
// export * from './api-types';
