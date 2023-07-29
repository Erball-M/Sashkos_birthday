import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import classNames from 'classnames'
import { useSound } from '../../../hooks/hooks'
import { MarkIco, CakeIco } from '@imports/icos'
import { IcoWrapper } from '@components'
import cl from './Button.module.scss'

const Button = ({
    className,
    children,
    onClick,
    variant = 'default',
    sound = 'select',
    disabled,
    birthday,
    ...props
}) => {
    const handledSoundName = disabled || !onClick ? 'invalid' : sound
    const soundPress = useSound(handledSoundName)
    const soundHover = useSound('hover')
    const isBigScreen = useMediaQuery({ query: '(min-width: 900px)' })

    const [isMark, setIsMark] = useState(false)

    const soundedOnClick = (e) => {
        soundPress()
        setIsMark(true)
        if (disabled || !onClick) return
        onClick(e)
    }

    const mouseEnter = () => {
        soundHover()
        if (variant !== 'menu') return
        setIsMark(true)
    }
    const mouseLeave = () => {
        if (variant !== 'menu') return
        setIsMark(false)
    }

    return (
        <button
            className={classNames(cl.btn, cl[variant], className)}
            onClick={soundedOnClick}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            {...props}
        >
            {(isBigScreen && isMark && variant === 'menu') &&
                <IcoWrapper className={cl.icoWrapper}>
                    {birthday ? <CakeIco className={cl.ico} /> : <MarkIco className={cl.ico} />}
                </IcoWrapper>
            }
            {children}
        </button>
    )
}

export { Button }