const form = document.querySelector('.login-form');

function handleFormSubmit(event) {
    event.preventDefault();

    // отримуємо значення полів
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    // перевіряємо чи усі поля заповнені
    if (email === '' || password === '') {
        alert("All form fields must be filled in");
        return;
    }

    // створюємо обєкт з даними форми
    const formData = {
        email: email,
        password: password
    };

    console.log(formData)

    form.reset();
}

    // Додаємо слухача події в кінці
    form.addEventListener('submit', handleFormSubmit);
