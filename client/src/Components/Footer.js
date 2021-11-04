import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import styled from 'styled-components'


const Container = styled.div`
    min-height:20vh;
    padding: 80px 60px;
    background: black;
    justify-content: center;
`


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width:1000px;
    margin:0 auto;
`

const Row = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 60px;
    justify-content: center;
    @media (max-width: 550px){
        grid-template-columns:1fr;
        grid-gap:20px;
    }

`
const Column = styled.div`
    text-align: center;
    display:flex;
    flex-direction: column;
    max-width:200px;
    margin:0 auto;


`


const Title = styled.h2`
    color:white;
    max-width: 200px;
    text-align: center;
    margin-bottom:20px;

`

const Title2 = styled.h3`
    color:white;
    max-width: 200px;
    text-align: center;
    margin-bottom:20px;

`

const Link = styled.a`
    color:white;
    margin-bottom:20px;
    text-decoration:none;
    font-size:20px;
    max-width:200px;
    &:hover {
        background-color:green;
        border-radius: 4px;
        transition: all 0.2s ease-out;
        color:purple;
    }


`


const Footer = () => {
    return (
        <Container>
        <Wrapper>
            <Row>
                <Column>
                    <Title>Easypark</Title>
                    <Title2>Tech Tack</Title2>
                    <Title2>Texas Tech University</Title2>
                    <Title2>Lubbock-Texas</Title2>
                    <Title2>United States of America</Title2>
                </Column>
                <Column>
                    <Title>Easypark</Title>
                    <Link href="/">Home</Link>
                    <Link href = "/about">About</Link>
                    <Link href = "/contact_us">Contact</Link>
                    <Link href = "/account">Account</Link>
                </Column>
                <Column>
                    <Title>Social Medias</Title>
                    <Link href="https://www.facebook.com" target="_blank"><FacebookIcon /></Link>
                    <Link href="https://www.twitter.com" target="_blank"><TwitterIcon /></Link>
                    <Link href = "https://www.youtube.com" target="_blank"><YouTubeIcon /></Link>
                </Column>
            </Row>

        </Wrapper>
        </Container>
    )
}

export default Footer

