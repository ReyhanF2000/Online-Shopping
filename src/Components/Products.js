import React from 'react'
import styled from 'styled-components'
import Product from './Product'

const Wrapper = styled.div`
padding: 4rem 0;
`
const Box = styled.div`
text-align: center;
font-size: 2.5rem;
margin-bottom: 5rem;
text-transform: capitalize;
letter-spacing: 0.1rem;
`
const Title = styled.h2``

const Items = styled.div`
  width: 90vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-column-gap: 1.5rem;
  grid-row-gap: 2rem;
`
export default function Products({ data, onTotalShop }) {
    return (
        <Wrapper>
            <Box>
                <Title>our products</Title>
            </Box>
            <Items>
                {data.map(item =>
                    <Product
                        key={item.id}
                        item={item}
                        onShop={() => onTotalShop(item.id)}
                    />
                )}
            </Items>
        </Wrapper>
    )
}