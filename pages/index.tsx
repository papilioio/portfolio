import React from 'react';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
// import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import Link from '../src/Link';
import Copyright from '../src/Copyright';
import theme from 'theme'

import { Icon, Title } from '../src/component/icon';
import MenuButton from '@component/button/menuButton'

import Pac01 from 'cover/pac01';

export default function Index() {
    return (
        <>
            <div style={{ zIndex: 1, position: "absolute", width: "100vw", height: "100vh", margin: 0, padding: 0, overflow: "hidden" }}>
                <Box height="100vh" ml={4}>
                    <Grid container alignItems="center" justifyContent="center">
                        <Grid item xs={12}>
                            <Box mt={4}><Icon size={48} color="#FFF" /></Box>
                            <Box my={1}><Title width={320} height={48} color="#FFF" /></Box>
                        </Grid>
                    </Grid>
                    <Grid container alignItems="flex-start" justifyContent="center">
                        <Grid item xs={1}>
                            <Box my={1}>
                                <MenuButton size="15">About</MenuButton>
                            </Box>
                            <Box my={1}>
                                <MenuButton size="15">Projects</MenuButton>
                            </Box>
                            <Box my={1}>
                                <MenuButton size="15">Works</MenuButton>
                            </Box>
                            <Box my={1}>
                                <MenuButton size="15">Contact</MenuButton>
                            </Box>
                        </Grid>

                        <Grid item xs={11}>
                            <Box my={1}>
                                aaaa
                            </Box>
                        </Grid>
                    </Grid>

                    <Box mt="auto">
                        <Copyright />
                    </Box>
                </Box>
            </div>
            <>
                <Pac01 />
            </>
        </>
    );
}