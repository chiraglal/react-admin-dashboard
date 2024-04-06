import React from 'react'
import { Card, BadgeDelta, Flex } from '@tremor/react';
const CardItem = () => {
    return (
        <Card
            className="w-xs"
            decoration="top"
            decorationColor="indigo"
        >
            <Flex justifyContent="between" alignItems='centre' />
            <BadgeDelta deltaType='moderateIncrease'>+12.5%</BadgeDelta>
            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Sales</p>
            <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">$34,743</p>
        </Card>
    )
}

export default CardItem