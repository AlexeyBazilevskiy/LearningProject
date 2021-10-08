import React, { useState, useEffect } from 'react'
import StyledView from "../../commonComponents/lowLevelComponents/styledView";
import BasketInfo from "./components/BasketInfo/BasketInfo";
import GoodsTable from "./components/GoodTable/GoodTable";
import Header from "../../commonComponents/complexedComponents/Header/Header";

const goods = [
    {orderId: '25003900020001902003',
        orderCount: 7,
        order: [{
            imgUri: 'https://images.ua.prom.st/3224947168_w640_h640_hudi-zhenskoe-zhenskaya.jpg',
            code: 'CG0934',
            color: 'White',
            size: 'XS',
            name: 'Longsleeve Women X',
        count: 3
    },
    {
        imgUri: 'https://images.ua.prom.st/3224947168_w640_h640_hudi-zhenskoe-zhenskaya.jpg',
        code: 'AC8435',
        color: 'White',
        size: 'S',
        name: 'Longsleeve Women Y',
        count: 4
    }]
}]
const headerData = {firstLink: 'Cancel', pageTitle: 'Summary', secondLink: 'Prepare'}

const GoodBasket = () => {
    const [count, setCount] = useState(null)
    const [orderCount, setOrderCount] = useState(null)

    useEffect(() => {
        let counted = 0
        const {order} = goods[0]
        for(let i = 0; i < order.length; i++){
            counted = counted + order[i].count
        }
        setCount(goods.length)
        setOrderCount(counted)
        goods.orderCount = counted
    }, [])
    return(
        <StyledView flex={1}>
            <Header headerData={headerData}/>
            <BasketInfo orderCount={orderCount} count={count} orderId={'2601 - LAS VEGAS(TST)'}/>
            <GoodsTable goods={goods} />
        </StyledView>
    )
}

export default GoodBasket