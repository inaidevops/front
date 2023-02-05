import Logo from "../../../components/UI/Logo/Logo";
import classes from './Nav.module.scss';

export const Nav = ({show}) => {
  return ( <nav className={classes.Nav}>
    <Logo/>
  </nav> );
}
 