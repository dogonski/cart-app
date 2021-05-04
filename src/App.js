import React, { useState } from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import store from 'store';
import GlobalStyle from 'theme/GlobalStyle';
import products from 'assets/items.json';
import Heading from 'components/atoms/Heading';
import ProductCard from 'components/molecules/ProductCard';
import Cart from 'components/organisms/Cart';
import Button from 'components/atoms/Button';
import device from 'device';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  justify-items: center;
  align-items: center;

  @media ${device.tablet} {
    grid-gap: 10px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${device.laptop} {
    grid-gap: 15px;
    grid-template-columns: repeat(4, 1fr);
  }
`;
const CartButton = styled(Button)`
  position: fixed;
  right: 50px;
  top: 40px;
  z-index: 2;
`;
const StyledProductCard = styled(ProductCard)`
  display: block;
  margin: 100px;
  padding: 10px;
`;

function App() {
  const [isOpen, openCart] = useState(false);
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Heading>Products</Heading>
      <CartButton onClick={() => openCart(!isOpen)}>CART</CartButton>
      <GridWrapper>
        {products.map(({ id, title, cover, availability, price, currency }) => (
          <StyledProductCard
            id={id}
            cover={cover}
            title={title}
            price={price}
            availability={availability}
            currency={currency}
            key={id}
          >
            {title}
          </StyledProductCard>
        ))}
      </GridWrapper>
      <Cart isOpen={isOpen} />
    </Provider>
  );
}
export default App;
