import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container, } from '@components'
import cl from './MenuPage.module.scss'

const MenuPage = () => {
    const navigate = useNavigate()

    return (
        <div className='menu'>
            <Button onClick={() => navigate('/guest_list')} variant='menu'>
                Guest List
            </Button>
            <Button onClick={() => navigate('/event_list')} variant='menu'>
                Event List
            </Button>
            <Button onClick={() => navigate('/options')} variant='menu'>
                Options
            </Button>
            <Button variant='menu'>
                Quit Game
            </Button>
        </div>
    )
}

export { MenuPage }