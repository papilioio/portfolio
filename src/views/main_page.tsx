import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid, { GridSpacing } from '@material-ui/core/Grid';

import {BrandIcon, BrandLogo} from '../ui/base/brandicon'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width:'100vw',
      height:'100vh',
      zIndex: 99,
      position:'absolute'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function MainPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
    </div>
  );
}