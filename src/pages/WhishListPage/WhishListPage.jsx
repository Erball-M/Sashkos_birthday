import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Button } from '@components'
import money from '@images/money.png'
import beaver from '@images/beaver.png'
import peach from '@images/peach.png'
import greenScreen from '@images/greenScreen.png'
import starfield from '@images/starfield.png'
import groveeStreet from '@images/groveeStreet.webp'
import cl from './WhishListPage.module.scss'

const whishList = [
    { src: money, label: 'Открытка своими руками с вложенной деньгой', description: 'Как вы знаете, лучший подарок - это подарок своими руками и деньги. Внимание, я не шучу открытка должна быть обязательно сделана своими руками, можно вырезать ножницами, раскрашивать карандашами, писать пожелания. Вы можете указать на что именно лучше потратить ваш подарок' },
    { src: beaver, label: 'Брелок “бобер курва” на ключи', description: 'Действительно, почему у меня такого еще нет? И да я не видел его нигде в продаже. Настолько ценно это будет.  Другого на ключи не надо.' },
    { src: peach, label: 'Футболка с принцессой Пич', description: 'Она должна быть по размеру, мой размер M или маломерка L' },
    { src: greenScreen, label: 'Переносной хромакей для стримера', description: 'Он должен быть переносным и компактным и убираемым' },
    { src: starfield, label: 'StarField с NVIDIA GeForce RTX 4090', description: 'Ну а что дешево и сердито!' },
]

const WhishListPage = () => {
    const [index, setIndex] = useState(0)
    const [time, setTime] = useState(new Date().toLocaleTimeString().slice(0, -3))
    const [money, setMoney] = useState(0)

    const navigate = useNavigate()

    useEffect(() => {
        const timer = setInterval(() => {
            const newTime = new Date().toLocaleTimeString().slice(0, -3)
            setTime(newTime)
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    const counter = (minimum, maximum) => {
        for (let count = minimum; count <= maximum; count += 100) {
            setTimeout(() => {
                setMoney(count)
            }, 500)
        }
    }

    const prevSlide = () => {
        setIndex(prevIndex => (prevIndex - 1 + whishList.length) % whishList.length)
    }
    const nextSlide = () => {
        setIndex(prevIndex => (prevIndex + 1) % whishList.length)
    }

    const handleScroll = (e) => {
        if (e.deltaY < 0) {
            prevSlide()
        } else if (e.deltaY > 0) {
            nextSlide()
        }
    }

    useEffect(() => {
        counter(0, 1000000)
    }, [])

    return (
        <Container className={cl.container} onWheel={handleScroll}>
            <div className={cl.wrapper}>
                <div className={cl.top}>
                    <div className={cl.selectIcon}>
                        <img src={whishList[index].src} className={cl.ico} />
                    </div>
                    <div className={cl.data}>
                        <div className={cl.time}>{time}</div>
                        <div className={cl.whiteLine} />
                    </div>
                </div>
                <div className={cl.bottom}>
                    <div className={cl.healthLine} />
                    <div className={cl.cash}>
                        ${`${money}`.padStart(6, '0')}
                    </div>
                </div>
            </div>
            <div className={cl.body}>
                <h2 className={cl.whishTitle}>
                    {whishList[index].label}
                </h2>
                <p className={cl.description}>
                    {whishList[index].description}
                </p>
            </div>
            <div className={cl.ui}>
                <Button onClick={() => navigate('/')}>
                    Back
                </Button>
            </div>
        </Container>
    )
}

export { WhishListPage }