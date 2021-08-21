import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';

import {BrandIcon, BrandLogo} from '../ui/base/brandicon'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width:'100vw',
      height:'100vh',
      zIndex: 9999,
      position:'absolute',
      backgroundColor: '#f7f7f7'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function MainScreen() {
    const classes = useStyles();
    let [logoFade, logoState] = React.useState(true);
    const onLogoTranstionEnteredHandler = () => {
        logoState(logoFade = false)
    }
    const onLogoTranstionExitedHandler = () => {
        // console.log('logo fade out')
    }

    return (
        <Fade in={logoFade} timeout={{enter:0,exit:5000}} onExited={onLogoTranstionExitedHandler}>
            <div className={classes.root}>
                <Fade in={true} timeout={{enter:5000,exit:5000}} onEntered={onLogoTranstionEnteredHandler} >
                    <Container maxWidth="sm">
                        <Grid container direction="row" justify="center" alignItems="center" style={{height:'100vh'}}>
                            <Grid item xs={2}>
                                <BrandIcon style={{ width:'100%' ,height:'auto' }} viewBox="0 0 181.4173 181.4173" />
                            </Grid>
                            <Grid item xs={6}>
                                <BrandLogo style={{ width:'100%' ,height:'auto', marginLeft:32 }} viewBox="0 0 359.4 32.6" />
                            </Grid>
                        </Grid>
                    </Container>
                </Fade>
            </div>
        </Fade>
    );
}