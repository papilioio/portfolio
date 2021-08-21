import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {
    PhotoCamera,
    Add,
    Visibility,
    Edit,
    Delete
} from '@material-ui/icons';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        input: {
            display: 'none',
        },
    }),
);

export function ControllButtons() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                <Button
                    variant="contained"
                    startIcon={<Add />}
                >
                        新規作成
                </Button>
            </ButtonGroup>
        </div>
    );
}

export function ModifyButtons() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ButtonGroup variant="text" color="secondary" aria-label="text primary button group">
                <Button startIcon={<Visibility />}>公開</Button>
                <Button startIcon={<Edit />}>編集</Button>
                <Button startIcon={<Delete />}>削除</Button>
            </ButtonGroup>
        </div>
    );
}

export function ItemButtons() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ButtonGroup variant="text" color="secondary" aria-label="text primary button group">
                <Button startIcon={<Visibility />}>公開</Button>
                <Button startIcon={<Delete />}>削除</Button>
            </ButtonGroup>
        </div>
    );
}


export function UploadButtons() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <input
                accept="*/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                    Upload
          </Button>
            </label>
        </div>
    );
}