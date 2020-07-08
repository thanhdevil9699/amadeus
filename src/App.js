import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavigationURL from "./router/NavigationURL";
import ScrollToTop from "./router/ScrollToTop";

function App() {
  const [count, setCount] = useState(0);
  setTimeout(() => {
    setCount(1);
  }, 2500);
  if (count === 1) {
    return (
      <div className="App">
        <Router>
          <ScrollToTop />
          <NavigationURL />
        </Router>
      </div>
    );
  }
  return <div>LOADING....</div>;
}
export default App;
