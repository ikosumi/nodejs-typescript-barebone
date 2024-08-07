// src/app.ts

import { EventEmitter } from 'events';

import { AppConfig } from './types';

/**
 * Represents the main application class.
 * Extends EventEmitter to allow for event-based communication.
 */
class App extends EventEmitter {
  /** The configuration settings for the application */
  private readonly config: AppConfig;

  /**
   * Creates an instance of the App.
   * @param {AppConfig} config - The configuration object for the app.
   */
  constructor(config: AppConfig) {
    super();
    this.config = config;
  }

  /**
   * Starts the application.
   * Logs the start message, emits a 'started' event, and schedules the task to run.
   */
  public start(): void {
    console.log(
      `Starting ${this.config.name} v${this.config.version} in ${this.config.environment} mode`,
    );
    this.emit('started');
    setImmediate(() => {
      this.runTask();
    });
  }

  /**
   * Runs a task asynchronously.
   * This is a private method called by the start method.
   * It logs the task start, schedules the task completion, and emits a 'taskCompleted' event.
   */
  private runTask(): void {
    console.log('Running task...');
    setImmediate(() => {
      console.log('Task completed');
      this.emit('taskCompleted');
    });
  }

  /**
   * Retrieves the current configuration of the app.
   * @returns {AppConfig} A copy of the current configuration.
   */
  public getInfo(): AppConfig {
    return { ...this.config };
  }
}

export default App;
