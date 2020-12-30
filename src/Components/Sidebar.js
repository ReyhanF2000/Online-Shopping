import React from 'react'
import styled from 'styled-components'
import { FaWindowClose } from 'react-icons/fa';
import ShoppedItems from './ShoppedItems'
import '../App.css';

const Wrapper = styled.div``

const Close = styled.span`
font-size: 1.7rem;
  cursor: pointer;
`
const Box = styled.h2`
text-transform: capitalize;
text-align: center;
letter-spacing: 0.1rem;
margin-bottom: 2rem;
`
const Infrmation = styled.div`
margin-top: 2rem;
letter-spacing: 0.1rem;
text-align: center;
`
const Price = styled.h3`
text-transform: capitalize;
margin-bottom: 1rem;
`
const Button = styled.button`
padding: 1rem 3rem;
text-transform: uppercase;
letter-spacing: 0.1rem;
font-size: 1rem;
background: #f09d51;
color: #222;
border: 1px solid #f09d51;
transition: all 0.3s linear;
cursor: pointer;
`
const Total = styled.span``
export default function Sidebar({ open, onClickClose, data, onINCREASE, onDECREASE, onDELETE, onRESET, totalPrice }) {
    return (
        <Wrapper
            className=
            {open ?
                'sidebar open' :
                'sidebar close'}>
            <Close onClick={onClickClose}>
                <FaWindowClose />
            </Close>
            <Box>Your Cart</Box>
            {data.map(item =>
                <ShoppedItems
                    key={item.id}
                    data={item}
                    onINC={() => onINCREASE(item.id)}
                    onDEC={() => onDECREASE(item.id)}
                    onDEL={() => onDELETE(item.id)}
                />
            )}
            <Infrmation>
                <Price>
                    Your total is:
                    <Total>
                        ${totalPrice}
                    </Total>
                </Price>
                <Button onClick={onRESET}>CLEAR CART</Button>
            </Infrmation>
        </Wrapper>
    )
}