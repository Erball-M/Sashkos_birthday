import React, { useEffect, useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { Button, } from '@components'
import warn from '@images/warn.png'
import cl from './MenuPage.module.scss'

const MenuPage = () => {
    const context = useOutletContext()
    const { birthday } = context

    const navigate = useNavigate()
    const [quitCoords, setQuitCoords] = useState({})
    const [isWarn, setIsWarn] = useState(false)
    const [warnCount, setWarnCount] = useState(0)

    useEffect(() => {
        if (isWarn) {
            setTimeout(() => setIsWarn(false), 1000)
            setQuitCoords({})
        }
    }, [isWarn])

    const handleQuit = (e) => {
        const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
        const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        const target = e.target
        const coords = target.getBoundingClientRect()
        let x = coords.width
        let y = coords.height

        if ((x + coords.right) > windowWidth) {
            x = -x
        } else {
            const randomOffsetX = Math.random() * 200 - 100
            x += randomOffsetX
        }

        const randomOffsetY = Math.random() * 200 - 100
        y += randomOffsetY

        if ((y + coords.bottom) > windowHeight) {
            y = windowHeight - coords.bottom
        } else if (coords.top + y < 0) {
            y = -coords.top
        }

        setQuitCoords({ x, y })
    }

    const hanleQuitClick = () => {
        setIsWarn(true)
        setWarnCount(prev => prev + 1)
    }

    return (
        <div className='menu'>
            <Button onClick={() => navigate('/guest_list')} variant='menu' birthday={birthday}>
                Guest List
            </Button>
            <Button onClick={() => navigate('/event_list')} variant='menu' birthday={birthday}>
                Event List
            </Button>
            <Button onClick={() => navigate('/whish_list')} variant='menu' birthday={birthday}>
                Whish List
            </Button>
            <Button onClick={() => navigate('/options')} variant='menu' birthday={birthday}>
                Options
            </Button>
            <Button
                variant='menu'
                birthday={birthday}
                sound='invalid'
                onClick={hanleQuitClick}
                // onMouseEnter={handleQuit}
                style={{ position: 'relative', left: `${quitCoords.x}px`, top: `${quitCoords.y}px` }}
            >
                Quit Game
            </Button>
            {
                isWarn &&
                <img
                    className={cl.warnImg}
                    src={warn}
                    onDragStart={e => e.preventDefault()}
                />
            }
        </div>
    )
}

export { MenuPage }