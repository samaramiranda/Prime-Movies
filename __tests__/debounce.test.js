import debounce from '../utils/debounce';

jest.useFakeTimers();

describe('Debounce', () => {
  const callback = jest.fn();
  const mockSetState = jest.fn();

  jest.mock('react', () => ({
    useState: initial => [initial, mockSetState],
  }));

  beforeEach(() => {
    callback.mockReset();
    mockSetState.mockReset();
  });

  it('Call debounce', () => {
    const debouncedCallback = debounce(callback, 500, mockSetState);

    debouncedCallback();

    jest.advanceTimersByTime(250);
    debouncedCallback();

    expect(() => {
      // eslint-disable-next-line no-unused-vars
      const [_, increment] = mockSetState(false);
      increment();
      expect(mockSetState).toHaveBeenCalledWith(true);
    });

    jest.runAllTimers();

    expect(callback).toBeCalledTimes(1);
  });
});
