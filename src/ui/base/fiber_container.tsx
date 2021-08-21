import React, { useRef } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fullscreen: {
        width: '100vw',
        height: '100vh',
        zIndex:0,
        position: "absolute"
    }
  }),
);

export default function FiberContainer(props:any) {
    const classes = useStyles();
    const ref = useRef();
    console.log(props)
    return (
        <div className={classes.fullscreen}>
        </div>
    )
}