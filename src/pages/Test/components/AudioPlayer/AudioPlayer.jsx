import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import { FaPlay } from 'react-icons/fa';

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3');

  const playMusic = () => {
    setIsPlaying(true);
    audio.play();
  };

  return (
    <div>
      <Fab
        variant="round"
        color="primary"
        type="button"
        onClick={playMusic}
        disabled={isPlaying}
      >
        <FaPlay />
      </Fab>
    </div>
  );
};

export default Player;
