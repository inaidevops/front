import classes from './Button.module.scss'
const Button = ({children, action}) => {
  return ( <button className={classes.Button} onClick={action}>
    {children}
  </button> );
}
 
export default Button;