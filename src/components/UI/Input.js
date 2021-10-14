import classes from './Input.module.css';

const Input = ({ label, input }) => {
  return (
    <div className={classes.input}>
      {/* for in HTML is htmlFor in JSX */}
      <label htmlFor={input.id}>{label}</label>
      {/* use spread operator to spread all key value pairs in input obj; 
      then they're added as attributes to input element */}
      <input {...input} />
    </div>
  );
};

export default Input;
