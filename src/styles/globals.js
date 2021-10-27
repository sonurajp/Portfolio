import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    // background: ${(props) => props.theme.colors.background1};
    background: #15020A;
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
.htmlIcon{

    transform: rotate(180deg);
}

.gitIcon{
position: fixed;
top: 74%;
left: 1.5%;


}



.linkedInIcon{
position: fixed;
top: 80%;
left: 1.5%;

}
.codePenIcon{
position: fixed;
top: 86%;
left: 1.5%;

}
.instaIcon{
position: fixed;
top: 26%;
left: 1.5%;

}

@media all and (max-width: 1300px) {
  .gitIcon{
    position: absolute;
    top: 4%;
    left: 25.5%;
    }

    .linkedInIcon{
     position: absolute;
      top: 4%;
      left: 45.5%;
      
      }

    .codePenIcon{
      position: absolute;
      top: 4%;
      left: 65.5%;
      
      }
      
    .htmlIcon{
      display:none;
      }
  
}




`;

export default GlobalStyles;
