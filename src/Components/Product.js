import React, { useState, useContext } from 'react'
import { TotalShop } from '../Action/actions'
import styled from 'styled-components'
import { FaShoppingCart } from 'react-icons/fa'
import { DispatchContext } from '../Context/DispatchContext'

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
export default function Product({ item }) {
    const [showButton, setShowButton] = useState(false)
    const dispatch = useContext(DispatchContext)

    function handleShowShopping() {
        setShowButton(true)
    }

    function handleCloseShopping() {
        setShowButton(false)
    }

    const handleTotalShop = (id) => {
        dispatch(TotalShop(id))
    }

    return (
        <Wrapper
            onMouseEnter={handleShowShopping}
            onMouseLeave={handleCloseShopping}>
            <Subwrapper>
                <Img src={item.src} />
                {showButton && <Button
                    onClick={() => handleTotalShop(item.id)}
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