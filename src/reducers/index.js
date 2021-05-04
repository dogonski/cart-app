const initialState = {
  cart: [
    {
      id: 11,
      title: 'Doom Eternal',
      cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1lvj.jpg',
      availability: true,
      price: 129.99,
      currency: 'PLN',
    },
    {
      id: 12,
      title: 'Call of Duty: Modern Warfare 2 Campaign Remastered',
      cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co21yx.jpg',
      availability: true,
      price: 80.0,
      currency: 'PLN',
    },
    {
      id: 14,
      title: 'Minecraft Dungeons',
      cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co233r.jpg',
      availability: true,
      price: 45.5,
      currency: 'PLN',
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_PRODUCT':
      return {
        cart: [...state.cart.filter((product) => product.id !== action.payload)],
      };
    case 'ADD_PRODUCT':
      return {
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;
