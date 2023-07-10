import React from 'react'
import cl from './DisclaimerModal.module.scss'
import { Button } from '@components'

const DisclaimerModal = ({ audioRef, isOpen, toggler }) => {
    const confirmHandler = () => {
        const audio = audioRef.current
        audio.play()
        toggler()
    }
    if (!isOpen) return null
    return (
        <div className={cl.wrapper}>
            <div className={cl.container}>
                <Button onClick={confirmHandler}>
                    OK
                </Button>
            </div>
        </div>
    )
}

export { DisclaimerModal }