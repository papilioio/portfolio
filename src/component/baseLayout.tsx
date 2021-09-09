import React from 'react';
import Container from '@material-ui/core/Container';
import PaAppBar from 'PaAppBar';
import Copyright from 'Copyright';

const BaseLayout = (props) => {
    const { children } = props
    return (
        <div>
            <Container>
                <PaAppBar />
                {children}
                <Copyright />
            </Container>
        </div>
    )
}

export default BaseLayout