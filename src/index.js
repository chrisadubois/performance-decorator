import "./styles.css";

let intervalCount = 0;

const trackTime = (total) => {
  const span = document.createElement("span");
  span.innerText = `TIME: ${total} |||`;
  document.getElementById("track").appendChild(span);
};

const tracker = function (cb) {
  return function () {
    const before = performance.now();
    const result = cb.apply(this, arguments);
    const after = performance.now();
    const total = after - before;
    trackTime(total);
    return result;
  };
};

const toDecorate = (count) => {
  for (let i = 0; i < Math.floor(Math.random() * 100); i++) {
    console.log("intervalCount", count, "index", i);
  }
  return "intervalCountReturn" + count;
};

let decoratedToDecorate = tracker(toDecorate);

setInterval(() => {
  decoratedToDecorate(intervalCount++);
}, 1000 * 10);
