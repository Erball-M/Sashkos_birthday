import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { useProgressBar } from '../../hooks/hooks'
import { Container } from '@components'
import logo from '@images/logo.png'
import cl from './Slider.module.scss'

const Slider = ({ images, interval, children }) => {
    const [autoSlide, setAutoSlide] = useState(true)
    const [currentIndex, setCurrentIndex] = useState(0)

    const progressPercent = useProgressBar(currentIndex, images.length)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, interval)
        if (!autoSlide) clearInterval(timer)
        return () => clearInterval(timer)
    }, [images.length, interval, autoSlide])

    const prevSlide = () => {
        setAutoSlide(false)
        setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length)
    }
    const nextSlide = () => {
        setAutoSlide(false)
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length)
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
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
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
                    <img src={logo} className={cl.logo} />
                    <div className={cl.progressBar}>
                        <div
                            className={cl.progressLine}
                            style={{ width: `${progressPercent}%`, transition: `${interval}ms` }}
                        />
                    </div>
                </div>
            </Container>
        </>
    )
}

export { Slider }