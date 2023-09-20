import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section { display: block; }
  body { line-height: 1; }
  ol, ul { list-style: none; }
  blockquote, q { quotes: none; }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * { box-sizing: border-box; }
  a {
    cursor: pointer !important;
    outline: none;
    color: inherit;
    text-decoration: none;
  }
  button { 
    cursor: pointer; 
    background-color: transparent;
    border: none;
    outline: none;
  }
  body {
    font-family: -apple-system, 'Nanum Square', BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: #F5F5F7;
    color: ${(props) => props.theme.black.darker};
    overflow: hidden;
    width: 100vw;
    height: 100vh;
  }
  .hidden-section {
    padding: 0;
    width: 0;
    height: 0;
    margin: 0;
    display: none;
  }
`;

export const BasicStyle = createGlobalStyle`
  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, 
  .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, 
  .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, 
  .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, 
  .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, 
  .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, 
  .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, 
  .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, 
  .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, 
  .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {
    position: relative;
    width: 100%;
    min-height: 1px;
  }
  .col {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
  }
  .col-1 {
    -ms-flex: 0 0 8.333333%;
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }
  .col-2 {
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
  .col-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  .col-5 {
    -ms-flex: 0 0 41.666667%;
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
  .col-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-7 {
    -ms-flex: 0 0 58.333333%;
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }
  .col-8 {
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
  .col-9 {
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-10 {
    -ms-flex: 0 0 83.333333%;
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }
  .col-11 {
    -ms-flex: 0 0 91.666667%;
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }
  .col-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  .col-auto {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: auto;
    max-width: none;
  }
  @media (min-width: 575.5px) {
    .col-sm {
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      -ms-flex-positive: 1;
      flex-grow: 1;
      max-width: 100%;
    }
    .col-sm-1 {
      -ms-flex: 0 0 8.333333%;
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }
    .col-sm-2 {
      -ms-flex: 0 0 16.666667%;
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    .col-sm-3 {
      -ms-flex: 0 0 25%;
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-sm-4 {
      -ms-flex: 0 0 33.333333%;
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    .col-sm-5 {
      -ms-flex: 0 0 41.666667%;
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
    .col-sm-6 {
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-sm-7 {
      -ms-flex: 0 0 58.333333%;
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
    .col-sm-8 {
      -ms-flex: 0 0 66.666667%;
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
    .col-sm-9 {
      -ms-flex: 0 0 75%;
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-sm-10 {
      -ms-flex: 0 0 83.333333%;
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }
    .col-sm-11 {
      -ms-flex: 0 0 91.666667%;
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
    .col-sm-12 {
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    }
    .col-sm-auto {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    }
  }

  @media (min-width: 767.5px) {
    .col-md {
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      -ms-flex-positive: 1;
      flex-grow: 1;
      max-width: 100%;
    }
    .col-md-1 {
      -ms-flex: 0 0 8.333333%;
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }
    .col-md-2 {
      -ms-flex: 0 0 16.666667%;
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    .col-md-3 {
      -ms-flex: 0 0 25%;
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-md-4 {
      -ms-flex: 0 0 33.333333%;
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    .col-md-5 {
      -ms-flex: 0 0 41.666667%;
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
    .col-md-6 {
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-md-7 {
      -ms-flex: 0 0 58.333333%;
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
    .col-md-8 {
      -ms-flex: 0 0 66.666667%;
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
    .col-md-9 {
      -ms-flex: 0 0 75%;
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-md-10 {
      -ms-flex: 0 0 83.333333%;
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }
    .col-md-11 {
      -ms-flex: 0 0 91.666667%;
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
    .col-md-12 {
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    }
    .col-md-auto {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    }
  }
  @media (min-width: 991.5px) {
    .col-lg {
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      -ms-flex-positive: 1;
      flex-grow: 1;
      max-width: 100%;
    }
    .col-lg-1 {
      -ms-flex: 0 0 8.333333%;
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }
    .col-lg-2 {
      -ms-flex: 0 0 16.666667%;
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    .col-lg-3 {
      -ms-flex: 0 0 25%;
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-lg-4 {
      -ms-flex: 0 0 33.333333%;
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    .col-lg-5 {
      -ms-flex: 0 0 41.666667%;
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
    .col-lg-6 {
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    }  
    .col-lg-7 {
      -ms-flex: 0 0 58.333333%;
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
    .col-lg-8 {
      -ms-flex: 0 0 66.666667%;
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
    .col-lg-9 {
      -ms-flex: 0 0 75%;
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-lg-10 {
      -ms-flex: 0 0 83.333333%;
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }
    .col-lg-11 {
      -ms-flex: 0 0 91.666667%;
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
    .col-lg-12 {
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    }
    .col-lg-auto {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    }
  }
  @media (min-width: 1199.5px) {
    .col-xl {
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      -ms-flex-positive: 1;
      flex-grow: 1;
      max-width: 100%;
    }
    .col-xl-1 {
      -ms-flex: 0 0 8.333333%;
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }
    .col-xl-2 {
      -ms-flex: 0 0 16.666667%;
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    .col-xl-3 {
      -ms-flex: 0 0 25%;
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-xl-4 {
      -ms-flex: 0 0 33.333333%;
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    .col-xl-5 {
      -ms-flex: 0 0 41.666667%;
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
    .col-xl-6 {
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-xl-7 {
      -ms-flex: 0 0 58.333333%;
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
    .col-xl-8 {
      -ms-flex: 0 0 66.666667%;
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
    .col-xl-9 {
      -ms-flex: 0 0 75%;
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-xl-10 {
      -ms-flex: 0 0 83.333333%;
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }
    .col-xl-11 {
      -ms-flex: 0 0 91.666667%;
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
    .col-xl-12 {
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    }
    .col-xl-auto {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    }
  }
  .d-none {display: none !important;}
  .d-inline {display: inline !important;}
  .d-inline-block {display: inline-block !important;}
  .d-block {display: block !important;}
  .d-table {display: table !important;}
  .d-table-cell {display: table-cell !important;}
  .d-flex {
    display: -ms-flexbox !important;
    display: flex !important;
  }
  .d-inline-flex {
    display: -ms-inline-flexbox !important;
    display: inline-flex !important;
  }
  @media (min-width: 576px) {
    .d-sm-none {display: none !important;}
    .d-sm-inline {display: inline !important;}
    .d-sm-inline-block {display: inline-block !important;}
    .d-sm-block {display: block !important;}
    .d-sm-table {display: table !important;}
    .d-sm-table-cell {display: table-cell !important;}
    .d-sm-flex {
      display: -ms-flexbox !important;
      display: flex !important;
    }
    .d-sm-inline-flex {
      display: -ms-inline-flexbox !important;
      display: inline-flex !important;
    }
  }
  @media (min-width: 768px) {
    .d-md-none {display: none !important;}
    .d-md-inline {display: inline !important;}
    .d-md-inline-block {display: inline-block !important;}
    .d-md-block {display: block !important;}
    .d-md-table {display: table !important;}
    .d-md-table-cell {display: table-cell !important;}
    .d-md-flex {
      display: -ms-flexbox !important;
      display: flex !important;
    }
    .d-md-inline-flex {
      display: -ms-inline-flexbox !important;
      display: inline-flex !important;
    }
  }
  @media (min-width: 991.5px) {
    .d-lg-none {display: none !important;}
    .d-lg-inline {display: inline !important;}
    .d-lg-inline-block {display: inline-block !important;}
    .d-lg-block {display: block !important;}
    .d-lg-table {display: table !important;}
    .d-lg-table-cell {display: table-cell !important;}
    .d-lg-flex {
      display: -ms-flexbox !important;
      display: flex !important;
    }
    .d-lg-inline-flex {
      display: -ms-inline-flexbox !important;
      display: inline-flex !important;
    }
  }
  @media (min-width: 1199.5px) {
    .d-xl-none {display: none !important;}
    .d-xl-inline {display: inline !important;}
    .d-xl-inline-block {display: inline-block !important;}
    .d-xl-block {display: block !important;}
    .d-xl-table {display: table !important;}
    .d-xl-table-cell {display: table-cell !important;}
    .d-xl-flex {
      display: -ms-flexbox !important;
      display: flex !important;
    }
    .d-xl-inline-flex {
      display: -ms-inline-flexbox !important;
      display: inline-flex !important;
    }
  }
  .align-self-start {
    -ms-flex-item-align: start !important;
    align-self: start !important;
  }
  .align-self-center {
    -ms-flex-item-align: center !important;
    align-self: center !important;
  }
  .align-self-end {
    -ms-flex-item-align: end !important;
    align-self: end !important;
  }      
  .text-center {text-align: center !important}
  .btn {
    display: inline-block;
    font-weight: 400;
    height: 35px;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    background-color: transparent;
    padding: 0;
    font-size: 1rem;
    border-radius: .25rem;
    transition: all .15s ease-in-out;
    cursor: pointer;
  }
  
  button:disabled {
    opacity: 0.5;
    -ms-filter: grayscale(0.4);
    filter: grayscale(0.4);
  }
  .mobile-hidden {display: none;}
  @media (min-width: 768px) {
    .mobile-hidden {display: inline-block;}
  }
`;

export const CheeseStyle = createGlobalStyle`
  .title {
    font-family: ${(props) => props.theme.title}, cursive;
    letter-spacing: -0.04em;
    word-spacing: 0.03em;
    line-height: 0.83;
  }
  .likeBtn.liked .fa-solid.fa-heart {
    color: ${(props) => props.theme.main1.main1};
  }
  .likeBtn.active i {
    color: ${(props) => props.theme.main1.main1};
    animation: bigToSmall 0.5s ease;
  }
 
  .bg-primary {
    background-color: ${(props) => props.theme.main1.main1};
    color: ${(props) => props.theme.white.lighter};
  }
  .bg-secondary {
    background-color: ${(props) => props.theme.main3.main2};
    color: ${(props) => props.theme.black.darker};
  }
  .bg-third {
    background-color: ${(props) => props.theme.white.lighter};
    color: ${(props) => props.theme.black.darker};
  }
  input.cheese-form {
    width: 100%;
    max-width: 250px;
    height: 40px;
    border: solid 2px ${(props) => props.theme.black.lighter};
    border-radius: 8px;
    padding: 2px 7px;
  }
  input[type="checkbox"], input[type="radio"] {
    -moz-appearance:none;
    -webkit-appearance:none;
    -o-appearance:none;
    outline: none;
    content: none;	
    position: relative;
    cursor: pointer;
  }
  input[type=checkbox]:before {
    content: '';
    background: ${(props) => props.theme.main3.main2};
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    @media(min-width: 768px) {
      width: 18px;
      height: 18px;
      border-radius: 3px;
    }
  }
  input[type=checkbox]:after {
    content: '\2713';
    font-size: 13px;
    color: transparent !important;
    position: absolute;
    top: 4px;
    left: 4px;
    @media(min-width: 768px) {
      top: 3px;
      left: 3px;
    }
  }
  input[type=checkbox]:checked:before {
    background-color: ${(props) => props.theme.main2.main2};
    @media(min-width: 992px) {
      -webkit-animation: jelly 0.3s ease;
      animation: jelly 0.3s ease;
    }
  }
  input[type=checkbox]:checked:after {
    color: ${(props) => props.theme.main2.side} !important;
  }

  .cheese-glass {
    background: rgba(175, 148, 160, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    -webkit-box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(175, 148, 160, 0.18);
  }
  .jelly:hover, .jelly:active {
    -webkit-animation: jelly 0.3s ease;
    animation: jelly 0.3s ease;
  }
  @-webkit-keyframes jelly {
    0%, 100% {-webkit-transform: scale(1, 1)}
    30% {-webkit-transform: scale(1.25, 0.75)}
    40% {-webkit-transform: scale(0.75, 1.25)}
    50% {-webkit-transform: scale(1.15, 0.85)}
    65% {-webkit-transform: scale(.95, 1.05)}
    75% {-webkit-transform: scale(1.05, .95)}
  }
  @keyframes jelly {
    0%, 100% {transform: scale(1, 1)}
    30% {transform: scale(1.25, 0.75)}
    40% {transform: scale(0.75, 1.25)}
    50% {transform: scale(1.15, 0.85)}
    65% {transform: scale(.95, 1.05)}
    75% {transform: scale(1.05, .95)}
  }
  @keyframes twinkle {
    0%, 50%, 100% {
      transform: scale(1);
      opacity: 0.3;
    }
    25%, 75% {
      transform: scale(1.1);
      opacity: 1;
    }
  }
  

  // /* box dots animation */
  @-webkit-keyframes bURGXq {
    0% {-webkit-transform: translate(0px, 0px);}
    100% {-webkit-transform: translate(20px, 20px);}
  }
  @keyframes bURGXq {
    0% {transform: translate(0px, 0px);}
    100% {transform: translate(20px, 20px);}
  }

  // /* big-> small (하투 애니메이션) */
  @-webkit-keyframes bigToSmall {
    0%, 100% {-webkit-transform: scale(1);}
    40% {-webkit-transform: scale(0.1);}
    70%, 75% {-webkit-transform: scale(3);}
    90% {-webkit-transform: scale(0.5);}
  }
  @keyframes bigToSmall {
    0%, 100% {transform: scale(1);}
    40% {transform: scale(0.1);}
    70%, 75% {transform: scale(3);}
    90% {transform: scale(0.5);}
  }
`;

export const Loader = styled.div`
  margin: 5rem 0;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  height: 100%;
  div {
    display: inline-block;
    position: relative;
    width: 40px;
    height: 40px;
    margin: 0 auto;
    transform: scale(1.3);
    div {
      position: absolute;
      border: 2px solid ${(props) => props.theme.main1.main2};
      opacity: 1;
      border-radius: 50%;
      animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }
    div:nth-child(2) {
      animation-delay: -0.5s;
    }
  }
  @keyframes lds-ripple {
    0% {
      top: 18px;
      left: 18px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    4.9% {
      top: 18px;
      left: 18px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    5% {
      top: 18px;
      left: 18px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 36px;
      height: 36px;
      opacity: 0;
    }
  }
`;
export const TitleSection = styled.div`
  margin: 2rem 0;
  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme.main1.main2};
    text-transform: uppercase;
    i {
      width: 1.5em;
      font-size: 0.6em;
      position: relative;
      top: -5px;
      right: 0;
    }
  }
  @media (min-width: 768px) {
    margin: 3rem 1rem;
  }
`;
