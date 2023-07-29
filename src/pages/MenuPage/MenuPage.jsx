import React, { useEffect, useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { Button, } from '@components'
import cl from './MenuPage.module.scss'

const MenuPage = () => {
    const context = useOutletContext()
    const { birthday } = context

    const navigate = useNavigate()

    return (
        <div className='menu'>
            <Button onClick={() => navigate('/guest_list')} variant='menu' birthday={birthday}>
                Guest List
            </Button>
            <Button onClick={() => navigate('/event_list')} variant='menu' birthday={birthday}>
                Event map
            </Button>
            <Button onClick={() => navigate('/options')} variant='menu' birthday={birthday}>
                Options
            </Button>
            <Button
                variant='menu'
                birthday={birthday}
                sound='invalid'
            >
                Quit Game
            </Button>
        </div>
    )
}

export { MenuPage }