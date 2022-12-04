import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    /*Primary Palette*/

    --Color-Primary: #FF577F;
    --Color-Primary-Focus: #FF427F;
    --Color-Primary-Disable: #59323F;
    ;
    /*Grey Scale Palette*/

    --Grey-4:#121214;
    --Grey-3:#212529;
    --Grey-2:#343B41;
    --Grey-1:#868E96;
    --Grey-0: #F8F9FA;
    --Withe: #ffff;

    /*Feedback Palette*/

    --Negative: #E83F5B;
    --Warning: #ffcd07;
    --Sucess: #3FE864;
    --Information: #155bcb;

    /*Linear gradientw */  
    }
    body {
    font-family: "Inter", sans-serif;
    }
    /* Text sizes */
    .Title1{
        font-size: 18px;
        font-weight: 700;
        line-height: 28px;
        letter-spacing: 0em;

    }
    .Title2{
        font-size: 16px;
        font-weight: 600;
        line-height: 26px;
        letter-spacing: 0em;


    }
    .Title3{
        font-size: 14px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0em;

    }
    .Headline{
        font-size: 12px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;

    }
    .HeadlineBold{
        font-size: 12px;
        font-weight: 600;
        line-height: 18px;
        letter-spacing: 0em;

    }
  
    .HeadlineItalic{
        font-size: 12px;
        font-style: italic;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
    }
    .LabelText{
        font-size: 10px;
        font-weight: 400;
        letter-spacing: 0em;

    }
    body{
        width: 100%;
        height: 100%;

        padding: 0;
        margin: 0;
        background-color: var(--Grey-4);

        overflow-x: hidden;

    }


    #root{
        width: 100%;
        height: 100%;
    }
    .conteiner{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        padding: 0;
        margin: 0;
    }
    html{
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: 0;
    }
    .girar {
    animation: gira 1s linear; /* 1s é o tempo da animação de cada giro */
    animation-iteration-count: 1000; /* 3 é a quantidade de giros, 3 giros = 3 segundos */
    }
    @keyframes gira {
        0% {
        transform: rotate(0deg);
        border-bottom-color: transparent;
        }
        100% {
        border-bottom-color: transparent;
        transform: rotate(360deg);
        }
    }
`;
