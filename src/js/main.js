document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar");

  const observer = new MutationObserver(() => {
    const toggleButton = navbarContainer.querySelector(
      "[data-collapse-toggle='navbar-sticky']"
    );
    const menu = navbarContainer.querySelector("#navbar-sticky");

    if (toggleButton && menu) {
      toggleButton.addEventListener("click", () => {
        menu.classList.toggle("hidden");
      });
      observer.disconnect();
    }
  });

  observer.observe(navbarContainer, { childList: true });
});
