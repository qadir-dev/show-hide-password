const showHidden = (inputOverlay, inputPass, inputIcon) => {
  const overlay = document.getElementById(inputOverlay);
  const input = document.getElementById(inputPass);
  const icon = document.getElementById(inputIcon);

  icon.addEventListener("click", () => {
    if (input.type === "password") {
      input.type = "text";
      icon.classList.add("bx-show");
    } else {
      input.type = "password";
      icon.classList.remove("bx-show");
    }
    overlay.classList.toggle("overlay-content");
  });
};

showHidden("input-overlay", "input-password", "input-icon");
