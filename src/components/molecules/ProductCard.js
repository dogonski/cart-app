import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Button from 'components/atoms/Button';
import { addProduct as addProductAction, removeProduct as removeProductAction } from 'actions';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  align-items: center;
  background-color: #eee;
  width: 100vw;
  height: 50vh;

  ${({ secondary }) =>
    secondary &&
    css`
      flex-direction: row;
      width: 100vw;
      justify-content: center;
    `}
`;
const Cover = styled.div`
  width: 200px;
  height: 60%;
  background-image: url(${({ cover }) => cover});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
  margin: 10px;
`;
const Title = styled.p`
  display: block;
  margin: 10px;
  width: 400px;
  height: auto;
  font-size: 1.2rem;
  text-align: ${({ secondary }) => (secondary ? 'center' : 'left')};
`;
const Info = styled.p`
  font-size: 1rem;
  width: 150px;
`;
const OnStockBadge = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ availability }) => (availability ? 'green' : 'red')};
`;
const ProductCard = ({
  secondary,
  id,
  title,
  cover,
  price,
  availability,
  currency,
  addProduct,
  removeProduct,
}) => (
  <>
    <Wrapper secondary={secondary}>
      <Cover cover={cover} />
      <Title>{title}</Title>
      {secondary || <OnStockBadge availability={availability} />}
      {price == null ? (
        <Button>Ask for price</Button>
      ) : (
        <Info>
          {price.toFixed(2)}
          {currency}
        </Info>
      )}
      {availability ? (
        <Button onClick={() => addProduct(id)}>Add to cart</Button>
      ) : (
        <Button>Notify me when available</Button>
      )}
      {secondary && <Button onClick={() => removeProduct(id)}>REMOVE</Button>}
    </Wrapper>
  </>
);

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  price: PropTypes.number,
  availability: PropTypes.bool.isRequired,
  currency: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
  addProduct: PropTypes.func,
  removeProduct: PropTypes.func,
};
ProductCard.defaultProps = {
  price: 'Ask for price',
  secondary: false,
  addProduct: null,
  removeProduct: null,
};

const mapDispatchToProps = (dispatch) => ({
  removeProduct: (id) => dispatch(removeProductAction(id)),
  addProduct: (id) => dispatch(addProductAction(id)),
});

export default connect(null, mapDispatchToProps)(ProductCard);
