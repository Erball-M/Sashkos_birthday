import React, { useMemo } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Confetti from 'react-confetti'
import Fireworks from '@fireworks-js/react'
import { Container } from '@components'
import classNames from 'classnames'
import cl from './Layout.module.scss'

const Layout = ({ birthday }) => {
    const { pathname } = useLocation()
    const title = useMemo(() => {
        let title = ''
        switch (pathname) {
            case ('/'):
                title = 'Main Menu'
                break;
            case ('/event_list'):
                title = 'Events'
                break;
            case ('/options'):
                title = 'Options'
                break;
        }
        return title
    }, [pathname])
    return (
        <div className={cl.wrapper}>
            {birthday && <>
                <Confetti className={cl.confetti} />
                <Fireworks className={cl.confetti} />
            </>}
            <header className={cl.header}>
                <Container className='title'>
                    {title}
                </Container>
            </header>
            <main className={cl.main}>
                <Outlet context={{ birthday }} />
            </main>
        </div>
    )
}

export { Layout }