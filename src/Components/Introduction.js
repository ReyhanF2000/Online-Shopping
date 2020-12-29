import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
min-height: calc(100vh - 60px);
background: url("../Img/background.jpeg") center/cover no-repeat;
display: flex;
align-items: center;
justify-content: center;
`
const Banner = styled.div`
text-align: center;
background: rgba(255, 255, 255, 0.8);
display: inline-block;
padding: 2rem;
`
const Title = styled.h1`
font-size: 3.4rem;
text-transform: uppercase;
letter-spacing: 0.1rem;
margin-bottom: 3rem;
`
const Button = styled.button`
padding: 1rem 3rem;
text-transform: uppercase;
letter-spacing:  0.1rem;
font-size: 1rem;
background: #f09d50;
color: #222121;
border: 1px solid #f09d50;
transition:all 0.3s linear;
cursor: pointer;
`
export default function Introduction() {
    return (
        <Wrapper>
            <Banner>
                <Title>furniture collection </Title>
                <Button>shop now</Button>
            </Banner>
        </Wrapper>
    )
}
