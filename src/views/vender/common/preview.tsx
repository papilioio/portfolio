import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import { PlainerLogoDarkBg, PlainerLogoIconDarkBg } from '../../../ui/icons'
import { ListAltTwoTone, Equalizer, Description, OndemandVideo } from '@material-ui/icons';


import { PdfView } from '../../public/Viewer/pdfView'

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            zIndex:9999,
        },
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        title: {
            flexGrow:1
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: -drawerWidth,
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        },
        hidden: {
            display:'none'
        }
    }),
);

type Props = {
    handler:Function
}
type Views = 's1' | 's2' | 's3'
type ViewName = 'ドキュメント一覧' | 'メディア一覧' | 'シナリオ一覧' | 'データ分析'


export function Preview(props:Props) {
    const classes = useStyles()
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);


    const [state, setState] = React.useState({
        viewName: 'pdf'
    });


    const toggleView = (view: Views, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        console.log(view)
        state.viewName = view;

        setState({ ...state, [view]: open });
    };

    const switchView = (view: Views) => {
        return <PdfView />
    }

    const switchTitle = (view: Views) => {

    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <PlainerLogoIconDarkBg viewBox="0 0 107.7 103.79" className={classes.menuButton}/>
                    <Typography variant="h6" noWrap className={classes.title}>
                        シナリオ                
                    </Typography>
                    <Button color="inherit" onClick={props.handler(true)}>Close</Button>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                <ListItem button key="v00" onClick={toggleView('s1', true)} selected={
                        state.viewName == 's1' ? true : false
                    }>
                        <ListItemIcon><ListAltTwoTone /></ListItemIcon>
                        <ListItemText primary="問い合せ(仮)" />
                    </ListItem>
                    <ListItem button key="v01" onClick={toggleView('s1', true)} selected={
                        state.viewName == 's1' ? true : false
                    }>
                        <ListItemIcon><ListAltTwoTone /></ListItemIcon>
                        <ListItemText primary="シナリオ1" />
                    </ListItem>
                    <ListItem button key="v02" onClick={toggleView('s2', true)} selected={
                        state.viewName == 's2' ? true : false
                    }>
                        <ListItemIcon><Description /></ListItemIcon>
                        <ListItemText primary="メデイア" />
                    </ListItem>
                    <ListItem button key="v03" onClick={toggleView('s3', true)} selected={
                        state.viewName == 's3' ? true : false
                    }>
                        <ListItemIcon><OndemandVideo /></ListItemIcon>
                        <ListItemText primary="WEBページ" />
                    </ListItem>
                </List>
                <Divider />
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                {switchView(state.viewName as Views)}
            </main>
        </div>
    );
}