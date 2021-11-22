import React, { useState, useRef } from "react";

import { useSpring, animated } from "react-spring";

function Skill() {
  return (
    <section id="skill">
      <div id="skillComponent">
        <div className="container">
          <Info />
          <div className="row">
            {cards.map((card) => (
              <div key={ card.id } className="col col-lg-4 d-flex align-items-stretch mx-auto mt-3">
                <Card>
                  <div className="card-title">{card.title}</div>
                  {/* <div className="card-body">{card.description}</div> */}
                  <Image ratio={card.imageRatio} src={card.image} />
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Skill;

function Card({ children }) {
  // We add this ref to card element and use in onMouseMove event ...
  // ... to get element's offset and dimensions.
  const ref = useRef();

  // Keep track of whether card is hovered so we can increment ...
  // ... zIndex to ensure it shows up above other cards when animation causes overlap.
  const [isHovered, setHovered] = useState(false);

  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      // Array containing [rotateX, rotateY, and scale] values.
      // We store under a single key (xys) instead of separate keys ...
      // ... so that we can use animatedProps.xys.interpolate() to ...
      // ... easily generate the css transform value below.
      xys: [0, 0, 1],
      // Setup physics
      config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 },
    };
  });

  return (
    <animated.div
      ref={ref}
      className="card skills"
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        // Get mouse x position within card
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft));

        // Get mouse y position within card
        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop));

        // Set animated values based on mouse position and card dimensions
        const dampen = 50; // Lower the number the less rotation
        const xys = [
          -(y - ref.current.clientHeight / 2) / dampen, // rotateX
          (x - ref.current.clientWidth / 2) / dampen, // rotateY
          1.07, // Scale
        ];

        // Update values to animate to
        setAnimatedProps({ xys: xys });
      }}
      onMouseLeave={() => {
        setHovered(false);
        // Set xys back to original
        setAnimatedProps({ xys: [0, 0, 1] });
      }}
      style={{
        // If hovered we want it to overlap other cards when it scales up
        zIndex: isHovered ? 2 : 1,
        // Interpolate function to handle css changes
        transform: animatedProps.xys.interpolate(
          (x, y, s) =>
            `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        ),
      }}
    >
      {children}
    </animated.div>
  );
}


function Image({ ratio, src }) {
  return (
    <div className="image-container">
      <div className="image-inner-container">
        <div
          className="ratio"
          style={{
            paddingTop: ratio * 100 + "%",
          }}
        >
          <div className="ratio-inner">
            <img src={src} alt={src} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div>
      <h1
        style={{
          color: "white",
          fontSize: 38,
          ontSize: "5em",
          textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
        }}
      >
        SKILLS
      </h1>
    </div>
  );
}

const cards = [
  {
    id: 0,
    title: "Web Development",
    description: "",
    image: "assets/images/web.jpg",
    imageRatio: 784 / 1016,
  }
  ,
  {
    id: 1,
    title: "React for WEB & Mobile",
    description: "",
    image: "assets/images/react.jpg",
    imageRatio: 730 / 1030,
  },
  {
    id: 2,
    title: "Back-end with Nodejs",
    description: "",
    image: "assets/images/backend.jpg",
    imageRatio: 730 / 1030,
  },
];
