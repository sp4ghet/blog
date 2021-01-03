import { throttle } from "lodash";
import React from "react";
import frag from "../pages/curl.frag";

const getVeda = () => {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return null;
  }

  if (window.veda) {
    return window.veda;
  }

  const canvas = document.createElement("canvas");
  canvas.style.position = "fixed";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.opacity = "0.5";
  canvas.style.zIndex = "-1";
  document.body.appendChild(canvas);

  const isPc = window.innerWidth > 767;

  const Veda = require("vedajs").default;
  const veda = new Veda({
    pixelRatio: isPc ? 2 : 4,
    frameskip: isPc ? 2 : 4,
  });
  veda.setCanvas(canvas);

  window.veda = veda;
  window.addEventListener(
    "resize",
    throttle(() => {
      veda.resize(window.innerWidth, window.innerHeight);
    })
  );

  return veda;
};

class Shader extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const veda = getVeda();
      veda.loadFragmentShader(frag);
      veda.play();
    }, 0);
  }
  render() {
    return null;
  }
}

export default Shader;
