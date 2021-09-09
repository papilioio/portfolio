import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    blank: {
        display: 'block',
        width: '100vw',
        height: '100vh',
    }
});

export default function Blank() {
    const classes = useStyles()
    return (
        <div className={classes.blank}>&nbsp;</div>
    );
}
