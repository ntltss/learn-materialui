import logo from "./logo.svg";
import "./App.css";
import { Grid } from "@material-ui/core";
import Header from "./components/Header";
import Content from "./components/Content";
import About from "./components/About";
import Step123 from "./components/Step123";
import StepContent from "./components/StepContent";

import { Routes, Route } from "react-router-dom";
import PostContent from "./components/PostContent";

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid sm={2} />
        <Grid xs={12} sm={8}>
          <Routes>
            <Route exact path="/" element={<Content />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/step" element={<Step123 />}></Route>
            <Route path="/stepcontent" element={<StepContent />}></Route>
          </Routes>
        </Grid>
        <Grid sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;
