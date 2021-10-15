import { useContext } from 'react';
import { CartContext } from '../../../store/CartContext';
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';

const MealItem = ({ name, description, price: p, id }) => {
  const { addItem } = useContext(CartContext);

  // format passed prop price (with alias p)
  const price = `${p.toFixed(2)} €`;

  const addToCartHandler = (amount) => {
    // create new item and add it to cart state items array
    addItem({
      id,
      name,
      description,
      price: p, // add price as number, NOT formatted with €
      amount,
    });
  };

  return (
    // use li element because it's rendered in a ul
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
