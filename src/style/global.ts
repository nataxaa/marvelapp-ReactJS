import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  :root{
    --color-red: #F00511;
    --color-homepage: #1F1F1F;
  }

  html{
        scroll-behavior:smooth;
        max-width:1366px ;
    }

  *{
    margin: 0 ;
    padding: 0 ;
  }

  h1{
    font-family: 'Permanent Marker', cursive;
  }

  body{
    font-family: 'Kanit', sans-serif;
  }

`