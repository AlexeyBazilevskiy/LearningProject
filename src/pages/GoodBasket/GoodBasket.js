import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
} from 'react-native';
import StyledView from "../../commonComponents/lowLevelComponents/styledView";
import BasketInfo from "../../commonComponents/complexedComponents/BasketInfo/BasketInfo";
import GoodsTable from "./components/GoodTable/GoodTable";
import Header from "../../commonComponents/complexedComponents/Header/Header";

const goods = [
  {imgUri: 'https://images.ua.prom.st/3224947168_w640_h640_hudi-zhenskoe-zhenskaya.jpg', code: 'CG0934', color: 'White', size: 'XS', name: 'Longsleeve Women X', count: 3},
  {imgUri: 'https://images.ua.prom.st/3224947168_w640_h640_hudi-zhenskoe-zhenskaya.jpg', code: 'AC8435', color: 'White', size: 'S', name: 'Longsleeve Women Y', count: 4}
]
const headerData = {firstLink: 'Cancel', pageTitle: 'Articles In Carton', secondLink: 'Confirm'}

const GoodBasket = () => {
  const [count, setCount] = useState(null)

  useEffect(() => {
    let counted = 0
    for(let i = 0; i < goods.length; i++){
      counted = counted + goods[i].count
    }
    setCount(counted)
  }, [])

  return(
    <SafeAreaView flex={1}>
      <StyledView flex={1}>
        <Header headerData={headerData}/>
        <BasketInfo count={count} orderId={'25003900020001902003'}/>
        <GoodsTable goods={goods} />
      </StyledView>
    </SafeAreaView>
  )
}

export default GoodBasket