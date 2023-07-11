import React, { useMemo } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Container } from '@components'
import classNames from 'classnames'
import cl from './Layout.module.scss'

const Layout = () => {
    const { pathname } = useLocation()
    const title = useMemo(() => {
        let title = ''
        switch (pathname) {
            case ('/'):
                title = 'Main Menu'
                break;
            // case ('/guest_list'):
            //     title = 'Guests'
            //     break;
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
            <header className={cl.header}>
                <Container className={cl.title}>
                    {title}
                </Container>
            </header>
            <main className={cl.main}>
                <Outlet />
            </main>
        </div>
    )
}

export { Layout }