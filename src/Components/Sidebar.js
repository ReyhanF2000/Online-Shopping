import React, { useContext } from 'react'
import { myContext } from '../Context/context'
import { ShowSidebar, Reset } from '../Action/actions'
import ShoppedItems from './ShoppedItems'
import styled from 'styled-components'
import { FaWindowClose } from 'react-icons/fa'
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

export default function Sidebar() {
    const { state, dispatch } = useContext(myContext)

    function handleCloseSidebar() {
        dispatch(ShowSidebar(!state.show))
    }

    function handleReset() {
        dispatch(Reset())
    }

    function calculateTotalPrice() {
        let counts = 0
        state.items.forEach(item => {
            counts += item.number * Number(item.price)
        })
        return counts.toFixed(2)
    }
    return (
        <Wrapper
            className=
            {state.show ?
                'sidebar open' :
                'sidebar close'}>
            <Close onClick={handleCloseSidebar}>
                <FaWindowClose />
            </Close>
            <Box>Your Cart</Box>
            {state.items.map(item =>
                <ShoppedItems
                    key={item.id}
                    data={item}
                />
            )}
            <Infrmation>
                <Price>
                    Your total is:
                    <Total>
                        ${calculateTotalPrice()}
                    </Total>
                </Price>
                <Button onClick={handleReset}>CLEAR CART</Button>
            </Infrmation>
        </Wrapper>
    )
}