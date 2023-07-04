import debounce from "lodash.debounce";
import { useEffect, useMemo, useRef } from "react";

function useDebounce(callback: CallableFunction, timeout: number) {
  const ref = useRef<CallableFunction>();

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const func = () => {
      ref.current?.();
    };

    return debounce(func, timeout);
  }, []);

  return debouncedCallback;
}

export { useDebounce };
