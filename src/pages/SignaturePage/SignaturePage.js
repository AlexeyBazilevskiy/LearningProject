import React, {useState} from 'react'
import Signature from 'react-native-signature-canvas'
import Gallery from "../../commonComponents/complexedComponents/Gallery/Gallery";
import StyledView from "../../commonComponents/lowLevelComponents/styledView";

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
        confirmText={'Save'}
        imageType={'image/png+xml'}
      />
      <Gallery urls={signature}/>
    </StyledView>
  )
}

export default SignaturePage