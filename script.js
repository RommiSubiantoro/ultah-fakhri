 document.getElementById("loginForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value;
      const errorMsg = document.getElementById("error-message");

      if (username === "Tian" && password === "eumm pap") {
        errorMsg.textContent = "";
        alert("Login berhasil! Selamat ulang tahun 🎉");

        const music = document.getElementById("bg-music");
        music.style.display = "block";
        music.play();

        document.querySelector(".login-box").innerHTML = `
          <h2>Selamat Ulang Tahun, Tian! 🎂🎉</h2>
          <p>Semoga harimu penuh kebahagiaan,Panjang Umur, Happy Selalu, sayangg Tian.</p>
          <p>Gaada PAP Bugilss YAAA</p>
        `;
      } else {
        errorMsg.textContent = "Username atau password salah!";
      }
    });


 // Toggle lihat password
    document.getElementById("togglePassword").addEventListener("click", function () {
      const passInput = document.getElementById("password");
      if (passInput.type === "password") {
        passInput.type = "text";
        this.textContent = "🙈";
      } else {
        passInput.type = "password";
        this.textContent = "👁️";
      }
    });
