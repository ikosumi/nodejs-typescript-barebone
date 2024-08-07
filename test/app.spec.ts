// /test/app.spec.ts

import App from '../src/app';

describe('App', () => {
  let app: App;
  const mockConfig = {
    name: 'TestApp',
    version: '1.0.0',
    environment: 'test' as const,
  };

  beforeEach(() => {
    app = new App(mockConfig);
    jest.useFakeTimers();
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  it('should create an instance of App', () => {
    expect(app).toBeInstanceOf(App);
  });

  it('should return correct info', () => {
    expect(app.getInfo()).toEqual(mockConfig);
  });

  it('should start the app and emit "started" event', () => {
    const startedListener = jest.fn();
    app.on('started', startedListener);

    app.start();

    expect(startedListener).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith(
      `Starting ${mockConfig.name} v${mockConfig.version} in ${mockConfig.environment} mode`,
    );
  });

  it('should run task after start', () => {
    const taskCompletedListener = jest.fn();
    app.on('taskCompleted', taskCompletedListener);

    app.start();

    jest.runAllTimers();

    expect(console.log).toHaveBeenCalledWith('Running task...');
    expect(console.log).toHaveBeenCalledWith('Task completed');
    expect(taskCompletedListener).toHaveBeenCalled();
  });

  it('should not modify the original config when getInfo is called', () => {
    const info = app.getInfo();
    info.name = 'ModifiedName';

    expect(app.getInfo().name).toBe('TestApp');
  });
});
