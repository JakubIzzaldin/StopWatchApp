import {Box, Button, HStack, Input, Text, VStack} from '@chakra-ui/react';
import {calculatePercentage} from '../../../helpers/calculatePrecentage.ts';
import {CSSProperties} from 'react';
import {StopWatchTime, StopWatchTimeProps} from './StopWatchTime.tsx';
import {StopWatchStatus} from '../../../hooks/useTimer.ts';

type StopWatchTemplateProps = {
  title: string;
  handleTitleChange: (title: string) => void;
  isActive: boolean;
  isEditMode: boolean;
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
  isEditMode,
  handleTitleChange,
  ...props
}: StopWatchTemplateProps) => {
  const currentTimeInSeconds = props.hour * 3600 + props.minute * 60 + props.second;

  const progressPercentage = calculatePercentage(currentTimeInSeconds, durationInSec || 0);

  const resultPercentage = progressPercentage > 100 ? 100 : progressPercentage;

  return (
    <Box>
      {durationInSec ? (
        <Box
          width={`${resultPercentage}%`}
          height={'3px'}
          bgColor={isActive ? progressBarColor : 'gray'}
        />
      ) : (
        <Box width={'100%'} height={'3px'} bgColor={'transparent'} />
      )}
      <VStack alignItems={'center'} gap={10} pt={3}>
        {isEditMode ? (
          <Input value={title} onChange={(event) => handleTitleChange(event.target.value)} />
        ) : (
          <Text fontSize={'large'}>{title}</Text>
        )}

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
