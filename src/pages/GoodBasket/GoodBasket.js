import React, { useState, useEffect } from 'react'
import { StyledView } from "../../Styles/Styles";
import BasketInfo from "../../Components/GoodBasketComponents/BasketInfo/BasketInfo";
import GoodsTable from "../../Components/GoodBasketComponents/GoodTable/GoodTable";

const goods = [{img: 'https://images.ua.prom.st/3224947168_w640_h640_hudi-zhenskoe-zhenskaya.jpg', code: 'CG0934', color: 'White', size: 'XS', name: 'Longsleeve Women X', count: 3},
    {img: 'https://images.ua.prom.st/3224947168_w640_h640_hudi-zhenskoe-zhenskaya.jpg', code: 'AC8435', color: 'White', size: 'S', name: 'Longsleeve Women Y', count: 4},
    {img: 'https://images.ua.prom.st/3224947168_w640_h640_hudi-zhenskoe-zhenskaya.jpg', code: 'CG0935', color: 'White', size: 'XL', name: 'Longsleeve Women Z', count: 3},
    {img: 'https://images.ua.prom.st/3224947168_w640_h640_hudi-zhenskoe-zhenskaya.jpg', code: 'CG0235', color: 'White', size: 'XL', name: 'Longsleeve Women Z', count: 3},
    {img: 'https://images.ua.prom.st/3224947168_w640_h640_hudi-zhenskoe-zhenskaya.jpg', code: 'CG0435', color: 'White', size: 'XL', name: 'Longsleeve Women Z', count: 3},
    {img: 'https://images.ua.prom.st/3224947168_w640_h640_hudi-zhenskoe-zhenskaya.jpg', code: 'CG0135', color: 'White', size: 'XL', name: 'Longsleeve Women Z', count: 3},
    {img: 'https://images.ua.prom.st/3224947168_w640_h640_hudi-zhenskoe-zhenskaya.jpg', code: 'CG0735', color: 'White', size: 'XL', name: 'Longsleeve Women Z', count: 3},
    {img: 'https://images.ua.prom.st/3224947168_w640_h640_hudi-zhenskoe-zhenskaya.jpg', code: 'CG0985', color: 'White', size: 'XL', name: 'Longsleeve Women Z', count: 3},
    {img: 'https://images.ua.prom.st/3224947168_w640_h640_hudi-zhenskoe-zhenskaya.jpg', code: 'CG095', color: 'White', size: 'XL', name: 'Longsleeve Women Z', count: 3},
    {img: 'https://images.ua.prom.st/3224947168_w640_h640_hudi-zhenskoe-zhenskaya.jpg', code: 'CG055', color: 'White', size: 'XL', name: 'Longsleeve Women Z', count: 3},
    {img: 'https://images.ua.prom.st/3224947168_w640_h640_hudi-zhenskoe-zhenskaya.jpg', code: 'CG955', color: 'White', size: 'XL', name: 'Longsleeve Women Z', count: 3},
    {img: 'https://images.ua.prom.st/3224947168_w640_h640_hudi-zhenskoe-zhenskaya.jpg', code: 'C0955', color: 'White', size: 'XL', name: 'Longsleeve Women Z', count: 3},
    {img: 'https://images.ua.prom.st/3224947168_w640_h640_hudi-zhenskoe-zhenskaya.jpg', code: 'G0955', color: 'White', size: 'XL', name: 'Longsleeve Women Z', count: 3},
    {img: 'https://images.ua.prom.st/3224947168_w640_h640_hudi-zhenskoe-zhenskaya.jpg', code: 'CG0d955', color: 'White', size: 'XL', name: 'Longsleeve Women Z', count: 3},
    {img: 'https://images.ua.prom.st/3224947168_w640_h640_hudi-zhenskoe-zhenskaya.jpg', code: 'CG09ds55', color: 'White', size: 'XL', name: 'Longsleeve Women Z', count: 3}]

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
        <StyledView flex={1}>
            <BasketInfo count={count} />
            <GoodsTable goods={goods} />
        </StyledView>
    )
}

export default GoodBasket