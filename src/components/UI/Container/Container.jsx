import React from 'react'
import classNames from 'classnames'
import cl from './Container.module.scss'

const Container = ({ className, children, ...props }) => {
    return (
        <div className={classNames(cl.container, className)} {...props}>
            {children}
        </div>
    )
}

export { Container }