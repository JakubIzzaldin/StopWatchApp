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
  const formattedMilliseconds =
    milliseconds !== undefined && milliseconds.toString().padStart(3, '0');

  return (
    <HStack gap={1} align={'center'}>
      <Text fontSize={'large'} minWidth="1.3rem">
        {formatTime(hour)}
      </Text>
      <Text fontSize={'large'}>{separator}</Text>
      <Text fontSize={'large'} minWidth="1.3rem">
        {formatTime(minute)}
      </Text>
      <Text fontSize={'large'}>{separator}</Text>
      <Text fontSize={'large'} minWidth="1.3rem">
        {formatTime(second)}
      </Text>
      {formattedMilliseconds && <Text fontSize={'large'}>{separator}</Text>}
      {formattedMilliseconds && (
        <Text fontSize={'large'} minWidth="2.2rem">
          {formattedMilliseconds}
        </Text>
      )}
    </HStack>
  );
};
