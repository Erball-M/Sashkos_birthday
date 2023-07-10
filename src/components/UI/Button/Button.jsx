import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import classNames from 'classnames'
import { useSound } from '../../../hooks/hooks'
import { MarkIco } from '@constants/icos'
import { IcoWrapper } from '@components'
import cl from './Button.module.scss'

const Button = ({
    className,
    children,
    onClick,
    variant = 'default',
    sound = 'press',
    disabled,
    ...props
}) => {
    const handledSoundName = disabled || !onClick ? 'invalid' : sound
    const soundPlay = useSound(handledSoundName)
    const isBigScreen = useMediaQuery({ query: '(min-width: 900px)' })

    const [isMark, setIsMark] = useState(false)

    const soundedOnClick = (e) => {
        soundPlay()
        setIsMark(true)
        if (disabled || !onClick) return
        onClick(e)
    }

    const showMark = () => {
        if (variant !== 'menu') return
        setIsMark(true)
    }
    const hideMark = () => {
        if (variant !== 'menu') return
        setIsMark(false)
    }

    return (
        <button
            className={classNames(cl.btn, cl[variant], className)}
            onClick={soundedOnClick}
            onMouseOver={showMark}
            onMouseLeave={hideMark}
            {...props}
        >
            {(isBigScreen && isMark && variant === 'menu') &&
                <IcoWrapper className={cl.icoWrapper}>
                    <MarkIco className={cl.ico} />
                </IcoWrapper>
            }
            {children}
        </button>
    )
}

export { Button }