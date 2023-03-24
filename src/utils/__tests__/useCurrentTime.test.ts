import { renderHook, act } from '@testing-library/react-hooks';
import { useCurrentTime } from '../useCurrentTime';

describe('useCurrentTime', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('returns current time', () => {
    const currentDate = new Date();

    const { result } = renderHook(() => useCurrentTime());

    expect(result.current).toEqual(currentDate);
  });

  it('updates time every second', () => {
    const currentDate = new Date();
    const { result } = renderHook(() => useCurrentTime());

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(result.current).not.toEqual(currentDate);
  });

  it('clears interval on unmount', () => {
    const { unmount } = renderHook(() => useCurrentTime());

    const clearIntervalSpy = jest.spyOn(window, 'clearInterval');
    unmount();

    expect(clearIntervalSpy).toHaveBeenCalled();
  });
});
