export type ThemeMode = "user-light" | "user-dark" | "panel-light" | "panel-dark";

export const THEME_MODES: ReadonlyArray<{ id: ThemeMode; label: string }> = [
  { id: "user-light", label: "User - Light" },
  { id: "user-dark", label: "User - Dark" },
  { id: "panel-light", label: "Panel - Light" },
  { id: "panel-dark", label: "Panel - Dark" },
];

export interface PrimitiveColorToken {
  figmaName: string;
  group: string;
  step: string;
  cssVar: string;
  value: string;
}

export interface SemanticColorToken {
  figmaName: string;
  cssVar: string;
  themeVar: string;
  leaf: string;
  category: string;
  values: {
    "User - Light": string;
    "User - Dark": string;
    "Panel - Light": string;
    "Panel - Dark": string;
  };
}

export interface ScaleToken {
  name: string;
  cssVar: string;
  px: number;
  rem: string;
}

export interface TextStyleToken {
  figmaName: string;
  className: string;
  fontVar: string;
  weightVar: string;
  sizeVar: string;
  lineVar: string;
  decoration: "underline" | "line-through" | null;
  specs: {
    font: string;
    weightName: string;
    weight: number;
    sizePx: number;
    linePx: number;
  };
}

export const PRIMITIVE_COLOR_TOKENS: PrimitiveColorToken[] = [
  {
    "figmaName": "Colors/Alpha/Dark Alpha/100",
    "group": "Alpha/Dark Alpha",
    "step": "100",
    "cssVar": "--colors-alpha-dark-alpha-100",
    "value": "#0d121cf0"
  },
  {
    "figmaName": "Colors/Alpha/Dark Alpha/200",
    "group": "Alpha/Dark Alpha",
    "step": "200",
    "cssVar": "--colors-alpha-dark-alpha-200",
    "value": "#0d121ceb"
  },
  {
    "figmaName": "Colors/Alpha/Dark Alpha/25",
    "group": "Alpha/Dark Alpha",
    "step": "25",
    "cssVar": "--colors-alpha-dark-alpha-25",
    "value": "#0d121cfa"
  },
  {
    "figmaName": "Colors/Alpha/Dark Alpha/300",
    "group": "Alpha/Dark Alpha",
    "step": "300",
    "cssVar": "--colors-alpha-dark-alpha-300",
    "value": "#0d121ccc"
  },
  {
    "figmaName": "Colors/Alpha/Dark Alpha/400",
    "group": "Alpha/Dark Alpha",
    "step": "400",
    "cssVar": "--colors-alpha-dark-alpha-400",
    "value": "#0d121c80"
  },
  {
    "figmaName": "Colors/Alpha/Dark Alpha/50",
    "group": "Alpha/Dark Alpha",
    "step": "50",
    "cssVar": "--colors-alpha-dark-alpha-50",
    "value": "#0d121cf5"
  },
  {
    "figmaName": "Colors/Alpha/Dark Alpha/500",
    "group": "Alpha/Dark Alpha",
    "step": "500",
    "cssVar": "--colors-alpha-dark-alpha-500",
    "value": "#0d121c4d"
  },
  {
    "figmaName": "Colors/Alpha/Dark Alpha/600",
    "group": "Alpha/Dark Alpha",
    "step": "600",
    "cssVar": "--colors-alpha-dark-alpha-600",
    "value": "#0d121c40"
  },
  {
    "figmaName": "Colors/Alpha/Dark Alpha/700",
    "group": "Alpha/Dark Alpha",
    "step": "700",
    "cssVar": "--colors-alpha-dark-alpha-700",
    "value": "#0d121c33"
  },
  {
    "figmaName": "Colors/Alpha/Dark Alpha/800",
    "group": "Alpha/Dark Alpha",
    "step": "800",
    "cssVar": "--colors-alpha-dark-alpha-800",
    "value": "#0d121c26"
  },
  {
    "figmaName": "Colors/Alpha/Dark Alpha/900",
    "group": "Alpha/Dark Alpha",
    "step": "900",
    "cssVar": "--colors-alpha-dark-alpha-900",
    "value": "#0d121c14"
  },
  {
    "figmaName": "Colors/Alpha/Dark Alpha/950",
    "group": "Alpha/Dark Alpha",
    "step": "950",
    "cssVar": "--colors-alpha-dark-alpha-950",
    "value": "#0d121c05"
  },
  {
    "figmaName": "Colors/Alpha/White Alpha/100",
    "group": "Alpha/White Alpha",
    "step": "100",
    "cssVar": "--colors-alpha-white-alpha-100",
    "value": "#fffffff0"
  },
  {
    "figmaName": "Colors/Alpha/White Alpha/200",
    "group": "Alpha/White Alpha",
    "step": "200",
    "cssVar": "--colors-alpha-white-alpha-200",
    "value": "#ffffffeb"
  },
  {
    "figmaName": "Colors/Alpha/White Alpha/25",
    "group": "Alpha/White Alpha",
    "step": "25",
    "cssVar": "--colors-alpha-white-alpha-25",
    "value": "#fffffffa"
  },
  {
    "figmaName": "Colors/Alpha/White Alpha/300",
    "group": "Alpha/White Alpha",
    "step": "300",
    "cssVar": "--colors-alpha-white-alpha-300",
    "value": "#ffffffcc"
  },
  {
    "figmaName": "Colors/Alpha/White Alpha/400",
    "group": "Alpha/White Alpha",
    "step": "400",
    "cssVar": "--colors-alpha-white-alpha-400",
    "value": "#ffffff80"
  },
  {
    "figmaName": "Colors/Alpha/White Alpha/50",
    "group": "Alpha/White Alpha",
    "step": "50",
    "cssVar": "--colors-alpha-white-alpha-50",
    "value": "#fffffff5"
  },
  {
    "figmaName": "Colors/Alpha/White Alpha/500",
    "group": "Alpha/White Alpha",
    "step": "500",
    "cssVar": "--colors-alpha-white-alpha-500",
    "value": "#ffffff4d"
  },
  {
    "figmaName": "Colors/Alpha/White Alpha/600",
    "group": "Alpha/White Alpha",
    "step": "600",
    "cssVar": "--colors-alpha-white-alpha-600",
    "value": "#ffffff40"
  },
  {
    "figmaName": "Colors/Alpha/White Alpha/700",
    "group": "Alpha/White Alpha",
    "step": "700",
    "cssVar": "--colors-alpha-white-alpha-700",
    "value": "#ffffff33"
  },
  {
    "figmaName": "Colors/Alpha/White Alpha/800",
    "group": "Alpha/White Alpha",
    "step": "800",
    "cssVar": "--colors-alpha-white-alpha-800",
    "value": "#ffffff26"
  },
  {
    "figmaName": "Colors/Alpha/White Alpha/900",
    "group": "Alpha/White Alpha",
    "step": "900",
    "cssVar": "--colors-alpha-white-alpha-900",
    "value": "#ffffff14"
  },
  {
    "figmaName": "Colors/Alpha/White Alpha/950",
    "group": "Alpha/White Alpha",
    "step": "950",
    "cssVar": "--colors-alpha-white-alpha-950",
    "value": "#ffffff05"
  },
  {
    "figmaName": "Colors/Basic/Black",
    "group": "Basic",
    "step": "Black",
    "cssVar": "--colors-basic-black",
    "value": "#0a0a0a"
  },
  {
    "figmaName": "Colors/Basic/Transparent",
    "group": "Basic",
    "step": "Transparent",
    "cssVar": "--colors-basic-transparent",
    "value": "#ffffff00"
  },
  {
    "figmaName": "Colors/Basic/White",
    "group": "Basic",
    "step": "White",
    "cssVar": "--colors-basic-white",
    "value": "#ffffff"
  },
  {
    "figmaName": "Colors/Blue Royal/100",
    "group": "Blue Royal",
    "step": "100",
    "cssVar": "--colors-blue-royal-100",
    "value": "#b0c8ff"
  },
  {
    "figmaName": "Colors/Blue Royal/200",
    "group": "Blue Royal",
    "step": "200",
    "cssVar": "--colors-blue-royal-200",
    "value": "#8aadff"
  },
  {
    "figmaName": "Colors/Blue Royal/25",
    "group": "Blue Royal",
    "step": "25",
    "cssVar": "--colors-blue-royal-25",
    "value": "#f5f8ff"
  },
  {
    "figmaName": "Colors/Blue Royal/300",
    "group": "Blue Royal",
    "step": "300",
    "cssVar": "--colors-blue-royal-300",
    "value": "#5487ff"
  },
  {
    "figmaName": "Colors/Blue Royal/400",
    "group": "Blue Royal",
    "step": "400",
    "cssVar": "--colors-blue-royal-400",
    "value": "#3370ff"
  },
  {
    "figmaName": "Colors/Blue Royal/50",
    "group": "Blue Royal",
    "step": "50",
    "cssVar": "--colors-blue-royal-50",
    "value": "#e6edff"
  },
  {
    "figmaName": "Colors/Blue Royal/500",
    "group": "Blue Royal",
    "step": "500",
    "cssVar": "--colors-blue-royal-500",
    "value": "#004cff"
  },
  {
    "figmaName": "Colors/Blue Royal/600",
    "group": "Blue Royal",
    "step": "600",
    "cssVar": "--colors-blue-royal-600",
    "value": "#0045e8"
  },
  {
    "figmaName": "Colors/Blue Royal/700",
    "group": "Blue Royal",
    "step": "700",
    "cssVar": "--colors-blue-royal-700",
    "value": "#0036b5"
  },
  {
    "figmaName": "Colors/Blue Royal/800",
    "group": "Blue Royal",
    "step": "800",
    "cssVar": "--colors-blue-royal-800",
    "value": "#002a8c"
  },
  {
    "figmaName": "Colors/Blue Royal/900",
    "group": "Blue Royal",
    "step": "900",
    "cssVar": "--colors-blue-royal-900",
    "value": "#00206b"
  },
  {
    "figmaName": "Colors/Blue Royal/950",
    "group": "Blue Royal",
    "step": "950",
    "cssVar": "--colors-blue-royal-950",
    "value": "#00174d"
  },
  {
    "figmaName": "Colors/Blue/100",
    "group": "Blue",
    "step": "100",
    "cssVar": "--colors-blue-100",
    "value": "#ccd6ff"
  },
  {
    "figmaName": "Colors/Blue/200",
    "group": "Blue",
    "step": "200",
    "cssVar": "--colors-blue-200",
    "value": "#b4c3ff"
  },
  {
    "figmaName": "Colors/Blue/25",
    "group": "Blue",
    "step": "25",
    "cssVar": "--colors-blue-25",
    "value": "#fafbff"
  },
  {
    "figmaName": "Colors/Blue/300",
    "group": "Blue",
    "step": "300",
    "cssVar": "--colors-blue-300",
    "value": "#91a7ff"
  },
  {
    "figmaName": "Colors/Blue/400",
    "group": "Blue",
    "step": "400",
    "cssVar": "--colors-blue-400",
    "value": "#7c96ff"
  },
  {
    "figmaName": "Colors/Blue/50",
    "group": "Blue",
    "step": "50",
    "cssVar": "--colors-blue-50",
    "value": "#eff2ff"
  },
  {
    "figmaName": "Colors/Blue/500",
    "group": "Blue",
    "step": "500",
    "cssVar": "--colors-blue-500",
    "value": "#5b7cff"
  },
  {
    "figmaName": "Colors/Blue/600",
    "group": "Blue",
    "step": "600",
    "cssVar": "--colors-blue-600",
    "value": "#5371e8"
  },
  {
    "figmaName": "Colors/Blue/700",
    "group": "Blue",
    "step": "700",
    "cssVar": "--colors-blue-700",
    "value": "#4158b5"
  },
  {
    "figmaName": "Colors/Blue/800",
    "group": "Blue",
    "step": "800",
    "cssVar": "--colors-blue-800",
    "value": "#32448c"
  },
  {
    "figmaName": "Colors/Blue/900",
    "group": "Blue",
    "step": "900",
    "cssVar": "--colors-blue-900",
    "value": "#26346b"
  },
  {
    "figmaName": "Colors/Blue/950",
    "group": "Blue",
    "step": "950",
    "cssVar": "--colors-blue-950",
    "value": "#182042"
  },
  {
    "figmaName": "Colors/Cyan/100",
    "group": "Cyan",
    "step": "100",
    "cssVar": "--colors-cyan-100",
    "value": "#c6e9ff"
  },
  {
    "figmaName": "Colors/Cyan/200",
    "group": "Cyan",
    "step": "200",
    "cssVar": "--colors-cyan-200",
    "value": "#aadfff"
  },
  {
    "figmaName": "Colors/Cyan/25",
    "group": "Cyan",
    "step": "25",
    "cssVar": "--colors-cyan-25",
    "value": "#edf8ff"
  },
  {
    "figmaName": "Colors/Cyan/300",
    "group": "Cyan",
    "step": "300",
    "cssVar": "--colors-cyan-300",
    "value": "#84d0ff"
  },
  {
    "figmaName": "Colors/Cyan/400",
    "group": "Cyan",
    "step": "400",
    "cssVar": "--colors-cyan-400",
    "value": "#6cc7ff"
  },
  {
    "figmaName": "Colors/Cyan/50",
    "group": "Cyan",
    "step": "50",
    "cssVar": "--colors-cyan-50",
    "value": "#e0f3ff"
  },
  {
    "figmaName": "Colors/Cyan/500",
    "group": "Cyan",
    "step": "500",
    "cssVar": "--colors-cyan-500",
    "value": "#47b9ff"
  },
  {
    "figmaName": "Colors/Cyan/600",
    "group": "Cyan",
    "step": "600",
    "cssVar": "--colors-cyan-600",
    "value": "#41a8e8"
  },
  {
    "figmaName": "Colors/Cyan/700",
    "group": "Cyan",
    "step": "700",
    "cssVar": "--colors-cyan-700",
    "value": "#3283b5"
  },
  {
    "figmaName": "Colors/Cyan/800",
    "group": "Cyan",
    "step": "800",
    "cssVar": "--colors-cyan-800",
    "value": "#27668c"
  },
  {
    "figmaName": "Colors/Cyan/900",
    "group": "Cyan",
    "step": "900",
    "cssVar": "--colors-cyan-900",
    "value": "#1e4e6b"
  },
  {
    "figmaName": "Colors/Cyan/950",
    "group": "Cyan",
    "step": "950",
    "cssVar": "--colors-cyan-950",
    "value": "#173b52"
  },
  {
    "figmaName": "Colors/Gray Blue/100",
    "group": "Gray Blue",
    "step": "100",
    "cssVar": "--colors-gray-blue-100",
    "value": "#e3e7f4"
  },
  {
    "figmaName": "Colors/Gray Blue/200",
    "group": "Gray Blue",
    "step": "200",
    "cssVar": "--colors-gray-blue-200",
    "value": "#c8cfe9"
  },
  {
    "figmaName": "Colors/Gray Blue/25",
    "group": "Gray Blue",
    "step": "25",
    "cssVar": "--colors-gray-blue-25",
    "value": "#f9fafd"
  },
  {
    "figmaName": "Colors/Gray Blue/300",
    "group": "Gray Blue",
    "step": "300",
    "cssVar": "--colors-gray-blue-300",
    "value": "#a4aed7"
  },
  {
    "figmaName": "Colors/Gray Blue/400",
    "group": "Gray Blue",
    "step": "400",
    "cssVar": "--colors-gray-blue-400",
    "value": "#7c8abf"
  },
  {
    "figmaName": "Colors/Gray Blue/50",
    "group": "Gray Blue",
    "step": "50",
    "cssVar": "--colors-gray-blue-50",
    "value": "#f1f3fa"
  },
  {
    "figmaName": "Colors/Gray Blue/500",
    "group": "Gray Blue",
    "step": "500",
    "cssVar": "--colors-gray-blue-500",
    "value": "#596aa6"
  },
  {
    "figmaName": "Colors/Gray Blue/600",
    "group": "Gray Blue",
    "step": "600",
    "cssVar": "--colors-gray-blue-600",
    "value": "#3e4e83"
  },
  {
    "figmaName": "Colors/Gray Blue/700",
    "group": "Gray Blue",
    "step": "700",
    "cssVar": "--colors-gray-blue-700",
    "value": "#303e6b"
  },
  {
    "figmaName": "Colors/Gray Blue/800",
    "group": "Gray Blue",
    "step": "800",
    "cssVar": "--colors-gray-blue-800",
    "value": "#222c53"
  },
  {
    "figmaName": "Colors/Gray Blue/900",
    "group": "Gray Blue",
    "step": "900",
    "cssVar": "--colors-gray-blue-900",
    "value": "#141a3a"
  },
  {
    "figmaName": "Colors/Gray Blue/950",
    "group": "Gray Blue",
    "step": "950",
    "cssVar": "--colors-gray-blue-950",
    "value": "#080c1c"
  },
  {
    "figmaName": "Colors/Gray Modern/100",
    "group": "Gray Modern",
    "step": "100",
    "cssVar": "--colors-gray-modern-100",
    "value": "#eef2f6"
  },
  {
    "figmaName": "Colors/Gray Modern/200",
    "group": "Gray Modern",
    "step": "200",
    "cssVar": "--colors-gray-modern-200",
    "value": "#e3e8ef"
  },
  {
    "figmaName": "Colors/Gray Modern/25",
    "group": "Gray Modern",
    "step": "25",
    "cssVar": "--colors-gray-modern-25",
    "value": "#fcfcfd"
  },
  {
    "figmaName": "Colors/Gray Modern/300",
    "group": "Gray Modern",
    "step": "300",
    "cssVar": "--colors-gray-modern-300",
    "value": "#cdd5df"
  },
  {
    "figmaName": "Colors/Gray Modern/400",
    "group": "Gray Modern",
    "step": "400",
    "cssVar": "--colors-gray-modern-400",
    "value": "#9aa4b2"
  },
  {
    "figmaName": "Colors/Gray Modern/50",
    "group": "Gray Modern",
    "step": "50",
    "cssVar": "--colors-gray-modern-50",
    "value": "#f8fafc"
  },
  {
    "figmaName": "Colors/Gray Modern/500",
    "group": "Gray Modern",
    "step": "500",
    "cssVar": "--colors-gray-modern-500",
    "value": "#697586"
  },
  {
    "figmaName": "Colors/Gray Modern/600",
    "group": "Gray Modern",
    "step": "600",
    "cssVar": "--colors-gray-modern-600",
    "value": "#4b5565"
  },
  {
    "figmaName": "Colors/Gray Modern/700",
    "group": "Gray Modern",
    "step": "700",
    "cssVar": "--colors-gray-modern-700",
    "value": "#364152"
  },
  {
    "figmaName": "Colors/Gray Modern/800",
    "group": "Gray Modern",
    "step": "800",
    "cssVar": "--colors-gray-modern-800",
    "value": "#202939"
  },
  {
    "figmaName": "Colors/Gray Modern/900",
    "group": "Gray Modern",
    "step": "900",
    "cssVar": "--colors-gray-modern-900",
    "value": "#121926"
  },
  {
    "figmaName": "Colors/Gray Modern/950",
    "group": "Gray Modern",
    "step": "950",
    "cssVar": "--colors-gray-modern-950",
    "value": "#0d121c"
  },
  {
    "figmaName": "Colors/Gray True/100",
    "group": "Gray True",
    "step": "100",
    "cssVar": "--colors-gray-true-100",
    "value": "#bfbfbf"
  },
  {
    "figmaName": "Colors/Gray True/200",
    "group": "Gray True",
    "step": "200",
    "cssVar": "--colors-gray-true-200",
    "value": "#a0a0a0"
  },
  {
    "figmaName": "Colors/Gray True/25",
    "group": "Gray True",
    "step": "25",
    "cssVar": "--colors-gray-true-25",
    "value": "#f2f2f2"
  },
  {
    "figmaName": "Colors/Gray True/300",
    "group": "Gray True",
    "step": "300",
    "cssVar": "--colors-gray-true-300",
    "value": "#747474"
  },
  {
    "figmaName": "Colors/Gray True/400",
    "group": "Gray True",
    "step": "400",
    "cssVar": "--colors-gray-true-400",
    "value": "#595959"
  },
  {
    "figmaName": "Colors/Gray True/50",
    "group": "Gray True",
    "step": "50",
    "cssVar": "--colors-gray-true-50",
    "value": "#eaeaea"
  },
  {
    "figmaName": "Colors/Gray True/500",
    "group": "Gray True",
    "step": "500",
    "cssVar": "--colors-gray-true-500",
    "value": "#303030"
  },
  {
    "figmaName": "Colors/Gray True/600",
    "group": "Gray True",
    "step": "600",
    "cssVar": "--colors-gray-true-600",
    "value": "#2c2c2c"
  },
  {
    "figmaName": "Colors/Gray True/700",
    "group": "Gray True",
    "step": "700",
    "cssVar": "--colors-gray-true-700",
    "value": "#222222"
  },
  {
    "figmaName": "Colors/Gray True/800",
    "group": "Gray True",
    "step": "800",
    "cssVar": "--colors-gray-true-800",
    "value": "#1a1a1a"
  },
  {
    "figmaName": "Colors/Gray True/900",
    "group": "Gray True",
    "step": "900",
    "cssVar": "--colors-gray-true-900",
    "value": "#141414"
  },
  {
    "figmaName": "Colors/Gray True/950",
    "group": "Gray True",
    "step": "950",
    "cssVar": "--colors-gray-true-950",
    "value": "#0a0a0a"
  },
  {
    "figmaName": "Colors/Green/100",
    "group": "Green",
    "step": "100",
    "cssVar": "--colors-green-100",
    "value": "#b0eecf"
  },
  {
    "figmaName": "Colors/Green/200",
    "group": "Green",
    "step": "200",
    "cssVar": "--colors-green-200",
    "value": "#8ae6b8"
  },
  {
    "figmaName": "Colors/Green/25",
    "group": "Green",
    "step": "25",
    "cssVar": "--colors-green-25",
    "value": "#f2fcf7"
  },
  {
    "figmaName": "Colors/Green/300",
    "group": "Green",
    "step": "300",
    "cssVar": "--colors-green-300",
    "value": "#54da97"
  },
  {
    "figmaName": "Colors/Green/400",
    "group": "Green",
    "step": "400",
    "cssVar": "--colors-green-400",
    "value": "#33d383"
  },
  {
    "figmaName": "Colors/Green/50",
    "group": "Green",
    "step": "50",
    "cssVar": "--colors-green-50",
    "value": "#e6faf0"
  },
  {
    "figmaName": "Colors/Green/500",
    "group": "Green",
    "step": "500",
    "cssVar": "--colors-green-500",
    "value": "#00c864"
  },
  {
    "figmaName": "Colors/Green/600",
    "group": "Green",
    "step": "600",
    "cssVar": "--colors-green-600",
    "value": "#00b65b"
  },
  {
    "figmaName": "Colors/Green/700",
    "group": "Green",
    "step": "700",
    "cssVar": "--colors-green-700",
    "value": "#008e47"
  },
  {
    "figmaName": "Colors/Green/800",
    "group": "Green",
    "step": "800",
    "cssVar": "--colors-green-800",
    "value": "#006e37"
  },
  {
    "figmaName": "Colors/Green/900",
    "group": "Green",
    "step": "900",
    "cssVar": "--colors-green-900",
    "value": "#00542a"
  },
  {
    "figmaName": "Colors/Green/950",
    "group": "Green",
    "step": "950",
    "cssVar": "--colors-green-950",
    "value": "#002914"
  },
  {
    "figmaName": "Colors/Orange/100",
    "group": "Orange",
    "step": "100",
    "cssVar": "--colors-orange-100",
    "value": "#ffd7b6"
  },
  {
    "figmaName": "Colors/Orange/200",
    "group": "Orange",
    "step": "200",
    "cssVar": "--colors-orange-200",
    "value": "#ffc493"
  },
  {
    "figmaName": "Colors/Orange/25",
    "group": "Orange",
    "step": "25",
    "cssVar": "--colors-orange-25",
    "value": "#fff9f5"
  },
  {
    "figmaName": "Colors/Orange/300",
    "group": "Orange",
    "step": "300",
    "cssVar": "--colors-orange-300",
    "value": "#ffa962"
  },
  {
    "figmaName": "Colors/Orange/400",
    "group": "Orange",
    "step": "400",
    "cssVar": "--colors-orange-400",
    "value": "#ff9843"
  },
  {
    "figmaName": "Colors/Orange/50",
    "group": "Orange",
    "step": "50",
    "cssVar": "--colors-orange-50",
    "value": "#fff2e8"
  },
  {
    "figmaName": "Colors/Orange/500",
    "group": "Orange",
    "step": "500",
    "cssVar": "--colors-orange-500",
    "value": "#ff7e14"
  },
  {
    "figmaName": "Colors/Orange/600",
    "group": "Orange",
    "step": "600",
    "cssVar": "--colors-orange-600",
    "value": "#e87312"
  },
  {
    "figmaName": "Colors/Orange/700",
    "group": "Orange",
    "step": "700",
    "cssVar": "--colors-orange-700",
    "value": "#b5590e"
  },
  {
    "figmaName": "Colors/Orange/800",
    "group": "Orange",
    "step": "800",
    "cssVar": "--colors-orange-800",
    "value": "#8c450b"
  },
  {
    "figmaName": "Colors/Orange/900",
    "group": "Orange",
    "step": "900",
    "cssVar": "--colors-orange-900",
    "value": "#522806"
  },
  {
    "figmaName": "Colors/Orange/950",
    "group": "Orange",
    "step": "950",
    "cssVar": "--colors-orange-950",
    "value": "#1f0f02"
  },
  {
    "figmaName": "Colors/Pink/100",
    "group": "Pink",
    "step": "100",
    "cssVar": "--colors-pink-100",
    "value": "#fce7f6"
  },
  {
    "figmaName": "Colors/Pink/200",
    "group": "Pink",
    "step": "200",
    "cssVar": "--colors-pink-200",
    "value": "#fcceee"
  },
  {
    "figmaName": "Colors/Pink/25",
    "group": "Pink",
    "step": "25",
    "cssVar": "--colors-pink-25",
    "value": "#fef6fb"
  },
  {
    "figmaName": "Colors/Pink/300",
    "group": "Pink",
    "step": "300",
    "cssVar": "--colors-pink-300",
    "value": "#faa7e0"
  },
  {
    "figmaName": "Colors/Pink/400",
    "group": "Pink",
    "step": "400",
    "cssVar": "--colors-pink-400",
    "value": "#f670c7"
  },
  {
    "figmaName": "Colors/Pink/50",
    "group": "Pink",
    "step": "50",
    "cssVar": "--colors-pink-50",
    "value": "#fdf2fa"
  },
  {
    "figmaName": "Colors/Pink/500",
    "group": "Pink",
    "step": "500",
    "cssVar": "--colors-pink-500",
    "value": "#ee46bc"
  },
  {
    "figmaName": "Colors/Pink/600",
    "group": "Pink",
    "step": "600",
    "cssVar": "--colors-pink-600",
    "value": "#dd2590"
  },
  {
    "figmaName": "Colors/Pink/700",
    "group": "Pink",
    "step": "700",
    "cssVar": "--colors-pink-700",
    "value": "#c11574"
  },
  {
    "figmaName": "Colors/Pink/800",
    "group": "Pink",
    "step": "800",
    "cssVar": "--colors-pink-800",
    "value": "#9e165f"
  },
  {
    "figmaName": "Colors/Pink/900",
    "group": "Pink",
    "step": "900",
    "cssVar": "--colors-pink-900",
    "value": "#851651"
  },
  {
    "figmaName": "Colors/Pink/950",
    "group": "Pink",
    "step": "950",
    "cssVar": "--colors-pink-950",
    "value": "#4e0d30"
  },
  {
    "figmaName": "Colors/Purple/100",
    "group": "Purple",
    "step": "100",
    "cssVar": "--colors-purple-100",
    "value": "#dfb0fd"
  },
  {
    "figmaName": "Colors/Purple/200",
    "group": "Purple",
    "step": "200",
    "cssVar": "--colors-purple-200",
    "value": "#d08afb"
  },
  {
    "figmaName": "Colors/Purple/25",
    "group": "Purple",
    "step": "25",
    "cssVar": "--colors-purple-25",
    "value": "#f9f0fe"
  },
  {
    "figmaName": "Colors/Purple/300",
    "group": "Purple",
    "step": "300",
    "cssVar": "--colors-purple-300",
    "value": "#ba54fa"
  },
  {
    "figmaName": "Colors/Purple/400",
    "group": "Purple",
    "step": "400",
    "cssVar": "--colors-purple-400",
    "value": "#ad33f9"
  },
  {
    "figmaName": "Colors/Purple/50",
    "group": "Purple",
    "step": "50",
    "cssVar": "--colors-purple-50",
    "value": "#f5e6fe"
  },
  {
    "figmaName": "Colors/Purple/500",
    "group": "Purple",
    "step": "500",
    "cssVar": "--colors-purple-500",
    "value": "#9800f7"
  },
  {
    "figmaName": "Colors/Purple/600",
    "group": "Purple",
    "step": "600",
    "cssVar": "--colors-purple-600",
    "value": "#8a00e1"
  },
  {
    "figmaName": "Colors/Purple/700",
    "group": "Purple",
    "step": "700",
    "cssVar": "--colors-purple-700",
    "value": "#6c00af"
  },
  {
    "figmaName": "Colors/Purple/800",
    "group": "Purple",
    "step": "800",
    "cssVar": "--colors-purple-800",
    "value": "#540088"
  },
  {
    "figmaName": "Colors/Purple/900",
    "group": "Purple",
    "step": "900",
    "cssVar": "--colors-purple-900",
    "value": "#400068"
  },
  {
    "figmaName": "Colors/Purple/950",
    "group": "Purple",
    "step": "950",
    "cssVar": "--colors-purple-950",
    "value": "#1f0033"
  },
  {
    "figmaName": "Colors/Red/100",
    "group": "Red",
    "step": "100",
    "cssVar": "--colors-red-100",
    "value": "#febec1"
  },
  {
    "figmaName": "Colors/Red/200",
    "group": "Red",
    "step": "200",
    "cssVar": "--colors-red-200",
    "value": "#fd9ea3"
  },
  {
    "figmaName": "Colors/Red/25",
    "group": "Red",
    "step": "25",
    "cssVar": "--colors-red-25",
    "value": "#fff5f5"
  },
  {
    "figmaName": "Colors/Red/300",
    "group": "Red",
    "step": "300",
    "cssVar": "--colors-red-300",
    "value": "#fc7278"
  },
  {
    "figmaName": "Colors/Red/400",
    "group": "Red",
    "step": "400",
    "cssVar": "--colors-red-400",
    "value": "#fc565e"
  },
  {
    "figmaName": "Colors/Red/50",
    "group": "Red",
    "step": "50",
    "cssVar": "--colors-red-50",
    "value": "#ffeaeb"
  },
  {
    "figmaName": "Colors/Red/500",
    "group": "Red",
    "step": "500",
    "cssVar": "--colors-red-500",
    "value": "#fb2c36"
  },
  {
    "figmaName": "Colors/Red/600",
    "group": "Red",
    "step": "600",
    "cssVar": "--colors-red-600",
    "value": "#e42831"
  },
  {
    "figmaName": "Colors/Red/700",
    "group": "Red",
    "step": "700",
    "cssVar": "--colors-red-700",
    "value": "#b21f26"
  },
  {
    "figmaName": "Colors/Red/800",
    "group": "Red",
    "step": "800",
    "cssVar": "--colors-red-800",
    "value": "#8a181e"
  },
  {
    "figmaName": "Colors/Red/900",
    "group": "Red",
    "step": "900",
    "cssVar": "--colors-red-900",
    "value": "#691217"
  },
  {
    "figmaName": "Colors/Red/950",
    "group": "Red",
    "step": "950",
    "cssVar": "--colors-red-950",
    "value": "#36090c"
  },
  {
    "figmaName": "Colors/Teal/100",
    "group": "Teal",
    "step": "100",
    "cssVar": "--colors-teal-100",
    "value": "#ccfbef"
  },
  {
    "figmaName": "Colors/Teal/200",
    "group": "Teal",
    "step": "200",
    "cssVar": "--colors-teal-200",
    "value": "#99f6e0"
  },
  {
    "figmaName": "Colors/Teal/25",
    "group": "Teal",
    "step": "25",
    "cssVar": "--colors-teal-25",
    "value": "#f6fefc"
  },
  {
    "figmaName": "Colors/Teal/300",
    "group": "Teal",
    "step": "300",
    "cssVar": "--colors-teal-300",
    "value": "#5fe9d0"
  },
  {
    "figmaName": "Colors/Teal/400",
    "group": "Teal",
    "step": "400",
    "cssVar": "--colors-teal-400",
    "value": "#2ed3b7"
  },
  {
    "figmaName": "Colors/Teal/50",
    "group": "Teal",
    "step": "50",
    "cssVar": "--colors-teal-50",
    "value": "#f0fdf9"
  },
  {
    "figmaName": "Colors/Teal/500",
    "group": "Teal",
    "step": "500",
    "cssVar": "--colors-teal-500",
    "value": "#15b79e"
  },
  {
    "figmaName": "Colors/Teal/600",
    "group": "Teal",
    "step": "600",
    "cssVar": "--colors-teal-600",
    "value": "#0e9384"
  },
  {
    "figmaName": "Colors/Teal/700",
    "group": "Teal",
    "step": "700",
    "cssVar": "--colors-teal-700",
    "value": "#107569"
  },
  {
    "figmaName": "Colors/Teal/800",
    "group": "Teal",
    "step": "800",
    "cssVar": "--colors-teal-800",
    "value": "#125d56"
  },
  {
    "figmaName": "Colors/Teal/900",
    "group": "Teal",
    "step": "900",
    "cssVar": "--colors-teal-900",
    "value": "#134e48"
  },
  {
    "figmaName": "Colors/Teal/950",
    "group": "Teal",
    "step": "950",
    "cssVar": "--colors-teal-950",
    "value": "#0a2926"
  },
  {
    "figmaName": "Colors/Violet/100",
    "group": "Violet",
    "step": "100",
    "cssVar": "--colors-violet-100",
    "value": "#ece9fe"
  },
  {
    "figmaName": "Colors/Violet/200",
    "group": "Violet",
    "step": "200",
    "cssVar": "--colors-violet-200",
    "value": "#ddd6fe"
  },
  {
    "figmaName": "Colors/Violet/25",
    "group": "Violet",
    "step": "25",
    "cssVar": "--colors-violet-25",
    "value": "#fbfaff"
  },
  {
    "figmaName": "Colors/Violet/300",
    "group": "Violet",
    "step": "300",
    "cssVar": "--colors-violet-300",
    "value": "#c3b5fd"
  },
  {
    "figmaName": "Colors/Violet/400",
    "group": "Violet",
    "step": "400",
    "cssVar": "--colors-violet-400",
    "value": "#a48afb"
  },
  {
    "figmaName": "Colors/Violet/50",
    "group": "Violet",
    "step": "50",
    "cssVar": "--colors-violet-50",
    "value": "#f5f3ff"
  },
  {
    "figmaName": "Colors/Violet/500",
    "group": "Violet",
    "step": "500",
    "cssVar": "--colors-violet-500",
    "value": "#875bf7"
  },
  {
    "figmaName": "Colors/Violet/600",
    "group": "Violet",
    "step": "600",
    "cssVar": "--colors-violet-600",
    "value": "#7839ee"
  },
  {
    "figmaName": "Colors/Violet/700",
    "group": "Violet",
    "step": "700",
    "cssVar": "--colors-violet-700",
    "value": "#6927da"
  },
  {
    "figmaName": "Colors/Violet/800",
    "group": "Violet",
    "step": "800",
    "cssVar": "--colors-violet-800",
    "value": "#5720b7"
  },
  {
    "figmaName": "Colors/Violet/900",
    "group": "Violet",
    "step": "900",
    "cssVar": "--colors-violet-900",
    "value": "#491c96"
  },
  {
    "figmaName": "Colors/Violet/950",
    "group": "Violet",
    "step": "950",
    "cssVar": "--colors-violet-950",
    "value": "#2e125e"
  },
  {
    "figmaName": "Colors/Yellow/100",
    "group": "Yellow",
    "step": "100",
    "cssVar": "--colors-yellow-100",
    "value": "#ffedc3"
  },
  {
    "figmaName": "Colors/Yellow/200",
    "group": "Yellow",
    "step": "200",
    "cssVar": "--colors-yellow-200",
    "value": "#ffe4a6"
  },
  {
    "figmaName": "Colors/Yellow/25",
    "group": "Yellow",
    "step": "25",
    "cssVar": "--colors-yellow-25",
    "value": "#fffcf5"
  },
  {
    "figmaName": "Colors/Yellow/300",
    "group": "Yellow",
    "step": "300",
    "cssVar": "--colors-yellow-300",
    "value": "#ffd87d"
  },
  {
    "figmaName": "Colors/Yellow/400",
    "group": "Yellow",
    "step": "400",
    "cssVar": "--colors-yellow-400",
    "value": "#ffd164"
  },
  {
    "figmaName": "Colors/Yellow/50",
    "group": "Yellow",
    "step": "50",
    "cssVar": "--colors-yellow-50",
    "value": "#fff9ec"
  },
  {
    "figmaName": "Colors/Yellow/500",
    "group": "Yellow",
    "step": "500",
    "cssVar": "--colors-yellow-500",
    "value": "#ffc53d"
  },
  {
    "figmaName": "Colors/Yellow/600",
    "group": "Yellow",
    "step": "600",
    "cssVar": "--colors-yellow-600",
    "value": "#e8b338"
  },
  {
    "figmaName": "Colors/Yellow/700",
    "group": "Yellow",
    "step": "700",
    "cssVar": "--colors-yellow-700",
    "value": "#b58c2b"
  },
  {
    "figmaName": "Colors/Yellow/800",
    "group": "Yellow",
    "step": "800",
    "cssVar": "--colors-yellow-800",
    "value": "#8c6c22"
  },
  {
    "figmaName": "Colors/Yellow/900",
    "group": "Yellow",
    "step": "900",
    "cssVar": "--colors-yellow-900",
    "value": "#6b531a"
  },
  {
    "figmaName": "Colors/Yellow/950",
    "group": "Yellow",
    "step": "950",
    "cssVar": "--colors-yellow-950",
    "value": "#40310f"
  }
];

