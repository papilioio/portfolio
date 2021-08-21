import React, { useState } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

const samplePdf = require('../../../static/sample.pdf')
console.log(samplePdf)

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            height:'100vh'
        },
        content: {
            flexGrow: 1,
            height:'100vh',
            border:'none',
            // overflow:'auto'
        },
    }),
);

export function mediaView() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <iframe className={classes.content} src={String(samplePdf.default)} />
    </div>
  );
}