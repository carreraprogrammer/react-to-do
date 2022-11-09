import React from "react"
import ReactDOM from "react-dom/client";
import TodoContainer from "./funcitonBased/components/TodoContainer"

//stylesheet
import "./funcitonBased/App.css"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
      <TodoContainer />
    </React.StrictMode>
  )