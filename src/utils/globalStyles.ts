import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import 'bootstrap/dist/css/bootstrap.min.css';
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;500;800&display=swap');
  * {
    font-family: 'Nunito', sans-serif;
  }

  html {
    font-size: 12px;
  }

  @media (min-width: 576px) {
    html {
      font-size: 14px;
    }
  }
  @media (min-width: 768px) {
    html {
      font-size: 16px;
    }
  }
  @media (min-width: 992px) {
    html {
      font-size: 18px;
    }
  }
  @media (min-width: 1200px) {
    html {
      font-size: 20px;
    }
  }

  @media (min-width: 1400px) {
    html {
      font-size: 22px;
    }
  }

  body {
    background: #060c21;
    background-repeat: no-repeat;
  }
`;

export default GlobalStyle;
