import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Canvas } from '@react-three/fiber'

const useStyles = makeStyles({
    cover: {
        position: 'absolute',
        height: '100vh',
        width: '100vw',
        padding: 0,
        margin:0,
        overflow:'hidden',
        zIndex: 0,
    },
});

const PaCover = (props) => {
    const {children} = props
    const classes = useStyles()
    return(
        <div className={classes.cover}>
            <Canvas camera={{ position: [- 1, 1, 1], near: 0.01, far: 10000, fov: 60 }}>
            <ambientLight intensity={0.85} />
                {children}
            </Canvas>
        </div>
    )
}

export default PaCover