import React, { Component } from "react";
import PropTypes from "prop-types";
class Head2 extends Component {
  static propTypes = {
    linkUrl: PropTypes.string.isRequired,
    linkName: PropTypes.string.isRequired
  };

  render() {
    return (
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href={this.props.linkUrl}>
          {this.props.linkName}
        </a>
      </li>
    );
  }
}
export default Head2;
