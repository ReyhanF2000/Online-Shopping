import React from 'react'
import { Increase, Decrease, Delete } from '../Action/actions'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

const Wrapper = styled.div``

const Item = styled.div`
display: grid;
align-items: center;
grid-template-columns: auto 1fr auto;
grid-column-gap: 1.5rem;
margin: 1.5rem 0.5rem;
`
const Img = styled.img`
width: 75px;
height: 75px;
`
const Title = styled.h4`
font-size: 0.85rem;
text-transform: capitalize;
letter-spacing: var(--mainSpacing);
`
const Price = styled.h5`
margin: 0.5rem 0;
letter-spacing: var(--mainSpacing)
`
const Remove = styled.span`
color: grey;
cursor: pointer;
`
const P = styled.p`
text-align: center;
`
export default function ShoppedItems({ data }) {
    const dispatch = useDispatch()
    const handleIncrease = (id) => {
        dispatch(Increase(id))
    }
    const handleDecrease = (id) => {
        dispatch(Decrease(id))
    }

    const handleDelete = (id) => {
        dispatch(Delete(id))
    }

    return (<>
        {data.number && <Wrapper>
            <Item>
                <Img src={data.src} />
                <Wrapper>
                    <Title>{data.Title}</Title>
                    <Price>{data.price}€</Price>
                    <Remove onClick={() => handleDelete(data.id)}>remove</Remove>
                </Wrapper>
                <Wrapper>
                    <FaChevronUp onClick={() => handleIncrease(data.id)} />
                    <P>{data.number}</P>
                    <FaChevronDown onClick={() => handleDecrease(data.id)} />
                </Wrapper>
            </Item>
        </Wrapper>
        }
    </>)
}