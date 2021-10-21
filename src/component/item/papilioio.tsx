import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Icon, PapilioioText } from '@component/icon'

const useStyles = makeStyles({
    root: {
        maxWidth: 360,
        height: 360,
        maxHeight: 360,
        // backgroundColor : '#000',
        margin: '0px, auto',
        // position: 'absolute',
        textAlign: 'center',
        top: 0,
        bottom: 0,
        left:0,
        right:0,
    },
    box: {
        textAlign: 'center',
    },
    media: {
        height: 140,
    },
});

const Papilioio = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container alignItems="center" justifyContent="center">
                <Grid item xs={12}>
                    <Box mt={4} className={classes.box}><Icon size={96} color="#FFF" /></Box>
                    <Box my={4}><PapilioioText width={360} height={32} color="#FFF" /></Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Papilioio