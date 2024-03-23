import {Box, Text, VStack} from '@chakra-ui/react';
import {calculatePercentage} from '../../../helpers/calculatePrecentage.ts';
import {CSSProperties} from 'react';
import {StopWatchTime, StopWatchTimeProps} from './StopWatchTime.tsx';

type StopWatchTemplateProps = {
  title: string;
  isActive: boolean;
  durationInMinutes: number;
  progressBarColor?: CSSProperties['color'];
} & StopWatchTimeProps;

export const StopWatchTemplate = ({
  title,
  isActive,
  durationInMinutes,
  progressBarColor = 'blue',
  ...props
}: StopWatchTemplateProps) => {
  const currentTimeInSeconds = props.hour * 3600 + props.minute * 60 + props.second;

  const progressPercentage = calculatePercentage(currentTimeInSeconds, durationInMinutes * 60);

  const resultPercentage = progressPercentage > 100 ? 100 : progressPercentage;

  return (
    <Box boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'} minWidth={'200px'} minHeight={'150px'}>
      <Box
        width={`${resultPercentage}%`}
        height={'3px'}
        bgColor={isActive ? progressBarColor : 'gray'}
      />
      <VStack padding={'10px'} borderRadius={'5px'}>
        <Text fontSize={'large'}>{title}</Text>
        <StopWatchTime {...props} />
      </VStack>
    </Box>
  );
};
