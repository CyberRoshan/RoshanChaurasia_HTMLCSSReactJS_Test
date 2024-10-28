document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Clears previous error messages
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(message => message.textContent = "");

    const firstName = document.querySelector("input[name='first_name']");
    const lastName = document.querySelector("input[name='last_name']");
    const email = document.querySelector("input[name='email']");
    const phoneNumber = document.querySelector("input[name='phone_number']");
    const password = document.querySelector("input[name='password']");
    let isValid = true;

    if (!firstName.value.trim()) {
        firstName.nextElementSibling.textContent = "First Name is required";
        isValid = false;
    }

    if (!lastName.value.trim()) {
        lastName.nextElementSibling.textContent = "Last Name is required";
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        email.nextElementSibling.textContent = "Please enter a valid email";
        isValid = false;
    }

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneNumber.value.trim())) {
        phoneNumber.nextElementSibling.textContent = "Please enter a valid phone no.";
        isValid = false;
    }

    if (password.value.length < 8) {
        password.nextElementSibling.textContent = "Password must be at least 8 characters";
        isValid = false;
    }

    if (isValid) {
        console.log({
            first_name: firstName.value.trim(),
            last_name: lastName.value.trim(),
            email: email.value.trim(),
            phone_number: phoneNumber.value.trim(),
            password: password.value.trim()
        });
    }
});
