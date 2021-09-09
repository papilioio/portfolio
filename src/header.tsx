import React from 'react';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { Icon, Title } from '@component/icon';

import Menu from '@component/menu';


const Header = () => {
    return (
        <Grid container alignItems="center" justifyContent="center">
            <Grid item xs={12}>
                <Box mt={4}><Icon size={48} color="#FFF" /></Box>
            </Grid>
            <Grid item xs={4}>
                <Box my={1}><Title width={320} height={48} color="#FFF" /></Box>
            </Grid>
            <Grid item xs={8}>
                <Box my={1}><Menu /></Box>
            </Grid>
        </Grid>
    )
}

export default Header