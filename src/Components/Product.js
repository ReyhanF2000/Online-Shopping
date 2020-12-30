import React, { useState } from 'react'
import styled from 'styled-components'
import { FaShoppingCart } from 'react-icons/fa'

const Wrapper = styled.div``

const Subwrapper = styled.div`
position: relative;
overflow: hidden;
`
const Img = styled.img`
display: block;
width: 100%;
min-height: 12rem;
transition: all 0.3s linear;
`
const Button = styled.button`
position: absolute;
top: 70%;
right: 0;
background: #f09d51;
border: none;
text-transform: uppercase;
padding: 0.5rem 0.75rem;
letter-spacing:  0.1rem;
font-weight: bold;
transition: all 0.3s linear;
cursor: pointer;
`
const Title = styled.h3`
text-transform: capitalize;
font-size: 1.1rem;
margin-top: 1rem;
letter-spacing: 0.1rem;
text-align: center;
`
export default function Product({ item, onShop }) {
    const [showButton, setShowButton] = useState(false)

    function handleShowShopping() {
        setShowButton(true)
    }

    function handleCloseShopping() {
        setShowButton(false)
    }

    return (
        <Wrapper
            onMouseEnter={handleShowShopping}
            onMouseLeave={handleCloseShopping}>
            <Subwrapper>
                <Img src={item.src} />
                {showButton && <Button
                    onClick={(e) => onShop(e)}
                >
                    <FaShoppingCart />
                        Add to cart
                        <FaShoppingCart />
                </Button>
                }
            </Subwrapper>
            <Title>{item.title}</Title>
        </Wrapper>
    )
}