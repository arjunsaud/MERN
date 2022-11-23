// eslint-disable-next-line
import { useState, useRef, useEffect } from "react";

const useCustomHook = () => {
  const [time, setTime] = useState(0);
  const [status, setStatus] = useState(false);
  const getTime = useRef(0);

  useEffect(() => {
    if (time) {
      const interval = setInterval(() => {
        setStatus(time);
        setTime((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setStatus(!status);
    }
  }, [time]);

  return [time, setTime, getTime, status];
};

export default useCustomHook;