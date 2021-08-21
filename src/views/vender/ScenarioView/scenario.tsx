import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { ControllButtons, ModifyButtons } from '../common'


const dummyImg = require('../../../static/dummy.png')


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        media: {
            width: '128px',
            height: '128px',
            marginRight: theme.spacing(2),
        },
        card: {
            width: '100%',
            marginBottom: theme.spacing(2),
        },
        actionArea: {
            flexGrow: 1
        },

    }),
);
type Props = {
    handler:Function
}

type scenarioDetail = {
    title: string,
    description: string
}

const scenarioArray: scenarioDetail[] = [
    { title: 'シナリオ1', description: 'シナリオ概要テキスト' },
    { title: 'シナリオ2', description: 'シナリオ概要テキスト' },
    { title: 'シナリオ3', description: 'シナリオ概要テキスト' }
]

export default function ScenarioView(props:Props) {
    const classes = useStyles();

    return (
        <div>
            <ControllButtons />
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="stretch"
                className={classes.root}
            >
                {scenarioArray.map((detail: scenarioDetail) => (
                    <Grid item key={detail.title}>
                        <Card className={classes.card}>
                            <CardActionArea onClick={props.handler(false)}>
                                <CardContent>
                                    <Grid container>
                                        <Grid item><img src={String(dummyImg.default)} className={classes.media} /></Grid>
                                        <Grid item>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {detail.title}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {detail.description}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <ModifyButtons />
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}