import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';


const Header = ({title, onAddToggle, showAdd}) => {
  const location = useLocation();

  return (
    <header className='header'>
        <h1>{title}</h1>
        {location.pathname === "/" && <Button color = {showAdd === true ? "black" : "steelblue"} text = {showAdd === true ? "Close" : "Add"} onClick = {onAddToggle} />}
    </header>
  )
}

Header.defaultProps = {
    title: "Task Tracker"
}
Header.propTypes = {
    title: PropTypes.string,
}
export default Header;
