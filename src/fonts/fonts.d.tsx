import { createGlobalStyle } from 'styled-components';

import Daydream from '../fonts/Daydream'

export default createGlobalStyle`
    @font-face {
        font-family: 'Daydream' ;
        src: url(${Daydream}) format('ttf');
    }

`