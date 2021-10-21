import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
// import Container from '@material-ui/core/Container';
import PaAppBar from 'PaAppBar';
import Copyright from 'Copyright';

// import PaCover from './threeCanvas';
// import SampleBox from './cover/smaple';

const useStyles = makeStyles({
    main: {
        position: 'absolute',
        height: '100vh',
        width: '100vw',
        padding: 0,
        margin: 0,
        overflowX: 'hidden',
        zIndex: 1,
    },
});

const BaseLayout = (props) => {
    const { children } = props
    const classes = useStyles()
    return (
        <>
            <div className={classes.main}>
                <PaAppBar />
                {children}
                <Copyright />
            </div>
            {/* <PaCover>
                <SampleBox />
            </PaCover> */}
        </>
    )
}

export default BaseLayout