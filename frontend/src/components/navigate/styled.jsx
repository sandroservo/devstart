import { styled } from "styled-components";

export const Menu =  styled.div`
    background-color: #0f172a;
    width: 300px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    overflow: auto;

    @media (max-width: 720px) {
        display: none;
    }
`;

export const Logo =  styled.img`
    display: flex;
    margin: 30px auto;
    width: 100px;
    border-radius: 50%;
    border: 1px solid white;
`;

export const Option =  styled.div`
    display: flex;
    color: #fff;
    cursor: pointer;
    padding: 15px 0;

    &:hover{
        background-color: #1e2046;
    }
`;

export const Header =  styled.div`
   background-color: #fff ;
   position: fixed;
   top: 0;
   left: 300px;
   right: 0;
   height: 70px;
   display: flex;
   align-items: center;
   box-shadow: 8px 19px 44px -22px rgba(220, 220, 220, 1);
   z-index: 10;
   justify-content: flex-end;
   padding-right: 20px;

   @media (max-width: 720px){
    left: 0;
   }

`;

export const Content =  styled.div`
    margin: 90px 20px 0 320px;

    @media (max-width: 720) {
        margin: 90px 20px 0 20px;
    }
`;