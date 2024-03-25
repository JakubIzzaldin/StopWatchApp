import {useEffect, useRef, useState} from 'react';
import {convertMillisecondsToTime} from '../helpers/convertMillisecondsToTime.ts';

export type StopWatchStatus = 'idle' | 'running' | 'paused' | 'finished';
export const useTimer = (initialTimeInMilliseconds = 0, durationInSec?: number) => {
  const timeInterval = useRef(0);
  const startTimeRef = useRef(0);
  const [status, setStatus] = useState<StopWatchStatus>('idle');
  const [passedTime, setPassedTime] = useState(initialTimeInMilliseconds);
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    return () => {
      clearInterval(timeInterval.current);
    };
  }, []);
  const handleStart = () => {
    if (status === 'running' || isTimeUp) return;
    startTimeRef.current = Date.now() - passedTime;
    setStatus('running');
    timeInterval.current = setInterval(() => {
      setPassedTime(Date.now() - startTimeRef.current);
    }, 10);
  };
  const handlePause = () => {
    clearInterval(timeInterval.current);
    setStatus('paused');
  };
  const handleRestart = () => {
    setIsTimeUp(false);
    setPassedTime(0);
    handlePause();
  };
  const times = convertMillisecondsToTime(passedTime);
  if (isTimeUp) {
    return {handleStart, handlePause, handleRestart, status, passedTime, ...times, ms: 0};
  }
  if (durationInSec !== undefined && times.sec >= durationInSec) {
    setIsTimeUp(true);
    handlePause();
    setStatus('finished');

    return {handleStart, handlePause, handleRestart, status, passedTime, ...times, ms: 0};
  }

  return {handleStart, handlePause, handleRestart, status, passedTime, ...times};
};
