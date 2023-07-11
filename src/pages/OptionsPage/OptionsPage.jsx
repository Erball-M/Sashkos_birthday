import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container, } from '@components'
import cl from './OptionsPage.module.scss'

const OptionsPage = ({ audioRef, audioHBRef, currentAudio, audioToggler }) => {
    const navigate = useNavigate()

    const currentAudioNode = currentAudio.current
    const audio = audioRef.current
    const audioHB = audioHBRef.current

    const [isPaused, setIsPaused] = useState(currentAudioNode?.paused || false)

    const [captions, setCaptions] = useState({})
    useLayoutEffect(() => {
        const playing = currentAudioNode?.paused ? 'off' : 'on'
        const name = currentAudioNode?.id.includes('hb') ? 'Birthday' : 'GTA SA'
        setCaptions({ playing, name })
    }, [currentAudio.current, isPaused])

    const audioPlay = () => {
        if (currentAudioNode.paused) {
            setIsPaused(false)
            currentAudioNode.play()
        } else if (!currentAudioNode.paused) {
            setIsPaused(true)
            currentAudioNode.pause()
        }
    }

    const toggleAudio = () => {
        const newAudio = currentAudioNode.id.includes('hb') ? audio : audioHB
        const prevAudio = currentAudioNode
        prevAudio.pause()
        newAudio.currentTime = 0
        if (!isPaused) {
            newAudio.play()
        }
        audioToggler()
    }

    return (
        <div className='menu'>
            <Button onClick={audioPlay} >
                Music: {captions.playing}
            </Button>
            <Button onClick={toggleAudio} >
                Theme: {captions.name}
            </Button>
            <Button onClick={() => navigate(-1)} >
                Back
            </Button>
        </div >
    )
}

export { OptionsPage } 