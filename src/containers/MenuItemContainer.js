import MenuItem from '../components/MenuItem';
import { connect } from 'react-redux';
import {
  removeItem,
  updatePrice,
  updateQuantity
} from '../store/items/actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    remove: () => dispatch(removeItem(ownProps.uuid)),
    updatePrice: (price) => dispatch(updatePrice(ownProps.uuid, price)),
    updateQuantity: (qty) => dispatch(updateQuantity(ownProps.uuid, qty))
  };
};

export const MenuItemContainer = connect(null, mapDispatchToProps)(MenuItem);
