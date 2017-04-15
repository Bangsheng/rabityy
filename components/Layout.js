import React from 'react';
import { Grid, Menu } from 'semantic-ui-react';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  handleItemClick() {
    console.log(arguments);
  }
  render() {
    const props = this.props;
    console.log(props);
    return (
      <div
        className="appContainer"
      >
        <Menu attached="top" tabular>
          <Menu.Item name="Home" active={props.location.pathname === "bio"} onClick={this.handleItemClick} />
          <Menu.Item name="Submit Document" active={props.location.pathname === "photos"} onClick={this.handleItemClick} />
          <Menu.Item name="Useful Websites" active={props.location.pathname === "photos"} onClick={this.handleItemClick} />
          <Menu.Item name="Articles" active={props.location.pathname === "photos"} onClick={this.handleItemClick} />
        </Menu>
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
      </div>
    );
  }
}

Layout.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Layout;
