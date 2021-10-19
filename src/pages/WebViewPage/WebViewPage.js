import React from 'react'
import {WebView} from 'react-native-webview'
import InfoMessage from "../../commonComponents/complexedComponents/InfoMessage/InfoMessage";
import StyledView from "../../commonComponents/lowLevelComponents/styledView";

const WebViewPage = () => {
  const webViewText = `
    const text = document.createElement('h2')
    text.innerText = 'Text'
    text.style.top = '50px';
    let left = 10
    text.style.width = '50px';
    text.style.left = left + '%';
    text.style.zIndex = '999'
    text.style.position = 'fixed'
    text.style.backgroundColor = 'green'
    document.body.append(text);
    setInterval(() => {
      if(left !== 100){
        left++
        text.style.left = left + '%';
      }
      else{
        left = -15
        text.style.left = left + '%';
      }
    }, 50)
  `;

  const renderInfoMess = (text, textColor, bodyStyle) => {
    return(
      <InfoMessage
        text={text}
        textColor={textColor}
        bodyStyles={{position: 'absolute', alignSelf: 'center', borderRadius: 20, zIndex: 2, ...bodyStyle}} />
    )
  }

  return(
    <StyledView flex={1}>
      <WebView
        source={{ uri: 'https://github.com/react-native-webview/react-native-webview/blob/master/docs/Reference.md#onmessage' }}
        renderError={(err) => renderInfoMess(`Loading was failed. Error detail: ${err}`, '#fff', {width: '100%', backgroundColor: '#fe2356'})}
        renderLoading={() => renderInfoMess('Loading...', '#000', {padding: 20, backgroundColor: 'lightblue'})}
        injectedJavaScript={webViewText}
        onMessage={() => {}}
      />
    </StyledView>
  )
}

export default WebViewPage