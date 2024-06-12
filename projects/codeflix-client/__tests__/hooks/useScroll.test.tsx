import { useScroll } from '@/app/hooks/useScroll';
import { renderHook, act } from '@testing-library/react';

describe ('useScroll', () => {
  it('should respond to scroll events', () => {
    const { result } = renderHook(() => useScroll());

    act(() => {
      window.scrollY = 100;
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe(true);

    act(() => {
      window.scrollY = 0;
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe(false);

  });
});
