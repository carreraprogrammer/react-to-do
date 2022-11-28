import React from "react"
import ReactDOM from "react-dom/client";
import TodoContainer from "./funcitonBased/components/TodoContainer"
import { HashRouter as Router } from "react-router-dom"

//stylesheet
import "./funcitonBased/App.css"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  )