// Функція для генерації випадкового кольору в hex-форматі
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Отримуємо елементи з DOM
const input = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");

// Функція для створення колекції елементів
function createBoxes(amount) {
  destroyBoxes(); // Очищаємо попередні елементи перед створенням нових
  const boxes = [];
  let size = 30; 

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    size += 10; 
  }

  boxesContainer.append(...boxes); // Додаємо всі елементи в DOM
}

function destroyBoxes() {
  boxesContainer.innerHTML = ""; // Очищаємо контейнер
}

createBtn.addEventListener("click", () => {
  const amount = parseInt(input.value); 
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
  input.value = ""; 
});

// Обробник події для кнопки Destroy
destroyBtn.addEventListener("click", destroyBoxes);
