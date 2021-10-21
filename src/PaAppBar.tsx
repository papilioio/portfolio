import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Link from 'Link'

import { Title } from '@component/icon';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100vw',
            flexGrow: 1,

        },
        bar: {
            // backgroundColor: 'rgba(0,0,0,0)',
            color: '#FFF',
            boxShadow:'none',
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
            <AppBar position="static" color="transparent" className={classes.bar}>
                <Toolbar>
                    <div className={classes.title} >
                    <Link href={"/"}><Title color="#000" /></Link>
                    </div>
                    <Button disabled>Works</Button>
                    <Link href={"/about"}><Button color="inherit">About</Button></Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}