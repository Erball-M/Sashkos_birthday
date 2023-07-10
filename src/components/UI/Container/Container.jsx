import React from 'react'
import classNames from 'classnames'
import cl from './Container.module.scss'

const Container = ({ className, children }) => {
    return (
        <div className={classNames(cl.container, className)}>
            {children}
        </div>
    )
}

export { Container }