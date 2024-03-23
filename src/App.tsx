import './App.css';
import {StopWatchTemplate} from './components/StopWatch/components/StopWatchTemplate.tsx';

function App() {
  return (
    <>
      <StopWatchTemplate
        hour={1}
        minute={4}
        second={30}
        isActive={true}
        durationInMinutes={65.5}
        title={'Ahoj'}
      />
    </>
  );
}

export default App;
