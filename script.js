let buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        button.innerText = "Added ✅";
        button.style.backgroundColor = "green";

        setTimeout(() => {
            button.innerText = "Add to Cart";
            button.style.backgroundColor = "black";
        }, 1500);
    });
});
