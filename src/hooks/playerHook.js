import {useState, useEffect} from 'react'
import Sound from "react-native-sound";
import {useDispatch, useSelector} from "react-redux";
import {playSong} from "../actions/actionCreator";
import MusicControl, { Command } from "react-native-music-control";
import musicIcon from '../assets/icons/music.png'

export const usePlayer = (name, uri, index, onNextOrPrev) => {
  Sound.setCategory('Playback');
  const {currentSongStore: {currentSong}} = useSelector(state => state)
  const store = useSelector(state => state)
  const [song, setSong] = useState(null)
  const [isPlay, setIsPlay] = useState(false)
  const [isLoop, setIsLoop] = useState(false)
  const [loop, setLoop] = useState('loopAll')
  const [time, setTime] = useState(0)
  const [isStop, setIsStop] = useState(false)
  const dispatch = useDispatch()

  useEffect(async () => {
    console.log(store)
    if(currentSong && currentSong.current._filename === uri) {
      setSong(currentSong.current)
      setIsLoop(currentSong.looping)
      setIsPlay(currentSong.current._playing)
    }
    else{
      setIsPlay(false)
      const newSong = new Sound(uri, '', (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        // loaded successfully
        console.log('duration in seconds: ' + newSong.getDuration() + 'number of channels: ' + newSong.getNumberOfChannels());
          // Play the sound with an onEnd callback
        setIsPlay(true)
        setIsStop(false)
        newSong.play((success) => {
          dispatch(playSong(null))
          onNextOrPrev(index + 1)
          setIsPlay(false)
        });
      });
      setSong(newSong)
      dispatch(playSong({current: newSong, looping: isLoop}))

    }
    if(currentSong.current && currentSong.current._filename !== uri){
      currentSong.current.stop()
    }
  }, [uri, isStop])
  useEffect(() => {
    MusicControl.setNowPlaying({
      title: name,
      artwork: musicIcon
    })
    MusicControl.enableBackgroundMode(true);
    MusicControl.enableControl('nextTrack', true)
    MusicControl.enableControl('previousTrack', true)
    MusicControl.enableControl('play', true)
    MusicControl.enableControl('pause', true)
    MusicControl.on(Command.play, isPlay ? onPause : onPlay)
    MusicControl.on(Command.pause, onPause)
    MusicControl.on(Command.nextTrack, () => {
      onNextOrPrev(index + 1)
    })
    MusicControl.on(Command.previousTrack, () => {
      onNextOrPrev(index - 1)
    })
  }, [isPlay, uri])

  const onPlay = () => {
    setIsPlay(true)
    setIsStop(false)
    song.play((success) => {
      if(success && !isLoop){
        dispatch(playSong(null))
        onNextOrPrev(index + 1)
        setIsPlay(false)
      }
    });
  }

  const onSkip = (value) => {
    song.setCurrentTime(value);
  }

  const onPause = () => {
    song.pause()
    setIsPlay(false)
  }

  const currentTime = () => {
    song.getCurrentTime((second ) => {
      setTime(second * 100 / song._duration / 100)
    });
  }

  const onLoop = () => {
    switch (loop) {
      case 'loopAll':
        setLoop('loopOne');
        song.setNumberOfLoops(-1);
        setIsLoop(true);
        dispatch(playSong({...currentSong, looping: true}));
        break;
      case 'loopOne':
        setLoop('noLoop');
        song.setNumberOfLoops(0)
        setIsLoop(false)
        dispatch(playSong({...currentSong, looping: false}))
        break;
      case 'noLoop':
        setLoop('loopAll');
        break;
    }
  }

  return{
    onPlay,
    onSkip,
    onPause,
    currentTime,
    onLoop,
    time,
    isPlay,
    loop,
    duration: song && song._duration
  }
}