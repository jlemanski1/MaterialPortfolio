import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';

import headShot from '../assets/images/HeadshotCropped.png';
import config from '../../config';

export class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabs: 
        props.menuItems.map(menuItem => ({content: menuItem.label, href: menuItem.url})),
      collapsed: true
    };

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.trackClick = this.trackClick.bind(this);
  }

  trackClick(e) {
    const gtag = window && window.gtag;

    if (gtag) {
      gtag('event', 'sidebar-nav', {target: e.currentTarget.innerText});
    } else {
      console.log('Click tracking error');
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
      tabs: this.state.tabs
    });
  }

  render() {

    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    const { tabs } = this.state;
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand" href="#page-top">
          <span className="d-block d-lg-none">
            {config.firstName} {config.lastName}
          </span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={headShot}
              alt=""
            />
          </span>
        </a>
        <button
          className={`${classTwo}`}
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={this.toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${classOne}`} id="navbarSupportedContent">
          <Scrollspy
            items={tabs.map(s => s.href)}
            currentClassName="active"
            offset={-300}
            className="navbar-nav"
          >
            {tabs.map((tab, i) => {
              const { href, content } = tab;
              return (
                <li className="nav-item" key={href}>
                  <Scroll type="id" element={href}>
                    <a className="nav-link" href={`#${href}`}>
                      {content}
                    </a>
                  </Scroll>
                </li>
              );
            })}
          </Scrollspy>
        </div>
      </nav>
    );
  }
}

export default Sidebar;