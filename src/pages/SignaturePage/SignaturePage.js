import React, {useState} from 'react'
import Signature from 'react-native-signature-canvas'
import Gallery from "../../commonComponents/complexedComponents/Gallery/Gallery";
import StyledView from "../../commonComponents/lowLevelComponents/styledView";
import I18nJs from "react-native-i18n";

const SignaturePage = () => {
  const [signature, setSignature] = useState([])

  const handleOk = (url) => {
    const urls = [...signature, url]
    setSignature(urls)
  }

  const handleClear = () => {
    setSignature([])
  }

  return(
    <StyledView flex={1}>
      <Signature
        onOK={handleOk}
        onEmpty={() => console.log('onEmpty')}
        onClear={handleClear}
        autoClear={true}
        confirmText={I18nJs.t('saveButt')}
        clearText={I18nJs.t('clearButt')}
        imageType={'image/png+xml'}
      />
      <Gallery
        urls={signature}
        contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap'}}
        isHorizontal={false}
      />
    </StyledView>
  )
}

export default SignaturePage