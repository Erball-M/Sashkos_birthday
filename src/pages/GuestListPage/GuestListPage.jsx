import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import { useProgressBar } from '../../hooks/hooks'
import { Container, Slider, Button } from '@components'
import cl from './GuestListPage.module.scss'

const images = [
    'https://placehold.co/100x100',
    'https://placehold.co/200x200',
    'https://placehold.co/300x300',
    'https://placehold.co/400x400',
    'https://placehold.co/500x500',
    'https://placehold.co/600x600',
    'https://placehold.co/700x700',
    'https://placehold.co/800x800',
    'https://placehold.co/900x900',
    'https://placehold.co/1000x1000',
]

const GuestListPage = ({ birthday }) => {
    const navigate = useNavigate()
    const interval = 5000

    return (
        <>
            <div className={cl.ui}>
                <Button onClick={() => navigate(-1)}>Back</Button>
                <Button onClick={() => navigate('/event_list')}>Events</Button>
            </div>
            <Slider images={images} interval={interval} birthday={birthday} />
        </>
    )
}

export { GuestListPage }