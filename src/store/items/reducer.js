import {
  ITEM_ADDED,
  ITEM_PRICE_UPDATE,
  ITEM_QTY_UPDATE,
  ITEM_REMOVED
} from './actions';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Awesome Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham', price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {
  if (action.type === ITEM_ADDED) {
    const item = { uuid: id++, quantity: 1, ...action.payload };
    return [...state, item];
  }

  if (action.type === ITEM_REMOVED) {
    return state.filter((el) => el.uuid !== action.payload.uuid);
  }

  if (action.type === ITEM_PRICE_UPDATE) {
    return state.map((el) => {
      if (el.uuid === action.payload.uuid) {
        return { ...el, price: action.payload.price };
      }
      return el;
    });
  }

  if (action.type === ITEM_QTY_UPDATE) {
    return state.map((el) => {
      if (el.uuid === action.payload.uuid) {
        return { ...el, quantity: action.payload.quantity };
      }
      return el;
    });
  }

  return state;
};

export default reducer;
