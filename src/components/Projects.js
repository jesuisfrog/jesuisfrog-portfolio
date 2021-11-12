import React, { Component } from "react";

import {
  Button,
} from "reactstrap";

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProject: null,
    };
  }

  onProjectSelect(project) {
    this.setState({ selectedProject: project });
  }

  render() {
    const directory = this.props.projects.map((project) => {
        return (
          <div className="container" key={project.id}>
            <div key={project.id} className="row m-20">
              <div className="col-md-4">
                <h3
                  style={{
                    marginLeft: 20,
                    marginBottom: 40,
                    ontSize: "5em",
                    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.3)",
                    textAlign: "left",
                  }}
                >
                  {project.name}
                </h3>

                <div className="col ">
                  <p
                    style={{
                      textAlign: "left",
                      fontStyle: "italic",
                    }}
                  >
                    {project.description}
                  </p>
                </div>
                <div className="col ">
                  <h5
                    style={{
                      marginTop: 130,
                      ontSize: "5em",
                      fontStyle: "italic",

                      textAlign: "left",
                    }}
                  >
                    {project.frontend}
                  </h5>
                </div>
                <div className="col ">
                  <h5
                    style={{
                      ontSize: "5em",
                      fontStyle: "italic",

                      textAlign: "left",
                    }}
                  >
                    {project.backend}
                  </h5>
                </div>
              </div>
              <div className="col-md-8 ml-auto  text-white">
                <div className="row m-20">
                  <div className="col-xl-8 m-auto">
                    <img
                      id="pic"
                      style={{
                        alignItems: "center",
                      }}
                      width="100%"
                      src={project.image}
                      alt={project.name}
                    />
                  </div>
                </div>
                {
                 !project.live ?
                    <div
                      className="row "
                      style={{
                        marginTop: 20,
                      }}
                    >
                      <div className="col-3 d-flex align-items-stretch ml-auto mr-auto mt-3">
                        <Button
                          style={{
                            backgroundColor: "#ffffff",
                            color: "#ffffff",
                            borderRadius: 5,
                            width: 200,
                          }}
                        >
                          <a
                            href={project.github1}
                            style={{
                              color: "#000000",
                            }}
                          >
                            GITHUB
                          </a>
                        </Button>
                      </div>
                    </div>
                 :
                    <div
                      className="row "
                      style={{
                        marginTop: 20,
                      }}
                    >
                      <div className="col-3 d-flex align-items-stretch ml-auto mt-3">
                        <Button
                          style={{
                            backgroundColor: "#ffffff",
                            color: "#000000",
                            borderRadius: 5,
                            width: 300,
                          }}
                        >
                          <a
                            href={project.live}
                            style={{
                              color: "#000000",
                            }}
                          >
                            VISIT
                          </a>
                        </Button>
                      </div>
                      <div className="col-3 d-flex align-items-stretch mr-auto mt-3">
                        <Button
                          style={{
                            backgroundColor: "#ffffff",
                            color: "#ffffff",
                            borderRadius: 5,
                            width: 200,
                          }}
                        >
                          <a
                            href={project.github1}
                            style={{
                              color: "#000000",
                            }}
                          >
                            GITHUB
                          </a>
                        </Button>
                      </div>
                    </div>

                }
              </div>
            </div>
            <div className="row">
              <hr style={{ width: 800, color: "#ffffff" }}></hr>
            </div>
          </div>
        );
    });

    return (
      <div
        id="project"
        style={{
          padding: 0,
          alignItems: "center",
        }}
      >
        <div
          style={{
            padding: 0,
            alignItems: "center",
          }}
        >
          <Info />
        </div>

        <div className="col-12">{directory}</div>
        {/* <div className="row">
          <div className=" col-lg-10 m-1">
            {this.renderSelectedProject(this.state.selectedProject)}
          </div>
        </div> */}
      </div>
    );
  }
}

export default ProjectCard;

function Info() {
  return (
    <div>
      <h1
        style={{
          color: "var(--light-text)",
          fontSize: 38,
          ontSize: "5em",
          textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
          textAlign: "center",
          alignItems: "center",
          padding: 50,
        }}
      >
        PROJECTS
      </h1>
    </div>
  );
}
