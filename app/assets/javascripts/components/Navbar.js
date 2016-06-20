import React from 'react';

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  render() {
    const classNames = [
      'c-navbar',
      this.props.small ? '-small' : '',
      this.props.dark ? '-dark' : '',
    ];

    return (
      <div className={classNames.join(' ')}>
        <div className="wrapper">
          <div className="content">
            <a className="logo" href="/">
              <img src={gon.logo} alt="Preparedness for Resilience" />
            </a>
            <button
              type="button"
              className={['navbar-toggle', this.state.open ? '-open' : ''].join(' ')}
              onClick={() => this.setState({ open: !this.state.open })}
            >
              <span></span>
            </button>
            <nav className={['navbar', this.state.open ? '-open' : ''].join(' ')} >
              <ul className="links">
                <li className={['link', this.props.currentPage === 'data' ? '-active' : ''].join(' ')}>
                  <a href="#">Data</a>
                </li>
                <li className={['link', this.props.currentPage === 'dashboards' ? '-active' : ''].join(' ')}>
                  <a href="<%= Rails.application.routes.url_helpers.dashboards_path %>">Dashboards</a>
                </li>
                <li className={['link', this.props.currentPage === 'insights' ? '-active' : ''].join(' ')}>
                  <a href="#">Insights</a>
                </li>
                <li className="link separator"></li>
                <li className="link -secondary">
                  <a href="#">Search</a>
                </li>
                <li className="link -secondary">
                  <a href="#">English</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  /**
   * Define the size of the header
   * Accepted values:
   * 	- true:  make the header smaller
   * 	- false: keep the header size
   * Default: false
   */
  small: React.PropTypes.bool,
  /**
   * Define the background type of the header
   * Accepted values:
   * 	- true:  add the dark background color
   * 	- false: keep the header transpararent color
   * Default: false
   */
  dark: React.PropTypes.bool,
  /**
   * The current page location
   * Default: ''
   */
  currentPage: React.PropTypes.string,
};

export default Navbar;