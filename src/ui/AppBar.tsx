import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {PlainerLogoDarkBg, PlainerLogoIconDarkBg} from './icons'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      zIndex: theme.zIndex.drawer + 1
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function MainAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="primary">
        <Toolbar>
            <PlainerLogoIconDarkBg viewBox="0 0 107.7 103.79" className={classes.menuButton}/>
            <Typography variant="h6" className={classes.title}>管理画面</Typography>
            <Button color="inherit">ログアウト</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}