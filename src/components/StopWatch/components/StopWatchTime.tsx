import {HStack, Text} from '@chakra-ui/react';

export type StopWatchTimeProps = {
  hour: number;
  minute: number;
  second: number;
  milliseconds?: number;
  separator?: string;
};

export const StopWatchTime = ({
  hour,
  minute,
  second,
  milliseconds,
  separator = ':',
}: StopWatchTimeProps) => {
  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <HStack gap={3} align={'center'}>
      <Text>{formatTime(hour)}</Text>
      <Text fontSize={'large'}>{separator}</Text>
      <Text fontSize={'large'}>{formatTime(minute)}</Text>
      <Text fontSize={'large'}>{separator}</Text>
      <Text fontSize={'large'}>{formatTime(second)}</Text>
      {milliseconds && <Text fontSize={'large'}>{separator}</Text>}
      {milliseconds && <Text fontSize={'large'}>{formatTime(milliseconds)}</Text>}
    </HStack>
  );
};
