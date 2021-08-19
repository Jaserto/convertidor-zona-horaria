import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    body {
        color: ${({ theme }) => theme.text};
        display: flex;
        height: 100vh;
        transition: background-color .3s;
        position:relative;
        justify-content:center;
    }

    div.wrapper {
        background: ${({ theme }) => theme.primary};
        border-radius: 20px;
    }

    .toggleDiv{
        /*position:absolute;
        right:0;*/
        margin-top: 10px;
        display:flex;
        align-items:center;
        margin-bottom:50px;
    }
    
    .switch-checkbox {
        height: 0;
        width: 0;
        visibility: hidden;
    }
    
    .switch-label {
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: point1er;
        width: 45px;
        height: 25px;
        background: ${({ theme }) => theme.point1};
        border-radius: 100px;
        position: relative;
        transition: background-color .2s;
        margin-right:8px;
    }

    .switch-label .switch-button {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        width: 21px;
        height: 21px;
        border-radius: 35px;
        transition: 0.2s;
        background: ${({ theme }) => theme.primary};
        box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
    }

    .switch-checkbox:checked + .switch-label .switch-button {
        left: calc(100% - 2px);
        transform: translateX(-100%);
    }
    
    .switch-label:active .switch-button {
        width: 60px;
    }

    .searchIcon{
        position:absolute;
        top:20px;
        left:15px;
        fill:${({ theme }) => theme.point3};
    }

    p.sub{
        color: ${({ theme }) => theme.point1};
    }
    
    div.search input[type="text"] {
        border:1px solid ${({ theme }) => theme.point3};
        border-radius: 15px;
        background-color:transparent;
    }
      

    .icon{
        fill: ${({ theme }) => theme.text};
    }



`