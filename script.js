document.querySelector(".register-form")?.addEventListener("submit", function(e){
    e.preventDefault();
    fetch("register.php", {
        method: "POST",
        body: new FormData(this)
    })
    .then(res => res.text())
    .then(data => alert(data));
});

document.querySelector(".login-form")?.addEventListener("submit", function(e){
    e.preventDefault();
    fetch("login.php", {
        method: "POST",
        body: new FormData(this)
    })
    .then(res => res.text())
    .then(data => alert(data));
});

document.querySelector(".order-form")?.addEventListener("submit", function(e){
    e.preventDefault();
    fetch("order.php", {
        method: "POST",
        body: new FormData(this)
    })
    .then(res => res.text())
    .then(data => alert(data));
});
