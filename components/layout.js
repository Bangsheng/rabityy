import React from 'react';
import { Grid } from 'semantic-ui-react';

function Layout(props) {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          Tabs
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        {props.children}
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          Footer
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

Layout.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Layout;
