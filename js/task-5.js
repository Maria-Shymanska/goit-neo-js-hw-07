function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

// Додаємо слухача події на кнопку

changeColorBtn.addEventListener('click', () => {
    const newColor = getRandomHexColor(); // Генеруємо випадковий колір
    
    //  Змінюємо колір фону body
    document.body.style.backgroundColor = newColor;
});
