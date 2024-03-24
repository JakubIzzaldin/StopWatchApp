import {Box, Button, HStack, Text, VStack} from '@chakra-ui/react';
import {calculatePercentage} from '../../../helpers/calculatePrecentage.ts';
import {CSSProperties} from 'react';
import {StopWatchTime, StopWatchTimeProps} from './StopWatchTime.tsx';
import {StopWatchStatus} from '../../../hooks/useTimer.ts';

type StopWatchTemplateProps = {
  title: string;
  isActive: boolean;
  durationInSec?: number;
  progressBarColor?: CSSProperties['color'];
  status: StopWatchStatus;
  onStart: () => void;
  onPause: () => void;
  onRestart: () => void;
} & StopWatchTimeProps;

export const StopWatchTemplate = ({
  title,
  isActive,
  durationInSec,
  progressBarColor = 'blue',
  onStart,
  onPause,
  onRestart,
  status,
  ...props
}: StopWatchTemplateProps) => {
  const currentTimeInSeconds = props.hour * 3600 + props.minute * 60 + props.second;

  const progressPercentage = calculatePercentage(currentTimeInSeconds, durationInSec || 0);

  const resultPercentage = progressPercentage > 100 ? 100 : progressPercentage;

  return (
    <Box boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'} p={'10px'}>
      {durationInSec && (
        <Box
          width={`${resultPercentage}%`}
          height={'3px'}
          bgColor={isActive ? progressBarColor : 'gray'}
        />
      )}
      <VStack alignItems={'center'} gap={10} pt={5}>
        <Text fontSize={'large'}>{title}</Text>
        <StopWatchTime {...props} />

        <HStack justifyContent={'space-between'}>
          {status === 'running' ? (
            <Button onClick={onPause} colorScheme="blue" minWidth={'94px'}>
              Stop
            </Button>
          ) : (
            <Button
              onClick={onStart}
              isDisabled={status === 'finished'}
              backgroundColor={status === 'finished' ? 'lightGray' : undefined}
              minWidth={'94px'}
              variant={'solid'}
            >
              Start
            </Button>
          )}
          <Button
            onClick={onRestart}
            variant={'outline'}
            minWidth={'94px'}
            _focus={{outline: 'none'}}
          >
            Restart
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};
