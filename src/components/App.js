import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  render() {
    const t = this.props;
    return <div className="container-fluid">{t.children}</div>;
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
