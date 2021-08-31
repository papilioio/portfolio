import React from 'react'
import Container from '@material-ui/core/Container'

import { SimpleLine } from "./assets/simpleLine"
import withStylesProps from '@util/withStylesProps'

import theme from 'theme';

const styles = props => ({
    container: {
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        zIndex: 0,
        overflow: 'hidden',
        padding:0,
        margin:0,
    }
});


const Pac01 = (props) => {
    const { classes } = props
    return (
        <div className={classes.container}>
            <SimpleLine width="890" />
        </div>
    )
}

export default withStylesProps(styles)(Pac01);