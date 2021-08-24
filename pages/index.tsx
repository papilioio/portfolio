import React from 'react';
// import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
// import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import Link from '../src/Link';
import Copyright from '../src/Copyright';

import {Icon, Title} from '../src/component/icon';

export default function Index() {
  return (
    <Grid container alignItems="center" justify="center">
      <Grid item xs={8}>
         <Box mt={4}><Icon size={64} /></Box>
         <Box my={1}><Title width={320} height={48} /></Box>
         <Box>
            <Copyright />
        </Box>
       </Grid>
    </Grid>
  );
}