import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    holder: {
        position: 'relative',
        height: '100vh',
        width: '100vw',
        padding: 0,
        margin: 0,
        overflow: 'hidden',
    },
})

const Holder = (props) => {
    const { children } = props
    const classes = useStyles()
    return (
        <div className={classes.holder}>
            {children}
        </div>
    )
}

export default Holder