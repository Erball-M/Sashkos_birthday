import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import { useProgressBar } from '../../hooks/hooks'
import { Container, Slider, Button } from '@components'
import cl from './GuestListPage.module.scss'

const imageDatas = [
    { src: 'https://placehold.co/100x100', label: 'Name of Person 1' },
    { src: 'https://placehold.co/200x200', label: 'Name of Person 2' },
    { src: 'https://placehold.co/300x300', label: 'Name of Person 3' },
    { src: 'https://placehold.co/400x400', label: 'Name of Person 4' },
    { src: 'https://placehold.co/500x500', label: 'Name of Person 5' },
    { src: 'https://placehold.co/600x600', label: 'Name of Person 6' },
    { src: 'https://placehold.co/700x700', label: 'Name of Person 7' },
    { src: 'https://placehold.co/800x800', label: 'Name of Person 8' },
    { src: 'https://placehold.co/900x900', label: 'Name of Person 9' },
    { src: 'https://placehold.co/1000x1000', label: 'Name of Person 10' },
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
            <Slider imageDatas={imageDatas} interval={interval} birthday={birthday} />
        </>
    )
}

export { GuestListPage }