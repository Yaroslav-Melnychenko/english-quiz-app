import React from 'react';
import Fab from '@material-ui/core/Fab';
import { FaPlay } from 'react-icons/fa';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
import useAudio from './use-audio';
import styles from './styles';


const AudioPlayer = ({ src, classes }) => {
  const {
    onPlay, isPlaying, isDone, progress,
  } = useAudio(src, 2);

  return (
    <div className={classes.root}>
      <Fab
        disabled={isPlaying || isDone}
        variant="round"
        color="primary"
        type="button"
        onClick={onPlay}
        className={classes.fab}
      >
        <FaPlay />
      </Fab>
      <LinearProgress variant="buffer" value={progress} valueBuffer={progress} className={classes.progress} />
    </div>
  );
};

export default withStyles(styles)(AudioPlayer);
