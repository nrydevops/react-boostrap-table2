import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as flightActions from "../../actions/flightActions";
import FlightListEdit from "./FlightListEdit";

class AdminPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      activePage: 1
    };

    this.onNavigatePage = this.onNavigatePage.bind(this);
  }

  onNavigatePage(page, sizePerPage) {
    if (this.state.page === page) return;
    this.props.actions.loadFlights(page);
    this.setState({ activePage: page });
  }

  render() {
    const { flights } = this.props;
    //return Object.keys(flights).length > 0 && <h1>hi flights</h1>;

    return (
      Object.keys(flights).length > 0 && (
        <FlightListEdit
          flights={flights}
          activePage={this.state.activePage}
          onNavigatePage={this.onNavigatePage}
        />
      )
    );
  }
}

AdminPage.propTypes = {
  flights: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    flights: state.flights
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(flightActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPage);
