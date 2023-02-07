import { useRef, useState, useLayoutEffect } from "react";

export function useHeight({ on = true, delay = 50 } = {} as any) {
  const ref = useRef<any>();
  const [height, setHeight] = useState(0);
  const heightRef = useRef(height);
  const [ro] = useState(
    () =>
      new ResizeObserver(() => {
        if (ref.current && heightRef.current !== ref.current.offsetHeight) {
          heightRef.current = ref.current.offsetHeight;
          setHeight(ref.current.offsetHeight);
        }
      })
  );
  useLayoutEffect(() => {
    if (on && ref.current) {
      setTimeout(() => {
        setHeight(ref.current.offsetHeight);
        ro.observe(ref.current, {});
      }, delay);
    }
    return () => ro.disconnect();
  }, [on, ref.current, delay]);
  return [ref, height as any];
}
