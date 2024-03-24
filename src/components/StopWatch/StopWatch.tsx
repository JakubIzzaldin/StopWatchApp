import {StopWatchTemplate} from './components/StopWatchTemplate.tsx';
import {Box} from '@chakra-ui/react';
import {useTimer} from '../../hooks/useTimer.ts';
import {CSSProperties} from 'react';

type StopWatchProps = {
  areMillisecondsShown?: boolean;
  durationInSec?: number;
  initialTimeInSec?: number;
  progressBarColor?: CSSProperties['color'];
  title: string;
};
export const StopWatch = ({
  areMillisecondsShown,
  durationInSec,
  initialTimeInSec,
  title,
  progressBarColor = 'green',
}: StopWatchProps) => {
  const {handleStart, handlePause, handleRestart, status, min, hour, sec, ms} = useTimer(
    initialTimeInSec,
    durationInSec
  );

  return (
    <Box>
      <StopWatchTemplate
        hour={hour}
        second={sec}
        minute={min}
        milliseconds={areMillisecondsShown ? ms : undefined}
        title={title}
        status={status}
        isActive
        durationInSec={durationInSec ? durationInSec : undefined}
        progressBarColor={progressBarColor}
        onStart={handleStart}
        onPause={handlePause}
        onRestart={handleRestart}
      />
    </Box>
  );
};
