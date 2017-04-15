import React from 'react';
import { Grid } from 'semantic-ui-react';
import Nav from './Nav';

function Layout(props) {
  return (
    <div
      className="appContainer"
    >
      <Nav {...props} />
      {props.children}
    </div>
  );
}

Layout.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Layout;
