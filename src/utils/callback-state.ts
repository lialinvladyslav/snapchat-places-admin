import { useRef, useState, useEffect } from "react";

const useCallbackState = <T>(value: T) => {
  const [state, setState] = useState<T>(value);
  const callback = useRef<(value: T) => void>();

  const updateState = (newVal: T, cb?: (value: T) => void) => {
    setState(newVal);
    callback.current = cb;
  };

  useEffect(() => {
    if (callback.current) {
      callback.current(state);
    }
  }, [state]);

  return [state, updateState] as [T, typeof updateState];
};

export default useCallbackState;
