import "./style.css";

import SalvoToon from "./svg/salvo.min.svg";
import Fb from "./svg/fb.min.svg";
import Twitter from "./svg/twitter.min.svg";
import Email from "./svg/email.min.svg";

const timer: number = 1500;
const $ = (selector: string): Element | null =>
  document.querySelector(selector);

const moveToon = (): void => {
  const toon: HTMLImageElement = $("#salvo") as HTMLImageElement;
  const amount: number = 30;

  toon.style.top = Math.random() * amount + "px";
  toon.style.left = Math.random() * amount + 50 + "px";
};

document.addEventListener("DOMContentLoaded", () => {
  ($("#salvo") as HTMLImageElement).src = SalvoToon;
  ($("#fb img") as HTMLImageElement).src = Fb;
  ($("#twitter img") as HTMLImageElement).src = Twitter;
  ($("#email img") as HTMLImageElement).src = Email;

  setInterval(moveToon, timer);
});
