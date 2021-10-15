import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Big Sushi Menu',
    description: 'Finest fish and veggies',
    price: 20.9,
  },
  {
    id: 'm2',
    name: 'Taifun Tofu',
    description: 'A german specialty!',
    price: 5.5,
  },
  {
    id: 'm3',
    name: 'Veggie Burger',
    description: 'Delicious, raw, meaty',
    price: 11.9,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy green food',
    price: 8.9,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
