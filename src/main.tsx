import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ThemeProvider as MaterialThemeProvider, StylesProvider } from "@material-ui/core/styles";
import styled, { ThemeProvider as StyledThemeProvider } from "styled-components";
import CssBaseline from '@material-ui/core/CssBaseline';
import Fade from '@material-ui/core/Fade';
import theme from "./ui/thema";
// import Button from '@material-ui/core/Button';
import MainAppBar from "./ui/AppBar"
import DashBoard from './views/vender/dashboard'
import {PublicationView} from './views/public/publicationView'





function App(){

  return(
    <CssBaseline>
      <StylesProvider injectFirst>
        <MaterialThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
              {/* <MainAppBar /> */}
              {/* <PublicationView /> */}
              <DashBoard />
          </StyledThemeProvider>
        </MaterialThemeProvider>
      </StylesProvider>
    </CssBaseline>
  )
}

const rootEl = document.getElementById('root')
rootEl ? ReactDOM.render(<App />, rootEl) : false;
