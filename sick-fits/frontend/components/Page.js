import PropTypes from 'prop-types';
import Header from './Header';

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <h2>I am the page component</h2>
      <h4>{children}</h4>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.any,
  ]),
};
