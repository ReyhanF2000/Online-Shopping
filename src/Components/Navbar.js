import React, { useContext } from 'react'
import styled from 'styled-components'
import { FaBars, FaCartPlus } from 'react-icons/fa';
import logo from '../Img/Logo.png';
import { myContext } from '../Context/context';
import { ShowSidebar } from '../Action/actions';

const Wrapper = styled.div`
position: sticky;
top: 0;
height: 60px;
width: 100%;
display: flex;
align-items: center;
background: rgb(231, 226, 221);
z-index: 1;
`
const Subwrapper = styled.div`
width: 100%;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 3.5rem;
@media (max-width: 400px) {
    padding: 0 0.5rem; 
 }
}
`
const Span = styled.span`
font-size: 1.5rem;
`
const Logo = styled.img``

const Cart = styled.div`
position: relative;
cursor: pointer;
`
const ShopCount = styled.div`
position: absolute;
top: -8px;
right: -8px;
background: #ed9c51;
padding: 0 5px;
border-radius: 30%;
color: #fdfdfd;
`
export default function Navbar() {
    const { state, dispatch } = useContext(myContext)

    function handleShowSidebar() {
        dispatch(ShowSidebar(!state.show))
    }

    function calculateValue() {
        let counts = 0
        state.items.forEach(item => {
            counts += item.number
        })
        return counts
    }
    return (
        <Wrapper>
            <Subwrapper>
                <Span>
                    <FaBars />
                </Span>
                <Logo src={logo} />
                <Cart onClick={handleShowSidebar}>
                    <Span>
                        <FaCartPlus />
                    </Span>
                    <ShopCount>
                        {calculateValue()}
                    </ShopCount>
                </Cart>
            </Subwrapper>
        </Wrapper>
    )
}