import React, { Component } from "react";
import ProjectCard from "./Projects";
import SplashHeader from "./SplashHeader";
import Skill from "./Skills";
import Header from "./Header";
import Contact from "./Contact";
import { PROJECTS } from "../shared/projects";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: PROJECTS, selectedProject: null };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SplashHeader />
        <Skill />
        <ProjectCard projects={this.state.projects} />
        <Contact/>
      </div>
    );
  }
}

export default Main;
