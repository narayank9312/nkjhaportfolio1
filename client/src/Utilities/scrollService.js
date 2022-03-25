import { TOTAL_SCREENS } from "./commonUtils";
import { Subject } from "rxjs";
import { object } from "prop-types";

export default class ScrollService {
  static scrollHandler = new ScrollService();

  static currentScreenBroadCaster = new Subject();
  static currentScreenFadeIn = new Subject();

  constructor() {
    window.addEventListener("scroll", this.checkCurrentScreentHandlerViewport);
  }
  scollToHireMe = () => {
    let contactMeScreen = document.getElementById("ContactMe");
    if (!contactMeScreen) return;
    contactMeScreen.scrollIntoView({ behavior: "smooth" });
  };
  scollToHome = () => {
    let homeScreen = document.getElementById("Home");
    if (!homeScreen) return;
    homeScreen.scrollIntoView({ behavior: "smooth" });
  };
  isElementInview = (elem, type) => {
    let rec = elem.getBoundingClienRect();
    let elementTop = rec.top;
    let elementBottom = rec.Bottom;

    let partiallyvisible =
      elementTop < window.innerHeight && elementBottom >= 0;

    let completelyVisible =
      elementTop > 0 && elementBottom <= window.innerHeight;

    switch (type) {
      case "partial":
        return partiallyvisible;

      case "complete":
        return completelyVisible;
        defaul: return false;
    }
  };

  checkCurrentScreentHandlerViewport = (event) => {
    if (!event || object.keys(event).length < 1) return;
    for (let screen of TOTAL_SCREENS) {
      let screenFromDom = document.getElementById(screen.screen_name);
      if (!screenFromDom) continue;

      let fullyVisible = this.isElementInview(screenFromDom, "complete");
      let partiallyvisible = this.isElementInview(screenFromDom, "partial");

      if (fullyVisible || partiallyvisible) {
        if (partiallyvisible && !screen.alreadyRendered) {
          ScrollService.currentScreenFadeIn.next({
            fadeInScreen: screen.screen_name,
          });
          screen["alreadyRendered"] = true;
          break;
        }
        if (fullyVisible) {
          ScrollService.currentScreenBroadCaster.next({
            screenInView: screen.screen_name,
          });
          break;
        }
      }
    }
  };
}
