const actions = Array.from(document.querySelectorAll("[data-action]"));

let counter = localStorage.getItem("counter") || 0;
let num = 10;

document.querySelector(".counter-value").innerText = counter;

actions.forEach((action) => {
  action.addEventListener("click", () => {
    const type = action.dataset.action;
    
    switch (type) {
      case "increase":
        counter += num;
        break;
      case "decrease":
        counter -= num;
        break;
      case "reset":
        counter = 0;
        break;
      case "save":
        localStorage.setItem("counter", counter);
        break;
      case "clear":
        localStorage.removeItem("counter");
        break;
    }

    document.querySelector(".counter-value").innerText = counter;
  });
});
