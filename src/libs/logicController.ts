class LogicController {
  constructor() {
    console.log("LogicController init...");
  }

  debounce(cb: () => any, ms: number) {
    let timer = null;

    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(cb, ms);
  }

  throttle(cb: () => any, ms: number) {
    let timer = null;

    if (!timer) {
      timer = setTimeout(function () {
        timer = null;
        cb();
      }, ms);
    }
  }
}

export default new LogicController();
