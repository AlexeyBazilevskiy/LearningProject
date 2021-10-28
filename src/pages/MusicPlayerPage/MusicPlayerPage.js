import React, {useEffect, useState} from 'react'
import StyledView from "../../commonComponents/lowLevelComponents/styledView";
import {getAllMusic} from "../../api";
import {useDispatch, useSelector} from "react-redux";
import {getLocalMusic, playSong} from "../../actions/actionCreator";
import ListOfArray from "../../commonComponents/complexedComponents/ListOfArray/ListOfArray";
import MusicListItem from "./components/MusicListItem/MusikListItem";
import CustomButton from "../../commonComponents/complexedComponents/CustomButton/CustomButton";
import I18nJs from "../../language/strings";
import Player from "./components/Player/Player";

const MusicPlayerPage = ({navigation}) => {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false)
  const [playingSong, setPlayingSong] = useState(null)
  const [isMix, setIsMix] = useState(false)

  const dispatch = useDispatch()
  const {musicStore: {data}} = useSelector(state => state)

  const onClickOpenPlayer = (song) => {
    setPlayingSong(!isPlayerOpen ? {name: song.name, uri: song.fileCopyUri, index: data.indexOf(song)} : null)
    setIsPlayerOpen(!isPlayerOpen)
  }

  useEffect(async () => {
    addSongButton()
    if(data.length < 0) {
      await addSongs()
    }
    return(() =>{
      dispatch(playSong(null))
    })
  },[])

  const addSongs = async () => {
    const musicList = await getAllMusic()
    if(musicList){
      dispatch(getLocalMusic(musicList))
    }
  }

  const addSongButton = () => {
    navigation.setOptions({
      headerRight: () => (
        <CustomButton
          onPress={addSongs}
          text={I18nJs.t('addSong')}
          bodyStyles={{
            marginHorizontal: 20,
          }}
        />
      ),
    })
  }

  return(
    <StyledView>
      <ListOfArray data={data} info={onClickOpenPlayer} RenderItem={MusicListItem} />
      {playingSong && <Player isPlayerOpen={isPlayerOpen} song={playingSong} onClickOpenPlayer={onClickOpenPlayer} songList={data} isMix={isMix} setIsMix={setIsMix}/>}
    </StyledView>
  )
}

export default MusicPlayerPage