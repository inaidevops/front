import logo from '../../../assets/images/logo.svg'
import classes from './Logo.module.scss';

const Logo = ({ size = 100 }) => {
  return (<div className={classes.Logo}>
    <img width={size} src={logo} alt='logo' />
    <h1>Logo</h1>
  </div>

    );
}

    export default Logo;