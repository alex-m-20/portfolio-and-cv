const options = {
  background: {
    color: "#000",
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      push: {
        quantity: 2,
      },
      repulse: {
        distance: 70,
      },
    },
  },
  particles: {
    links: {
      enable: true,
      opacity: 0.2,
      distance: 200,
    },
    move: {
      enable: true,
      speed: { 
            min: 0.2, 
            max: 0.6 },
    },
    opacity: {
      value: { 
            min: 0.2, 
            max: 0.3 },
    },
    size: {
      value: { 
            min: 1, 
            max: 2 },
    },
  },
};

tsParticles.load("tsparticles", options);
