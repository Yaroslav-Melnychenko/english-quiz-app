import { useRef, useState } from 'react';
import { useEvent } from '../../../../shared/hooks';

const useAudio = (src, maxPlayTimes = Number.MAX_SAFE_INTEGER) => {
  const audioRef = useRef(new Audio(src));

  const [isPlaying, setPlay] = useState(false);
  const [count, setCount] = useState(0);
  const [progress, updateProgress] = useState(0);


  const handleTimeUpdate = (e) => {
    const { target } = e;
    updateProgress((target.currentTime / target.duration) * 100);
  };
  const handleEndPlaying = () => {
    setPlay(false);
    setCount(prevCount => prevCount + 1);
  };
  useEvent(audioRef.current, 'ended', handleEndPlaying);
  useEvent(audioRef.current, 'timeupdate', handleTimeUpdate);

  const onPlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      updateProgress(0);
      setPlay(true);
    }
  };

  const onPause = () => {
    if (!audioRef.current.paused) {
      audioRef.current.pause();
      setPlay(false);
    }
  };
  return {
    onPlay,
    onPause,
    isPlaying,
    progress,
    isDone: count >= maxPlayTimes,
  };
};

export default useAudio;
