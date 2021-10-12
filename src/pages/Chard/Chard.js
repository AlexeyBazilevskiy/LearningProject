import React, {useState} from 'react'
import {Dimensions, processColor} from 'react-native'
import {BarChart} from 'react-native-charts-wrapper'
import StyledView from "../../commonComponents/lowLevelComponents/styledView";

const data = {
  dataSets: [{
    values: [{y: 100}, {y: 105}, {y: 102}, {y: 110}, {y: 78}, {y: 89}, {y: 98}, {y: 76}, {y: 88}, {y: 88}, {y: 88}, {y: 88}],
    label: 'Data',
    config: {
      color: processColor('lightblue'),
      highlightColor: processColor('red'),
    }
  }],
}

const legend = {
  enabled: true,
  textSize: 14,
  form: 'SQUARE',
  formSize: 14,
  xEntrySpace: 10,
  yEntrySpace: 5,
  formToTextSpace: 5,
  wordWrapEnabled: true,
  maxSizePercent: 0.5,
}

const xAxis = {
  valueFormatter: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  position: 'BOTTOM',
  granularityEnabled: true,
  granularity: 1,
  labelCount: 12,
}

const Chard = () => {
  const [windowWidth] = useState(Dimensions.get('window').width);

  return(
    <StyledView>
      <BarChart
        data={data}
        xAxis={xAxis}
        animation={{durationX: 2000}}
        legend={legend}
        drawBarShadow={false}
        drawValueAboveBar={false}
        width={windowWidth}
        height={500}
        gridBackgroundColor={processColor('#ffffff')}
        doubleTapToZoomEnabled={false}
        visibleRange={{ x: { max: 7 }}}
        marker= {{
          enabled: true,
          markerColor: processColor('red'),
          textColor: processColor('#fff'),
          textSize: 14
        }}
      />
    </StyledView>
  )
}

export default Chard