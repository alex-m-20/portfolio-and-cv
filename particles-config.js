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
        quantity: 6,
      },
      repulse: {
        distance: 100,
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
      speed: { min: 1, max: 3 },
    },
    opacity: {
      value: { min: 0.2, max: 0.3 },
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
};

tsParticles.load("tsparticles", options);