export const SEMANTIC_COLOR_TOKENS: SemanticColorToken[] = [
  {
    "figmaName": "Components/Buttons/Blur/button-blur-fg",
    "cssVar": "--components-buttons-blur-button-blur-fg",
    "themeVar": "--color-button-blur-fg",
    "leaf": "button-blur-fg",
    "category": "Components",
    "values": {
      "User - Light": "#222c53",
      "User - Dark": "#ffffff",
      "Panel - Light": "#202939",
      "Panel - Dark": "#fcfcfd"
    }
  },
  {
    "figmaName": "Components/Buttons/Blur/button-blur-fg_disabled",
    "cssVar": "--components-buttons-blur-button-blur-fg_disabled",
    "themeVar": "--color-button-blur-fg_disabled",
    "leaf": "button-blur-fg_disabled",
    "category": "Components",
    "values": {
      "User - Light": "rgba(255,255,255,0.3)",
      "User - Dark": "rgba(13,18,28,0.5)",
      "Panel - Light": "rgba(255,255,255,0.3)",
      "Panel - Dark": "rgba(13,18,28,0.5)"
    }
  },
  {
    "figmaName": "Components/Buttons/Blur/button-blur-sf",
    "cssVar": "--components-buttons-blur-button-blur-sf",
    "themeVar": "--color-button-blur-sf",
    "leaf": "button-blur-sf",
    "category": "Components",
    "values": {
      "User - Light": "rgba(255,255,255,0.5)",
      "User - Dark": "rgba(13,18,28,0.5)",
      "Panel - Light": "rgba(255,255,255,0.5)",
      "Panel - Dark": "rgba(13,18,28,0.5)"
    }
  },
  {
    "figmaName": "Components/Buttons/Blur/button-blur-sf_disabled",
    "cssVar": "--components-buttons-blur-button-blur-sf_disabled",
    "themeVar": "--color-button-blur-sf_disabled",
    "leaf": "button-blur-sf_disabled",
    "category": "Components",
    "values": {
      "User - Light": "rgba(255,255,255,0.02)",
      "User - Dark": "rgba(13,18,28,0.02)",
      "Panel - Light": "rgba(255,255,255,0.02)",
      "Panel - Dark": "rgba(13,18,28,0.02)"
    }
  },
  {
    "figmaName": "Components/Buttons/Blur/button-blur-sf_hover",
    "cssVar": "--components-buttons-blur-button-blur-sf_hover",
    "themeVar": "--color-button-blur-sf_hover",
    "leaf": "button-blur-sf_hover",
    "category": "Components",
    "values": {
      "User - Light": "rgba(255,255,255,0.5)",
      "User - Dark": "rgba(13,18,28,0.3)",
      "Panel - Light": "rgba(255,255,255,0.5)",
      "Panel - Dark": "rgba(13,18,28,0.3)"
    }
  },
  {
    "figmaName": "Components/Buttons/Blur/button-blur-stroke",
    "cssVar": "--components-buttons-blur-button-blur-stroke",
    "themeVar": "--color-button-blur-stroke",
    "leaf": "button-blur-stroke",
    "category": "Components",
    "values": {
      "User - Light": "rgba(255,255,255,0.15)",
      "User - Dark": "rgba(13,18,28,0.15)",
      "Panel - Light": "rgba(255,255,255,0.15)",
      "Panel - Dark": "rgba(13,18,28,0.15)"
    }
  },
  {
    "figmaName": "Components/Buttons/Ghost/button-ghost-error-fg",
    "cssVar": "--components-buttons-ghost-button-ghost-error-fg",
    "themeVar": "--color-button-ghost-error-fg",
    "leaf": "button-ghost-error-fg",
    "category": "Components",
    "values": {
      "User - Light": "#fb2c36",
      "User - Dark": "#fc565e",
      "Panel - Light": "#fb2c36",
      "Panel - Dark": "#fc565e"
    }
  },
  {
    "figmaName": "Components/Buttons/Ghost/button-ghost-error-fg_hover",
    "cssVar": "--components-buttons-ghost-button-ghost-error-fg_hover",
    "themeVar": "--color-button-ghost-error-fg_hover",
    "leaf": "button-ghost-error-fg_hover",
    "category": "Components",
    "values": {
      "User - Light": "#e42831",
      "User - Dark": "#fb2c36",
      "Panel - Light": "#e42831",
      "Panel - Dark": "#fb2c36"
    }
  },
  {
    "figmaName": "Components/Buttons/Ghost/button-ghost-fg_disabled",
    "cssVar": "--components-buttons-ghost-button-ghost-fg_disabled",
    "themeVar": "--color-button-ghost-fg_disabled",
    "leaf": "button-ghost-fg_disabled",
    "category": "Components",
    "values": {
      "User - Light": "#bfbfbf",
      "User - Dark": "#595959",
      "Panel - Light": "#bfbfbf",
      "Panel - Dark": "#595959"
    }
  },
  {
    "figmaName": "Components/Buttons/Ghost/button-ghost-inver-fg_hover",
    "cssVar": "--components-buttons-ghost-button-ghost-inver-fg_hover",
    "themeVar": "--color-button-ghost-inver-fg_hover",
    "leaf": "button-ghost-inver-fg_hover",
    "category": "Components",
    "values": {
      "User - Light": "#ffffff",
      "User - Dark": "#0a0a0a",
      "Panel - Light": "#ffffff",
      "Panel - Dark": "#0a0a0a"
    }
  },
  {
    "figmaName": "Components/Buttons/Ghost/button-ghost-neutral-fg",
    "cssVar": "--components-buttons-ghost-button-ghost-neutral-fg",
    "themeVar": "--color-button-ghost-neutral-fg",
    "leaf": "button-ghost-neutral-fg",
    "category": "Components",
    "values": {
      "User - Light": "#222c53",
      "User - Dark": "#fcfcfd",
      "Panel - Light": "#202939",
      "Panel - Dark": "#fcfcfd"
    }
  },
  {
    "figmaName": "Components/Buttons/Ghost/button-ghost-neutral-fg_hover",
    "cssVar": "--components-buttons-ghost-button-ghost-neutral-fg_hover",
    "themeVar": "--color-button-ghost-neutral-fg_hover",
    "leaf": "button-ghost-neutral-fg_hover",
    "category": "Components",
    "values": {
      "User - Light": "#141a3a",
      "User - Dark": "#f8fafc",
      "Panel - Light": "#121926",
      "Panel - Dark": "#f8fafc"
    }
  },
  {
    "figmaName": "Components/Buttons/Ghost/button-ghost-primary-fg",
    "cssVar": "--components-buttons-ghost-button-ghost-primary-fg",
    "themeVar": "--color-button-ghost-primary-fg",
    "leaf": "button-ghost-primary-fg",
    "category": "Components",
    "values": {
      "User - Light": "#5b7cff",
      "User - Dark": "#33d383",
      "Panel - Light": "#004cff",
      "Panel - Dark": "#3370ff"
    }
  },
  {
    "figmaName": "Components/Buttons/Ghost/button-ghost-primary-fg_hover",
    "cssVar": "--components-buttons-ghost-button-ghost-primary-fg_hover",
    "themeVar": "--color-button-ghost-primary-fg_hover",
    "leaf": "button-ghost-primary-fg_hover",
    "category": "Components",
    "values": {
      "User - Light": "#5371e8",
      "User - Dark": "#00c864",
      "Panel - Light": "#0045e8",
      "Panel - Dark": "#004cff"
    }
  },
  {
    "figmaName": "Components/Buttons/Ghost/button-ghost-sf_hover",
    "cssVar": "--components-buttons-ghost-button-ghost-sf_hover",
    "themeVar": "--color-button-ghost-sf_hover",
    "leaf": "button-ghost-sf_hover",
    "category": "Components",
    "values": {
      "User - Light": "rgba(13,18,28,0.02)",
      "User - Dark": "rgba(255,255,255,0.02)",
      "Panel - Light": "rgba(13,18,28,0.02)",
      "Panel - Dark": "rgba(255,255,255,0.02)"
    }
  },
  {
    "figmaName": "Components/Buttons/Ghost/button-ghost-success-fg",
    "cssVar": "--components-buttons-ghost-button-ghost-success-fg",
    "themeVar": "--color-button-ghost-success-fg",
    "leaf": "button-ghost-success-fg",
    "category": "Components",
    "values": {
      "User - Light": "#00c864",
      "User - Dark": "#33d383",
      "Panel - Light": "#00c864",
      "Panel - Dark": "#33d383"
    }
  },
  {
    "figmaName": "Components/Buttons/Ghost/button-ghost-success-fg_hover",
    "cssVar": "--components-buttons-ghost-button-ghost-success-fg_hover",
    "themeVar": "--color-button-ghost-success-fg_hover",
    "leaf": "button-ghost-success-fg_hover",
    "category": "Components",
    "values": {
      "User - Light": "#00b65b",
      "User - Dark": "#00c864",
      "Panel - Light": "#00b65b",
      "Panel - Dark": "#00c864"
    }
  },
  {
    "figmaName": "Components/Buttons/Ghost/button-ghost-warning-fg",
    "cssVar": "--components-buttons-ghost-button-ghost-warning-fg",
    "themeVar": "--color-button-ghost-warning-fg",
    "leaf": "button-ghost-warning-fg",
    "category": "Components",
    "values": {
      "User - Light": "#ffc53d",
      "User - Dark": "#ffd164",
      "Panel - Light": "#ffc53d",
      "Panel - Dark": "#ffd164"
    }
  },
  {
    "figmaName": "Components/Buttons/Ghost/button-ghost-warning-fg_hover",
    "cssVar": "--components-buttons-ghost-button-ghost-warning-fg_hover",
    "themeVar": "--color-button-ghost-warning-fg_hover",
    "leaf": "button-ghost-warning-fg_hover",
    "category": "Components",
    "values": {
      "User - Light": "#e8b338",
      "User - Dark": "#ffc53d",
      "Panel - Light": "#e8b338",
      "Panel - Dark": "#ffc53d"
    }
  },
  {
    "figmaName": "Components/Buttons/Ghost/button-ghost-white-fg",
    "cssVar": "--components-buttons-ghost-button-ghost-white-fg",
    "themeVar": "--color-button-ghost-white-fg",
    "leaf": "button-ghost-white-fg",
    "category": "Components",
    "values": {
      "User - Light": "#ffffff",
      "User - Dark": "#ffffff",
      "Panel - Light": "#ffffff",
      "Panel - Dark": "#ffffff"
    }
  },
  {
    "figmaName": "Components/Buttons/Ghost/button-ghost-white-fg_hover",
    "cssVar": "--components-buttons-ghost-button-ghost-white-fg_hover",
    "themeVar": "--color-button-ghost-white-fg_hover",
    "leaf": "button-ghost-white-fg_hover",
    "category": "Components",
    "values": {
      "User - Light": "#ffffff",
      "User - Dark": "#ffffff",
      "Panel - Light": "#ffffff",
      "Panel - Dark": "#ffffff"
    }
  },
  {
    "figmaName": "Components/Buttons/Solid/button-solid-error-sf",
    "cssVar": "--components-buttons-solid-button-solid-error-sf",
    "themeVar": "--color-button-solid-error-sf",
    "leaf": "button-solid-error-sf",
    "category": "Components",
    "values": {
      "User - Light": "#fb2c36",
      "User - Dark": "#fc565e",
      "Panel - Light": "#fb2c36",
      "Panel - Dark": "#fc565e"
    }
  },
  {
    "figmaName": "Components/Buttons/Solid/button-solid-error-sf_hover",
    "cssVar": "--components-buttons-solid-button-solid-error-sf_hover",
    "themeVar": "--color-button-solid-error-sf_hover",
    "leaf": "button-solid-error-sf_hover",
    "category": "Components",
    "values": {
      "User - Light": "#e42831",
      "User - Dark": "#fb2c36",
      "Panel - Light": "#e42831",
      "Panel - Dark": "#fb2c36"
    }
  },
  {
    "figmaName": "Components/Buttons/Solid/button-solid-fg",
    "cssVar": "--components-buttons-solid-button-solid-fg",
    "themeVar": "--color-button-solid-fg",
    "leaf": "button-solid-fg",
    "category": "Components",
    "values": {
      "User - Light": "#ffffff",
      "User - Dark": "#ffffff",
      "Panel - Light": "#ffffff",
      "Panel - Dark": "#ffffff"
    }
  },
  {
    "figmaName": "Components/Buttons/Solid/button-solid-fg_disabled",
    "cssVar": "--components-buttons-solid-button-solid-fg_disabled",
    "themeVar": "--color-button-solid-fg_disabled",
    "leaf": "button-solid-fg_disabled",
    "category": "Components",
    "values": {
      "User - Light": "#bfbfbf",
      "User - Dark": "#595959",
      "Panel - Light": "#bfbfbf",
      "Panel - Dark": "#595959"
    }
  },
  {
    "figmaName": "Components/Buttons/Solid/button-solid-invert-fg",
    "cssVar": "--components-buttons-solid-button-solid-invert-fg",
    "themeVar": "--color-button-solid-invert-fg",
    "leaf": "button-solid-invert-fg",
    "category": "Components",
    "values": {
      "User - Light": "#ffffff",
      "User - Dark": "#0a0a0a",
      "Panel - Light": "#ffffff",
      "Panel - Dark": "#0a0a0a"
    }
  },
  {
    "figmaName": "Components/Buttons/Solid/button-solid-neutral-fg",
    "cssVar": "--components-buttons-solid-button-solid-neutral-fg",
    "themeVar": "--color-button-solid-neutral-fg",
    "leaf": "button-solid-neutral-fg",
    "category": "Components",
    "values": {
      "User - Light": "#ffffff",
      "User - Dark": "#ffffff",
      "Panel - Light": "#ffffff",
      "Panel - Dark": "#ffffff"
    }
  },
  {
    "figmaName": "Components/Buttons/Solid/button-solid-neutral-sf",
    "cssVar": "--components-buttons-solid-button-solid-neutral-sf",
    "themeVar": "--color-button-solid-neutral-sf",
    "leaf": "button-solid-neutral-sf",
    "category": "Components",
    "values": {
      "User - Light": "#080c1c",
      "User - Dark": "#fcfcfd",
      "Panel - Light": "#0d121c",
      "Panel - Dark": "#fcfcfd"
    }
  },
  {
    "figmaName": "Components/Buttons/Solid/button-solid-neutral-sf_hover",
    "cssVar": "--components-buttons-solid-button-solid-neutral-sf_hover",
    "themeVar": "--color-button-solid-neutral-sf_hover",
    "leaf": "button-solid-neutral-sf_hover",
    "category": "Components",
    "values": {
      "User - Light": "#141a3a",
      "User - Dark": "#f8fafc",
      "Panel - Light": "#121926",
      "Panel - Dark": "#f8fafc"
    }
  },
  {
    "figmaName": "Components/Buttons/Solid/button-solid-primary-sf",
    "cssVar": "--components-buttons-solid-button-solid-primary-sf",
    "themeVar": "--color-button-solid-primary-sf",
    "leaf": "button-solid-primary-sf",
    "category": "Components",
    "values": {
      "User - Light": "#5b7cff",
      "User - Dark": "#33d383",
      "Panel - Light": "#004cff",
      "Panel - Dark": "#3370ff"
    }
  },
  {
    "figmaName": "Components/Buttons/Solid/button-solid-primary-sf_hover",
    "cssVar": "--components-buttons-solid-button-solid-primary-sf_hover",
    "themeVar": "--color-button-solid-primary-sf_hover",
    "leaf": "button-solid-primary-sf_hover",
    "category": "Components",
    "values": {
      "User - Light": "#5371e8",
      "User - Dark": "#00c864",
      "Panel - Light": "#0045e8",
      "Panel - Dark": "#004cff"
    }
  },
  {
    "figmaName": "Components/Buttons/Solid/button-solid-sf_disabled",
    "cssVar": "--components-buttons-solid-button-solid-sf_disabled",
    "themeVar": "--color-button-solid-sf_disabled",
    "leaf": "button-solid-sf_disabled",
    "category": "Components",
    "values": {
      "User - Light": "#f2f2f2",
      "User - Dark": "#2c2c2c",
      "Panel - Light": "#f2f2f2",
      "Panel - Dark": "#2c2c2c"
    }
  },
  {
    "figmaName": "Components/Buttons/Solid/button-solid-success-sf",
    "cssVar": "--components-buttons-solid-button-solid-success-sf",
    "themeVar": "--color-button-solid-success-sf",
    "leaf": "button-solid-success-sf",
    "category": "Components",
    "values": {
      "User - Light": "#5b7cff",
      "User - Dark": "#33d383",
      "Panel - Light": "#004cff",
      "Panel - Dark": "#3370ff"
    }
  },
  {
    "figmaName": "Components/Buttons/Solid/button-solid-success-sf_hover",
    "cssVar": "--components-buttons-solid-button-solid-success-sf_hover",
    "themeVar": "--color-button-solid-success-sf_hover",
    "leaf": "button-solid-success-sf_hover",
    "category": "Components",
    "values": {
      "User - Light": "#5371e8",
      "User - Dark": "#00c864",
      "Panel - Light": "#0045e8",
      "Panel - Dark": "#004cff"
    }
  },
  {
    "figmaName": "Components/Buttons/Solid/button-solid-warning-sf",
    "cssVar": "--components-buttons-solid-button-solid-warning-sf",
    "themeVar": "--color-button-solid-warning-sf",
    "leaf": "button-solid-warning-sf",
    "category": "Components",
    "values": {
      "User - Light": "#ffc53d",
      "User - Dark": "#ffd164",
      "Panel - Light": "#ffc53d",
      "Panel - Dark": "#ffd164"
    }
  },
  {
    "figmaName": "Components/Buttons/Solid/button-solid-warning-sf_hover",
    "cssVar": "--components-buttons-solid-button-solid-warning-sf_hover",
    "themeVar": "--color-button-solid-warning-sf_hover",
    "leaf": "button-solid-warning-sf_hover",
    "category": "Components",
    "values": {
      "User - Light": "#e8b338",
      "User - Dark": "#ffc53d",
      "Panel - Light": "#e8b338",
      "Panel - Dark": "#ffc53d"
    }
  },
  {
    "figmaName": "Components/Buttons/Solid/button-solid-white-fg",
    "cssVar": "--components-buttons-solid-button-solid-white-fg",
    "themeVar": "--color-button-solid-white-fg",
    "leaf": "button-solid-white-fg",
    "category": "Components",
    "values": {
      "User - Light": "#121926",
      "User - Dark": "#121926",
      "Panel - Light": "#121926",
      "Panel - Dark": "#121926"
    }
  },
  {
    "figmaName": "Components/Buttons/Solid/button-solid-white-sf",
    "cssVar": "--components-buttons-solid-button-solid-white-sf",
    "themeVar": "--color-button-solid-white-sf",
    "leaf": "button-solid-white-sf",
    "category": "Components",
    "values": {
      "User - Light": "#ffffff",
      "User - Dark": "#ffffff",
      "Panel - Light": "#ffffff",
      "Panel - Dark": "#ffffff"
    }
  },
  {
    "figmaName": "Components/Buttons/Solid/button-solid-white-sf_hover",
    "cssVar": "--components-buttons-solid-button-solid-white-sf_hover",
    "themeVar": "--color-button-solid-white-sf_hover",
    "leaf": "button-solid-white-sf_hover",
    "category": "Components",
    "values": {
      "User - Light": "#fff9ec",
      "User - Dark": "#121926",
      "Panel - Light": "#f8fafc",
      "Panel - Dark": "#121926"
    }
  },
  {
    "figmaName": "Components/Buttons/Stroke/button-stroke-error-fg",
    "cssVar": "--components-buttons-stroke-button-stroke-error-fg",
    "themeVar": "--color-button-stroke-error-fg",
    "leaf": "button-stroke-error-fg",
    "category": "Components",
    "values": {
      "User - Light": "#fb2c36",
      "User - Dark": "#fc565e",
      "Panel - Light": "#fb2c36",
      "Panel - Dark": "#fb2c36"
    }
  },
  {
    "figmaName": "Components/Buttons/Stroke/button-stroke-error-strok_hover",
    "cssVar": "--components-buttons-stroke-button-stroke-error-strok_hover",
    "themeVar": "--color-button-stroke-error-strok_hover",
    "leaf": "button-stroke-error-strok_hover",
    "category": "Components",
    "values": {
      "User - Light": "#fc565e",
      "User - Dark": "#b21f26",
      "Panel - Light": "#fc7278",
      "Panel - Dark": "#fc7278"
    }
  },
  {
    "figmaName": "Components/Buttons/Stroke/button-stroke-error-stroke",
    "cssVar": "--components-buttons-stroke-button-stroke-error-stroke",
    "themeVar": "--color-button-stroke-error-stroke",
    "leaf": "button-stroke-error-stroke",
    "category": "Components",
    "values": {
      "User - Light": "#fc7278",
      "User - Dark": "#8a181e",
      "Panel - Light": "#fc7278",
      "Panel - Dark": "#fc7278"
    }
  },
  {
    "figmaName": "Components/Buttons/Stroke/button-stroke-fg_disabled",
    "cssVar": "--components-buttons-stroke-button-stroke-fg_disabled",
    "themeVar": "--color-button-stroke-fg_disabled",
    "leaf": "button-stroke-fg_disabled",
    "category": "Components",
    "values": {
      "User - Light": "#bfbfbf",
      "User - Dark": "#595959",
      "Panel - Light": "#bfbfbf",
      "Panel - Dark": "#595959"
    }
  },
  {
    "figmaName": "Components/Buttons/Stroke/button-stroke-neutral-fg",
    "cssVar": "--components-buttons-stroke-button-stroke-neutral-fg",
    "themeVar": "--color-button-stroke-neutral-fg",
    "leaf": "button-stroke-neutral-fg",
    "category": "Components",
    "values": {
      "User - Light": "#222c53",
      "User - Dark": "#fcfcfd",
      "Panel - Light": "#202939",
      "Panel - Dark": "#fcfcfd"
    }
  },
  {
    "figmaName": "Components/Buttons/Stroke/button-stroke-neutral-strok_hover",
    "cssVar": "--components-buttons-stroke-button-stroke-neutral-strok_hover",
    "themeVar": "--color-button-stroke-neutral-strok_hover",
    "leaf": "button-stroke-neutral-strok_hover",
    "category": "Components",
    "values": {
      "User - Light": "#697586",
      "User - Dark": "#202939",
      "Panel - Light": "#cdd5df",
      "Panel - Dark": "#202939"
    }
  },
  {
    "figmaName": "Components/Buttons/Stroke/button-stroke-neutral-stroke",
    "cssVar": "--components-buttons-stroke-button-stroke-neutral-stroke",
    "themeVar": "--color-button-stroke-neutral-stroke",
    "leaf": "button-stroke-neutral-stroke",
    "category": "Components",
    "values": {
      "User - Light": "#9aa4b2",
      "User - Dark": "#121926",
      "Panel - Light": "#e3e8ef",
      "Panel - Dark": "#121926"
    }
  },
  {
    "figmaName": "Components/Buttons/Stroke/button-stroke-primary-fg",
    "cssVar": "--components-buttons-stroke-button-stroke-primary-fg",
    "themeVar": "--color-button-stroke-primary-fg",
    "leaf": "button-stroke-primary-fg",
    "category": "Components",
    "values": {
      "User - Light": "#5b7cff",
      "User - Dark": "#33d383",
      "Panel - Light": "#004cff",
      "Panel - Dark": "#3370ff"
    }
  },
  {
    "figmaName": "Components/Buttons/Stroke/button-stroke-primary-strok_hover",
    "cssVar": "--components-buttons-stroke-button-stroke-primary-strok_hover",
    "themeVar": "--color-button-stroke-primary-strok_hover",
    "leaf": "button-stroke-primary-strok_hover",
    "category": "Components",
    "values": {
      "User - Light": "#7c96ff",
      "User - Dark": "#008e47",
      "Panel - Light": "#0045e8",
      "Panel - Dark": "#004cff"
    }
  },
  {
    "figmaName": "Components/Buttons/Stroke/button-stroke-primary-stroke",
    "cssVar": "--components-buttons-stroke-button-stroke-primary-stroke",
    "themeVar": "--color-button-stroke-primary-stroke",
    "leaf": "button-stroke-primary-stroke",
    "category": "Components",
    "values": {
      "User - Light": "#91a7ff",
      "User - Dark": "#006e37",
      "Panel - Light": "#004cff",
      "Panel - Dark": "#3370ff"
    }
  },
  {
    "figmaName": "Components/Buttons/Stroke/button-stroke-success-fg",
    "cssVar": "--components-buttons-stroke-button-stroke-success-fg",
    "themeVar": "--color-button-stroke-success-fg",
    "leaf": "button-stroke-success-fg",
    "category": "Components",
    "values": {
      "User - Light": "#5b7cff",
      "User - Dark": "#33d383",
      "Panel - Light": "#00c864",
      "Panel - Dark": "#33d383"
    }
  },
  {
    "figmaName": "Components/Buttons/Stroke/button-stroke-success-strok_hover",
    "cssVar": "--components-buttons-stroke-button-stroke-success-strok_hover",
    "themeVar": "--color-button-stroke-success-strok_hover",
    "leaf": "button-stroke-success-strok_hover",
    "category": "Components",
    "values": {
      "User - Light": "#54da97",
      "User - Dark": "#54da97",
      "Panel - Light": "#54da97",
      "Panel - Dark": "#54da97"
    }
  },
  {
    "figmaName": "Components/Buttons/Stroke/button-stroke-success-stroke",
    "cssVar": "--components-buttons-stroke-button-stroke-success-stroke",
    "themeVar": "--color-button-stroke-success-stroke",
    "leaf": "button-stroke-success-stroke",
    "category": "Components",
    "values": {
      "User - Light": "#54da97",
      "User - Dark": "#54da97",
      "Panel - Light": "#54da97",
      "Panel - Dark": "#54da97"
    }
  },
  {
    "figmaName": "Components/Buttons/Stroke/button-stroke-warning-fg",
    "cssVar": "--components-buttons-stroke-button-stroke-warning-fg",
    "themeVar": "--color-button-stroke-warning-fg",
    "leaf": "button-stroke-warning-fg",
    "category": "Components",
    "values": {
      "User - Light": "#ffc53d",
      "User - Dark": "#ffd164",
      "Panel - Light": "#ffc53d",
      "Panel - Dark": "#ffc53d"
    }
  },
  {
    "figmaName": "Components/Buttons/Stroke/button-stroke-warning-strok_hover",
    "cssVar": "--components-buttons-stroke-button-stroke-warning-strok_hover",
    "themeVar": "--color-button-stroke-warning-strok_hover",
    "leaf": "button-stroke-warning-strok_hover",
    "category": "Components",
    "values": {
      "User - Light": "#ffd164",
      "User - Dark": "#b58c2b",
      "Panel - Light": "#ffd87d",
      "Panel - Dark": "#ffd87d"
    }
  },
  {
    "figmaName": "Components/Buttons/Stroke/button-stroke-warning-stroke",
    "cssVar": "--components-buttons-stroke-button-stroke-warning-stroke",
    "themeVar": "--color-button-stroke-warning-stroke",
    "leaf": "button-stroke-warning-stroke",
    "category": "Components",
    "values": {
      "User - Light": "#ffd87d",
      "User - Dark": "#8c6c22",
      "Panel - Light": "#ffd87d",
      "Panel - Dark": "#ffd87d"
    }
  },
  {
    "figmaName": "Components/Buttons/Stroke/button-stroke-white-fg",
    "cssVar": "--components-buttons-stroke-button-stroke-white-fg",
    "themeVar": "--color-button-stroke-white-fg",
    "leaf": "button-stroke-white-fg",
    "category": "Components",
    "values": {
      "User - Light": "#ffffff",
      "User - Dark": "#ffffff",
      "Panel - Light": "#ffffff",
      "Panel - Dark": "#ffffff"
    }
  },
  {
    "figmaName": "Components/Buttons/Stroke/button-stroke-white-stroke",
    "cssVar": "--components-buttons-stroke-button-stroke-white-stroke",
    "themeVar": "--color-button-stroke-white-stroke",
    "leaf": "button-stroke-white-stroke",
    "category": "Components",
    "values": {
      "User - Light": "#ffffff",
      "User - Dark": "#ffffff",
      "Panel - Light": "#ffffff",
      "Panel - Dark": "#ffffff"
    }
  },
  {
    "figmaName": "Components/Buttons/Stroke/button-stroke-white-stroke_hover",
    "cssVar": "--components-buttons-stroke-button-stroke-white-stroke_hover",
    "themeVar": "--color-button-stroke-white-stroke_hover",
    "leaf": "button-stroke-white-stroke_hover",
    "category": "Components",
    "values": {
      "User - Light": "#f8fafc",
      "User - Dark": "#ffffff",
      "Panel - Light": "#ffffff",
      "Panel - Dark": "#ffffff"
    }
  },
  {
    "figmaName": "Components/Buttons/Stroke/button-stroke_disabled",
    "cssVar": "--components-buttons-stroke-button-stroke_disabled",
    "themeVar": "--color-button-stroke_disabled",
    "leaf": "button-stroke_disabled",
    "category": "Components",
    "values": {
      "User - Light": "#eaeaea",
      "User - Dark": "#303030",
      "Panel - Light": "#eaeaea",
      "Panel - Dark": "#303030"
    }
  },
  {
    "figmaName": "Components/Chips/Blur/chips-blur-fg",
    "cssVar": "--components-chips-blur-chips-blur-fg",
    "themeVar": "--color-chips-blur-fg",
    "leaf": "chips-blur-fg",
    "category": "Components",
    "values": {
      "User - Light": "#ffffff",
      "User - Dark": "#ffffff",
      "Panel - Light": "#ffffff",
      "Panel - Dark": "#ffffff"
    }
  },
  {
    "figmaName": "Components/Chips/Blur/chips-blur-fg_disabled",
    "cssVar": "--components-chips-blur-chips-blur-fg_disabled",
    "themeVar": "--color-chips-blur-fg_disabled",
    "leaf": "chips-blur-fg_disabled",
    "category": "Components",
    "values": {
      "User - Light": "rgba(255,255,255,0.3)",
      "User - Dark": "rgba(13,18,28,0.3)",
      "Panel - Light": "rgba(255,255,255,0.3)",
      "Panel - Dark": "rgba(13,18,28,0.3)"
    }
  },
  {
    "figmaName": "Components/Chips/Blur/chips-blur-sf",
    "cssVar": "--components-chips-blur-chips-blur-sf",
    "themeVar": "--color-chips-blur-sf",
    "leaf": "chips-blur-sf",
    "category": "Components",
    "values": {
      "User - Light": "rgba(255,255,255,0.02)",
      "User - Dark": "rgba(13,18,28,0.02)",
      "Panel - Light": "rgba(255,255,255,0.02)",
      "Panel - Dark": "rgba(13,18,28,0.02)"
    }
  },
  {
    "figmaName": "Components/Chips/Blur/chips-blur-sf_disabled",
    "cssVar": "--components-chips-blur-chips-blur-sf_disabled",
    "themeVar": "--color-chips-blur-sf_disabled",
    "leaf": "chips-blur-sf_disabled",
    "category": "Components",
    "values": {
      "User - Light": "rgba(255,255,255,0.02)",
      "User - Dark": "rgba(13,18,28,0.02)",
      "Panel - Light": "rgba(255,255,255,0.02)",
      "Panel - Dark": "rgba(13,18,28,0.02)"
    }
  },
  {
    "figmaName": "Components/Chips/Blur/chips-blur-sf_hover",
    "cssVar": "--components-chips-blur-chips-blur-sf_hover",
    "themeVar": "--color-chips-blur-sf_hover",
    "leaf": "chips-blur-sf_hover",
    "category": "Components",
    "values": {
      "User - Light": "rgba(255,255,255,0.08)",
      "User - Dark": "rgba(13,18,28,0.08)",
      "Panel - Light": "rgba(255,255,255,0.08)",
      "Panel - Dark": "rgba(13,18,28,0.08)"
    }
  },
  {
    "figmaName": "Components/Chips/Blur/chips-blur-stroke",
    "cssVar": "--components-chips-blur-chips-blur-stroke",
    "themeVar": "--color-chips-blur-stroke",
    "leaf": "chips-blur-stroke",
    "category": "Components",
    "values": {
      "User - Light": "rgba(255,255,255,0.15)",
      "User - Dark": "rgba(13,18,28,0.15)",
      "Panel - Light": "rgba(255,255,255,0.15)",
      "Panel - Dark": "rgba(13,18,28,0.15)"
    }
  },
  {
    "figmaName": "Components/Chips/Blur/chips-blur-stroke_disabled",
    "cssVar": "--components-chips-blur-chips-blur-stroke_disabled",
    "themeVar": "--color-chips-blur-stroke_disabled",
    "leaf": "chips-blur-stroke_disabled",
    "category": "Components",
    "values": {
      "User - Light": "rgba(255,255,255,0.08)",
      "User - Dark": "rgba(13,18,28,0.15)",
      "Panel - Light": "rgba(255,255,255,0.08)",
      "Panel - Dark": "rgba(13,18,28,0.15)"
    }
  },
  {
    "figmaName": "Components/Chips/Ghost/Blue/chips-ghost-blue-fg",
    "cssVar": "--components-chips-ghost-blue-chips-ghost-blue-fg",
    "themeVar": "--color-chips-ghost-blue-fg",
    "leaf": "chips-ghost-blue-fg",
    "category": "Components",
    "values": {
      "User - Light": "#00c864",
      "User - Dark": "#3370ff",
      "Panel - Light": "#004cff",
      "Panel - Dark": "#3370ff"
    }
  },
  {
    "figmaName": "Components/Chips/Ghost/Error/chips-ghost-error-fg",
    "cssVar": "--components-chips-ghost-error-chips-ghost-error-fg",
    "themeVar": "--color-chips-ghost-error-fg",
    "leaf": "chips-ghost-error-fg",
    "category": "Components",
    "values": {
      "User - Light": "#fb2c36",
      "User - Dark": "#fc565e",
      "Panel - Light": "#fb2c36",
      "Panel - Dark": "#fc565e"
    }
  },
  {
    "figmaName": "Components/Chips/Ghost/Neutral/chips-ghost-neutral-fg",
    "cssVar": "--components-chips-ghost-neutral-chips-ghost-neutral-fg",
    "themeVar": "--color-chips-ghost-neutral-fg",
    "leaf": "chips-ghost-neutral-fg",
    "category": "Components",
    "values": {
      "User - Light": "#222c53",
      "User - Dark": "#fcfcfd",
      "Panel - Light": "#202939",
      "Panel - Dark": "#fcfcfd"
    }
  },
  {
    "figmaName": "Components/Chips/Ghost/Primary/chips-ghost-primary-fg",
    "cssVar": "--components-chips-ghost-primary-chips-ghost-primary-fg",
    "themeVar": "--color-chips-ghost-primary-fg",
    "leaf": "chips-ghost-primary-fg",
    "category": "Components",
    "values": {
      "User - Light": "#5b7cff",
      "User - Dark": "#33d383",
      "Panel - Light": "#004cff",
      "Panel - Dark": "#3370ff"
    }
  },
  {
    "figmaName": "Components/Chips/Ghost/Success/chips-ghost-success-fg",
    "cssVar": "--components-chips-ghost-success-chips-ghost-success-fg",
    "themeVar": "--color-chips-ghost-success-fg",
    "leaf": "chips-ghost-success-fg",
    "category": "Components",
    "values": {
      "User - Light": "#00c864",
      "User - Dark": "#33d383",
      "Panel - Light": "#00c864",
      "Panel - Dark": "#33d383"
    }
  },
  {
    "figmaName": "Components/Chips/Ghost/Violet/chips-ghost-violet-fg",
    "cssVar": "--components-chips-ghost-violet-chips-ghost-violet-fg",
    "themeVar": "--color-chips-ghost-violet-fg",
    "leaf": "chips-ghost-violet-fg",
    "category": "Components",
    "values": {
      "User - Light": "#875bf7",
      "User - Dark": "#a48afb",
      "Panel - Light": "#875bf7",
      "Panel - Dark": "#a48afb"
    }
  },
  {
    "figmaName": "Components/Chips/Ghost/Warning/chips-ghost-warning-fg",
    "cssVar": "--components-chips-ghost-warning-chips-ghost-warning-fg",
    "themeVar": "--color-chips-ghost-warning-fg",
    "leaf": "chips-ghost-warning-fg",
    "category": "Components",
    "values": {
      "User - Light": "#ffc53d",
      "User - Dark": "#ffd164",
      "Panel - Light": "#ffc53d",
      "Panel - Dark": "#ffd164"
    }
  },
  {
    "figmaName": "Components/Chips/Ghost/White/chips-ghost-white-fg",
    "cssVar": "--components-chips-ghost-white-chips-ghost-white-fg",
    "themeVar": "--color-chips-ghost-white-fg",
    "leaf": "chips-ghost-white-fg",
    "category": "Components",
    "values": {
      "User - Light": "#ffffff",
      "User - Dark": "#ffffff",
      "Panel - Light": "#ffffff",
      "Panel - Dark": "#ffffff"
    }
  },
  {
    "figmaName": "Components/Chips/Solid/Blue/chips-solid-blue-fg",
    "cssVar": "--components-chips-solid-blue-chips-solid-blue-fg",
    "themeVar": "--color-chips-solid-blue-fg",
    "leaf": "chips-solid-blue-fg",
    "category": "Components",
    "values": {
      "User - Light": "#ffffff",
      "User - Dark": "#ffffff",
      "Panel - Light": "#ffffff",
      "Panel - Dark": "#ffffff"
    }
  },
  {
    "figmaName": "Components/Chips/Solid/Blue/chips-solid-blue-sf",
    "cssVar": "--components-chips-solid-blue-chips-solid-blue-sf",
    "themeVar": "--color-chips-solid-blue-sf",
    "leaf": "chips-solid-blue-sf",
    "category": "Components",
    "values": {
      "User - Light": "#5b7cff",
      "User - Dark": "#3370ff",
      "Panel - Light": "#004cff",
      "Panel - Dark": "#3370ff"
    }
  },
  {
    "figmaName": "Components/Chips/Solid/Blue/chips-solid-blue-sf_hover",
    "cssVar": "--components-chips-solid-blue-chips-solid-blue-sf_hover",
    "themeVar": "--color-chips-solid-blue-sf_hover",
    "leaf": "chips-solid-blue-sf_hover",
    "category": "Components",
    "values": {
      "User - Light": "#5371e8",
      "User - Dark": "#004cff",
      "Panel - Light": "#0045e8",
      "Panel - Dark": "#004cff"
    }
  },
  {
    "figmaName": "Components/Chips/Solid/Error/chips-solid-error-fg",
    "cssVar": "--components-chips-solid-error-chips-solid-error-fg",
    "themeVar": "--color-chips-solid-error-fg",
    "leaf": "chips-solid-error-fg",
    "category": "Components",
    "values": {
      "User - Light": "#ffffff",
      "User - Dark": "#ffffff",
      "Panel - Light": "#ffffff",
      "Panel - Dark": "#ffffff"
    }
  },
  {
    "figmaName": "Components/Chips/Solid/Error/chips-solid-error-sf",
    "cssVar": "--components-chips-solid-error-chips-solid-error-sf",
    "themeVar": "--color-chips-solid-error-sf",
    "leaf": "chips-solid-error-sf",
    "category": "Components",
    "values": {
      "User - Light": "#fb2c36",
      "User - Dark": "#fc565e",
      "Panel - Light": "#fb2c36",
      "Panel - Dark": "#fc565e"
    }
  },
  {
    "figmaName": "Components/Chips/Solid/Error/chips-solid-error-sf_hover",
    "cssVar": "--components-chips-solid-error-chips-solid-error-sf_hover",
    "themeVar": "--color-chips-solid-error-sf_hover",
    "leaf": "chips-solid-error-sf_hover",
    "category": "Components",
    "values": {
      "User - Light": "#e42831",
      "User - Dark": "#fb2c36",
      "Panel - Light": "#e42831",
      "Panel - Dark": "#fb2c36"
    }
  },
  {
    "figmaName": "Components/Chips/Solid/Neutral/chips-solid-neutral-fg",
    "cssVar": "--components-chips-solid-neutral-chips-solid-neutral-fg",
    "themeVar": "--color-chips-solid-neutral-fg",
    "leaf": "chips-solid-neutral-fg",
    "category": "Components",
    "values": {
      "User - Light": "#fcfcfd",
      "User - Dark": "#0a0a0a",
      "Panel - Light": "#fcfcfd",
      "Panel - Dark": "#0a0a0a"
    }
  },
  {
    "figmaName": "Components/Chips/Solid/Neutral/chips-solid-neutral-sf",
    "cssVar": "--components-chips-solid-neutral-chips-solid-neutral-sf",
    "themeVar": "--color-chips-solid-neutral-sf",
    "leaf": "chips-solid-neutral-sf",
    "category": "Components",
    "values": {
      "User - Light": "#121926",
      "User - Dark": "#fcfcfd",
      "Panel - Light": "#121926",
      "Panel - Dark": "#fcfcfd"
    }
  },
  {
    "figmaName": "Components/Chips/Solid/Neutral/chips-solid-neutral-sf_hover",
    "cssVar": "--components-chips-solid-neutral-chips-solid-neutral-sf_hover",
    "themeVar": "--color-chips-solid-neutral-sf_hover",
    "leaf": "chips-solid-neutral-sf_hover",
    "category": "Components",
    "values": {
      "User - Light": "#0d121c",
      "User - Dark": "#f8fafc",
      "Panel - Light": "#0d121c",
      "Panel - Dark": "#f8fafc"
    }
  },
  {
    "figmaName": "Components/Chips/Solid/Primary/chips-solid-primary-fg",
    "cssVar": "--components-chips-solid-primary-chips-solid-primary-fg",
    "themeVar": "--color-chips-solid-primary-fg",
    "leaf": "chips-solid-primary-fg",
    "category": "Components",
    "values": {
      "User - Light": "#ffffff",
      "User - Dark": "#ffffff",
      "Panel - Light": "#ffffff",
      "Panel - Dark": "#ffffff"
    }
  },
  {
    "figmaName": "Components/Chips/Solid/Primary/chips-solid-primary-sf",
    "cssVar": "--components-chips-solid-primary-chips-solid-primary-sf",
    "themeVar": "--color-chips-solid-primary-sf",
    "leaf": "chips-solid-primary-sf",
    "category": "Components",
    "values": {
      "User - Light": "#5b7cff",
      "User - Dark": "#33d383",
      "Panel - Light": "#004cff",
      "Panel - Dark": "#3370ff"
    }
  },
  {
    "figmaName": "Components/Chips/Solid/Primary/chips-solid-primary-sf_hover",
    "cssVar": "--components-chips-solid-primary-chips-solid-primary-sf_hover",
    "themeVar": "--color-chips-solid-primary-sf_hover",
    "leaf": "chips-solid-primary-sf_hover",
    "category": "Components",
    "values": {
      "User - Light": "#5371e8",
      "User - Dark": "#00c864",
      "Panel - Light": "#0045e8",
      "Panel - Dark": "#004cff"
    }
  },
  {
    "figmaName": "Components/Chips/Solid/Success/chips-solid-success-fg",
    "cssVar": "--components-chips-solid-success-chips-solid-success-fg",
    "themeVar": "--color-chips-solid-success-fg",
    "leaf": "chips-solid-success-fg",
    "category": "Components",
    "values": {
      "User - Light": "#ffffff",
      "User - Dark": "#ffffff",
      "Panel - Light": "#ffffff",
      "Panel - Dark": "#ffffff"
    }
  },
  {
    "figmaName": "Components/Chips/Solid/Success/chips-solid-success-sf",
    "cssVar": "--components-chips-solid-success-chips-solid-success-sf",
    "themeVar": "--color-chips-solid-success-sf",
    "leaf": "chips-solid-success-sf",
    "category": "Components",
    "values": {
      "User - Light": "#00c864",
      "User - Dark": "#33d383",
      "Panel - Light": "#00c864",
      "Panel - Dark": "#33d383"
    }
  },
  {
    "figmaName": "Components/Chips/Solid/Success/chips-solid-success-sf_hover",
    "cssVar": "--components-chips-solid-success-chips-solid-success-sf_hover",
    "themeVar": "--color-chips-solid-success-sf_hover",
    "leaf": "chips-solid-success-sf_hover",
    "category": "Components",
    "values": {
      "User - Light": "#00b65b",
      "User - Dark": "#00c864",
      "Panel - Light": "#00b65b",
      "Panel - Dark": "#00c864"
    }
  },
  {
    "figmaName": "Components/Chips/Solid/Violet/chips-solid-violet-fg",
    "cssVar": "--components-chips-solid-violet-chips-solid-violet-fg",
    "themeVar": "--color-chips-solid-violet-fg",
    "leaf": "chips-solid-violet-fg",
    "category": "Components",
    "values": {
      "User - Light": "#ffffff",
      "User - Dark": "#ffffff",
      "Panel - Light": "#ffffff",
      "Panel - Dark": "#ffffff"
    }
  },
  {
    "figmaName": "Components/Chips/Solid/Violet/chips-solid-violet-sf",
    "cssVar": "--components-chips-solid-violet-chips-solid-violet-sf",
    "themeVar": "--color-chips-solid-violet-sf",
    "leaf": "chips-solid-violet-sf",
    "category": "Components",
    "values": {
      "User - Light": "#875bf7",
      "User - Dark": "#a48afb",
      "Panel - Light": "#875bf7",
      "Panel - Dark": "#a48afb"
    }
  },
  {
    "figmaName": "Components/Chips/Solid/Violet/chips-solid-violet-sf_hover",
    "cssVar": "--components-chips-solid-violet-chips-solid-violet-sf_hover",
    "themeVar": "--color-chips-solid-violet-sf_hover",
    "leaf": "chips-solid-violet-sf_hover",
    "category": "Components",
    "values": {
      "User - Light": "#7839ee",
      "User - Dark": "#875bf7",
      "Panel - Light": "#7839ee",
      "Panel - Dark": "#875bf7"
    }
  },
  {
    "figmaName": "Components/Chips/Solid/Warning/chips-solid-warning-fg",
    "cssVar": "--components-chips-solid-warning-chips-solid-warning-fg",
    "themeVar": "--color-chips-solid-warning-fg",
    "leaf": "chips-solid-warning-fg",
    "category": "Components",
    "values": {
      "User - Light": "#ffffff",
      "User - Dark": "#ffffff",
      "Panel - Light": "#ffffff",
      "Panel - Dark": "#ffffff"
    }
  },
  {
    "figmaName": "Components/Chips/Solid/Warning/chips-solid-warning-sf",
    "cssVar": "--components-chips-solid-warning-chips-solid-warning-sf",
    "themeVar": "--color-chips-solid-warning-sf",
    "leaf": "chips-solid-warning-sf",
    "category": "Components",
    "values": {
      "User - Light": "#ffc53d",
      "User - Dark": "#ffd164",
      "Panel - Light": "#ffc53d",
      "Panel - Dark": "#ffd164"
    }
  },
  {
    "figmaName": "Components/Chips/Solid/Warning/chips-solid-warning-sf_hover",
    "cssVar": "--components-chips-solid-warning-chips-solid-warning-sf_hover",
    "themeVar": "--color-chips-solid-warning-sf_hover",
    "leaf": "chips-solid-warning-sf_hover",
    "category": "Components",
    "values": {
      "User - Light": "#e8b338",
      "User - Dark": "#ffc53d",
      "Panel - Light": "#e8b338",
      "Panel - Dark": "#ffc53d"
    }
  },
  {
    "figmaName": "Components/Chips/Solid/White/chips-solid-white-fg",
    "cssVar": "--components-chips-solid-white-chips-solid-white-fg",
    "themeVar": "--color-chips-solid-white-fg",
    "leaf": "chips-solid-white-fg",
    "category": "Components",
    "values": {
      "User - Light": "#222c53",
      "User - Dark": "#202939",
      "Panel - Light": "#202939",
      "Panel - Dark": "#202939"
    }
  },
  {
    "figmaName": "Components/Chips/Solid/White/chips-solid-white-sf",
    "cssVar": "--components-chips-solid-white-chips-solid-white-sf",
    "themeVar": "--color-chips-solid-white-sf",
    "leaf": "chips-solid-white-sf",
    "category": "Components",
    "values": {
      "User - Light": "#ffffff",
      "User - Dark": "#ffffff",
      "Panel - Light": "#ffffff",
      "Panel - Dark": "#ffffff"
    }
  },
  {
    "figmaName": "Components/Chips/Solid/White/chips-solid-white-sf_hover",
    "cssVar": "--components-chips-solid-white-chips-solid-white-sf_hover",
    "themeVar": "--color-chips-solid-white-sf_hover",
    "leaf": "chips-solid-white-sf_hover",
    "category": "Components",
    "values": {
      "User - Light": "#fcfcfd",
      "User - Dark": "#fcfcfd",
      "Panel - Light": "#fcfcfd",
      "Panel - Dark": "#fcfcfd"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke Subtle/Blue/chips-strokeSubtle-blue-fg",
    "cssVar": "--components-chips-stroke-subtle-blue-chips-strokesubtle-blue-fg",
    "themeVar": "--color-chips-strokesubtle-blue-fg",
    "leaf": "chips-strokesubtle-blue-fg",
    "category": "Components",
    "values": {
      "User - Light": "#0036b5",
      "User - Dark": "#3370ff",
      "Panel - Light": "#0036b5",
      "Panel - Dark": "#3370ff"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke Subtle/Blue/chips-strokeSubtle-blue-sf",
    "cssVar": "--components-chips-stroke-subtle-blue-chips-strokesubtle-blue-sf",
    "themeVar": "--color-chips-strokesubtle-blue-sf",
    "leaf": "chips-strokesubtle-blue-sf",
    "category": "Components",
    "values": {
      "User - Light": "#f5f8ff",
      "User - Dark": "#00174d",
      "Panel - Light": "#f5f8ff",
      "Panel - Dark": "#00174d"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke Subtle/Blue/chips-strokeSubtle-blue-sf_hover",
    "cssVar": "--components-chips-stroke-subtle-blue-chips-strokesubtle-blue-sf_hover",
    "themeVar": "--color-chips-strokesubtle-blue-sf_hover",
    "leaf": "chips-strokesubtle-blue-sf_hover",
    "category": "Components",
    "values": {
      "User - Light": "#e6edff",
      "User - Dark": "#00206b",
      "Panel - Light": "#e6edff",
      "Panel - Dark": "#00206b"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke Subtle/Blue/chips-strokeSubtle-blue-stroke",
    "cssVar": "--components-chips-stroke-subtle-blue-chips-strokesubtle-blue-stroke",
    "themeVar": "--color-chips-strokesubtle-blue-stroke",
    "leaf": "chips-strokesubtle-blue-stroke",
    "category": "Components",
    "values": {
      "User - Light": "#b0c8ff",
      "User - Dark": "#0036b5",
      "Panel - Light": "#b0c8ff",
      "Panel - Dark": "#0036b5"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke Subtle/Error/chips-strokeSubtle-error-fg",
    "cssVar": "--components-chips-stroke-subtle-error-chips-strokesubtle-error-fg",
    "themeVar": "--color-chips-strokesubtle-error-fg",
    "leaf": "chips-strokesubtle-error-fg",
    "category": "Components",
    "values": {
      "User - Light": "#b21f26",
      "User - Dark": "#fc565e",
      "Panel - Light": "#b21f26",
      "Panel - Dark": "#fc565e"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke Subtle/Error/chips-strokeSubtle-error-sf",
    "cssVar": "--components-chips-stroke-subtle-error-chips-strokesubtle-error-sf",
    "themeVar": "--color-chips-strokesubtle-error-sf",
    "leaf": "chips-strokesubtle-error-sf",
    "category": "Components",
    "values": {
      "User - Light": "#fff5f5",
      "User - Dark": "#36090c",
      "Panel - Light": "#fff5f5",
      "Panel - Dark": "#36090c"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke Subtle/Error/chips-strokeSubtle-error-sf_hover",
    "cssVar": "--components-chips-stroke-subtle-error-chips-strokesubtle-error-sf_hover",
    "themeVar": "--color-chips-strokesubtle-error-sf_hover",
    "leaf": "chips-strokesubtle-error-sf_hover",
    "category": "Components",
    "values": {
      "User - Light": "#fff5f5",
      "User - Dark": "#691217",
      "Panel - Light": "#fff5f5",
      "Panel - Dark": "#691217"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke Subtle/Error/chips-strokeSubtle-error-stroke",
    "cssVar": "--components-chips-stroke-subtle-error-chips-strokesubtle-error-stroke",
    "themeVar": "--color-chips-strokesubtle-error-stroke",
    "leaf": "chips-strokesubtle-error-stroke",
    "category": "Components",
    "values": {
      "User - Light": "#febec1",
      "User - Dark": "#b21f26",
      "Panel - Light": "#febec1",
      "Panel - Dark": "#b21f26"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke Subtle/Neutral/chips-strokeSubtle-neutral-fg",
    "cssVar": "--components-chips-stroke-subtle-neutral-chips-strokesubtle-neutral-fg",
    "themeVar": "--color-chips-strokesubtle-neutral-fg",
    "leaf": "chips-strokesubtle-neutral-fg",
    "category": "Components",
    "values": {
      "User - Light": "#121926",
      "User - Dark": "#fcfcfd",
      "Panel - Light": "#121926",
      "Panel - Dark": "#fcfcfd"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke Subtle/Neutral/chips-strokeSubtle-neutral-sf",
    "cssVar": "--components-chips-stroke-subtle-neutral-chips-strokesubtle-neutral-sf",
    "themeVar": "--color-chips-strokesubtle-neutral-sf",
    "leaf": "chips-strokesubtle-neutral-sf",
    "category": "Components",
    "values": {
      "User - Light": "#f8fafc",
      "User - Dark": "#202939",
      "Panel - Light": "#f8fafc",
      "Panel - Dark": "#202939"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke Subtle/Neutral/chips-strokeSubtle-neutral-sf_hover",
    "cssVar": "--components-chips-stroke-subtle-neutral-chips-strokesubtle-neutral-sf_hover",
    "themeVar": "--color-chips-strokesubtle-neutral-sf_hover",
    "leaf": "chips-strokesubtle-neutral-sf_hover",
    "category": "Components",
    "values": {
      "User - Light": "#eef2f6",
      "User - Dark": "#121926",
      "Panel - Light": "#eef2f6",
      "Panel - Dark": "#121926"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke Subtle/Neutral/chips-strokeSubtle-neutral-stroke",
    "cssVar": "--components-chips-stroke-subtle-neutral-chips-strokesubtle-neutral-stroke",
    "themeVar": "--color-chips-strokesubtle-neutral-stroke",
    "leaf": "chips-strokesubtle-neutral-stroke",
    "category": "Components",
    "values": {
      "User - Light": "#e3e8ef",
      "User - Dark": "#364152",
      "Panel - Light": "#e3e8ef",
      "Panel - Dark": "#364152"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke Subtle/Primary/chips-strokeSubtle-primary-fg",
    "cssVar": "--components-chips-stroke-subtle-primary-chips-strokesubtle-primary-fg",
    "themeVar": "--color-chips-strokesubtle-primary-fg",
    "leaf": "chips-strokesubtle-primary-fg",
    "category": "Components",
    "values": {
      "User - Light": "#4158b5",
      "User - Dark": "#33d383",
      "Panel - Light": "#0036b5",
      "Panel - Dark": "#3370ff"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke Subtle/Primary/chips-strokeSubtle-primary-sf",
    "cssVar": "--components-chips-stroke-subtle-primary-chips-strokesubtle-primary-sf",
    "themeVar": "--color-chips-strokesubtle-primary-sf",
    "leaf": "chips-strokesubtle-primary-sf",
    "category": "Components",
    "values": {
      "User - Light": "#fafbff",
      "User - Dark": "#002914",
      "Panel - Light": "#f5f8ff",
      "Panel - Dark": "#00174d"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke Subtle/Primary/chips-strokeSubtle-primary-sf_hover",
    "cssVar": "--components-chips-stroke-subtle-primary-chips-strokesubtle-primary-sf_hover",
    "themeVar": "--color-chips-strokesubtle-primary-sf_hover",
    "leaf": "chips-strokesubtle-primary-sf_hover",
    "category": "Components",
    "values": {
      "User - Light": "#eff2ff",
      "User - Dark": "#00542a",
      "Panel - Light": "#e6edff",
      "Panel - Dark": "#00206b"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke Subtle/Primary/chips-strokeSubtle-primary-stroke",
    "cssVar": "--components-chips-stroke-subtle-primary-chips-strokesubtle-primary-stroke",
    "themeVar": "--color-chips-strokesubtle-primary-stroke",
    "leaf": "chips-strokesubtle-primary-stroke",
    "category": "Components",
    "values": {
      "User - Light": "#ccd6ff",
      "User - Dark": "#008e47",
      "Panel - Light": "#b0c8ff",
      "Panel - Dark": "#0036b5"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke Subtle/Success/chips-strokeSubtle-success-fg",
    "cssVar": "--components-chips-stroke-subtle-success-chips-strokesubtle-success-fg",
    "themeVar": "--color-chips-strokesubtle-success-fg",
    "leaf": "chips-strokesubtle-success-fg",
    "category": "Components",
    "values": {
      "User - Light": "#008e47",
      "User - Dark": "#33d383",
      "Panel - Light": "#008e47",
      "Panel - Dark": "#33d383"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke Subtle/Success/chips-strokeSubtle-success-sf",
    "cssVar": "--components-chips-stroke-subtle-success-chips-strokesubtle-success-sf",
    "themeVar": "--color-chips-strokesubtle-success-sf",
    "leaf": "chips-strokesubtle-success-sf",
    "category": "Components",
    "values": {
      "User - Light": "#f2fcf7",
      "User - Dark": "#002914",
      "Panel - Light": "#f2fcf7",
      "Panel - Dark": "#002914"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke Subtle/Success/chips-strokeSubtle-success-sf_hover",
    "cssVar": "--components-chips-stroke-subtle-success-chips-strokesubtle-success-sf_hover",
    "themeVar": "--color-chips-strokesubtle-success-sf_hover",
    "leaf": "chips-strokesubtle-success-sf_hover",
    "category": "Components",
    "values": {
      "User - Light": "#f2fcf7",
      "User - Dark": "#00542a",
      "Panel - Light": "#f2fcf7",
      "Panel - Dark": "#00542a"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke Subtle/Success/chips-strokeSubtle-success-stroke",
    "cssVar": "--components-chips-stroke-subtle-success-chips-strokesubtle-success-stroke",
    "themeVar": "--color-chips-strokesubtle-success-stroke",
    "leaf": "chips-strokesubtle-success-stroke",
    "category": "Components",
    "values": {
      "User - Light": "#b0eecf",
      "User - Dark": "#008e47",
      "Panel - Light": "#b0eecf",
      "Panel - Dark": "#008e47"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke Subtle/Violet/chips-strokeSubtle-violet-fg",
    "cssVar": "--components-chips-stroke-subtle-violet-chips-strokesubtle-violet-fg",
    "themeVar": "--color-chips-strokesubtle-violet-fg",
    "leaf": "chips-strokesubtle-violet-fg",
    "category": "Components",
    "values": {
      "User - Light": "#6927da",
      "User - Dark": "#a48afb",
      "Panel - Light": "#6927da",
      "Panel - Dark": "#a48afb"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke Subtle/Violet/chips-strokeSubtle-violet-sf",
    "cssVar": "--components-chips-stroke-subtle-violet-chips-strokesubtle-violet-sf",
    "themeVar": "--color-chips-strokesubtle-violet-sf",
    "leaf": "chips-strokesubtle-violet-sf",
    "category": "Components",
    "values": {
      "User - Light": "#fbfaff",
      "User - Dark": "#2e125e",
      "Panel - Light": "#fbfaff",
      "Panel - Dark": "#2e125e"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke Subtle/Violet/chips-strokeSubtle-violet-sf_hover",
    "cssVar": "--components-chips-stroke-subtle-violet-chips-strokesubtle-violet-sf_hover",
    "themeVar": "--color-chips-strokesubtle-violet-sf_hover",
    "leaf": "chips-strokesubtle-violet-sf_hover",
    "category": "Components",
    "values": {
      "User - Light": "#f5f3ff",
      "User - Dark": "#491c96",
      "Panel - Light": "#f5f3ff",
      "Panel - Dark": "#491c96"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke Subtle/Violet/chips-strokeSubtle-violet-stroke",
    "cssVar": "--components-chips-stroke-subtle-violet-chips-strokesubtle-violet-stroke",
    "themeVar": "--color-chips-strokesubtle-violet-stroke",
    "leaf": "chips-strokesubtle-violet-stroke",
    "category": "Components",
    "values": {
      "User - Light": "#ece9fe",
      "User - Dark": "#6927da",
      "Panel - Light": "#ece9fe",
      "Panel - Dark": "#6927da"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke Subtle/Warning/chips-strokeSubtle-warning-fg",
    "cssVar": "--components-chips-stroke-subtle-warning-chips-strokesubtle-warning-fg",
    "themeVar": "--color-chips-strokesubtle-warning-fg",
    "leaf": "chips-strokesubtle-warning-fg",
    "category": "Components",
    "values": {
      "User - Light": "#b58c2b",
      "User - Dark": "#ffd164",
      "Panel - Light": "#b58c2b",
      "Panel - Dark": "#ffd164"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke Subtle/Warning/chips-strokeSubtle-warning-sf",
    "cssVar": "--components-chips-stroke-subtle-warning-chips-strokesubtle-warning-sf",
    "themeVar": "--color-chips-strokesubtle-warning-sf",
    "leaf": "chips-strokesubtle-warning-sf",
    "category": "Components",
    "values": {
      "User - Light": "#fff9ec",
      "User - Dark": "#40310f",
      "Panel - Light": "#fff9ec",
      "Panel - Dark": "#40310f"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke Subtle/Warning/chips-strokeSubtle-warning-sf_hover",
    "cssVar": "--components-chips-stroke-subtle-warning-chips-strokesubtle-warning-sf_hover",
    "themeVar": "--color-chips-strokesubtle-warning-sf_hover",
    "leaf": "chips-strokesubtle-warning-sf_hover",
    "category": "Components",
    "values": {
      "User - Light": "#fff9ec",
      "User - Dark": "#6b531a",
      "Panel - Light": "#fff9ec",
      "Panel - Dark": "#6b531a"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke Subtle/Warning/chips-strokeSubtle-warning-stroke",
    "cssVar": "--components-chips-stroke-subtle-warning-chips-strokesubtle-warning-stroke",
    "themeVar": "--color-chips-strokesubtle-warning-stroke",
    "leaf": "chips-strokesubtle-warning-stroke",
    "category": "Components",
    "values": {
      "User - Light": "#ffedc3",
      "User - Dark": "#b58c2b",
      "Panel - Light": "#ffedc3",
      "Panel - Dark": "#b58c2b"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke Subtle/White/chips-strokeSubtle-white-fg",
    "cssVar": "--components-chips-stroke-subtle-white-chips-strokesubtle-white-fg",
    "themeVar": "--color-chips-strokesubtle-white-fg",
    "leaf": "chips-strokesubtle-white-fg",
    "category": "Components",
    "values": {
      "User - Light": "#121926",
      "User - Dark": "#ffffff",
      "Panel - Light": "#121926",
      "Panel - Dark": "#ffffff"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke Subtle/White/chips-strokeSubtle-white-sf",
    "cssVar": "--components-chips-stroke-subtle-white-chips-strokesubtle-white-sf",
    "themeVar": "--color-chips-strokesubtle-white-sf",
    "leaf": "chips-strokesubtle-white-sf",
    "category": "Components",
    "values": {
      "User - Light": "rgba(255,255,255,0.92)",
      "User - Dark": "rgba(255,255,255,0.08)",
      "Panel - Light": "rgba(255,255,255,0.92)",
      "Panel - Dark": "rgba(255,255,255,0.08)"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke Subtle/White/chips-strokeSubtle-white-sf_hover",
    "cssVar": "--components-chips-stroke-subtle-white-chips-strokesubtle-white-sf_hover",
    "themeVar": "--color-chips-strokesubtle-white-sf_hover",
    "leaf": "chips-strokesubtle-white-sf_hover",
    "category": "Components",
    "values": {
      "User - Light": "rgba(255,255,255,0.98)",
      "User - Dark": "rgba(255,255,255,0.15)",
      "Panel - Light": "rgba(255,255,255,0.98)",
      "Panel - Dark": "rgba(13,18,28,0.15)"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke Subtle/White/chips-strokeSubtle-white-stroke",
    "cssVar": "--components-chips-stroke-subtle-white-chips-strokesubtle-white-stroke",
    "themeVar": "--color-chips-strokesubtle-white-stroke",
    "leaf": "chips-strokesubtle-white-stroke",
    "category": "Components",
    "values": {
      "User - Light": "#ffffff",
      "User - Dark": "#ffffff",
      "Panel - Light": "#ffffff",
      "Panel - Dark": "#ffffff"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke/Blue/chips-stroke-blue-fg",
    "cssVar": "--components-chips-stroke-blue-chips-stroke-blue-fg",
    "themeVar": "--color-chips-stroke-blue-fg",
    "leaf": "chips-stroke-blue-fg",
    "category": "Components",
    "values": {
      "User - Light": "#00c864",
      "User - Dark": "#3370ff",
      "Panel - Light": "#004cff",
      "Panel - Dark": "#3370ff"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke/Blue/chips-stroke-blue-stroke",
    "cssVar": "--components-chips-stroke-blue-chips-stroke-blue-stroke",
    "themeVar": "--color-chips-stroke-blue-stroke",
    "leaf": "chips-stroke-blue-stroke",
    "category": "Components",
    "values": {
      "User - Light": "#b0c8ff",
      "User - Dark": "#002a8c",
      "Panel - Light": "#b0c8ff",
      "Panel - Dark": "#002a8c"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke/Error/chips-stroke-error-fg",
    "cssVar": "--components-chips-stroke-error-chips-stroke-error-fg",
    "themeVar": "--color-chips-stroke-error-fg",
    "leaf": "chips-stroke-error-fg",
    "category": "Components",
    "values": {
      "User - Light": "#fb2c36",
      "User - Dark": "#fc565e",
      "Panel - Light": "#fb2c36",
      "Panel - Dark": "#fc565e"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke/Error/chips-stroke-error-stroke",
    "cssVar": "--components-chips-stroke-error-chips-stroke-error-stroke",
    "themeVar": "--color-chips-stroke-error-stroke",
    "leaf": "chips-stroke-error-stroke",
    "category": "Components",
    "values": {
      "User - Light": "#febec1",
      "User - Dark": "#691217",
      "Panel - Light": "#febec1",
      "Panel - Dark": "#691217"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke/Neutral/chips-stroke-neutral-fg",
    "cssVar": "--components-chips-stroke-neutral-chips-stroke-neutral-fg",
    "themeVar": "--color-chips-stroke-neutral-fg",
    "leaf": "chips-stroke-neutral-fg",
    "category": "Components",
    "values": {
      "User - Light": "#303e6b",
      "User - Dark": "#eef2f6",
      "Panel - Light": "#364152",
      "Panel - Dark": "#eef2f6"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke/Neutral/chips-stroke-neutral-stroke",
    "cssVar": "--components-chips-stroke-neutral-chips-stroke-neutral-stroke",
    "themeVar": "--color-chips-stroke-neutral-stroke",
    "leaf": "chips-stroke-neutral-stroke",
    "category": "Components",
    "values": {
      "User - Light": "#cdd5df",
      "User - Dark": "#364152",
      "Panel - Light": "#cdd5df",
      "Panel - Dark": "#364152"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke/Primary/chips-stroke-primary-fg",
    "cssVar": "--components-chips-stroke-primary-chips-stroke-primary-fg",
    "themeVar": "--color-chips-stroke-primary-fg",
    "leaf": "chips-stroke-primary-fg",
    "category": "Components",
    "values": {
      "User - Light": "#5b7cff",
      "User - Dark": "#33d383",
      "Panel - Light": "#004cff",
      "Panel - Dark": "#3370ff"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke/Primary/chips-stroke-primary-stroke",
    "cssVar": "--components-chips-stroke-primary-chips-stroke-primary-stroke",
    "themeVar": "--color-chips-stroke-primary-stroke",
    "leaf": "chips-stroke-primary-stroke",
    "category": "Components",
    "values": {
      "User - Light": "#ccd6ff",
      "User - Dark": "#00542a",
      "Panel - Light": "#b0c8ff",
      "Panel - Dark": "#00206b"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke/Success/chips-stroke-success-fg",
    "cssVar": "--components-chips-stroke-success-chips-stroke-success-fg",
    "themeVar": "--color-chips-stroke-success-fg",
    "leaf": "chips-stroke-success-fg",
    "category": "Components",
    "values": {
      "User - Light": "#00c864",
      "User - Dark": "#00c864",
      "Panel - Light": "#00c864",
      "Panel - Dark": "#00c864"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke/Success/chips-stroke-success-stroke",
    "cssVar": "--components-chips-stroke-success-chips-stroke-success-stroke",
    "themeVar": "--color-chips-stroke-success-stroke",
    "leaf": "chips-stroke-success-stroke",
    "category": "Components",
    "values": {
      "User - Light": "#b0eecf",
      "User - Dark": "#00542a",
      "Panel - Light": "#b0eecf",
      "Panel - Dark": "#00542a"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke/Violet/chips-stroke-violet-fg",
    "cssVar": "--components-chips-stroke-violet-chips-stroke-violet-fg",
    "themeVar": "--color-chips-stroke-violet-fg",
    "leaf": "chips-stroke-violet-fg",
    "category": "Components",
    "values": {
      "User - Light": "#875bf7",
      "User - Dark": "#a48afb",
      "Panel - Light": "#875bf7",
      "Panel - Dark": "#a48afb"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke/Violet/chips-stroke-violet-stroke",
    "cssVar": "--components-chips-stroke-violet-chips-stroke-violet-stroke",
    "themeVar": "--color-chips-stroke-violet-stroke",
    "leaf": "chips-stroke-violet-stroke",
    "category": "Components",
    "values": {
      "User - Light": "#ece9fe",
      "User - Dark": "#491c96",
      "Panel - Light": "#ece9fe",
      "Panel - Dark": "#491c96"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke/Warning/chips-stroke-warning-fg",
    "cssVar": "--components-chips-stroke-warning-chips-stroke-warning-fg",
    "themeVar": "--color-chips-stroke-warning-fg",
    "leaf": "chips-stroke-warning-fg",
    "category": "Components",
    "values": {
      "User - Light": "#ffc53d",
      "User - Dark": "#ffd164",
      "Panel - Light": "#ffc53d",
      "Panel - Dark": "#ffd164"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke/Warning/chips-stroke-warning-stroke",
    "cssVar": "--components-chips-stroke-warning-chips-stroke-warning-stroke",
    "themeVar": "--color-chips-stroke-warning-stroke",
    "leaf": "chips-stroke-warning-stroke",
    "category": "Components",
    "values": {
      "User - Light": "#ffedc3",
      "User - Dark": "#6b531a",
      "Panel - Light": "#ffedc3",
      "Panel - Dark": "#6b531a"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke/White/chips-stroke-white-fg",
    "cssVar": "--components-chips-stroke-white-chips-stroke-white-fg",
    "themeVar": "--color-chips-stroke-white-fg",
    "leaf": "chips-stroke-white-fg",
    "category": "Components",
    "values": {
      "User - Light": "#ffffff",
      "User - Dark": "#ffffff",
      "Panel - Light": "#ffffff",
      "Panel - Dark": "#ffffff"
    }
  },
  {
    "figmaName": "Components/Chips/Stroke/White/chips-stroke-white-stroke",
    "cssVar": "--components-chips-stroke-white-chips-stroke-white-stroke",
    "themeVar": "--color-chips-stroke-white-stroke",
    "leaf": "chips-stroke-white-stroke",
    "category": "Components",
    "values": {
      "User - Light": "#ffffff",
      "User - Dark": "#ffffff",
      "Panel - Light": "#ffffff",
      "Panel - Dark": "#ffffff"
    }
  },
  {
    "figmaName": "Components/Chips/Subtle/Blue/chips-subtle-blue-fg",
    "cssVar": "--components-chips-subtle-blue-chips-subtle-blue-fg",
    "themeVar": "--color-chips-subtle-blue-fg",
    "leaf": "chips-subtle-blue-fg",
    "category": "Components",
    "values": {
      "User - Light": "#002a8c",
      "User - Dark": "#004cff",
      "Panel - Light": "#002a8c",
      "Panel - Dark": "#5b7cff"
    }
  },
  {
    "figmaName": "Components/Chips/Subtle/Blue/chips-subtle-blue-sf",
    "cssVar": "--components-chips-subtle-blue-chips-subtle-blue-sf",
    "themeVar": "--color-chips-subtle-blue-sf",
    "leaf": "chips-subtle-blue-sf",
    "category": "Components",
    "values": {
      "User - Light": "#e6edff",
      "User - Dark": "#00206b",
      "Panel - Light": "#e6edff",
      "Panel - Dark": "#00206b"
    }
  },
  {
    "figmaName": "Components/Chips/Subtle/Blue/chips-subtle-blue-sf_hover",
    "cssVar": "--components-chips-subtle-blue-chips-subtle-blue-sf_hover",
    "themeVar": "--color-chips-subtle-blue-sf_hover",
    "leaf": "chips-subtle-blue-sf_hover",
    "category": "Components",
    "values": {
      "User - Light": "#b0c8ff",
      "User - Dark": "#002a8c",
      "Panel - Light": "#b0c8ff",
      "Panel - Dark": "#002a8c"
    }
  },
  {
    "figmaName": "Components/Chips/Subtle/Error/chips-subtle-error-fg",
    "cssVar": "--components-chips-subtle-error-chips-subtle-error-fg",
    "themeVar": "--color-chips-subtle-error-fg",
    "leaf": "chips-subtle-error-fg",
    "category": "Components",
    "values": {
      "User - Light": "#8a181e",
      "User - Dark": "#fb2c36",
      "Panel - Light": "#8a181e",
      "Panel - Dark": "#b21f26"
    }
  },
  {
    "figmaName": "Components/Chips/Subtle/Error/chips-subtle-error-sf",
    "cssVar": "--components-chips-subtle-error-chips-subtle-error-sf",
    "themeVar": "--color-chips-subtle-error-sf",
    "leaf": "chips-subtle-error-sf",
    "category": "Components",
    "values": {
      "User - Light": "#ffeaeb",
      "User - Dark": "#691217",
      "Panel - Light": "#ffeaeb",
      "Panel - Dark": "#691217"
    }
  },
  {
    "figmaName": "Components/Chips/Subtle/Error/chips-subtle-error-sf_hover",
    "cssVar": "--components-chips-subtle-error-chips-subtle-error-sf_hover",
    "themeVar": "--color-chips-subtle-error-sf_hover",
    "leaf": "chips-subtle-error-sf_hover",
    "category": "Components",
    "values": {
      "User - Light": "#febec1",
      "User - Dark": "#8a181e",
      "Panel - Light": "#febec1",
      "Panel - Dark": "#8a181e"
    }
  },
  {
    "figmaName": "Components/Chips/Subtle/Neutral/chips-subtle-neutral-fg",
    "cssVar": "--components-chips-subtle-neutral-chips-subtle-neutral-fg",
    "themeVar": "--color-chips-subtle-neutral-fg",
    "leaf": "chips-subtle-neutral-fg",
    "category": "Components",
    "values": {
      "User - Light": "#121926",
      "User - Dark": "#fcfcfd",
      "Panel - Light": "#121926",
      "Panel - Dark": "#fcfcfd"
    }
  },
  {
    "figmaName": "Components/Chips/Subtle/Neutral/chips-subtle-neutral-sf",
    "cssVar": "--components-chips-subtle-neutral-chips-subtle-neutral-sf",
    "themeVar": "--color-chips-subtle-neutral-sf",
    "leaf": "chips-subtle-neutral-sf",
    "category": "Components",
    "values": {
      "User - Light": "#eef2f6",
      "User - Dark": "#202939",
      "Panel - Light": "#eef2f6",
      "Panel - Dark": "#202939"
    }
  },
  {
    "figmaName": "Components/Chips/Subtle/Neutral/chips-subtle-neutral-sf_hover",
    "cssVar": "--components-chips-subtle-neutral-chips-subtle-neutral-sf_hover",
    "themeVar": "--color-chips-subtle-neutral-sf_hover",
    "leaf": "chips-subtle-neutral-sf_hover",
    "category": "Components",
    "values": {
      "User - Light": "#e3e8ef",
      "User - Dark": "#121926",
      "Panel - Light": "#e3e8ef",
      "Panel - Dark": "#121926"
    }
  },
  {
    "figmaName": "Components/Chips/Subtle/Primary/chips-subtle-primary-fg",
    "cssVar": "--components-chips-subtle-primary-chips-subtle-primary-fg",
    "themeVar": "--color-chips-subtle-primary-fg",
    "leaf": "chips-subtle-primary-fg",
    "category": "Components",
    "values": {
      "User - Light": "#32448c",
      "User - Dark": "#00c864",
      "Panel - Light": "#002a8c",
      "Panel - Dark": "#004cff"
    }
  },
  {
    "figmaName": "Components/Chips/Subtle/Primary/chips-subtle-primary-sf",
    "cssVar": "--components-chips-subtle-primary-chips-subtle-primary-sf",
    "themeVar": "--color-chips-subtle-primary-sf",
    "leaf": "chips-subtle-primary-sf",
    "category": "Components",
    "values": {
      "User - Light": "#eff2ff",
      "User - Dark": "#00542a",
      "Panel - Light": "#e6edff",
      "Panel - Dark": "#00206b"
    }
  },
  {
    "figmaName": "Components/Chips/Subtle/Primary/chips-subtle-primary-sf_hover",
    "cssVar": "--components-chips-subtle-primary-chips-subtle-primary-sf_hover",
    "themeVar": "--color-chips-subtle-primary-sf_hover",
    "leaf": "chips-subtle-primary-sf_hover",
    "category": "Components",
    "values": {
      "User - Light": "#ccd6ff",
      "User - Dark": "#006e37",
      "Panel - Light": "#b0c8ff",
      "Panel - Dark": "#002a8c"
    }
  },
  {
    "figmaName": "Components/Chips/Subtle/Success/chips-subtle-success-fg",
    "cssVar": "--components-chips-subtle-success-chips-subtle-success-fg",
    "themeVar": "--color-chips-subtle-success-fg",
    "leaf": "chips-subtle-success-fg",
    "category": "Components",
    "values": {
      "User - Light": "#006e37",
      "User - Dark": "#00c864",
      "Panel - Light": "#006e37",
      "Panel - Dark": "#00c864"
    }
  },
  {
    "figmaName": "Components/Chips/Subtle/Success/chips-subtle-success-sf",
    "cssVar": "--components-chips-subtle-success-chips-subtle-success-sf",
    "themeVar": "--color-chips-subtle-success-sf",
    "leaf": "chips-subtle-success-sf",
    "category": "Components",
    "values": {
      "User - Light": "#e6faf0",
      "User - Dark": "#00542a",
      "Panel - Light": "#e6faf0",
      "Panel - Dark": "#00542a"
    }
  },
  {
    "figmaName": "Components/Chips/Subtle/Success/chips-subtle-success-sf_hover",
    "cssVar": "--components-chips-subtle-success-chips-subtle-success-sf_hover",
    "themeVar": "--color-chips-subtle-success-sf_hover",
    "leaf": "chips-subtle-success-sf_hover",
    "category": "Components",
    "values": {
      "User - Light": "#b0eecf",
      "User - Dark": "#006e37",
      "Panel - Light": "#b0eecf",
      "Panel - Dark": "#006e37"
    }
  },
  {
    "figmaName": "Components/Chips/Subtle/Violet/chips-subtle-violet-fg",
    "cssVar": "--components-chips-subtle-violet-chips-subtle-violet-fg",
    "themeVar": "--color-chips-subtle-violet-fg",
    "leaf": "chips-subtle-violet-fg",
    "category": "Components",
    "values": {
      "User - Light": "#5720b7",
      "User - Dark": "#875bf7",
      "Panel - Light": "#5720b7",
      "Panel - Dark": "#875bf7"
    }
  },
  {
    "figmaName": "Components/Chips/Subtle/Violet/chips-subtle-violet-sf",
    "cssVar": "--components-chips-subtle-violet-chips-subtle-violet-sf",
    "themeVar": "--color-chips-subtle-violet-sf",
    "leaf": "chips-subtle-violet-sf",
    "category": "Components",
    "values": {
      "User - Light": "#f5f3ff",
      "User - Dark": "#491c96",
      "Panel - Light": "#f5f3ff",
      "Panel - Dark": "#491c96"
    }
  },
  {
    "figmaName": "Components/Chips/Subtle/Violet/chips-subtle-violet-sf_hover",
    "cssVar": "--components-chips-subtle-violet-chips-subtle-violet-sf_hover",
    "themeVar": "--color-chips-subtle-violet-sf_hover",
    "leaf": "chips-subtle-violet-sf_hover",
    "category": "Components",
    "values": {
      "User - Light": "#ece9fe",
      "User - Dark": "#5720b7",
      "Panel - Light": "#ece9fe",
      "Panel - Dark": "#5720b7"
    }
  },
  {
    "figmaName": "Components/Chips/Subtle/Warning/chips-subtle-warning-fg",
    "cssVar": "--components-chips-subtle-warning-chips-subtle-warning-fg",
    "themeVar": "--color-chips-subtle-warning-fg",
    "leaf": "chips-subtle-warning-fg",
    "category": "Components",
    "values": {
      "User - Light": "#8c6c22",
      "User - Dark": "#ffc53d",
      "Panel - Light": "#8c6c22",
      "Panel - Dark": "#ffc53d"
    }
  },
  {
    "figmaName": "Components/Chips/Subtle/Warning/chips-subtle-warning-sf",
    "cssVar": "--components-chips-subtle-warning-chips-subtle-warning-sf",
    "themeVar": "--color-chips-subtle-warning-sf",
    "leaf": "chips-subtle-warning-sf",
    "category": "Components",
    "values": {
      "User - Light": "#fff9ec",
      "User - Dark": "#40310f",
      "Panel - Light": "#fff9ec",
      "Panel - Dark": "#40310f"
    }
  },
  {
    "figmaName": "Components/Chips/Subtle/Warning/chips-subtle-warning-sf_hover",
    "cssVar": "--components-chips-subtle-warning-chips-subtle-warning-sf_hover",
    "themeVar": "--color-chips-subtle-warning-sf_hover",
    "leaf": "chips-subtle-warning-sf_hover",
    "category": "Components",
    "values": {
      "User - Light": "#ffedc3",
      "User - Dark": "#6b531a",
      "Panel - Light": "#ffedc3",
      "Panel - Dark": "#6b531a"
    }
  },
  {
    "figmaName": "Components/Chips/Subtle/White/chips-subtle-white-fg",
    "cssVar": "--components-chips-subtle-white-chips-subtle-white-fg",
    "themeVar": "--color-chips-subtle-white-fg",
    "leaf": "chips-subtle-white-fg",
    "category": "Components",
    "values": {
      "User - Light": "#121926",
      "User - Dark": "#ffffff",
      "Panel - Light": "#121926",
      "Panel - Dark": "#ffffff"
    }
  },
  {
    "figmaName": "Components/Chips/Subtle/White/chips-subtle-white-sf",
    "cssVar": "--components-chips-subtle-white-chips-subtle-white-sf",
    "themeVar": "--color-chips-subtle-white-sf",
    "leaf": "chips-subtle-white-sf",
    "category": "Components",
    "values": {
      "User - Light": "rgba(255,255,255,0.98)",
      "User - Dark": "rgba(255,255,255,0.08)",
      "Panel - Light": "rgba(255,255,255,0.98)",
      "Panel - Dark": "rgba(255,255,255,0.08)"
    }
  },
  {
    "figmaName": "Components/Chips/Subtle/White/chips-subtle-white-sf_hover",
    "cssVar": "--components-chips-subtle-white-chips-subtle-white-sf_hover",
    "themeVar": "--color-chips-subtle-white-sf_hover",
    "leaf": "chips-subtle-white-sf_hover",
    "category": "Components",
    "values": {
      "User - Light": "rgba(255,255,255,0.92)",
      "User - Dark": "rgba(255,255,255,0.15)",
      "Panel - Light": "rgba(255,255,255,0.92)",
      "Panel - Dark": "rgba(255,255,255,0.15)"
    }
  },
  {
    "figmaName": "Components/Icons/icon-accent-blue",
    "cssVar": "--components-icons-icon-accent-blue",
    "themeVar": "--color-icon-accent-blue",
    "leaf": "icon-accent-blue",
    "category": "Components",
    "values": {
      "User - Light": "#5b7cff",
      "User - Dark": "#3370ff",
      "Panel - Light": "#004cff",
      "Panel - Dark": "#3370ff"
    }
  },
  {
    "figmaName": "Components/Icons/icon-accent-blue_hover",
    "cssVar": "--components-icons-icon-accent-blue_hover",
    "themeVar": "--color-icon-accent-blue_hover",
    "leaf": "icon-accent-blue_hover",
    "category": "Components",
    "values": {
      "User - Light": "#5371e8",
      "User - Dark": "#004cff",
      "Panel - Light": "#0045e8",
      "Panel - Dark": "#004cff"
    }
  },
  {
    "figmaName": "Components/Icons/icon-accent-brand",
    "cssVar": "--components-icons-icon-accent-brand",
    "themeVar": "--color-icon-accent-brand",
    "leaf": "icon-accent-brand",
    "category": "Components",
    "values": {
      "User - Light": "#00c864",
      "User - Dark": "#33d383",
      "Panel - Light": "#00c864",
      "Panel - Dark": "#33d383"
    }
  },
  {
    "figmaName": "Components/Icons/icon-accent-brand_hover",
    "cssVar": "--components-icons-icon-accent-brand_hover",
    "themeVar": "--color-icon-accent-brand_hover",
    "leaf": "icon-accent-brand_hover",
    "category": "Components",
    "values": {
      "User - Light": "#00b65b",
      "User - Dark": "#00c864",
      "Panel - Light": "#00b65b",
      "Panel - Dark": "#00c864"
    }
  },
  {
    "figmaName": "Components/Icons/icon-accent-pink",
    "cssVar": "--components-icons-icon-accent-pink",
    "themeVar": "--color-icon-accent-pink",
    "leaf": "icon-accent-pink",
    "category": "Components",
    "values": {
      "User - Light": "#ee46bc",
      "User - Dark": "#f670c7",
      "Panel - Light": "#ee46bc",
      "Panel - Dark": "#f670c7"
    }
  },
  {
    "figmaName": "Components/Icons/icon-accent-pink_hover",
    "cssVar": "--components-icons-icon-accent-pink_hover",
    "themeVar": "--color-icon-accent-pink_hover",
    "leaf": "icon-accent-pink_hover",
    "category": "Components",
    "values": {
      "User - Light": "#dd2590",
      "User - Dark": "#ee46bc",
      "Panel - Light": "#dd2590",
      "Panel - Dark": "#ee46bc"
    }
  },
  {
    "figmaName": "Components/Icons/icon-accent-violet",
    "cssVar": "--components-icons-icon-accent-violet",
    "themeVar": "--color-icon-accent-violet",
    "leaf": "icon-accent-violet",
    "category": "Components",
    "values": {
      "User - Light": "#875bf7",
      "User - Dark": "#a48afb",
      "Panel - Light": "#875bf7",
      "Panel - Dark": "#a48afb"
    }
  },
  {
    "figmaName": "Components/Icons/icon-accent-violet_hover",
    "cssVar": "--components-icons-icon-accent-violet_hover",
    "themeVar": "--color-icon-accent-violet_hover",
    "leaf": "icon-accent-violet_hover",
    "category": "Components",
    "values": {
      "User - Light": "#7839ee",
      "User - Dark": "#875bf7",
      "Panel - Light": "#7839ee",
      "Panel - Dark": "#875bf7"
    }
  },
  {
    "figmaName": "Components/Icons/icon-error",
    "cssVar": "--components-icons-icon-error",
    "themeVar": "--color-icon-error",
    "leaf": "icon-error",
    "category": "Components",
    "values": {
      "User - Light": "#fb2c36",
      "User - Dark": "#fc565e",
      "Panel - Light": "#fb2c36",
      "Panel - Dark": "#fc565e"
    }
  },
  {
    "figmaName": "Components/Icons/icon-error_hover",
    "cssVar": "--components-icons-icon-error_hover",
    "themeVar": "--color-icon-error_hover",
    "leaf": "icon-error_hover",
    "category": "Components",
    "values": {
      "User - Light": "#e42831",
      "User - Dark": "#fb2c36",
      "Panel - Light": "#e42831",
      "Panel - Dark": "#fb2c36"
    }
  },
  {
    "figmaName": "Components/Icons/icon-primary",
    "cssVar": "--components-icons-icon-primary",
    "themeVar": "--color-icon-primary",
    "leaf": "icon-primary",
    "category": "Components",
    "values": {
      "User - Light": "#222c53",
      "User - Dark": "#fcfcfd",
      "Panel - Light": "#202939",
      "Panel - Dark": "#fcfcfd"
    }
  },
  {
    "figmaName": "Components/Icons/icon-primary_hover",
    "cssVar": "--components-icons-icon-primary_hover",
    "themeVar": "--color-icon-primary_hover",
    "leaf": "icon-primary_hover",
    "category": "Components",
    "values": {
      "User - Light": "#141a3a",
      "User - Dark": "#f8fafc",
      "Panel - Light": "#121926",
      "Panel - Dark": "#f8fafc"
    }
  },
  {
    "figmaName": "Components/Icons/icon-quaternary",
    "cssVar": "--components-icons-icon-quaternary",
    "themeVar": "--color-icon-quaternary",
    "leaf": "icon-quaternary",
    "category": "Components",
    "values": {
      "User - Light": "#7c8abf",
      "User - Dark": "#697586",
      "Panel - Light": "#9aa4b2",
      "Panel - Dark": "#697586"
    }
  },
  {
    "figmaName": "Components/Icons/icon-quaternary_hover",
    "cssVar": "--components-icons-icon-quaternary_hover",
    "themeVar": "--color-icon-quaternary_hover",
    "leaf": "icon-quaternary_hover",
    "category": "Components",
    "values": {
      "User - Light": "#596aa6",
      "User - Dark": "#4b5565",
      "Panel - Light": "#697586",
      "Panel - Dark": "#4b5565"
    }
  },
  {
    "figmaName": "Components/Icons/icon-quinary",
    "cssVar": "--components-icons-icon-quinary",
    "themeVar": "--color-icon-quinary",
    "leaf": "icon-quinary",
    "category": "Components",
    "values": {
      "User - Light": "#a4aed7",
      "User - Dark": "#9aa4b2",
      "Panel - Light": "#cdd5df",
      "Panel - Dark": "#9aa4b2"
    }
  },
  {
    "figmaName": "Components/Icons/icon-quinary_hover",
    "cssVar": "--components-icons-icon-quinary_hover",
    "themeVar": "--color-icon-quinary_hover",
    "leaf": "icon-quinary_hover",
    "category": "Components",
    "values": {
      "User - Light": "#7c8abf",
      "User - Dark": "#697586",
      "Panel - Light": "#9aa4b2",
      "Panel - Dark": "#697586"
    }
  },
  {
    "figmaName": "Components/Icons/icon-secondary",
    "cssVar": "--components-icons-icon-secondary",
    "themeVar": "--color-icon-secondary",
    "leaf": "icon-secondary",
    "category": "Components",
    "values": {
      "User - Light": "#303e6b",
      "User - Dark": "#eef2f6",
      "Panel - Light": "#697586",
      "Panel - Dark": "#eef2f6"
    }
  },
  {
    "figmaName": "Components/Icons/icon-secondary_hover",
    "cssVar": "--components-icons-icon-secondary_hover",
    "themeVar": "--color-icon-secondary_hover",
    "leaf": "icon-secondary_hover",
    "category": "Components",
    "values": {
      "User - Light": "#222c53",
      "User - Dark": "#e3e8ef",
      "Panel - Light": "#4b5565",
      "Panel - Dark": "#e3e8ef"
    }
  },
  {
    "figmaName": "Components/Icons/icon-tertiary",
    "cssVar": "--components-icons-icon-tertiary",
    "themeVar": "--color-icon-tertiary",
    "leaf": "icon-tertiary",
    "category": "Components",
    "values": {
      "User - Light": "#596aa6",
      "User - Dark": "#cdd5df",
      "Panel - Light": "#697586",
      "Panel - Dark": "#cdd5df"
    }
  },
  {
    "figmaName": "Components/Icons/icon-tertiary_hover",
    "cssVar": "--components-icons-icon-tertiary_hover",
    "themeVar": "--color-icon-tertiary_hover",
    "leaf": "icon-tertiary_hover",
    "category": "Components",
    "values": {
      "User - Light": "#3e4e83",
      "User - Dark": "#9aa4b2",
      "Panel - Light": "#4b5565",
      "Panel - Dark": "#9aa4b2"
    }
  },
  {
    "figmaName": "Components/Icons/icon-warning",
    "cssVar": "--components-icons-icon-warning",
    "themeVar": "--color-icon-warning",
    "leaf": "icon-warning",
    "category": "Components",
    "values": {
      "User - Light": "#ffc53d",
      "User - Dark": "#ffd164",
      "Panel - Light": "#ffc53d",
      "Panel - Dark": "#ffd164"
    }
  },
  {
    "figmaName": "Components/Icons/icon-warning_hover",
    "cssVar": "--components-icons-icon-warning_hover",
    "themeVar": "--color-icon-warning_hover",
    "leaf": "icon-warning_hover",
    "category": "Components",
    "values": {
      "User - Light": "#e8b338",
      "User - Dark": "#ffc53d",
      "Panel - Light": "#e8b338",
      "Panel - Dark": "#ffc53d"
    }
  },
  {
    "figmaName": "Components/Icons/icon-white",
    "cssVar": "--components-icons-icon-white",
    "themeVar": "--color-icon-white",
    "leaf": "icon-white",
    "category": "Components",
    "values": {
      "User - Light": "#ffffff",
      "User - Dark": "#ffffff",
      "Panel - Light": "#ffffff",
      "Panel - Dark": "#ffffff"
    }
  },
  {
    "figmaName": "Components/Icons/icon_disabled",
    "cssVar": "--components-icons-icon_disabled",
    "themeVar": "--color-icon_disabled",
    "leaf": "icon_disabled",
    "category": "Components",
    "values": {
      "User - Light": "#bfbfbf",
      "User - Dark": "#595959",
      "Panel - Light": "#bfbfbf",
      "Panel - Dark": "#595959"
    }
  },
  {
    "figmaName": "Content/text-accent-brand",
    "cssVar": "--content-text-accent-brand",
    "themeVar": "--color-text-accent-brand",
    "leaf": "text-accent-brand",
    "category": "Content",
    "values": {
      "User - Light": "#5b7cff",
      "User - Dark": "#33d383",
      "Panel - Light": "#00c864",
      "Panel - Dark": "#33d383"
    }
  },
  {
    "figmaName": "Content/text-accent-brand_hover",
    "cssVar": "--content-text-accent-brand_hover",
    "themeVar": "--color-text-accent-brand_hover",
    "leaf": "text-accent-brand_hover",
    "category": "Content",
    "values": {
      "User - Light": "#5371e8",
      "User - Dark": "#00c864",
      "Panel - Light": "#00b65b",
      "Panel - Dark": "#00c864"
    }
  },
  {
    "figmaName": "Content/text-accent-pink",
    "cssVar": "--content-text-accent-pink",
    "themeVar": "--color-text-accent-pink",
    "leaf": "text-accent-pink",
    "category": "Content",
    "values": {
      "User - Light": "#ee46bc",
      "User - Dark": "#f670c7",
      "Panel - Light": "#ee46bc",
      "Panel - Dark": "#f670c7"
    }
  },
  {
    "figmaName": "Content/text-accent-pink_hover",
    "cssVar": "--content-text-accent-pink_hover",
    "themeVar": "--color-text-accent-pink_hover",
    "leaf": "text-accent-pink_hover",
    "category": "Content",
    "values": {
      "User - Light": "#dd2590",
      "User - Dark": "#ee46bc",
      "Panel - Light": "#dd2590",
      "Panel - Dark": "#ee46bc"
    }
  },
  {
    "figmaName": "Content/text-accent-violet",
    "cssVar": "--content-text-accent-violet",
    "themeVar": "--color-text-accent-violet",
    "leaf": "text-accent-violet",
    "category": "Content",
    "values": {
      "User - Light": "#875bf7",
      "User - Dark": "#a48afb",
      "Panel - Light": "#875bf7",
      "Panel - Dark": "#a48afb"
    }
  },
  {
    "figmaName": "Content/text-accent-violet_hover",
    "cssVar": "--content-text-accent-violet_hover",
    "themeVar": "--color-text-accent-violet_hover",
    "leaf": "text-accent-violet_hover",
    "category": "Content",
    "values": {
      "User - Light": "#7839ee",
      "User - Dark": "#875bf7",
      "Panel - Light": "#7839ee",
      "Panel - Dark": "#875bf7"
    }
  },
  {
    "figmaName": "Content/text-error",
    "cssVar": "--content-text-error",
    "themeVar": "--color-text-error",
    "leaf": "text-error",
    "category": "Content",
    "values": {
      "User - Light": "#fb2c36",
      "User - Dark": "#fc565e",
      "Panel - Light": "#fb2c36",
      "Panel - Dark": "#fc565e"
    }
  },
  {
    "figmaName": "Content/text-error_hover",
    "cssVar": "--content-text-error_hover",
    "themeVar": "--color-text-error_hover",
    "leaf": "text-error_hover",
    "category": "Content",
    "values": {
      "User - Light": "#e42831",
      "User - Dark": "#fb2c36",
      "Panel - Light": "#e42831",
      "Panel - Dark": "#fb2c36"
    }
  },
  {
    "figmaName": "Content/text-primary",
    "cssVar": "--content-text-primary",
    "themeVar": "--color-text-primary",
    "leaf": "text-primary",
    "category": "Content",
    "values": {
      "User - Light": "#222c53",
      "User - Dark": "#fcfcfd",
      "Panel - Light": "#202939",
      "Panel - Dark": "#fcfcfd"
    }
  },
  {
    "figmaName": "Content/text-primary-on-brand",
    "cssVar": "--content-text-primary-on-brand",
    "themeVar": "--color-text-primary-on-brand",
    "leaf": "text-primary-on-brand",
    "category": "Content",
    "values": {
      "User - Light": "#ffffff",
      "User - Dark": "#ffffff",
      "Panel - Light": "#ffffff",
      "Panel - Dark": "#ffffff"
    }
  },
  {
    "figmaName": "Content/text-primary_hover",
    "cssVar": "--content-text-primary_hover",
    "themeVar": "--color-text-primary_hover",
    "leaf": "text-primary_hover",
    "category": "Content",
    "values": {
      "User - Light": "#141a3a",
      "User - Dark": "#eef2f6",
      "Panel - Light": "#121926",
      "Panel - Dark": "#eef2f6"
    }
  },
  {
    "figmaName": "Content/text-quaternary",
    "cssVar": "--content-text-quaternary",
    "themeVar": "--color-text-quaternary",
    "leaf": "text-quaternary",
    "category": "Content",
    "values": {
      "User - Light": "#7c8abf",
      "User - Dark": "#9aa4b2",
      "Panel - Light": "#9aa4b2",
      "Panel - Dark": "#9aa4b2"
    }
  },
  {
    "figmaName": "Content/text-quaternary_hover",
    "cssVar": "--content-text-quaternary_hover",
    "themeVar": "--color-text-quaternary_hover",
    "leaf": "text-quaternary_hover",
    "category": "Content",
    "values": {
      "User - Light": "#596aa6",
      "User - Dark": "#697586",
      "Panel - Light": "#697586",
      "Panel - Dark": "#697586"
    }
  },
  {
    "figmaName": "Content/text-quinary",
    "cssVar": "--content-text-quinary",
    "themeVar": "--color-text-quinary",
    "leaf": "text-quinary",
    "category": "Content",
    "values": {
      "User - Light": "#a4aed7",
      "User - Dark": "#cdd5df",
      "Panel - Light": "#cdd5df",
      "Panel - Dark": "#cdd5df"
    }
  },
  {
    "figmaName": "Content/text-quinary_hover",
    "cssVar": "--content-text-quinary_hover",
    "themeVar": "--color-text-quinary_hover",
    "leaf": "text-quinary_hover",
    "category": "Content",
    "values": {
      "User - Light": "#7c8abf",
      "User - Dark": "#9aa4b2",
      "Panel - Light": "#9aa4b2",
      "Panel - Dark": "#9aa4b2"
    }
  },
  {
    "figmaName": "Content/text-secondary",
    "cssVar": "--content-text-secondary",
    "themeVar": "--color-text-secondary",
    "leaf": "text-secondary",
    "category": "Content",
    "values": {
      "User - Light": "#303e6b",
      "User - Dark": "#eef2f6",
      "Panel - Light": "#364152",
      "Panel - Dark": "#eef2f6"
    }
  },
  {
    "figmaName": "Content/text-secondary_hover",
    "cssVar": "--content-text-secondary_hover",
    "themeVar": "--color-text-secondary_hover",
    "leaf": "text-secondary_hover",
    "category": "Content",
    "values": {
      "User - Light": "#222c53",
      "User - Dark": "#e3e8ef",
      "Panel - Light": "#202939",
      "Panel - Dark": "#e3e8ef"
    }
  },
  {
    "figmaName": "Content/text-success",
    "cssVar": "--content-text-success",
    "themeVar": "--color-text-success",
    "leaf": "text-success",
    "category": "Content",
    "values": {
      "User - Light": "#00c864",
      "User - Dark": "#3370ff",
      "Panel - Light": "#004cff",
      "Panel - Dark": "#004cff"
    }
  },
  {
    "figmaName": "Content/text-success_hover",
    "cssVar": "--content-text-success_hover",
    "themeVar": "--color-text-success_hover",
    "leaf": "text-success_hover",
    "category": "Content",
    "values": {
      "User - Light": "#00b65b",
      "User - Dark": "#004cff",
      "Panel - Light": "#0045e8",
      "Panel - Dark": "#0045e8"
    }
  },
  {
    "figmaName": "Content/text-tertiary",
    "cssVar": "--content-text-tertiary",
    "themeVar": "--color-text-tertiary",
    "leaf": "text-tertiary",
    "category": "Content",
    "values": {
      "User - Light": "#596aa6",
      "User - Dark": "#cdd5df",
      "Panel - Light": "#697586",
      "Panel - Dark": "#cdd5df"
    }
  },
  {
    "figmaName": "Content/text-tertiary_hover",
    "cssVar": "--content-text-tertiary_hover",
    "themeVar": "--color-text-tertiary_hover",
    "leaf": "text-tertiary_hover",
    "category": "Content",
    "values": {
      "User - Light": "#3e4e83",
      "User - Dark": "#9aa4b2",
      "Panel - Light": "#4b5565",
      "Panel - Dark": "#9aa4b2"
    }
  },
  {
    "figmaName": "Content/text-warning",
    "cssVar": "--content-text-warning",
    "themeVar": "--color-text-warning",
    "leaf": "text-warning",
    "category": "Content",
    "values": {
      "User - Light": "#ffc53d",
      "User - Dark": "#ffd164",
      "Panel - Light": "#ffc53d",
      "Panel - Dark": "#ffd164"
    }
  },
  {
    "figmaName": "Content/text-warning_hover",
    "cssVar": "--content-text-warning_hover",
    "themeVar": "--color-text-warning_hover",
    "leaf": "text-warning_hover",
    "category": "Content",
    "values": {
      "User - Light": "#e8b338",
      "User - Dark": "#ffc53d",
      "Panel - Light": "#e8b338",
      "Panel - Dark": "#ffc53d"
    }
  },
  {
    "figmaName": "Content/text-white",
    "cssVar": "--content-text-white",
    "themeVar": "--color-text-white",
    "leaf": "text-white",
    "category": "Content",
    "values": {
      "User - Light": "#ffffff",
      "User - Dark": "#ffffff",
      "Panel - Light": "#ffffff",
      "Panel - Dark": "#ffffff"
    }
  },
  {
    "figmaName": "Content/text_disabled",
    "cssVar": "--content-text_disabled",
    "themeVar": "--color-text_disabled",
    "leaf": "text_disabled",
    "category": "Content",
    "values": {
      "User - Light": "#bfbfbf",
      "User - Dark": "#595959",
      "Panel - Light": "#bfbfbf",
      "Panel - Dark": "#595959"
    }
  },
  {
    "figmaName": "Effects/Shadows/2xl",
    "cssVar": "--effects-shadows-2xl",
    "themeVar": "--color-2xl",
    "leaf": "2xl",
    "category": "Effects",
    "values": {
      "User - Light": "rgba(13,16,20,0.72)",
      "User - Dark": "rgba(13,16,20,0.72)",
      "Panel - Light": "rgba(13,16,20,0.72)",
      "Panel - Dark": "rgba(13,16,20,0.72)"
    }
  },
  {
    "figmaName": "Effects/Shadows/2xs",
    "cssVar": "--effects-shadows-2xs",
    "themeVar": "--color-2xs",
    "leaf": "2xs",
    "category": "Effects",
    "values": {
      "User - Light": "rgba(13,16,20,0.08)",
      "User - Dark": "rgba(13,16,20,0.08)",
      "Panel - Light": "rgba(13,16,20,0.08)",
      "Panel - Dark": "rgba(13,16,20,0.08)"
    }
  },
  {
    "figmaName": "Effects/Shadows/3xs",
    "cssVar": "--effects-shadows-3xs",
    "themeVar": "--color-3xs",
    "leaf": "3xs",
    "category": "Effects",
    "values": {
      "User - Light": "rgba(13,16,20,0.04)",
      "User - Dark": "rgba(13,16,20,0.04)",
      "Panel - Light": "rgba(13,16,20,0.04)",
      "Panel - Dark": "rgba(13,16,20,0.04)"
    }
  },
  {
    "figmaName": "Effects/Shadows/lg",
    "cssVar": "--effects-shadows-lg",
    "themeVar": "--color-lg",
    "leaf": "lg",
    "category": "Effects",
    "values": {
      "User - Light": "rgba(13,16,20,0.52)",
      "User - Dark": "rgba(13,16,20,0.52)",
      "Panel - Light": "rgba(13,16,20,0.52)",
      "Panel - Dark": "rgba(13,16,20,0.52)"
    }
  },
  {
    "figmaName": "Effects/Shadows/md",
    "cssVar": "--effects-shadows-md",
    "themeVar": "--color-md",
    "leaf": "md",
    "category": "Effects",
    "values": {
      "User - Light": "rgba(13,16,20,0.4)",
      "User - Dark": "rgba(13,16,20,0.4)",
      "Panel - Light": "rgba(13,16,20,0.4)",
      "Panel - Dark": "rgba(13,16,20,0.4)"
    }
  },
  {
    "figmaName": "Effects/Shadows/sm",
    "cssVar": "--effects-shadows-sm",
    "themeVar": "--color-sm",
    "leaf": "sm",
    "category": "Effects",
    "values": {
      "User - Light": "rgba(13,16,20,0.32)",
      "User - Dark": "rgba(13,16,20,0.32)",
      "Panel - Light": "rgba(13,16,20,0.32)",
      "Panel - Dark": "rgba(13,16,20,0.32)"
    }
  },
  {
    "figmaName": "Effects/Shadows/xl",
    "cssVar": "--effects-shadows-xl",
    "themeVar": "--color-xl",
    "leaf": "xl",
    "category": "Effects",
    "values": {
      "User - Light": "rgba(13,16,20,0.64)",
      "User - Dark": "rgba(13,16,20,0.64)",
      "Panel - Light": "rgba(13,16,20,0.64)",
      "Panel - Dark": "rgba(13,16,20,0.64)"
    }
  },
  {
    "figmaName": "Effects/Shadows/xs",
    "cssVar": "--effects-shadows-xs",
    "themeVar": "--color-xs",
    "leaf": "xs",
    "category": "Effects",
    "values": {
      "User - Light": "rgba(13,16,20,0.16)",
      "User - Dark": "rgba(13,16,20,0.16)",
      "Panel - Light": "rgba(13,16,20,0.16)",
      "Panel - Dark": "rgba(13,16,20,0.16)"
    }
  },
  {
    "figmaName": "Foreground/fg-accent-blue_hover",
    "cssVar": "--foreground-fg-accent-blue_hover",
    "themeVar": "--color-fg-accent-blue_hover",
    "leaf": "fg-accent-blue_hover",
    "category": "Foreground",
    "values": {
      "User - Light": "#00b65b",
      "User - Dark": "#004cff",
      "Panel - Light": "#0045e8",
      "Panel - Dark": "#004cff"
    }
  },
  {
    "figmaName": "Foreground/fg-accent-brand",
    "cssVar": "--foreground-fg-accent-brand",
    "themeVar": "--color-fg-accent-brand",
    "leaf": "fg-accent-brand",
    "category": "Foreground",
    "values": {
      "User - Light": "#5b7cff",
      "User - Dark": "#33d383",
      "Panel - Light": "#00c864",
      "Panel - Dark": "#33d383"
    }
  },
  {
    "figmaName": "Foreground/fg-accent-brand_hover",
    "cssVar": "--foreground-fg-accent-brand_hover",
    "themeVar": "--color-fg-accent-brand_hover",
    "leaf": "fg-accent-brand_hover",
    "category": "Foreground",
    "values": {
      "User - Light": "#5371e8",
      "User - Dark": "#00c864",
      "Panel - Light": "#00b65b",
      "Panel - Dark": "#00c864"
    }
  },
  {
    "figmaName": "Foreground/fg-error",
    "cssVar": "--foreground-fg-error",
    "themeVar": "--color-fg-error",
    "leaf": "fg-error",
    "category": "Foreground",
    "values": {
      "User - Light": "#fb2c36",
      "User - Dark": "#fc565e",
      "Panel - Light": "#fb2c36",
      "Panel - Dark": "#fc565e"
    }
  },
  {
    "figmaName": "Foreground/fg-error_hover",
    "cssVar": "--foreground-fg-error_hover",
    "themeVar": "--color-fg-error_hover",
    "leaf": "fg-error_hover",
    "category": "Foreground",
    "values": {
      "User - Light": "#e42831",
      "User - Dark": "#fb2c36",
      "Panel - Light": "#e42831",
      "Panel - Dark": "#fb2c36"
    }
  },
  {
    "figmaName": "Foreground/fg-info-violet_hover",
    "cssVar": "--foreground-fg-info-violet_hover",
    "themeVar": "--color-fg-info-violet_hover",
    "leaf": "fg-info-violet_hover",
    "category": "Foreground",
    "values": {
      "User - Light": "#7839ee",
      "User - Dark": "#875bf7",
      "Panel - Light": "#7839ee",
      "Panel - Dark": "#875bf7"
    }
  },
  {
    "figmaName": "Foreground/fg-invert",
    "cssVar": "--foreground-fg-invert",
    "themeVar": "--color-fg-invert",
    "leaf": "fg-invert",
    "category": "Foreground",
    "values": {
      "User - Light": "#ffffff",
      "User - Dark": "#0a0a0a",
      "Panel - Light": "#ffffff",
      "Panel - Dark": "#0a0a0a"
    }
  },
  {
    "figmaName": "Foreground/fg-placeholder",
    "cssVar": "--foreground-fg-placeholder",
    "themeVar": "--color-fg-placeholder",
    "leaf": "fg-placeholder",
    "category": "Foreground",
    "values": {
      "User - Light": "#a4aed7",
      "User - Dark": "#364152",
      "Panel - Light": "#697586",
      "Panel - Dark": "#364152"
    }
  },
  {
    "figmaName": "Foreground/fg-primary",
    "cssVar": "--foreground-fg-primary",
    "themeVar": "--color-fg-primary",
    "leaf": "fg-primary",
    "category": "Foreground",
    "values": {
      "User - Light": "#222c53",
      "User - Dark": "#fcfcfd",
      "Panel - Light": "#202939",
      "Panel - Dark": "#fcfcfd"
    }
  },
  {
    "figmaName": "Foreground/fg-primary_hover",
    "cssVar": "--foreground-fg-primary_hover",
    "themeVar": "--color-fg-primary_hover",
    "leaf": "fg-primary_hover",
    "category": "Foreground",
    "values": {
      "User - Light": "#141a3a",
      "User - Dark": "#f8fafc",
      "Panel - Light": "#121926",
      "Panel - Dark": "#f8fafc"
    }
  },
  {
    "figmaName": "Foreground/fg-quaternary",
    "cssVar": "--foreground-fg-quaternary",
    "themeVar": "--color-fg-quaternary",
    "leaf": "fg-quaternary",
    "category": "Foreground",
    "values": {
      "User - Light": "#7c8abf",
      "User - Dark": "#9aa4b2",
      "Panel - Light": "#9aa4b2",
      "Panel - Dark": "#9aa4b2"
    }
  },
  {
    "figmaName": "Foreground/fg-quaternary_hover",
    "cssVar": "--foreground-fg-quaternary_hover",
    "themeVar": "--color-fg-quaternary_hover",
    "leaf": "fg-quaternary_hover",
    "category": "Foreground",
    "values": {
      "User - Light": "#596aa6",
      "User - Dark": "#697586",
      "Panel - Light": "#697586",
      "Panel - Dark": "#697586"
    }
  },
  {
    "figmaName": "Foreground/fg-quinary",
    "cssVar": "--foreground-fg-quinary",
    "themeVar": "--color-fg-quinary",
    "leaf": "fg-quinary",
    "category": "Foreground",
    "values": {
      "User - Light": "#a4aed7",
      "User - Dark": "#cdd5df",
      "Panel - Light": "#cdd5df",
      "Panel - Dark": "#cdd5df"
    }
  },
  {
    "figmaName": "Foreground/fg-quinary_hover",
    "cssVar": "--foreground-fg-quinary_hover",
    "themeVar": "--color-fg-quinary_hover",
    "leaf": "fg-quinary_hover",
    "category": "Foreground",
    "values": {
      "User - Light": "#7c8abf",
      "User - Dark": "#9aa4b2",
      "Panel - Light": "#9aa4b2",
      "Panel - Dark": "#9aa4b2"
    }
  },
  {
    "figmaName": "Foreground/fg-secondary",
    "cssVar": "--foreground-fg-secondary",
    "themeVar": "--color-fg-secondary",
    "leaf": "fg-secondary",
    "category": "Foreground",
    "values": {
      "User - Light": "#303e6b",
      "User - Dark": "#eef2f6",
      "Panel - Light": "#364152",
      "Panel - Dark": "#eef2f6"
    }
  },
  {
    "figmaName": "Foreground/fg-secondary_hover",
    "cssVar": "--foreground-fg-secondary_hover",
    "themeVar": "--color-fg-secondary_hover",
    "leaf": "fg-secondary_hover",
    "category": "Foreground",
    "values": {
      "User - Light": "#222c53",
      "User - Dark": "#e3e8ef",
      "Panel - Light": "#202939",
      "Panel - Dark": "#e3e8ef"
    }
  },
  {
    "figmaName": "Foreground/fg-success",
    "cssVar": "--foreground-fg-success",
    "themeVar": "--color-fg-success",
    "leaf": "fg-success",
    "category": "Foreground",
    "values": {
      "User - Light": "#00c864",
      "User - Dark": "#3370ff",
      "Panel - Light": "#004cff",
      "Panel - Dark": "#3370ff"
    }
  },
  {
    "figmaName": "Foreground/fg-tertiary",
    "cssVar": "--foreground-fg-tertiary",
    "themeVar": "--color-fg-tertiary",
    "leaf": "fg-tertiary",
    "category": "Foreground",
    "values": {
      "User - Light": "#596aa6",
      "User - Dark": "#cdd5df",
      "Panel - Light": "#697586",
      "Panel - Dark": "#cdd5df"
    }
  },
  {
    "figmaName": "Foreground/fg-tertiary_hover",
    "cssVar": "--foreground-fg-tertiary_hover",
    "themeVar": "--color-fg-tertiary_hover",
    "leaf": "fg-tertiary_hover",
    "category": "Foreground",
    "values": {
      "User - Light": "#3e4e83",
      "User - Dark": "#9aa4b2",
      "Panel - Light": "#4b5565",
      "Panel - Dark": "#cdd5df"
    }
  },
  {
    "figmaName": "Foreground/fg-violet",
    "cssVar": "--foreground-fg-violet",
    "themeVar": "--color-fg-violet",
    "leaf": "fg-violet",
    "category": "Foreground",
    "values": {
      "User - Light": "#875bf7",
      "User - Dark": "#a48afb",
      "Panel - Light": "#875bf7",
      "Panel - Dark": "#a48afb"
    }
  },
  {
    "figmaName": "Foreground/fg-warning",
    "cssVar": "--foreground-fg-warning",
    "themeVar": "--color-fg-warning",
    "leaf": "fg-warning",
    "category": "Foreground",
    "values": {
      "User - Light": "#ffc53d",
      "User - Dark": "#ffd164",
      "Panel - Light": "#ffc53d",
      "Panel - Dark": "#ffd164"
    }
  },
  {
    "figmaName": "Foreground/fg-warning_hover",
    "cssVar": "--foreground-fg-warning_hover",
    "themeVar": "--color-fg-warning_hover",
    "leaf": "fg-warning_hover",
    "category": "Foreground",
    "values": {
      "User - Light": "#e8b338",
      "User - Dark": "#ffc53d",
      "Panel - Light": "#e8b338",
      "Panel - Dark": "#ffc53d"
    }
  },
  {
    "figmaName": "Foreground/fg-white",
    "cssVar": "--foreground-fg-white",
    "themeVar": "--color-fg-white",
    "leaf": "fg-white",
    "category": "Foreground",
    "values": {
      "User - Light": "#ffffff",
      "User - Dark": "#ffffff",
      "Panel - Light": "#ffffff",
      "Panel - Dark": "#ffffff"
    }
  },
  {
    "figmaName": "Foreground/fg_disabled",
    "cssVar": "--foreground-fg_disabled",
    "themeVar": "--color-fg_disabled",
    "leaf": "fg_disabled",
    "category": "Foreground",
    "values": {
      "User - Light": "#bfbfbf",
      "User - Dark": "#595959",
      "Panel - Light": "#bfbfbf",
      "Panel - Dark": "#595959"
    }
  },
  {
    "figmaName": "Stroke/stroke-accent-blue-subtle",
    "cssVar": "--stroke-stroke-accent-blue-subtle",
    "themeVar": "--color-stroke-accent-blue-subtle",
    "leaf": "stroke-accent-blue-subtle",
    "category": "Stroke",
    "values": {
      "User - Light": "#91a7ff",
      "User - Dark": "#002a8c",
      "Panel - Light": "#5487ff",
      "Panel - Dark": "#002a8c"
    }
  },
  {
    "figmaName": "Stroke/stroke-accent-blue-subtle_hover",
    "cssVar": "--stroke-stroke-accent-blue-subtle_hover",
    "themeVar": "--color-stroke-accent-blue-subtle_hover",
    "leaf": "stroke-accent-blue-subtle_hover",
    "category": "Stroke",
    "values": {
      "User - Light": "#7c96ff",
      "User - Dark": "#0036b5",
      "Panel - Light": "#3370ff",
      "Panel - Dark": "#0036b5"
    }
  },
  {
    "figmaName": "Stroke/stroke-brand-blue",
    "cssVar": "--stroke-stroke-brand-blue",
    "themeVar": "--color-stroke-brand-blue",
    "leaf": "stroke-brand-blue",
    "category": "Stroke",
    "values": {
      "User - Light": "#5b7cff",
      "User - Dark": "#3370ff",
      "Panel - Light": "#004cff",
      "Panel - Dark": "#3370ff"
    }
  },
  {
    "figmaName": "Stroke/stroke-brand-blue_hover",
    "cssVar": "--stroke-stroke-brand-blue_hover",
    "themeVar": "--color-stroke-brand-blue_hover",
    "leaf": "stroke-brand-blue_hover",
    "category": "Stroke",
    "values": {
      "User - Light": "#5371e8",
      "User - Dark": "#004cff",
      "Panel - Light": "#0045e8",
      "Panel - Dark": "#004cff"
    }
  },
  {
    "figmaName": "Stroke/stroke-error",
    "cssVar": "--stroke-stroke-error",
    "themeVar": "--color-stroke-error",
    "leaf": "stroke-error",
    "category": "Stroke",
    "values": {
      "User - Light": "#fb2c36",
      "User - Dark": "#fc565e",
      "Panel - Light": "#fb2c36",
      "Panel - Dark": "#fc565e"
    }
  },
  {
    "figmaName": "Stroke/stroke-error-subtle",
    "cssVar": "--stroke-stroke-error-subtle",
    "themeVar": "--color-stroke-error-subtle",
    "leaf": "stroke-error-subtle",
    "category": "Stroke",
    "values": {
      "User - Light": "#fc7278",
      "User - Dark": "#8a181e",
      "Panel - Light": "#fc7278",
      "Panel - Dark": "#8a181e"
    }
  },
  {
    "figmaName": "Stroke/stroke-error-subtle_hover",
    "cssVar": "--stroke-stroke-error-subtle_hover",
    "themeVar": "--color-stroke-error-subtle_hover",
    "leaf": "stroke-error-subtle_hover",
    "category": "Stroke",
    "values": {
      "User - Light": "#fc565e",
      "User - Dark": "#b21f26",
      "Panel - Light": "#fc565e",
      "Panel - Dark": "#b21f26"
    }
  },
  {
    "figmaName": "Stroke/stroke-error_hover",
    "cssVar": "--stroke-stroke-error_hover",
    "themeVar": "--color-stroke-error_hover",
    "leaf": "stroke-error_hover",
    "category": "Stroke",
    "values": {
      "User - Light": "#e42831",
      "User - Dark": "#fb2c36",
      "Panel - Light": "#e42831",
      "Panel - Dark": "#fb2c36"
    }
  },
  {
    "figmaName": "Stroke/stroke-neutral",
    "cssVar": "--stroke-stroke-neutral",
    "themeVar": "--color-stroke-neutral",
    "leaf": "stroke-neutral",
    "category": "Stroke",
    "values": {
      "User - Light": "#141a3a",
      "User - Dark": "#fcfcfd",
      "Panel - Light": "#121926",
      "Panel - Dark": "#fcfcfd"
    }
  },
  {
    "figmaName": "Stroke/stroke-neutral_hover",
    "cssVar": "--stroke-stroke-neutral_hover",
    "themeVar": "--color-stroke-neutral_hover",
    "leaf": "stroke-neutral_hover",
    "category": "Stroke",
    "values": {
      "User - Light": "#222c53",
      "User - Dark": "#f8fafc",
      "Panel - Light": "#202939",
      "Panel - Dark": "#f8fafc"
    }
  },
  {
    "figmaName": "Stroke/stroke-primary",
    "cssVar": "--stroke-stroke-primary",
    "themeVar": "--color-stroke-primary",
    "leaf": "stroke-primary",
    "category": "Stroke",
    "values": {
      "User - Light": "#596aa6",
      "User - Dark": "#0d121c",
      "Panel - Light": "#697586",
      "Panel - Dark": "#0d121c"
    }
  },
  {
    "figmaName": "Stroke/stroke-primary_hover",
    "cssVar": "--stroke-stroke-primary_hover",
    "themeVar": "--color-stroke-primary_hover",
    "leaf": "stroke-primary_hover",
    "category": "Stroke",
    "values": {
      "User - Light": "#7c8abf",
      "User - Dark": "#121926",
      "Panel - Light": "#9aa4b2",
      "Panel - Dark": "#121926"
    }
  },
  {
    "figmaName": "Stroke/stroke-quaternary",
    "cssVar": "--stroke-stroke-quaternary",
    "themeVar": "--color-stroke-quaternary",
    "leaf": "stroke-quaternary",
    "category": "Stroke",
    "values": {
      "User - Light": "#c8cfe9",
      "User - Dark": "#364152",
      "Panel - Light": "#e3e8ef",
      "Panel - Dark": "#364152"
    }
  },
  {
    "figmaName": "Stroke/stroke-quaternary_hover",
    "cssVar": "--stroke-stroke-quaternary_hover",
    "themeVar": "--color-stroke-quaternary_hover",
    "leaf": "stroke-quaternary_hover",
    "category": "Stroke",
    "values": {
      "User - Light": "#e3e7f4",
      "User - Dark": "#4b5565",
      "Panel - Light": "#eef2f6",
      "Panel - Dark": "#4b5565"
    }
  },
  {
    "figmaName": "Stroke/stroke-quinary",
    "cssVar": "--stroke-stroke-quinary",
    "themeVar": "--color-stroke-quinary",
    "leaf": "stroke-quinary",
    "category": "Stroke",
    "values": {
      "User - Light": "#e3e7f4",
      "User - Dark": "#4b5565",
      "Panel - Light": "#eef2f6",
      "Panel - Dark": "#4b5565"
    }
  },
  {
    "figmaName": "Stroke/stroke-quinary_hover",
    "cssVar": "--stroke-stroke-quinary_hover",
    "themeVar": "--color-stroke-quinary_hover",
    "leaf": "stroke-quinary_hover",
    "category": "Stroke",
    "values": {
      "User - Light": "#f1f3fa",
      "User - Dark": "#697586",
      "Panel - Light": "#f8fafc",
      "Panel - Dark": "#697586"
    }
  },
  {
    "figmaName": "Stroke/stroke-secondary",
    "cssVar": "--stroke-stroke-secondary",
    "themeVar": "--color-stroke-secondary",
    "leaf": "stroke-secondary",
    "category": "Stroke",
    "values": {
      "User - Light": "#7c8abf",
      "User - Dark": "#121926",
      "Panel - Light": "#9aa4b2",
      "Panel - Dark": "#121926"
    }
  },
  {
    "figmaName": "Stroke/stroke-secondary_hover",
    "cssVar": "--stroke-stroke-secondary_hover",
    "themeVar": "--color-stroke-secondary_hover",
    "leaf": "stroke-secondary_hover",
    "category": "Stroke",
    "values": {
      "User - Light": "#a4aed7",
      "User - Dark": "#202939",
      "Panel - Light": "#cdd5df",
      "Panel - Dark": "#202939"
    }
  },
  {
    "figmaName": "Stroke/stroke-success",
    "cssVar": "--stroke-stroke-success",
    "themeVar": "--color-stroke-success",
    "leaf": "stroke-success",
    "category": "Stroke",
    "values": {
      "User - Light": "#00c864",
      "User - Dark": "#33d383",
      "Panel - Light": "#00c864",
      "Panel - Dark": "#33d383"
    }
  },
  {
    "figmaName": "Stroke/stroke-success-brand_hover",
    "cssVar": "--stroke-stroke-success-brand_hover",
    "themeVar": "--color-stroke-success-brand_hover",
    "leaf": "stroke-success-brand_hover",
    "category": "Stroke",
    "values": {
      "User - Light": "#00b65b",
      "User - Dark": "#00c864",
      "Panel - Light": "#00b65b",
      "Panel - Dark": "#00c864"
    }
  },
  {
    "figmaName": "Stroke/stroke-success-subtle",
    "cssVar": "--stroke-stroke-success-subtle",
    "themeVar": "--color-stroke-success-subtle",
    "leaf": "stroke-success-subtle",
    "category": "Stroke",
    "values": {
      "User - Light": "#54da97",
      "User - Dark": "#006e37",
      "Panel - Light": "#54da97",
      "Panel - Dark": "#006e37"
    }
  },
  {
    "figmaName": "Stroke/stroke-success-subtle_hover",
    "cssVar": "--stroke-stroke-success-subtle_hover",
    "themeVar": "--color-stroke-success-subtle_hover",
    "leaf": "stroke-success-subtle_hover",
    "category": "Stroke",
    "values": {
      "User - Light": "#33d383",
      "User - Dark": "#008e47",
      "Panel - Light": "#33d383",
      "Panel - Dark": "#008e47"
    }
  },
  {
    "figmaName": "Stroke/stroke-tertiary",
    "cssVar": "--stroke-stroke-tertiary",
    "themeVar": "--color-stroke-tertiary",
    "leaf": "stroke-tertiary",
    "category": "Stroke",
    "values": {
      "User - Light": "#a4aed7",
      "User - Dark": "#202939",
      "Panel - Light": "#cdd5df",
      "Panel - Dark": "#202939"
    }
  },
  {
    "figmaName": "Stroke/stroke-tertiary_hover",
    "cssVar": "--stroke-stroke-tertiary_hover",
    "themeVar": "--color-stroke-tertiary_hover",
    "leaf": "stroke-tertiary_hover",
    "category": "Stroke",
    "values": {
      "User - Light": "#c8cfe9",
      "User - Dark": "#364152",
      "Panel - Light": "#e3e8ef",
      "Panel - Dark": "#364152"
    }
  },
  {
    "figmaName": "Stroke/stroke-violet",
    "cssVar": "--stroke-stroke-violet",
    "themeVar": "--color-stroke-violet",
    "leaf": "stroke-violet",
    "category": "Stroke",
    "values": {
      "User - Light": "#875bf7",
      "User - Dark": "#a48afb",
      "Panel - Light": "#875bf7",
      "Panel - Dark": "#a48afb"
    }
  },
  {
    "figmaName": "Stroke/stroke-violet-subtle",
    "cssVar": "--stroke-stroke-violet-subtle",
    "themeVar": "--color-stroke-violet-subtle",
    "leaf": "stroke-violet-subtle",
    "category": "Stroke",
    "values": {
      "User - Light": "#c3b5fd",
      "User - Dark": "#5720b7",
      "Panel - Light": "#c3b5fd",
      "Panel - Dark": "#5720b7"
    }
  },
  {
    "figmaName": "Stroke/stroke-violet-subtle_hover",
    "cssVar": "--stroke-stroke-violet-subtle_hover",
    "themeVar": "--color-stroke-violet-subtle_hover",
    "leaf": "stroke-violet-subtle_hover",
    "category": "Stroke",
    "values": {
      "User - Light": "#a48afb",
      "User - Dark": "#6927da",
      "Panel - Light": "#a48afb",
      "Panel - Dark": "#6927da"
    }
  },
  {
    "figmaName": "Stroke/stroke-violet_hover",
    "cssVar": "--stroke-stroke-violet_hover",
    "themeVar": "--color-stroke-violet_hover",
    "leaf": "stroke-violet_hover",
    "category": "Stroke",
    "values": {
      "User - Light": "#7839ee",
      "User - Dark": "#875bf7",
      "Panel - Light": "#7839ee",
      "Panel - Dark": "#875bf7"
    }
  },
  {
    "figmaName": "Stroke/stroke-warning",
    "cssVar": "--stroke-stroke-warning",
    "themeVar": "--color-stroke-warning",
    "leaf": "stroke-warning",
    "category": "Stroke",
    "values": {
      "User - Light": "#ffc53d",
      "User - Dark": "#ffd164",
      "Panel - Light": "#ffc53d",
      "Panel - Dark": "#ffd164"
    }
  },
  {
    "figmaName": "Stroke/stroke-warning-subtle",
    "cssVar": "--stroke-stroke-warning-subtle",
    "themeVar": "--color-stroke-warning-subtle",
    "leaf": "stroke-warning-subtle",
    "category": "Stroke",
    "values": {
      "User - Light": "#ffd87d",
      "User - Dark": "#8c6c22",
      "Panel - Light": "#ffd87d",
      "Panel - Dark": "#8c6c22"
    }
  },
  {
    "figmaName": "Stroke/stroke-warning-subtle_hover",
    "cssVar": "--stroke-stroke-warning-subtle_hover",
    "themeVar": "--color-stroke-warning-subtle_hover",
    "leaf": "stroke-warning-subtle_hover",
    "category": "Stroke",
    "values": {
      "User - Light": "#ffd164",
      "User - Dark": "#b58c2b",
      "Panel - Light": "#ffd164",
      "Panel - Dark": "#b58c2b"
    }
  },
  {
    "figmaName": "Stroke/stroke-warning_hover",
    "cssVar": "--stroke-stroke-warning_hover",
    "themeVar": "--color-stroke-warning_hover",
    "leaf": "stroke-warning_hover",
    "category": "Stroke",
    "values": {
      "User - Light": "#e8b338",
      "User - Dark": "#ffc53d",
      "Panel - Light": "#e8b338",
      "Panel - Dark": "#ffc53d"
    }
  },
  {
    "figmaName": "Stroke/stroke-white",
    "cssVar": "--stroke-stroke-white",
    "themeVar": "--color-stroke-white",
    "leaf": "stroke-white",
    "category": "Stroke",
    "values": {
      "User - Light": "#ffffff",
      "User - Dark": "#ffffff",
      "Panel - Light": "#ffffff",
      "Panel - Dark": "#ffffff"
    }
  },
  {
    "figmaName": "Stroke/stroke_disabled",
    "cssVar": "--stroke-stroke_disabled",
    "themeVar": "--color-stroke_disabled",
    "leaf": "stroke_disabled",
    "category": "Stroke",
    "values": {
      "User - Light": "#eaeaea",
      "User - Dark": "#303030",
      "Panel - Light": "#eaeaea",
      "Panel - Dark": "#303030"
    }
  },
  {
    "figmaName": "Surface/sf-accent-blue-subtle",
    "cssVar": "--surface-sf-accent-blue-subtle",
    "themeVar": "--color-sf-accent-blue-subtle",
    "leaf": "sf-accent-blue-subtle",
    "category": "Surface",
    "values": {
      "User - Light": "#eff2ff",
      "User - Dark": "#00174d",
      "Panel - Light": "#e6edff",
      "Panel - Dark": "#00174d"
    }
  },
  {
    "figmaName": "Surface/sf-accent-blue-subtle_hover",
    "cssVar": "--surface-sf-accent-blue-subtle_hover",
    "themeVar": "--color-sf-accent-blue-subtle_hover",
    "leaf": "sf-accent-blue-subtle_hover",
    "category": "Surface",
    "values": {
      "User - Light": "#ccd6ff",
      "User - Dark": "#00206b",
      "Panel - Light": "#b0c8ff",
      "Panel - Dark": "#00206b"
    }
  },
  {
    "figmaName": "Surface/sf-accent-brand",
    "cssVar": "--surface-sf-accent-brand",
    "themeVar": "--color-sf-accent-brand",
    "leaf": "sf-accent-brand",
    "category": "Surface",
    "values": {
      "User - Light": "#5b7cff",
      "User - Dark": "#33d383",
      "Panel - Light": "#00c864",
      "Panel - Dark": "#33d383"
    }
  },
  {
    "figmaName": "Surface/sf-accent-brand-subtle",
    "cssVar": "--surface-sf-accent-brand-subtle",
    "themeVar": "--color-sf-accent-brand-subtle",
    "leaf": "sf-accent-brand-subtle",
    "category": "Surface",
    "values": {
      "User - Light": "#fafbff",
      "User - Dark": "#002914",
      "Panel - Light": "#f2fcf7",
      "Panel - Dark": "#002914"
    }
  },
  {
    "figmaName": "Surface/sf-accent-brand-subtle_hover",
    "cssVar": "--surface-sf-accent-brand-subtle_hover",
    "themeVar": "--color-sf-accent-brand-subtle_hover",
    "leaf": "sf-accent-brand-subtle_hover",
    "category": "Surface",
    "values": {
      "User - Light": "#eff2ff",
      "User - Dark": "#00542a",
      "Panel - Light": "#e6faf0",
      "Panel - Dark": "#00542a"
    }
  },
  {
    "figmaName": "Surface/sf-accent-brand_hover",
    "cssVar": "--surface-sf-accent-brand_hover",
    "themeVar": "--color-sf-accent-brand_hover",
    "leaf": "sf-accent-brand_hover",
    "category": "Surface",
    "values": {
      "User - Light": "#5371e8",
      "User - Dark": "#00c864",
      "Panel - Light": "#00b65b",
      "Panel - Dark": "#00c864"
    }
  },
  {
    "figmaName": "Surface/sf-accent-info",
    "cssVar": "--surface-sf-accent-info",
    "themeVar": "--color-sf-accent-info",
    "leaf": "sf-accent-info",
    "category": "Surface",
    "values": {
      "User - Light": "#5b7cff",
      "User - Dark": "#3370ff",
      "Panel - Light": "#004cff",
      "Panel - Dark": "#3370ff"
    }
  },
  {
    "figmaName": "Surface/sf-accent-info_hover",
    "cssVar": "--surface-sf-accent-info_hover",
    "themeVar": "--color-sf-accent-info_hover",
    "leaf": "sf-accent-info_hover",
    "category": "Surface",
    "values": {
      "User - Light": "#5371e8",
      "User - Dark": "#004cff",
      "Panel - Light": "#0045e8",
      "Panel - Dark": "#004cff"
    }
  },
  {
    "figmaName": "Surface/sf-accent-violet",
    "cssVar": "--surface-sf-accent-violet",
    "themeVar": "--color-sf-accent-violet",
    "leaf": "sf-accent-violet",
    "category": "Surface",
    "values": {
      "User - Light": "#875bf7",
      "User - Dark": "#a48afb",
      "Panel - Light": "#875bf7",
      "Panel - Dark": "#a48afb"
    }
  },
  {
    "figmaName": "Surface/sf-accent-violet-subtle",
    "cssVar": "--surface-sf-accent-violet-subtle",
    "themeVar": "--color-sf-accent-violet-subtle",
    "leaf": "sf-accent-violet-subtle",
    "category": "Surface",
    "values": {
      "User - Light": "#fbfaff",
      "User - Dark": "#2e125e",
      "Panel - Light": "#fbfaff",
      "Panel - Dark": "#2e125e"
    }
  },
  {
    "figmaName": "Surface/sf-accent-violet-subtle_hover",
    "cssVar": "--surface-sf-accent-violet-subtle_hover",
    "themeVar": "--color-sf-accent-violet-subtle_hover",
    "leaf": "sf-accent-violet-subtle_hover",
    "category": "Surface",
    "values": {
      "User - Light": "#f5f3ff",
      "User - Dark": "#491c96",
      "Panel - Light": "#f5f3ff",
      "Panel - Dark": "#491c96"
    }
  },
  {
    "figmaName": "Surface/sf-accent-violet_hover",
    "cssVar": "--surface-sf-accent-violet_hover",
    "themeVar": "--color-sf-accent-violet_hover",
    "leaf": "sf-accent-violet_hover",
    "category": "Surface",
    "values": {
      "User - Light": "#7839ee",
      "User - Dark": "#875bf7",
      "Panel - Light": "#7839ee",
      "Panel - Dark": "#875bf7"
    }
  },
  {
    "figmaName": "Surface/sf-error",
    "cssVar": "--surface-sf-error",
    "themeVar": "--color-sf-error",
    "leaf": "sf-error",
    "category": "Surface",
    "values": {
      "User - Light": "#fb2c36",
      "User - Dark": "#fc565e",
      "Panel - Light": "#fb2c36",
      "Panel - Dark": "#fc565e"
    }
  },
  {
    "figmaName": "Surface/sf-error-subtle",
    "cssVar": "--surface-sf-error-subtle",
    "themeVar": "--color-sf-error-subtle",
    "leaf": "sf-error-subtle",
    "category": "Surface",
    "values": {
      "User - Light": "#fff5f5",
      "User - Dark": "#36090c",
      "Panel - Light": "#fff5f5",
      "Panel - Dark": "#36090c"
    }
  },
  {
    "figmaName": "Surface/sf-error-subtle_hover",
    "cssVar": "--surface-sf-error-subtle_hover",
    "themeVar": "--color-sf-error-subtle_hover",
    "leaf": "sf-error-subtle_hover",
    "category": "Surface",
    "values": {
      "User - Light": "#ffeaeb",
      "User - Dark": "#691217",
      "Panel - Light": "#ffeaeb",
      "Panel - Dark": "#691217"
    }
  },
  {
    "figmaName": "Surface/sf-error_hover",
    "cssVar": "--surface-sf-error_hover",
    "themeVar": "--color-sf-error_hover",
    "leaf": "sf-error_hover",
    "category": "Surface",
    "values": {
      "User - Light": "#e42831",
      "User - Dark": "#fb2c36",
      "Panel - Light": "#e42831",
      "Panel - Dark": "#fb2c36"
    }
  },
  {
    "figmaName": "Surface/sf-overlay",
    "cssVar": "--surface-sf-overlay",
    "themeVar": "--color-sf-overlay",
    "leaf": "sf-overlay",
    "category": "Surface",
    "values": {
      "User - Light": "rgba(13,18,28,0.5)",
      "User - Dark": "rgba(13,18,28,0.3)",
      "Panel - Light": "rgba(13,18,28,0.5)",
      "Panel - Dark": "rgba(13,18,28,0.3)"
    }
  },
  {
    "figmaName": "Surface/sf-primary",
    "cssVar": "--surface-sf-primary",
    "themeVar": "--color-sf-primary",
    "leaf": "sf-primary",
    "category": "Surface",
    "values": {
      "User - Light": "#fffcf5",
      "User - Dark": "#0d121c",
      "Panel - Light": "#ffffff",
      "Panel - Dark": "#0d121c"
    }
  },
  {
    "figmaName": "Surface/sf-primary-neutral",
    "cssVar": "--surface-sf-primary-neutral",
    "themeVar": "--color-sf-primary-neutral",
    "leaf": "sf-primary-neutral",
    "category": "Surface",
    "values": {
      "User - Light": "#080c1c",
      "User - Dark": "#fcfcfd",
      "Panel - Light": "#0d121c",
      "Panel - Dark": "#fcfcfd"
    }
  },
  {
    "figmaName": "Surface/sf-primary-neutral_hover",
    "cssVar": "--surface-sf-primary-neutral_hover",
    "themeVar": "--color-sf-primary-neutral_hover",
    "leaf": "sf-primary-neutral_hover",
    "category": "Surface",
    "values": {
      "User - Light": "#141a3a",
      "User - Dark": "#f8fafc",
      "Panel - Light": "#121926",
      "Panel - Dark": "#f8fafc"
    }
  },
  {
    "figmaName": "Surface/sf-primary_hover",
    "cssVar": "--surface-sf-primary_hover",
    "themeVar": "--color-sf-primary_hover",
    "leaf": "sf-primary_hover",
    "category": "Surface",
    "values": {
      "User - Light": "#fff9ec",
      "User - Dark": "#121926",
      "Panel - Light": "#f8fafc",
      "Panel - Dark": "#121926"
    }
  },
  {
    "figmaName": "Surface/sf-quaternary",
    "cssVar": "--surface-sf-quaternary",
    "themeVar": "--color-sf-quaternary",
    "leaf": "sf-quaternary",
    "category": "Surface",
    "values": {
      "User - Light": "#ffe4a6",
      "User - Dark": "#364152",
      "Panel - Light": "#e3e8ef",
      "Panel - Dark": "#364152"
    }
  },
  {
    "figmaName": "Surface/sf-quaternary_hover",
    "cssVar": "--surface-sf-quaternary_hover",
    "themeVar": "--color-sf-quaternary_hover",
    "leaf": "sf-quaternary_hover",
    "category": "Surface",
    "values": {
      "User - Light": "#ffd87d",
      "User - Dark": "#4b5565",
      "Panel - Light": "#cdd5df",
      "Panel - Dark": "#4b5565"
    }
  },
  {
    "figmaName": "Surface/sf-quinary",
    "cssVar": "--surface-sf-quinary",
    "themeVar": "--color-sf-quinary",
    "leaf": "sf-quinary",
    "category": "Surface",
    "values": {
      "User - Light": "#ffd87d",
      "User - Dark": "#e3e8ef",
      "Panel - Light": "#cdd5df",
      "Panel - Dark": "#e3e8ef"
    }
  },
  {
    "figmaName": "Surface/sf-quinary_hover",
    "cssVar": "--surface-sf-quinary_hover",
    "themeVar": "--color-sf-quinary_hover",
    "leaf": "sf-quinary_hover",
    "category": "Surface",
    "values": {
      "User - Light": "#ffd164",
      "User - Dark": "#e3e8ef",
      "Panel - Light": "#9aa4b2",
      "Panel - Dark": "#e3e8ef"
    }
  },
  {
    "figmaName": "Surface/sf-secondary",
    "cssVar": "--surface-sf-secondary",
    "themeVar": "--color-sf-secondary",
    "leaf": "sf-secondary",
    "category": "Surface",
    "values": {
      "User - Light": "#fff9ec",
      "User - Dark": "#121926",
      "Panel - Light": "#f8fafc",
      "Panel - Dark": "#121926"
    }
  },
  {
    "figmaName": "Surface/sf-secondary-neutral",
    "cssVar": "--surface-sf-secondary-neutral",
    "themeVar": "--color-sf-secondary-neutral",
    "leaf": "sf-secondary-neutral",
    "category": "Surface",
    "values": {
      "User - Light": "#141a3a",
      "User - Dark": "#f8fafc",
      "Panel - Light": "#121926",
      "Panel - Dark": "#f8fafc"
    }
  },
  {
    "figmaName": "Surface/sf-secondary-neutral_hover",
    "cssVar": "--surface-sf-secondary-neutral_hover",
    "themeVar": "--color-sf-secondary-neutral_hover",
    "leaf": "sf-secondary-neutral_hover",
    "category": "Surface",
    "values": {
      "User - Light": "#222c53",
      "User - Dark": "#eef2f6",
      "Panel - Light": "#202939",
      "Panel - Dark": "#eef2f6"
    }
  },
  {
    "figmaName": "Surface/sf-secondary_hover",
    "cssVar": "--surface-sf-secondary_hover",
    "themeVar": "--color-sf-secondary_hover",
    "leaf": "sf-secondary_hover",
    "category": "Surface",
    "values": {
      "User - Light": "#ffedc3",
      "User - Dark": "#202939",
      "Panel - Light": "#eef2f6",
      "Panel - Dark": "#202939"
    }
  },
  {
    "figmaName": "Surface/sf-subtle",
    "cssVar": "--surface-sf-subtle",
    "themeVar": "--color-sf-subtle",
    "leaf": "sf-subtle",
    "category": "Surface",
    "values": {
      "User - Light": "rgba(255,255,255,0.92)",
      "User - Dark": "rgba(13,18,28,0.92)",
      "Panel - Light": "rgba(255,255,255,0.92)",
      "Panel - Dark": "rgba(13,18,28,0.92)"
    }
  },
  {
    "figmaName": "Surface/sf-tertiary",
    "cssVar": "--surface-sf-tertiary",
    "themeVar": "--color-sf-tertiary",
    "leaf": "sf-tertiary",
    "category": "Surface",
    "values": {
      "User - Light": "#ffedc3",
      "User - Dark": "#202939",
      "Panel - Light": "#eef2f6",
      "Panel - Dark": "#202939"
    }
  },
  {
    "figmaName": "Surface/sf-tertiary-neutral",
    "cssVar": "--surface-sf-tertiary-neutral",
    "themeVar": "--color-sf-tertiary-neutral",
    "leaf": "sf-tertiary-neutral",
    "category": "Surface",
    "values": {
      "User - Light": "#596aa6",
      "User - Dark": "#eef2f6",
      "Panel - Light": "#697586",
      "Panel - Dark": "#eef2f6"
    }
  },
  {
    "figmaName": "Surface/sf-tertiary_hover",
    "cssVar": "--surface-sf-tertiary_hover",
    "themeVar": "--color-sf-tertiary_hover",
    "leaf": "sf-tertiary_hover",
    "category": "Surface",
    "values": {
      "User - Light": "#ffe4a6",
      "User - Dark": "#364152",
      "Panel - Light": "#e3e8ef",
      "Panel - Dark": "#364152"
    }
  },
  {
    "figmaName": "Surface/sf-transparent",
    "cssVar": "--surface-sf-transparent",
    "themeVar": "--color-sf-transparent",
    "leaf": "sf-transparent",
    "category": "Surface",
    "values": {
      "User - Light": "rgba(255,255,255,0)",
      "User - Dark": "rgba(255,255,255,0)",
      "Panel - Light": "rgba(255,255,255,0)",
      "Panel - Dark": "rgba(255,255,255,0)"
    }
  },
  {
    "figmaName": "Surface/sf-warning",
    "cssVar": "--surface-sf-warning",
    "themeVar": "--color-sf-warning",
    "leaf": "sf-warning",
    "category": "Surface",
    "values": {
      "User - Light": "#ffc53d",
      "User - Dark": "#ffd164",
      "Panel - Light": "#ffc53d",
      "Panel - Dark": "#ffd164"
    }
  },
  {
    "figmaName": "Surface/sf-warning-subtle",
    "cssVar": "--surface-sf-warning-subtle",
    "themeVar": "--color-sf-warning-subtle",
    "leaf": "sf-warning-subtle",
    "category": "Surface",
    "values": {
      "User - Light": "#fffcf5",
      "User - Dark": "#40310f",
      "Panel - Light": "#fffcf5",
      "Panel - Dark": "#40310f"
    }
  },
  {
    "figmaName": "Surface/sf-warning-subtle_hover",
    "cssVar": "--surface-sf-warning-subtle_hover",
    "themeVar": "--color-sf-warning-subtle_hover",
    "leaf": "sf-warning-subtle_hover",
    "category": "Surface",
    "values": {
      "User - Light": "#fff9ec",
      "User - Dark": "#6b531a",
      "Panel - Light": "#fff9ec",
      "Panel - Dark": "#6b531a"
    }
  },
  {
    "figmaName": "Surface/sf-warning_hover",
    "cssVar": "--surface-sf-warning_hover",
    "themeVar": "--color-sf-warning_hover",
    "leaf": "sf-warning_hover",
    "category": "Surface",
    "values": {
      "User - Light": "#e8b338",
      "User - Dark": "#ffc53d",
      "Panel - Light": "#e8b338",
      "Panel - Dark": "#ffc53d"
    }
  },
  {
    "figmaName": "Surface/sf-white",
    "cssVar": "--surface-sf-white",
    "themeVar": "--color-sf-white",
    "leaf": "sf-white",
    "category": "Surface",
    "values": {
      "User - Light": "#ffffff",
      "User - Dark": "#ffffff",
      "Panel - Light": "#ffffff",
      "Panel - Dark": "#ffffff"
    }
  },
  {
    "figmaName": "Surface/sf_disabled",
    "cssVar": "--surface-sf_disabled",
    "themeVar": "--color-sf_disabled",
    "leaf": "sf_disabled",
    "category": "Surface",
    "values": {
      "User - Light": "#f2f2f2",
      "User - Dark": "#2c2c2c",
      "Panel - Light": "#f2f2f2",
      "Panel - Dark": "#2c2c2c"
    }
  }
];

export const SPACING_TOKENS: ScaleToken[] = [
  {
    "name": "space-none",
    "cssVar": "--space-none",
    "px": 0,
    "rem": "0px"
  },
  {
    "name": "space-6xs",
    "cssVar": "--space-6xs",
    "px": 2,
    "rem": "0.125rem"
  },
  {
    "name": "space-5xs",
    "cssVar": "--space-5xs",
    "px": 4,
    "rem": "0.25rem"
  },
  {
    "name": "space-4xs",
    "cssVar": "--space-4xs",
    "px": 6,
    "rem": "0.375rem"
  },
  {
    "name": "space-3xs",
    "cssVar": "--space-3xs",
    "px": 8,
    "rem": "0.5rem"
  },
  {
    "name": "space-2xs",
    "cssVar": "--space-2xs",
    "px": 12,
    "rem": "0.75rem"
  },
  {
    "name": "space-xs",
    "cssVar": "--space-xs",
    "px": 16,
    "rem": "1rem"
  },
  {
    "name": "space-sm",
    "cssVar": "--space-sm",
    "px": 24,
    "rem": "1.5rem"
  },
  {
    "name": "space-md",
    "cssVar": "--space-md",
    "px": 32,
    "rem": "2rem"
  },
  {
    "name": "space-lg",
    "cssVar": "--space-lg",
    "px": 40,
    "rem": "2.5rem"
  },
  {
    "name": "space-2xl",
    "cssVar": "--space-2xl",
    "px": 48,
    "rem": "3rem"
  },
  {
    "name": "space-3xl",
    "cssVar": "--space-3xl",
    "px": 60,
    "rem": "3.75rem"
  },
  {
    "name": "space-4xl",
    "cssVar": "--space-4xl",
    "px": 88,
    "rem": "5.5rem"
  },
  {
    "name": "space-5xl",
    "cssVar": "--space-5xl",
    "px": 116,
    "rem": "7.25rem"
  }
];

export const RADIUS_TOKENS: ScaleToken[] = [
  {
    "name": "radius-none",
    "cssVar": "--radius-none",
    "px": 0,
    "rem": "0px"
  },
  {
    "name": "radius-4xs",
    "cssVar": "--radius-4xs",
    "px": 2,
    "rem": "0.125rem"
  },
  {
    "name": "radius-3xs",
    "cssVar": "--radius-3xs",
    "px": 4,
    "rem": "0.25rem"
  },
  {
    "name": "radius-2xs",
    "cssVar": "--radius-2xs",
    "px": 6,
    "rem": "0.375rem"
  },
  {
    "name": "radius-xs",
    "cssVar": "--radius-xs",
    "px": 8,
    "rem": "0.5rem"
  },
  {
    "name": "radius-sm",
    "cssVar": "--radius-sm",
    "px": 10,
    "rem": "0.625rem"
  },
  {
    "name": "radius-md",
    "cssVar": "--radius-md",
    "px": 12,
    "rem": "0.75rem"
  },
  {
    "name": "radius-lg",
    "cssVar": "--radius-lg",
    "px": 14,
    "rem": "0.875rem"
  },
  {
    "name": "radius-xl",
    "cssVar": "--radius-xl",
    "px": 16,
    "rem": "1rem"
  },
  {
    "name": "radius-2xl",
    "cssVar": "--radius-2xl",
    "px": 18,
    "rem": "1.125rem"
  },
  {
    "name": "radius-3xl",
    "cssVar": "--radius-3xl",
    "px": 20,
    "rem": "1.25rem"
  },
  {
    "name": "radius-4xl",
    "cssVar": "--radius-4xl",
    "px": 22,
    "rem": "1.375rem"
  },
  {
    "name": "radius-5xl",
    "cssVar": "--radius-5xl",
    "px": 24,
    "rem": "1.5rem"
  },
  {
    "name": "radius-6xl",
    "cssVar": "--radius-6xl",
    "px": 26,
    "rem": "1.625rem"
  },
  {
    "name": "radius-7xl",
    "cssVar": "--radius-7xl",
    "px": 28,
    "rem": "1.75rem"
  },
  {
    "name": "radius-8xl",
    "cssVar": "--radius-8xl",
    "px": 30,
    "rem": "1.875rem"
  },
  {
    "name": "radius-9xl",
    "cssVar": "--radius-9xl",
    "px": 32,
    "rem": "2rem"
  },
  {
    "name": "radius-10xl",
    "cssVar": "--radius-10xl",
    "px": 40,
    "rem": "2.5rem"
  },
  {
    "name": "radius-full",
    "cssVar": "--radius-full",
    "px": 10000,
    "rem": "625rem"
  }
];

export const TEXT_STYLE_TOKENS: TextStyleToken[] = [
  {
    "figmaName": "Display/Large",
    "className": "text-display-lg",
    "fontVar": "--font-face-font-family-display",
    "weightVar": "--font-weight-bold",
    "sizeVar": "--font-size-fontsize-display-3xl",
    "lineVar": "--line-height-lineheight-display-3xl",
    "decoration": null,
    "specs": {
      "font": "Yekan Bakh FaNum",
      "weightName": "Bold",
      "weight": 700,
      "sizePx": 56,
      "linePx": 72
    }
  },
  {
    "figmaName": "Display/Medium",
    "className": "text-display-md",
    "fontVar": "--font-face-font-family-display",
    "weightVar": "--font-weight-bold",
    "sizeVar": "--font-size-fontsize-display-xl",
    "lineVar": "--line-height-lineheight-display-xl",
    "decoration": null,
    "specs": {
      "font": "Yekan Bakh FaNum",
      "weightName": "Bold",
      "weight": 700,
      "sizePx": 40,
      "linePx": 48
    }
  },
  {
    "figmaName": "Display/Small",
    "className": "text-display-sm",
    "fontVar": "--font-face-font-family-display",
    "weightVar": "--font-weight-bold",
    "sizeVar": "--font-size-fontsize-display-lg",
    "lineVar": "--line-height-lineheight-display-lg",
    "decoration": null,
    "specs": {
      "font": "Yekan Bakh FaNum",
      "weightName": "Bold",
      "weight": 700,
      "sizePx": 36,
      "linePx": 44
    }
  },
  {
    "figmaName": "Headline/Large",
    "className": "text-headline-lg",
    "fontVar": "--font-face-font-family-display",
    "weightVar": "--font-weight-semi-bold",
    "sizeVar": "--font-size-fontsize-display-md",
    "lineVar": "--line-height-lineheight-display-md",
    "decoration": null,
    "specs": {
      "font": "Yekan Bakh FaNum",
      "weightName": "SemiBold",
      "weight": 600,
      "sizePx": 32,
      "linePx": 40
    }
  },
  {
    "figmaName": "Headline/Medium",
    "className": "text-headline-md",
    "fontVar": "--font-face-font-family-display",
    "weightVar": "--font-weight-semi-bold",
    "sizeVar": "--font-size-fontsize-display-sm",
    "lineVar": "--line-height-lineheight-display-sm",
    "decoration": null,
    "specs": {
      "font": "Yekan Bakh FaNum",
      "weightName": "SemiBold",
      "weight": 600,
      "sizePx": 24,
      "linePx": 32
    }
  },
  {
    "figmaName": "Headline/Small",
    "className": "text-headline-sm",
    "fontVar": "--font-face-font-family-display",
    "weightVar": "--font-weight-semi-bold",
    "sizeVar": "--font-size-fontsize-text-xl",
    "lineVar": "--line-height-lineheight-text-xl",
    "decoration": null,
    "specs": {
      "font": "Yekan Bakh FaNum",
      "weightName": "SemiBold",
      "weight": 600,
      "sizePx": 20,
      "linePx": 30
    }
  },
  {
    "figmaName": "Title/Large",
    "className": "text-title-lg",
    "fontVar": "--font-face-font-family-display",
    "weightVar": "--font-weight-regular",
    "sizeVar": "--font-size-fontsize-text-xl",
    "lineVar": "--line-height-lineheight-text-xl",
    "decoration": null,
    "specs": {
      "font": "Yekan Bakh FaNum",
      "weightName": "Regular (var: medium)",
      "weight": 400,
      "sizePx": 20,
      "linePx": 30
    }
  },
  {
    "figmaName": "Title/Medium",
    "className": "text-title-md",
    "fontVar": "--font-face-font-family-display",
    "weightVar": "--font-weight-regular",
    "sizeVar": "--font-size-fontsize-text-lg",
    "lineVar": "--line-height-lineheight-text-lg",
    "decoration": null,
    "specs": {
      "font": "Yekan Bakh FaNum",
      "weightName": "Regular (var: medium)",
      "weight": 400,
      "sizePx": 18,
      "linePx": 28
    }
  },
  {
    "figmaName": "Title/Small",
    "className": "text-title-sm",
    "fontVar": "--font-face-font-family-display",
    "weightVar": "--font-weight-regular",
    "sizeVar": "--font-size-fontsize-text-md",
    "lineVar": "--line-height-lineheight-text-md",
    "decoration": null,
    "specs": {
      "font": "Yekan Bakh FaNum",
      "weightName": "Regular (var: medium)",
      "weight": 400,
      "sizePx": 16,
      "linePx": 24
    }
  },
  {
    "figmaName": "Title/XSmall",
    "className": "text-title-xs",
    "fontVar": "--font-face-font-family-display",
    "weightVar": "--font-weight-semi-bold",
    "sizeVar": "--font-size-fontsize-text-sm",
    "lineVar": "--line-height-lineheight-text-sm",
    "decoration": null,
    "specs": {
      "font": "Yekan Bakh FaNum",
      "weightName": "SemiBold",
      "weight": 600,
      "sizePx": 14,
      "linePx": 20
    }
  },
  {
    "figmaName": "Body/Large",
    "className": "text-body-lg",
    "fontVar": "--font-face-font-family-body",
    "weightVar": "--font-weight-regular",
    "sizeVar": "--font-size-fontsize-text-md",
    "lineVar": "--line-height-lineheight-text-md",
    "decoration": null,
    "specs": {
      "font": "IRANSansFaNum",
      "weightName": "Regular",
      "weight": 400,
      "sizePx": 16,
      "linePx": 24
    }
  },
  {
    "figmaName": "Body/Medium",
    "className": "text-body-md",
    "fontVar": "--font-face-font-family-body",
    "weightVar": "--font-weight-regular",
    "sizeVar": "--font-size-fontsize-text-sm",
    "lineVar": "--line-height-lineheight-text-sm",
    "decoration": null,
    "specs": {
      "font": "IRANSansFaNum",
      "weightName": "Regular",
      "weight": 400,
      "sizePx": 14,
      "linePx": 20
    }
  },
  {
    "figmaName": "Body/Small",
    "className": "text-body-sm",
    "fontVar": "--font-face-font-family-body",
    "weightVar": "--font-weight-regular",
    "sizeVar": "--font-size-fontsize-text-xs",
    "lineVar": "--line-height-lineheight-text-xs",
    "decoration": null,
    "specs": {
      "font": "IRANSansFaNum",
      "weightName": "Regular",
      "weight": 400,
      "sizePx": 12,
      "linePx": 18
    }
  },
  {
    "figmaName": "Body/XSmall",
    "className": "text-body-xs",
    "fontVar": "--font-face-font-family-body",
    "weightVar": "--font-weight-regular",
    "sizeVar": "--font-size-fontsize-text-2xs",
    "lineVar": "--line-height-lineheight-text-2xs",
    "decoration": null,
    "specs": {
      "font": "IRANSansFaNum",
      "weightName": "Regular",
      "weight": 400,
      "sizePx": 10,
      "linePx": 14
    }
  },
  {
    "figmaName": "Body/Large Striketrought",
    "className": "text-body-lg-strikethrough",
    "fontVar": "--font-face-font-family-body",
    "weightVar": "--font-weight-regular",
    "sizeVar": "--font-size-fontsize-text-md",
    "lineVar": "--line-height-lineheight-text-md",
    "decoration": "line-through",
    "specs": {
      "font": "IRANSansFaNum",
      "weightName": "Regular",
      "weight": 400,
      "sizePx": 16,
      "linePx": 24
    }
  },
  {
    "figmaName": "Body/Medium Striketrought",
    "className": "text-body-md-strikethrough",
    "fontVar": "--font-face-font-family-body",
    "weightVar": "--font-weight-regular",
    "sizeVar": "--font-size-fontsize-text-sm",
    "lineVar": "--line-height-lineheight-text-sm",
    "decoration": "line-through",
    "specs": {
      "font": "IRANSansFaNum",
      "weightName": "Regular",
      "weight": 400,
      "sizePx": 14,
      "linePx": 20
    }
  },
  {
    "figmaName": "Body/Small Striketrought",
    "className": "text-body-sm-strikethrough",
    "fontVar": "--font-face-font-family-body",
    "weightVar": "--font-weight-regular",
    "sizeVar": "--font-size-fontsize-text-xs",
    "lineVar": "--line-height-lineheight-text-xs",
    "decoration": "line-through",
    "specs": {
      "font": "IRANSansFaNum",
      "weightName": "Regular",
      "weight": 400,
      "sizePx": 12,
      "linePx": 18
    }
  },
  {
    "figmaName": "Body/XSmall Striketrought",
    "className": "text-body-xs-strikethrough",
    "fontVar": "--font-face-font-family-body",
    "weightVar": "--font-weight-regular",
    "sizeVar": "--font-size-fontsize-text-2xs",
    "lineVar": "--line-height-lineheight-text-2xs",
    "decoration": "line-through",
    "specs": {
      "font": "IRANSansFaNum",
      "weightName": "Regular",
      "weight": 400,
      "sizePx": 10,
      "linePx": 14
    }
  },
  {
    "figmaName": "Label/Large",
    "className": "text-label-lg",
    "fontVar": "--font-face-font-family-body",
    "weightVar": "--font-weight-medium",
    "sizeVar": "--font-size-fontsize-text-md",
    "lineVar": "--line-height-lineheight-text-sm",
    "decoration": null,
    "specs": {
      "font": "IRANSansFaNum",
      "weightName": "Medium",
      "weight": 500,
      "sizePx": 16,
      "linePx": 20
    }
  },
  {
    "figmaName": "Label/Medium",
    "className": "text-label-md",
    "fontVar": "--font-face-font-family-body",
    "weightVar": "--font-weight-medium",
    "sizeVar": "--font-size-fontsize-text-sm",
    "lineVar": "--line-height-lineheight-text-sm",
    "decoration": null,
    "specs": {
      "font": "IRANSansFaNum",
      "weightName": "Medium",
      "weight": 500,
      "sizePx": 14,
      "linePx": 20
    }
  },
  {
    "figmaName": "Label/Small",
    "className": "text-label-sm",
    "fontVar": "--font-face-font-family-body",
    "weightVar": "--font-weight-medium",
    "sizeVar": "--font-size-fontsize-text-xs",
    "lineVar": "--line-height-lineheight-text-xs",
    "decoration": null,
    "specs": {
      "font": "IRANSansFaNum",
      "weightName": "Medium",
      "weight": 500,
      "sizePx": 12,
      "linePx": 18
    }
  },
  {
    "figmaName": "Label/X Small",
    "className": "text-label-xs",
    "fontVar": "--font-face-font-family-body",
    "weightVar": "--font-weight-medium",
    "sizeVar": "--font-size-fontsize-text-2xs",
    "lineVar": "--line-height-lineheight-text-2xs",
    "decoration": null,
    "specs": {
      "font": "IRANSansFaNum",
      "weightName": "Medium",
      "weight": 500,
      "sizePx": 10,
      "linePx": 14
    }
  },
  {
    "figmaName": "Label/Large Underline",
    "className": "text-label-lg-underline",
    "fontVar": "--font-face-font-family-body",
    "weightVar": "--font-weight-demi-bold",
    "sizeVar": "--font-size-fontsize-text-md",
    "lineVar": "--line-height-lineheight-text-md",
    "decoration": "underline",
    "specs": {
      "font": "IRANSansFaNum",
      "weightName": "DemiBold",
      "weight": 700,
      "sizePx": 16,
      "linePx": 24
    }
  },
  {
    "figmaName": "Label/Medium Underline",
    "className": "text-label-md-underline",
    "fontVar": "--font-face-font-family-body",
    "weightVar": "--font-weight-demi-bold",
    "sizeVar": "--font-size-fontsize-text-sm",
    "lineVar": "--line-height-lineheight-text-xs",
    "decoration": "underline",
    "specs": {
      "font": "IRANSansFaNum",
      "weightName": "DemiBold",
      "weight": 700,
      "sizePx": 14,
      "linePx": 18
    }
  },
  {
    "figmaName": "Label/Small Underline",
    "className": "text-label-sm-underline",
    "fontVar": "--font-face-font-family-body",
    "weightVar": "--font-weight-demi-bold",
    "sizeVar": "--font-size-fontsize-text-xs",
    "lineVar": "--line-height-lineheight-text-xs",
    "decoration": "underline",
    "specs": {
      "font": "IRANSansFaNum",
      "weightName": "DemiBold",
      "weight": 700,
      "sizePx": 12,
      "linePx": 18
    }
  },
  {
    "figmaName": "Label/Large Striketrought",
    "className": "text-label-lg-strikethrough",
    "fontVar": "--font-face-font-family-body",
    "weightVar": "--font-weight-demi-bold",
    "sizeVar": "--font-size-fontsize-text-md",
    "lineVar": "--line-height-lineheight-text-md",
    "decoration": "line-through",
    "specs": {
      "font": "IRANSansFaNum",
      "weightName": "DemiBold",
      "weight": 700,
      "sizePx": 16,
      "linePx": 24
    }
  }
];
