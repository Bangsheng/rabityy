import React from 'react';
import { Menu } from 'semantic-ui-react';
import { browserHistory } from 'react-router';

function Nav(props) {
  return (
    <Menu attached="top" tabular className="navBarContainer">
      <Menu.Item
        active={props.location.pathname === '/'}
        onClick={() => { browserHistory.push('/'); }}
      >
        <div className="navText">
          Home<br />主页
        </div>
      </Menu.Item>
      <Menu.Item
        active={props.location.pathname === '/submit-document'}
        onClick={() => { browserHistory.push('/submit-document'); }}
      >
        <div className="navText">
          Submit Document<br />提交文件
        </div>
      </Menu.Item>
      <Menu.Item
        active={props.location.pathname === '/material'}
        onClick={() => { browserHistory.push('/material'); }}
      >
        <div className="navText">
          Educational Material<br />补充资料
        </div>
      </Menu.Item>
      <Menu.Item
        active={props.location.pathname === '/contact-us'}
        onClick={() => { browserHistory.push('/contact-us'); }}
      >
        <div className="navText">
          Contact Us<br />联系我们
        </div>
      </Menu.Item>
    </Menu>
  );
}

Nav.propTypes = {
  location: React.PropTypes.shape({
    pathname: React.PropTypes.string,
  }).isRequired,
};

export default Nav;
