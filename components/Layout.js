import React from 'react';
import Nav from './Nav';

function Layout(props) {
  return (
    <div>
      <div
        className="navContainer"
      >
        <div className="centerContainer">
          <Nav {...props} />
        </div>
      </div>
      <div
        className="appContainer"
      >
        <div className="centerContainer">
          {props.children}
        </div>
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Layout;
