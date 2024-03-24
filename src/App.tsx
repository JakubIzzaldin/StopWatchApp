import './App.css';
import {StopWatch} from './components/StopWatch/StopWatch.tsx';
import {Wrap, WrapItem} from '@chakra-ui/react';

function App() {
  return (
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
  );
}

export default App;
