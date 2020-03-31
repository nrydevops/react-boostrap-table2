/*
{
  mode: 'click',
  blurToSave: true,
  timeToCloseMessage: 2500,
  errorMessage: '',
  beforeSaveCell: (oldValue, newValue, row, column) => { ... },
  afterSaveCell: (oldValue, newValue, row, column) => { ... },
  onErrorMessageDisappear: () => { ... },
  nonEditableRows: () => { ... }
}
*/

import React from "react";
import PropTypes from "prop-types";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";

class FlightListEdit extends React.Component {
  rowStyle(row, rowIdx) {
    return { backgroundColor: rowIdx % 2 === 0 ? "skyblue" : "lightblue" };
  }

  render() {
    const { flights } = this.props,
      { flightList } = flights,
      options = {
        hideSizePerPage: true,
        page: this.props.activePage,
        onPageChange: this.props.onNavigatePage
      };

    //console.log(flights, flightList, options);

    const columns = [
      {
        dataField: "id",
        text: "Id"
      } /**/,
      {
        dataField: "bort_number",
        text: "Flight"
      },
      {
        dataField: "from_city",
        text: "Source"
      },
      {
        dataField: "to_city",
        text: "Destination"
      },
      {
        dataField: "time",
        text: "Time"
      },
      {
        dataField: "fact_time",
        text: "Fact time"
      },
      {
        dataField: "status",
        text: "Status"
      }
    ];

    const defaultSorted = [
      {
        dataField: "fact_time", // if dataField is not match to any column you defined, it will be ignored.
        order: "asc" // desc or asc
      }
    ];

    const cellEdit = {
      mode: "click",
      blurToSave: true,
      timeToCloseMessage: 2500,
      errorMessage: "",
      beforeSaveCell: (oldValue, newValue, row, column, ondone) => {
        console.log(
          `beforeSaveCell: (${oldValue}, ${newValue}, ${JSON.stringify(
            row
          )}, ${JSON.stringify(column)})`
        );

        if (oldValue === newValue) return ondone(false);

        setTimeout(_ => ondone(), 1000);
        // call api saveCell(row.id, column.dataField, newValue)
        
        return { async: true };
      },
      afterSaveCell: (oldValue, newValue, row, column) => {
        console.log(
          `afterSaveCell: (${oldValue}, ${newValue}, ${JSON.stringify(
            row
          )}, ${JSON.stringify(column)})`
        );
      },
      onErrorMessageDisappear: () => {},
      nonEditableRows: () => []
    };

    return (
      Object.keys(flights).length > 0 && (
        <BootstrapTable
          keyField="id"
          columns={columns}
          data={flightList}
          fetchInfo={{ dataTotalSize: flights.resultsCount }}
          options={options}
          defaultSorted={defaultSorted}
          remote
          rowStyle={this.rowStyle}
          cellEdit={cellEditFactory(cellEdit)}
        />
      )
    );
  }
}

FlightListEdit.propTypes = {
  flights: PropTypes.object.isRequired,
  activePage: PropTypes.number.isRequired,
  onNavigatePage: PropTypes.func.isRequired
};

export default FlightListEdit;
