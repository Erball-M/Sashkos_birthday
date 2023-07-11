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
                <div className={cl.body}>
                    Dear guests,<br /><br />

                    Welcome to this wonderful website specially created for Alexander's birthday celebrations! We warn you that inside this virtual world there is a virus of joy that has infected every page. It can lead to irrepressible fun, happy emotions and the inevitable desire to dance.<br /><br />
                    And remember, your legs may suddenly start moving to the beat of the music, and you may have a frantic desire to sing to soulful melodies. Don't be alarmed, this is just the result of our desire to create an unforgettable atmosphere in honor of the birthday. Immerse yourself in the world of the holiday and enjoy every note, every word and every pixel of this site.<br /><br />

                    With best wishes,<br />
                    The organizers of the holiday
                </div>
                <Button onClick={confirmHandler}>
                    OK
                </Button>
            </div>
        </div>
    )
}

export { DisclaimerModal }