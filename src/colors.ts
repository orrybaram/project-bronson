import { string } from "prop-types";

type HashMap = {
  [index: number]: string
}

const red: HashMap = {
  0: "#fff2f2",
  10: "#fcb9b9",
  20: "#f88282",
  30: "#f15252",
  40: "#e82b2b",
  50: "#db0e0e",
  60: "#ca0000",
  70: "#b50000",
  80: "#9b0000",
  90: "#7f0000",
  100: "#610000"
};

const orange: HashMap = {
  0: "#fff9f2",
  10: "#fcdcb9",
  20: "#f8bf82",
  30: "#f1a452",
  40: "#e88c2b",
  50: "#db760e",
  60: "#ca6600",
  70: "#b55a00",
  80: "#9b4d00",
  90: "#7f3e00",
  100: "#612f00"
};

const yellow: HashMap = {
  0: "#fffff2",
  10: "#fdfdbb",
  20: "#fafa86",
  30: "#f5f557",
  40: "#eded30",
  50: "#e4e413",
  60: "#d7d700",
  70: "#c7c700",
  80: "#b3b300",
  90: "#9e9e00",
  100: "#878700"
};

const green: HashMap = {
  0: "#f5fff2",
  10: "#cdfdbb",
  20: "#a4fa86",
  30: "#80f557",
  40: "#62ed30",
  50: "#49e413",
  60: "#37d700",
  70: "#32c700",
  80: "#2cb300",
  90: "#269e00",
  100: "#208700"
}

const blue: HashMap = {
  0: "#f2fcff",
  10: "#bbeffd",
  20: "#86e1fa",
  30: "#57d3f5",
  40: "#30c6ed",
  50: "#13b9e4",
  60: "#00acd7",
  70: "#00a1c7",
  80: "#0093b3",
  90: "#00829e",
  100: "#007187"
}

const purple: HashMap = {
  0: "#f9f2ff",
  10: "#ddbbfd",
  20: "#c286fa",
  30: "#a857f5",
  40: "#9230ed",
  50: "#7f13e4",
  60: "#6f00d7",
  70: "#6700c7",
  80: "#5d00b3",
  90: "#51009e",
  100: "#460087"
}

const neutral: HashMap = {
  0: "#ffffff",
  10: "#f5f9fb",
  20: "#e8f0f5",
  30: "#dae3ec",
  40: "#c9d4de",
  50: "#b6c0cc",
  60: "#9fa7b5",
  70: "#838997",
  80: "#636773",
  90: "#40414b",
  100: "#1c1d21"
}

const colors: {
  [key: string]: HashMap
} = {
  red,
  orange,
  yellow,
  green,
  blue,
  purple,
  neutral,
}

export default colors;