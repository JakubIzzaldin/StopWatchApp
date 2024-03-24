import {StopWatchTemplate} from './components/StopWatchTemplate.tsx';
import {Box, Button, HStack, Icon} from '@chakra-ui/react';
import {useTimer} from '../../hooks/useTimer.ts';
import {CSSProperties, useState} from 'react';
import {SearchIcon, SmallCloseIcon} from '@chakra-ui/icons';

type StopWatchProps = {
  durationInSec?: number;
  initialTimeInSec?: number;
  progressBarColor?: CSSProperties['color'];
  title: string;
};
export const StopWatch = ({
  durationInSec,
  initialTimeInSec,
  title,
  progressBarColor = 'green',
}: StopWatchProps) => {
  const [isInDetailMode, setIsInDetailMode] = useState(false);
  const {handleStart, handlePause, handleRestart, status, min, hour, sec, ms} = useTimer(
    initialTimeInSec,
    durationInSec
  );

  return (
    <Box
      width={isInDetailMode ? '300px' : '250px'}
      boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}
      p={'10px'}
    >
      <HStack justifyContent={'flex-end'}>
        {isInDetailMode ? (
          <Button
            onClick={() => setIsInDetailMode(false)}
            variant={'ghost'}
            _focus={{outline: 'none'}}
          >
            <Icon as={SmallCloseIcon} />
          </Button>
        ) : (
          <Button
            onClick={() => setIsInDetailMode(true)}
            variant={'ghost'}
            _focus={{outline: 'none'}}
          >
            <Icon as={SearchIcon} />
          </Button>
        )}
      </HStack>
      <StopWatchTemplate
        hour={hour}
        second={sec}
        minute={min}
        milliseconds={isInDetailMode ? ms : undefined}
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
