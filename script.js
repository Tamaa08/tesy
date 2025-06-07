// script.js
document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("registerForm");

  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("regUsername").value;
      const password = document.getElementById("regPassword").value;
      const confirmPassword = document.getElementById("regConfirmPassword").value;

      if (password !== confirmPassword) {
        alert("Password tidak cocok!");
        return;
      }

      // Simpan ke localStorage
      localStorage.setItem("username", username);
      localStorage.setItem("isLoggedIn", "true");

      // Pindah ke halaman beranda
      window.location.href = "home.html";
    });
  }
});
