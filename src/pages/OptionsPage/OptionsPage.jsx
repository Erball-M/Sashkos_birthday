import React, { useEffect, useMemo, useState } from 'react'
import { Button, Container, } from '@components'
import cl from './OptionsPage.module.scss'

const OptionsPage = ({ audioRef, isPaused }) => {
    const audio = audioRef.current
    const [caption, setCaption] = useState(audioRef.current?.paused || false)

    const audioPlay = () => {
        if (audio.paused) {
            setCaption(false)
            audio.play()
        } else if (!audio.paused) {
            setCaption(true)
            audio.pause()
        }
    }

    return (
        <div className='menu'>
            <Button onClick={audioPlay} >
                Music: {caption ? 'off' : 'on'}
            </Button>
        </div >
    )
}

export { OptionsPage } 