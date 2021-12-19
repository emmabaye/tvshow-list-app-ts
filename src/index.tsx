import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StoreProvider } from "./Store";
import { Router, RouteComponentProps } from "@reach/router";
import HomePage from "./HomePage";
import FavPage from "./FavPage";

const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps)=> props.pageComponent

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <Router>
        <App path="/">
          <RouterPage pageComponent={<HomePage />} path='/' />
          <RouterPage pageComponent={<FavPage />} path='/faves' />
        </App>
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
