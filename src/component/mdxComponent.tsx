import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Link from 'Link'
import {
    Typography,
} from '@material-ui/core'
import theme from 'theme'

const useStyles = makeStyles({
    table: {
        minWidth: 480,
        backgroundColor: '#666',
    },
    h: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        lineHeight: '180%',
        letterSpacing: '0.2rem',
    },
    p: {
        marginLeft: '1rem',
        lineHeight: '180%',
        letterSpacing: '0.2rem',
    },
    b: {
        fontWeight: 600,
        lineHeight: '180%',
        letterSpacing: '0.2rem',
    }
});

// const Typography_h1 = (props) => {
//     const { children } = props
//     const classes = useStyles();
//     return (
//         <Typography variant="h1" className={classes.h}>{children}</Typography>
//     )
// }

// const Typography_h2 = (props) => {
//     const { children } = props
//     const classes = useStyles();
//     return (
//         <Typography variant="h2" className={classes.h}>{children}</Typography>
//     )
// }

const Typography_h3 = (props) => {
    const { children } = props
    const classes = useStyles();
    return (
        <Typography variant="h3" className={classes.h}>{children}</Typography>
    )
}

const Typography_h4 = (props) => {
    const { children } = props
    const classes = useStyles();
    return (
        <Typography variant="h4" className={classes.h}>{children}</Typography>
    )
}

const Typography_h5 = (props) => {
    const { children } = props
    const classes = useStyles();
    return (
        <Typography variant="h5" className={classes.h}>{children}</Typography>
    )
}

const Typography_h6 = (props) => {
    const { children } = props
    const classes = useStyles();
    return (
        <Typography variant="h6" className={classes.h}>{children}</Typography>
    )
}

const Typography_p = (props) => {
    const { children } = props
    const classes = useStyles();
    return (
        <Typography variant="body1" display="block" className={classes.p}>{children}</Typography>
    )
}

const Typography_b = (props) => {
    const { children } = props
    const classes = useStyles();
    return (
        <Typography variant="body1" display="block" className={classes.b}>{children}</Typography>
    )
}


const mdxComponents = {
    a: Link,
    h1: Typography_h3,
    h2: Typography_h4,
    h3: Typography_h5,
    h4: Typography_h6,
    h5: Typography_h6,
    h6: Typography_h6,
    p: Typography_p,
    strong: Typography_b,
    // hr: Divider,
    hr: () => {
        return (<hr style={{
            border: 'none',
            height: '1px',
            margin: 0,
            flexShrink: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
        }} />
        )
    },
}

export default mdxComponents