import React, { Component } from "react";

import FluidAnimation from "react-fluid-animation";
import random from "random";

const defaultConfig = {
  textureDownsample: 1,
  densityDissipation: 0.98,
  velocityDissipation: 0.99,
  pressureDissipation: 0.8,
  pressureIterations: 25,
  curl: 30,
  splatRadius: 0.005,
};

export default class SplashHeader extends Component {
  state = {
    config: {
      ...defaultConfig,
    },
  };

  componentDidMount() {
    this._reset();
  }

  render() {
    const { config } = this.state;

    return (
      <div
        id="home"
        style={{
          height: "80vh",
        }}
      >
        <FluidAnimation config={config} animationRef={this._animationRef} />

        <div
          style={{
            position: "absolute",
            zIndex: 1,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: "1em",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontFamily: 'Quicksand, "Helvetica Neue", sans-serif',
            pointerEvents: "none",
          }}
        >
          <h2
            style={{
              fontSize: "3em",
              textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
            }}
          >
            Michael Baglio
          </h2>
          <h3>A full stack engineer </h3>

          <h1 style={{ fontStyle: "italic", marginTop: 120}}>
            Click & Drag around !
          </h1>
        </div>
      </div>
    );
  }

  _animationRef = (ref) => {
    this._animation = ref;
    this._reset();
  };

  _onUpdate = (config) => {
    this.setState({ config });
  };

  _onClickRandomSplats = () => {
    this._animation.addSplats((5 + Math.random() * 20) | 0);
  };

  _onReset = () => {
    this.setState({ config: { ...defaultConfig } });
  };

  _reset() {
    if (this._animation) {
      this._animation.addRandomSplats(random.int(100, 180));
    }
  }
}