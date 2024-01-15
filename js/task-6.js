document.addEventListener("DOMContentLoaded", function () {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  }

  const controlsDiv = document.getElementById("controls");
  const input = controlsDiv.querySelector("input");
  const createButton = controlsDiv.querySelector("[data-create]");
  const destroyButton = controlsDiv.querySelector("[data-destroy]");
  const boxesDiv = document.getElementById("boxes");

  createButton.addEventListener("click", function () {
    const amount = Number(input.value);

    if (amount < 1 || amount > 100 || isNaN(amount)) {
      alert("Please enter a number between 1 and 100");
      return;
    }

    createBoxes(amount);
    input.value = "";
  });

  destroyButton.addEventListener("click", function () {
    destroyBoxes();
  });

  function createBoxes(amount) {
    destroyBoxes(); // Очистити попередні квадрати перед додаванням нових

    let size = 30;
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesDiv.appendChild(box);

      size += 10;
    }
  }

  function destroyBoxes() {
    boxesDiv.innerHTML = "";
  }
});
