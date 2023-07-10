import { useMemo } from 'react'
import SOUNDS from '@constants/sounds'

export const useSound = (soundName) => {
    const src = useMemo(() => SOUNDS[soundName], [soundName])
    const audio = new Audio(src)
    audio.addEventListener('ended', () => {
        audio.remove()
    })

    return () => audio.play()
}