import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';

const MealItem = ({ name, description, price: p, id }) => {
  // format passed prop price (with alias p)
  const price = `${p.toFixed(2)} €`;

  return (
    // use li element because it's rendered in a ul
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};

export default MealItem;
