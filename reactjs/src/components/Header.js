import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

//props are decontructed {}
const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()

  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />
      )}
    </header>
  )
}

// deafult prop, which will get overridden by the values passed in the component
Header.defaultProps = {
  title: 'Task Tracker',
}

// prop type checking
Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header
