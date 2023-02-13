import Click from "./modules/click.js";
import Scroll from "./modules/scroll.js";
import Selector from "./modules/selection.js";
const click = new Click('[data-img="imgs"] li', ".text");
click.init();

const scroll = new Scroll('[data-anime="scroll"]');
scroll.init();

const select = new Selector([["[data-select"]]);
select.init();
