export const onPlay = (song) => {
  console.log('startPlay');
  song.play((success) => {
    if (success) {
      console.log('successfully finished playing');
    } else {
      console.log('playback failed due to audio decoding errors');
    }
  });
}

export const onSkip = (song) => {
  song.setCurrentTime(2.5);
}

export const onPause = (song) => {
  song.pause()
  .then(() => {
    console.log('pause')
  })
}

export const onStop = (song) => {
  song.stop()
  .then(() => {
    console.log('pause')
  })
}

export const onReplase = (song) => {
  song.release();
}
