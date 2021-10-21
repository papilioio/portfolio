import React from 'react';
// import { makeStyles } from '@material-ui/core/styles'

import BaseLayout from '@component/baseLayout'

import Main from '@component/contents/main'


// const useStyles = makeStyles({
//     main: {
//         position: 'absolute',
//         height: '100vh',
//         width: '100vw',
//         padding: 0,
//         margin: 0,
//         overflow: 'auto',
//         zIndex: 1,
//     },
// })

const Index = () => {

    return (
        <BaseLayout>
            <Main />
        </BaseLayout>
    )
}

export default Index