import './App.css';
import {StopWatch} from './components/StopWatch/StopWatch.tsx';
import {Radio, RadioGroup, Stack, Text, VStack, Wrap, WrapItem} from '@chakra-ui/react';
import {StopWatchRecords, useStopWatchQueries} from './hooks/query/useStopWatchQueries.ts';
import {DynamicContent} from './components/DynamicContent/DynamicContent.tsx';
import {useState} from 'react';
import {ADD_STATUS_MAP, DELETE_STATUS_MAP} from './constants.ts';

function App() {
  const {query, addStopWatch, deleteStopWatch, deleteStopWatchStatus, addStopWatchStatus} =
    useStopWatchQueries();
  const [stopWatchDuration, setStopWatchDuration] = useState<number>(0);
  const contentElement = (data: StopWatchRecords) => {
    return Object.entries(data.data).map(([id, {name, elapsed_time}], index) => {
      if (index === 9) return;
      return (
        <WrapItem key={id}>
          <StopWatch
            title={name}
            onDelete={handleDelete}
            durationInSec={stopWatchDuration}
            initialTimeInSec={elapsed_time}
          />
        </WrapItem>
      );
    });
  };
  const handleDelete = (name: string) => {
    deleteStopWatch({name});
  };

  const handleAddStopWatch = (name: string, elapsedTime: number, startTime: number) => {
    addStopWatch({start_time: startTime, elapsed_time: elapsedTime, name});
  };
  const handleDurationChange = (event: string) => {
    setStopWatchDuration(Number(event));
  };

  return (
    <VStack gap={5}>
      <VStack justifyContent={'center'} gap={0}>
        <Text>Add stopwatch</Text>
        {addStopWatchStatus && (
          <Text color={ADD_STATUS_MAP[addStopWatchStatus].color}>
            {ADD_STATUS_MAP[addStopWatchStatus].message}
          </Text>
        )}

        <StopWatch
          title={'StopWatch 1'}
          onAdd={handleAddStopWatch}
          isTitleEditable
          initialTimeInSec={0}
          backgroundColor={'#89d2ff'}
        />
      </VStack>
      <VStack justifyContent={'center'} gap={0}>
        <Text>Maximum duration</Text>
        <RadioGroup defaultValue={undefined} onChange={handleDurationChange}>
          <Stack spacing={5} direction="row">
            <Radio colorScheme="green" value={'0'}>
              No limit
            </Radio>
            <Radio colorScheme="green" value="10">
              10 s
            </Radio>
            <Radio colorScheme="green" value="20">
              20 s
            </Radio>
            <Radio colorScheme="green" value="100">
              100 s
            </Radio>
          </Stack>
        </RadioGroup>
      </VStack>
      <VStack justifyContent={'center'}>
        {deleteStopWatchStatus && (
          <Text color={DELETE_STATUS_MAP[deleteStopWatchStatus].color}>
            {DELETE_STATUS_MAP[deleteStopWatchStatus].message}
          </Text>
        )}
      </VStack>

      <Wrap spacing="30px" justify="center">
        <StopWatch
          title={'Stopky do 10 sec'}
          isTitleEditable={false}
          initialTimeInSec={0}
          durationInSec={10}
        />
        <DynamicContent {...query} data={query.data} renderContent={contentElement} />
      </Wrap>
    </VStack>
  );
}

export default App;
