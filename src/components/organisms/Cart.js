import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import ProductCard from 'components/molecules/ProductCard';

const StyledProductCard = styled(ProductCard)``;

const Wrapper = styled.div`
  background: #eee;
  position: fixed;
  display: flex;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transform: translateX(${({ isOpen }) => (isOpen ? '0%' : '100%')});
`;

const Cart = ({ cart }, { isOpen }) => (
  <>
    <Wrapper isOpen={isOpen}>
      <Heading>Cart</Heading>
      {cart.map(({ id, title, cover, price, currency, availability }) => (
        <StyledProductCard
          secondary
          id={id}
          cover={cover}
          title={title}
          price={price}
          currency={currency}
          availability={availability}
          key={id}
        >
          {title}
        </StyledProductCard>
      ))}
      <Button>Purchase</Button>
    </Wrapper>
  </>
);

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
      price: PropTypes.number,
      availability: PropTypes.bool.isRequired,
      currency: PropTypes.string.isRequired,
      secondary: PropTypes.bool,
    }),
  ),
};

Cart.defaultProps = {
  cart: [],
};

const mapStateToProps = (state) => {
  const { cart } = state;
  return { cart };
};

export default connect(mapStateToProps)(Cart);
