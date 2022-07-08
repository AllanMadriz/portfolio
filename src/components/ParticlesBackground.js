import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={
        {
            background: {
              color: {
                value: "#121212"
              },
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover"
            },
            fullScreen: {
              zIndex: -1
            },
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push"
                },
                onHover: {
                  enable: true,
                  mode: "grab",
                  parallax: {
                    enable: true,
                    force: 60
                  }
                }
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                  divs: {
                    distance: 200,
                    duration: 0.4,
                    mix: false,
                    selectors: []
                  }
                },
                grab: {
                  distance: 400
                },
                repulse: {
                  divs: {
                    distance: 200,
                    duration: 0.4,
                    factor: 100,
                    speed: 1,
                    maxSpeed: 50,
                    easing: "ease-out-quad",
                    selectors: []
                  }
                }
              }
            },
            particles: {
              color: {
                value: "#59085e"
              },
              links: {
                color: {
                  value: "#253d39"
                },
                distance: 150,
                enable: true,
                opacity: 0.4
              },
              move: {
                attract: {
                  rotate: {
                    x: 600,
                    y: 1200
                  }
                },
                enable: true,
                outModes: {
                  bottom: "out",
                  left: "out",
                  right: "out",
                  top: "out"
                }
              },
              number: {
                density: {
                  enable: true
                }
              },
              opacity: {
                random: {
                  enable: true
                },
                value: {
                  min: 0.1,
                  max: 0.5
                },
                animation: {
                  enable: true,
                  speed: 3,
                  minimumValue: 0.1
                }
              },
              size: {
                random: {
                  enable: true
                },
                value: {
                  min: 0.1,
                  max: 10
                },
                animation: {
                  enable: true,
                  speed: 20,
                  minimumValue: 0.1
                }
              }
            }
          }
    }
    />
  );
};

export default ParticlesBackground