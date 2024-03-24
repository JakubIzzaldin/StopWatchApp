import './App.css';
import {StopWatch} from './components/StopWatch/StopWatch.tsx';
import {Box, Button, Wrap, WrapItem} from '@chakra-ui/react';
import {useStopWatchQueries} from './hooks/query/useStopWatchQueries.ts';

function App() {
  const {query, addStopWatch, deleteStopWatch} = useStopWatchQueries();

  return (
    <Box>
      <Button
        onClick={() => {
          deleteStopWatch.mutate({name: 'StopWatch'});
        }}
      >
        Delete
      </Button>
      <Wrap spacing="30px">
        <WrapItem>
          <StopWatch title={'Neomezene'} />
        </WrapItem>
        <WrapItem>
          <StopWatch durationInSec={5} title={'do 10 sec'} />
        </WrapItem>
        <WrapItem>
          <StopWatch title={'Neomezene'} />
        </WrapItem>
        <WrapItem>
          <StopWatch durationInSec={10} title={'do 10 sec'} />
        </WrapItem>
        <WrapItem>
          <StopWatch title={'Neomezene'} />
        </WrapItem>
        <WrapItem>
          <StopWatch durationInSec={10} title={'do 10 sec'} />
        </WrapItem>
        <WrapItem>
          <StopWatch title={'Neomezene'} />
        </WrapItem>
        <WrapItem>
          <StopWatch durationInSec={10} title={'do 10 sec'} />
        </WrapItem>
        <WrapItem>
          <StopWatch title={'Neomezene'} />
        </WrapItem>
        <WrapItem>
          <StopWatch durationInSec={10} title={'do 10 sec'} />
        </WrapItem>
        <WrapItem>
          <StopWatch title={'Neomezene'} />
        </WrapItem>
        <WrapItem>
          <StopWatch durationInSec={10} title={'do 10 sec'} />
        </WrapItem>
        <WrapItem>
          <StopWatch title={'Neomezene'} />
        </WrapItem>
        <WrapItem>
          <StopWatch durationInSec={10} title={'do 10 sec'} />
        </WrapItem>
      </Wrap>
    </Box>
  );
}

export default App;
