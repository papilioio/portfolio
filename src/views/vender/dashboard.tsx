import React from 'react';
import clsx from 'clsx';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';
import { ListAltTwoTone, Equalizer, Description, OndemandVideo } from '@material-ui/icons';


import MainAppBar from '../../ui/AppBar';

import { AnaliticsView } from './AnaliticsView'
import { DocumentsView } from './DocumentView'
import { MediaView } from './MediaView'
import { ScenarioView } from './ScenarioView'
import { PublicationView } from '../public/'

import { Preview } from './common/preview';


const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerContainer: {
            overflow: 'auto',
        },
        content: {
            flexGrow: 9,
            padding: theme.spacing(2),
        },
        preview: {
            zIndex: 9999,
            backgroundColor: '#ffffff',
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
            position: 'fixed',

        },
        hidden: {
            display: 'none'
        }
    }),
);

type Views = 'docs' | 'media' | 'scenario' | 'analitics' | 'pdf';
type ViewName = 'ドキュメント一覧' | 'メディア一覧' | 'シナリオ一覧' | 'データ分析'


export default function DashBoard() {

    const classes = useStyles();

    const [state, setState] = React.useState({
        viewName: 'scenario'
    });

    const [show, setShow] = React.useState(false)

    const toggleView = (view: Views, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        console.log(view)
        state.viewName = view;

        setState({ ...state, [view]: open });
    };

    const switchView = (view: Views) => {
        switch (view) {
            case 'analitics':
                return <AnaliticsView />
            case 'docs':
                return <DocumentsView />
            case 'media':
                return <MediaView />
            case 'scenario':
                return <ScenarioView handler={handlePreviewClose}/>
            default:
                return <PublicationView />
        }
    }

    const switchTitle = (view: Views) => {
        switch (view) {
            case 'analitics':
                return 'データ分析'
            case 'docs':
                return 'ドキュメント管理'
            case 'media':
                return 'メディア管理'
            case 'scenario':
                return 'シナリオ管理'
        }
    }

    const handlePreviewClose = (show: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        console.log('hide!!')
        setShow(show)
    }

    return (
        <div className={classes.root}>
            <div className={clsx(classes.preview, show && classes.hidden)}>
                <Preview handler={handlePreviewClose} />
            </div>

            <MainAppBar />
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                    {/* <ListItem button key="v04" onClick={handlePreviewClose(false)}>
                            <ListItemIcon><OndemandVideo /></ListItemIcon>
                            <ListItemText primary="プレビュー" />
                        </ListItem> */}
                        <Divider />
                        <ListItem button key="v01" onClick={toggleView('scenario', true)} selected={
                            state.viewName == 'scenario' ? true : false
                        }>
                            <ListItemIcon><ListAltTwoTone /></ListItemIcon>
                            <ListItemText primary="シナリオ管理" />
                        </ListItem>
                        <ListItem button key="v02" onClick={toggleView('docs', true)} selected={
                            state.viewName == 'docs' ? true : false
                        }>
                            <ListItemIcon><Description /></ListItemIcon>
                            <ListItemText primary="ドキュメント管理" />
                        </ListItem>
                        <ListItem button key="v03" onClick={toggleView('media', true)} selected={
                            state.viewName == 'media' ? true : false
                        }>
                            <ListItemIcon><OndemandVideo /></ListItemIcon>
                            <ListItemText primary="メディア管理" />
                        </ListItem>
                        
                    </List>
                    <Divider />
                    <List>
                        <ListItem button key="v05" onClick={toggleView('analitics', true)} selected={
                            state.viewName == 'analitics' ? true : false
                        }>
                            <ListItemIcon><Equalizer /></ListItemIcon>
                            <ListItemText primary="データ分析" />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
            <main className={classes.content}>
                <Toolbar />
                <Typography paragraph variant="h6">{switchTitle(state.viewName as Views)}</Typography>
                {switchView(state.viewName as Views)}
            </main>
        </div>
    );
}