import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import Confetti from 'react-confetti'
import { useSound } from '../../hooks/hooks'
import { Container, Button, IcoWrapper } from '@components'
import { PizzaIco, HomeIco, GunIco, PlayerIco } from '@imports/icos'
import cl from './EventListPage.module.scss'

const EventListPage = ({ birthday }) => {
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
            {birthday && <Confetti className={cl.confetti} />}
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
                {/* <iframe
                    src=''
                    className={cl.iframe}
                /> */}
                snazzymaps iframe
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