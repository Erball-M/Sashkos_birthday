import { useMemo } from 'react'
import SOUNDS from '@imports/sounds'

export const useSound = (soundName = 'select') => {
    const src = useMemo(() => SOUNDS[soundName], [soundName])
    const audio = new Audio(src)
    audio.addEventListener('ended', () => {
        audio.remove()
    })

    return () => audio.play().catch((err) => console.log(`sound error: ${err.name}`))
}