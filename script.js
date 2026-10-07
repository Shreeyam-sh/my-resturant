function viewMenu() {
  alert("Menu coming soon!");
}

// Footer newsletter form
function subscribe(e) {
  e.preventDefault();
  document.getElementById("newsletter-msg").textContent =
    "Thanks for subscribing!";
  e.target.reset();
  return false;
}
