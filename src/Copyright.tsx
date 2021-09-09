import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

const useStyles = makeStyles({
    footer: {
        position: 'relative',
        height: '300px',
        width: '100%',
    },
    copy: {
        // display: 'block',
        width: '100%',
        margin: '2rem auto',
        position: 'absolute',
        textAlign: 'center',
        bottom: 0,
        lineHeight: '40px',
    }
});

export default function Copyright() {
    const classes = useStyles()
    return (
        <div className={classes.footer}>
        <Typography variant="body2" color="textSecondary" align="center" className={classes.copy}>
            {'Copyright © '}
            <MuiLink color="inherit" href="https://papilio.io/">
                Papilio LLC
            </MuiLink>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
        </div>
    );
}

