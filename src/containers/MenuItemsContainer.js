import { connect } from 'react-redux';
import { MenuItems } from '../components/MenuItems';

const mapStateProps = (state) => {
  return {
    items: state.items
  };
};

export const MenuItemsContainer = connect(mapStateProps)(MenuItems);
