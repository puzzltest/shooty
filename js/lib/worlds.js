
export const worlds = { };

worlds.zero = {
  name: "Zero",
  levels: {
    tutorial: {
      key: "tutorial",
      char: "T",
      x: 0,
      y: 0,
      lines: [
        { key: "level0test", },
      ],
      conditions: [],
    },
    level0test: {
      key: "level0test",
      char: "0",
      x: 200,
      y: -50,
      conditions: [
        { type: "level", level: "tutorial", rounds: 10, },
      ],
    },
  },
  background: "#05000d",
  // sidebar: "#fca2a2",
  sidebar: "#3c009c",
  text: "#ffffff",
  shapes: [
    { // 0
      x: 0, y: 0,
      vx: 5, vy: 5,
      size: 50,
    },
  ],
};

worlds.test = {
  name: "Test",
  levels: {
    oneround: {
      key: "oneround",
      char: "1r",
      x: 0,
      y: 0,
      lines: [
        { key: "tutorialold", },
        { key: "tworounds", },
      ],
      conditions: [],
    },
    tworounds: {
      key: "tworounds",
      char: "2r",
      x: 150,
      y: 50,
      lines: [],
      conditions: [
        { type: "level", level: "oneround", use: "basic", rating: 1, },
      ],
    },
    tutorialold: {
      key: "tutorialold",
      char: "t",
      x: -300,
      y: 300,
      lines: [
        { key: "blank", },
      ],
      conditions: [
        { type: "level", level: "oneround", rating: 4, },
      ],
    },
    blank: {
      key: "blank",
      char: " ",
      x: -300,
      y: 400,
      conditions: [
        { type: "level", level: "tutorialold", rating: 6, },
      ],
    },
  },
  background: "#201924",
  sidebar: "#643d7a",
  text: "#ffffff",
  shapes: [
    
  ],
};