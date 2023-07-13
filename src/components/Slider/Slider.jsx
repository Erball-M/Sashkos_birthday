import React, { useEffect, useMemo, useState } from 'react'
import classNames from 'classnames'
import { useProgressBar } from '../../hooks/hooks'
import { Container } from '@components'
import logo from '@images/logo.png'
import logoHB from '@images/logoHB.png'
import cl from './Slider.module.scss'

const Slider = ({ imageDatas, interval, birthday }) => {
    const [autoSlide, setAutoSlide] = useState(true)
    const [currentIndex, setCurrentIndex] = useState(0)

    const progressPercent = useProgressBar(currentIndex, imageDatas.length)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imageDatas.length)
        }, interval)
        if (!autoSlide) clearInterval(timer)
        return () => clearInterval(timer)
    }, [imageDatas.length, interval, autoSlide])

    const prevSlide = () => {
        setAutoSlide(false)
        setCurrentIndex(prevIndex => (prevIndex - 1 + imageDatas.length) % imageDatas.length)
    }
    const nextSlide = () => {
        setAutoSlide(false)
        setCurrentIndex(prevIndex => (prevIndex + 1) % imageDatas.length)
    }

    const handleScroll = (e) => {
        if (e.deltaY < 0) {
            prevSlide()
        } else if (e.deltaY > 0) {
            nextSlide()
        }
    }

    return (
        <>
            <div className={cl.slider} onWheel={handleScroll}>
                {imageDatas.map((imageData, index) => (
                    <img
                        key={index}
                        src={imageData.src}
                        alt={`Slide ${index + 1}`}
                        className={classNames(cl.slide, currentIndex === index && cl.activeSlide)}
                        onDragStart={e => e.preventDefault()}
                        style={{ transition: `opacity ${interval / 4}ms ease` }}
                    />
                ))}
                <div className={cl.flippers}>
                    <div className={classNames(cl.flipper)} onClick={prevSlide} />
                    <div className={classNames(cl.flipper)} onClick={nextSlide} />
                </div>
            </div>
            <Container className={cl.ui}>
                <div className={cl.wrapper}>
                    <img src={birthday ? logoHB : logo} className={cl.logo} />
                    <div className={classNames(cl.progressBar, birthday && cl.hbBar)}>
                        <div
                            className={classNames(cl.progressLine, birthday && cl.hbLine)}
                            style={{ width: `${progressPercent}%`, transition: `${interval}ms linear` }}
                        />
                    </div>
                </div>
                <h2 className='title'>
                    {imageDatas[currentIndex].label}
                </h2>
            </Container>
        </>
    )
}

export { Slider }