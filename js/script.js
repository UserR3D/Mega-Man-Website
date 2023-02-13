import Click from "./modules/click.js";
import Scroll from "./modules/scroll.js";

const click = new Click('[data-img="imgs"] li', ".text", ["[data-select"]);
click.init();

const scroll = new Scroll('[data-anime="scroll"]');
scroll.init();
