import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Holder from './holder'

import RandomCircle from '@component/SVGAsset/randomCircle'
import { Icon } from '@component/icon'

const useStyles = makeStyles({
    main: {
        position: 'relative',
        height: '100vh',
        width: '100vw',
        padding: 0,
        margin: 0,
        overflow: 'hidden',
    },
    container: {
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        position: 'absolute',
        zIndex: 1,
        display:'block'
    },
    circle: {
        position: 'absolute',
        zIndex: 0,
    }
})

const Main = () => {
    const classes = useStyles()
    return (
        <Holder>
            <div className={classes.container}>
                <div className={classes.icon}>
                    <Icon color="#FFF" size={96} />
                </div>
                <div className={classes.circle}>
                    <RandomCircle size={256} />
                </div>
            </div>
        </Holder>
    )
}

export default Main