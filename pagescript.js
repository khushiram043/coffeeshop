// REGISTRATION FORM VALIDATION
const registerForm = document.querySelector(".register-form");

if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const inputs = registerForm.querySelectorAll("input");
        let valid = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                valid = false;
                input.style.border = "2px solid red";
            } else {
                input.style.border = "2px solid green";
            }
        });

        if (valid) {
            alert("🎉 Registration Successful!");
            registerForm.reset();
        } else {
            alert("⚠️ Please fill all fields");
        }
    });
}

// ORDER FORM VALIDATION
const orderForm = document.querySelector(".order-form");

if (orderForm) {
    orderForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("☕ Your coffee order has been placed successfully!");
        orderForm.reset();
    });
}

// SHOP BUTTON CLICK
const buyButtons = document.querySelectorAll("button");

buyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.innerText === "Buy Now") {
            alert("🛒 Item added to cart!");
        }
    });
});
