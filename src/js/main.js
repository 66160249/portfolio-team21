// Function to dynamically load components
async function loadComponent(url, targetId) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to load ${url}: ${response.status}`);
      }
      const html = await response.text();
      document.getElementById(targetId).innerHTML = html;
    } catch (error) {
      console.error(`Error loading component from ${url}:`, error);
    }
  }
  
  // Function to toggle the mobile menu
  function setupNavbarToggle() {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
  
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
    }
  }
  
  // Initialize components and interactions
  document.addEventListener("DOMContentLoaded", () => {
    // Dynamically load components
    const components = [
      { url: "./components/navbar/index.html", target: "navbar" },
      { url: "./components/footer/index.html", target: "footer" },
    ];
  
    components.forEach(({ url, target }) => loadComponent(url, target));
  
    // Wait for components to be loaded, then setup interactions
    setTimeout(setupNavbarToggle, 500); // Adjust delay if necessary
  });
  