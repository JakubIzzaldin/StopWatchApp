import {StopWatchTemplate} from './components/StopWatchTemplate.tsx';
import {Box, Button, HStack, Icon} from '@chakra-ui/react';
import {useTimer} from '../../hooks/useTimer.ts';
import {CSSProperties, useState} from 'react';
import {AddIcon, DeleteIcon, EditIcon, SearchIcon, SmallCloseIcon} from '@chakra-ui/icons';

type StopWatchProps = {
  durationInSec?: number;
  initialTimeInSec?: number;
  progressBarColor?: CSSProperties['color'];
  title: string;
  isTitleEditable?: boolean;
  backgroundColor?: CSSProperties['backgroundColor'];
  onDelete?: (name: string) => void;
  onAdd?: (name: string, elapsedTime: number, startTime: number) => void;
};

export const StopWatch = ({
  durationInSec,
  initialTimeInSec,
  title,
  onDelete,
  onAdd,
  isTitleEditable = false,
  backgroundColor = 'white',
  progressBarColor = 'green',
}: StopWatchProps) => {
  const [isInDetailMode, setIsInDetailMode] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [actualTitle, setTitle] = useState(title);

  const {handleStart, handlePause, handleRestart, status, min, hour, sec, ms, passedTime} =
    useTimer(initialTimeInSec, durationInSec);
  const handleEditTitle = (value: string) => {
    setTitle(value);
  };
  return (
    <Box
      width={isInDetailMode ? '300px' : '250px'}
      boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}
      backgroundColor={backgroundColor}
      p={'10px'}
    >
      <HStack justifyContent={'center'}>
        {onAdd && (
          <Button
            onClick={() => {
              onAdd(actualTitle, passedTime, Date.now());
            }}
            variant={'ghost'}
            _focus={{outline: 'none'}}
          >
            <Icon as={AddIcon} />
          </Button>
        )}
        {isTitleEditable && (
          <Button
            onClick={() => {
              setIsEditMode((prev) => !prev);
            }}
            variant={'ghost'}
            _focus={{outline: 'none'}}
          >
            <Icon as={EditIcon} />
          </Button>
        )}
        {onDelete && (
          <Button onClick={() => onDelete(title)} variant={'ghost'} _focus={{outline: 'none'}}>
            <Icon as={DeleteIcon} />
          </Button>
        )}
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
        isEditMode={isEditMode}
        handleTitleChange={handleEditTitle}
        hour={hour}
        second={sec}
        minute={min}
        milliseconds={isInDetailMode ? ms : undefined}
        title={actualTitle}
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
