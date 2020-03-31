import React from "react";
import ReactDOM from "react-dom";

import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

import AppRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

import { loadFlights } from "./actions/flightActions";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./styles.css";

const store = configureStore();
store.dispatch(loadFlights());

/*
const flights = [
  { id: 1, name: "Item 1", price: 100 },
  { id: 2, name: "Item 2", price: 102 }
];

const FlightDisplay = props => {
  const columns = [
    {
      dataField: "id",
      text: "Product ID"
    },
    {
      dataField: "name",
      text: "Product Name"
    },
    {
      dataField: "price",
      text: "Product Price"
    }
  ];
  return (
    <div style={{ padding: "20px" }}>
      <h1 className="h2">Flight Display</h1>
      <BootstrapTable keyField="id" data={flights} columns={columns} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<FlightDisplay />, rootElement);
*/

/*
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById("app")
);
*/

/*
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </App>
  </Provider>,
  rootElement
);

*/

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </App>
  </Provider>,
  rootElement
);
