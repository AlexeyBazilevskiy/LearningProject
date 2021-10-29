import React, {useEffect, useState} from "react";
import {Dimensions, TouchableWithoutFeedback} from 'react-native'
import * as Progress from 'react-native-progress';
import StyledView from "../../../../commonComponents/lowLevelComponents/styledView";
import StyledModal from "../../../../commonComponents/lowLevelComponents/styledModal";
import {usePlayer} from "../../../../hooks/playerHook";
import StyledText from "../../../../commonComponents/lowLevelComponents/styledText";
import PlayerButton from "../PlayerButton/PlayerButton";
import ICPlay from '../../../../assets/icons/play.svg'
import ICPause from '../../../../assets/icons/pause.svg'
import ICMix from '../../../../assets/icons/mix.svg'
import ICNoMix from '../../../../assets/icons/notMix.svg'
import ICLoopAll from '../../../../assets/icons/loopAll.svg'
import ICLoopOne from '../../../../assets/icons/loopOne.svg'
import ICNoLoop from '../../../../assets/icons/notLoop.svg'
import ICSkipRight from '../../../../assets/icons/skipRight.svg'
import ICSkipLeft from '../../../../assets/icons/skipLeft.svg'
import ICMusic from '../../../../assets/icons/musik.svg'
import {SafeAreaView} from "react-native-safe-area-context";
import {useTheme} from "@react-navigation/native";

const Player = ({song, songList, isPlayerOpen, onClickOpenPlayer, isMix, setIsMix}) => {
  const [currentSong, setCurrentSong] = useState(song ? song : null)
  const [screenWidth] = useState(Dimensions.get('window').width)
  const {colors} = useTheme()

  const onNextOrPrev = (index) => {
    let songId
    if(isMix){
      songId = Math.floor(Math.random() * songList.length)
    }
    else{
      if(index < 0){
        songId = loop === 'loopAll' ? songList.length - 1 : 0
      }
      else if(index >= songList.length){
        songId = loop === 'loopAll' ? 0 : songList.length - 1
      }
      else{
        songId = index
      }
    }
    setCurrentSong({name: songList[songId].name, uri: songList[songId].fileCopyUri, index: songId})
  }

  const {onPlay, onSkip, onPause, currentTime, onLoop, isPlay, loop, duration, time} = usePlayer(currentSong.name, currentSong.uri, currentSong.index, onNextOrPrev)

  const changeValue = (e) => {
    onSkip((e.nativeEvent.pageX) * 100 / (screenWidth - 10) * duration / 100)

  }

  useEffect(() => {
    let timer
    if (isPlay){
      timer = setInterval(() => {
        currentTime()
      }, 500)
    }
    return(() => {
      clearInterval(timer)
    })
  }, [isPlay])

  return (
    <StyledModal
      visible={isPlayerOpen}
      animationType="slide"
      onRequestClose={onClickOpenPlayer}
    >
    <SafeAreaView flex={1} backgroundColor={colors.musicPlayerColor}>
      <PlayerButton Icon={ICSkipLeft} onPress={onClickOpenPlayer} />

      <StyledView
        backgroundColor={colors.musicPlayerColor}
        flex={1}
        paddingHorizontal={'20px'}
        marginVertical={'60px'}
        justifyContent={'space-around'}
      >
        <ICMusic
          alignSelf={'center'}
          height={250}
          width={250}
          fill={'#fff'}
        />
        <StyledText
          textAlign={'center'}
          color={'white'}
          fontSize={'22px'}
          numberOfLines={1}
        >
          {currentSong.name}
        </StyledText>
        {duration &&
          <TouchableWithoutFeedback onPress={changeValue}>
            <Progress.Bar
                progress={time}
                width={null}
                height={10}
                animated
              />
          </TouchableWithoutFeedback>
        }
        <StyledView
          flexDirection={'row'}
          justifyContent={'space-around'}
        >

          {/*TODO: Переделать испольщуя useMemo*/ }

          <PlayerButton Icon={ICSkipLeft} onPress={() => {onNextOrPrev(currentSong.index - 1)}} />
          <PlayerButton Icon={isPlay ? ICPause : ICPlay} onPress={isPlay? onPause : onPlay} />
          <PlayerButton Icon={ICSkipRight} onPress={() => {onNextOrPrev(currentSong.index + 1)}} />
        </StyledView>
        <StyledView
          flexDirection={'row'}
          justifyContent={'space-around'}
        >
          <PlayerButton Icon={isMix ? ICMix : ICNoMix} onPress={() =>{setIsMix(!isMix)}} />
          <PlayerButton Icon={loop === 'loopAll' || loop === 'loopOne' ? loop === 'loopAll' ? ICLoopAll : ICLoopOne : ICNoLoop} onPress={onLoop}/>
        </StyledView>
      </StyledView>
      </SafeAreaView>
    </StyledModal>
  )
}

export default Player