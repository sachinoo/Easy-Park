import styled from 'styled-components'

export const InfoContainer = styled.div`
    padding-top:10px;
    padding-bottom: 40px;
    height: 450px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: #15241C;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`

export const InfoWrapper = styled.div`
    // max-width: 1000px;
    margin:0 auto;
    display: grid;
    grid-template-columns:1fr 1fr 1fr;
    justify-content: space-between;
    grid-gap: 50px;
    padding:0 auto;


    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px
    }
`

export const InfoCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-width: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

`

export const InfoIcon = styled.img`
    height: 100px;
    width: 100 px;
    margin-bottom: 10px;

`
export const InfoH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom:64px;

    @media screen and (max-width: 680px){
        font-size = 2rem;
    }

`
export const InfoH2 = styled.h2`
    font-size: 1rem;
    margin-bottom:10px;

`

export const InfoP = styled.p`
    font-size: 1rem;
    text-align:center;

`
