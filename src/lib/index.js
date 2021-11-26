import AutoFitContainer from "./components/auto-fit-container";
import RectPanel from "./components/rect-panel";

const MyPlugin = {
  install(Vue) {
    Vue.component("AutoFitContainer", AutoFitContainer);
    Vue.component("RectPanel", RectPanel);
  },
};

export default MyPlugin;
