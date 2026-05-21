let cartCount = 0;

/* SELECT ALL ADD TO CART BUTTONS */
const buttons = document.querySelectorAll(".product-card button");

/* LOOP THROUGH BUTTONS */
buttons.forEach(button => {

  button.addEventListener("click", () => {

    /* INCREASE CART COUNT */
    cartCount++;

    /* GET PRODUCT NAME */
    const productName =
      button.parentElement.querySelector("h3").innerText;

    /* SHOW ALERT */
    alert(productName + " added to cart!");

    /* UPDATE CART DISPLAY */
    document.getElementById("cart-count").innerText =
      cartCount;

  });

});