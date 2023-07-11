import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import { useSound } from '../../hooks/hooks'
import { Container, Button, IcoWrapper } from '@components'
import { PizzaIco, HomeIco, GunIco, PlayerIco } from '@constants/icos'
import cl from './EventListPage.module.scss'

const EventListPage = () => {
    const navigate = useNavigate()
    const [isLegend, setIsLegend] = useState(false)

    const selectSound = useSound('select')

    useEffect(() => {
        const openLegendHandler = (e) => {
            if (e.code === 'KeyL') {
                selectSound()
                setIsLegend(prev => !prev)
            }
        }
        window.addEventListener('keydown', openLegendHandler)
        return () => window.removeEventListener('keydown', openLegendHandler)
    }, [])

    return (
        <Container className={cl.container}>
            <div className={cl.map}>
                {isLegend &&
                    <div className={cl.legend}>
                        <h2 className={classNames('title', cl.title)}>
                            Map Legend
                        </h2>
                        <div className={cl.legendList}>
                            <Button>
                                <IcoWrapper>
                                    <PizzaIco />
                                </IcoWrapper>
                                LIST ITEM 1
                            </Button>
                            <Button>
                                <IcoWrapper>
                                    <HomeIco />
                                </IcoWrapper>
                                LIST ITEM 2
                            </Button>
                            <Button>
                                <IcoWrapper>
                                    <GunIco />
                                </IcoWrapper>
                                LIST ITEM 3
                            </Button>
                            <Button>
                                <IcoWrapper>
                                    <PlayerIco />
                                </IcoWrapper>
                                LIST ITEM 4
                            </Button>
                        </div>
                    </div>
                }
                <iframe
                    className={cl.iframe}
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1868.5970718302467!2d74.60128144730524!3d42.87945713036462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7e74697b7a5%3A0xb625d929c04e872e!2z0J_QsNC90YTQuNC70L7QsiDQv9Cw0YDQutGL!5e0!3m2!1sru!2skg!4v1689085990561!5m2!1sru!2skg'
                    style={{ border: 0, }}
                    allowfullscreen=''
                    loading='lazy'
                    referrerpolicy='no-referrer-when-downgrade'
                />
            </div>
            <div className={cl.ui}>
                <Button onClick={() => navigate('/')}>
                    Back
                </Button>
                <Button onClick={() => setIsLegend(!isLegend)}>
                    Legend
                </Button>
            </div>
        </Container>
    )
}

export { EventListPage }