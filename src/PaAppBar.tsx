import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import { Icon } from '@component/icon';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: 'rgba(0,0,0,0)',
    },
    bar: {
        backgroundColor: 'rgba(0,0,0,0)',
        color:'#FFF',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function PaAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Icon color="#FFF" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Papilio.io
          </Typography>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}