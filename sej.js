import { tsParticles } from "https://cdn.jsdelivr.net/npm/tsparticles-engine/+esm";
import { loadFull } from "https://cdn.jsdelivr.net/npm/tsparticles/+esm";
import { loadCardsShape } from "https://cdn.jsdelivr.net/npm/tsparticles-shape-cards/+esm";

async function loadParticles(options) {
  await loadFull(tsParticles);
  await loadCardsShape(tsParticles);

  await tsParticles.load(options);
}

const configs = {
  particles: {
    number: {
      value: 200
    },
    reduceDuplicates: true,
    rotate: {
      animation: {
        enable: true,
        speed: { min: 10, max: 20 }
      }
    },
    tilt: {
      enable: true,
      value: {
        min: 0,
        max: 360
      },
      animation: {
        enable: true,
        speed: { min: 10, max: 20 }
      }
    },
    roll: {
      darken: {
        enable: true,
        value: 25
      },
      enlighten: {
        enable: true,
        value: 25
      },
      enable: true,
      speed: {
        min: 15,
        max: 25
      }
    },
    wobble: {
      distance: 30,
      enable: true,
      speed: {
        min: -15,
        max: 15
      }
    },
    shape: {
      type: ["spades", "hearts", "diamonds", "clubs"],
      options: {
        spades: {
          particles: {
            color: {
              value: "#000000"
            }
          }
        },
        hearts: {
          particles: {
            color: {
              value: "#ff0000"
            }
          }
        },
        diamonds: {
          particles: {
            color: {
              value: "#ff0000"
            }
          }
        },
        clubs: {
          particles: {
            color: {
              value: "#000000"
            }
          }
        }
      }
    },
    opacity: {
      value: 1
    },
    size: {
      value: 30
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none"
    }
  },
  background: {
    color: "#fff"
  }
};

loadParticles(configs);
