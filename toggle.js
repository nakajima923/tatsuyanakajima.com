const checkbox = document.getElementById("forceDarkTheme");
          const toggleIcon = document.getElementById('toggleIcon');
        
          // ページ読み込み時に保存された状態を復元する
          if (localStorage.getItem("forceDarkTheme") === "true") {
            checkbox.checked = true;
            toggleIcon.classList.add('bi-toggle2-on');
            toggleIcon.classList.remove('bi-toggle2-off');
            document.body.classList.add("darkTheme");
          }
        
          checkbox.addEventListener("change", (e) => {
            if (e.target.checked) {
              toggleIcon.classList.add('bi-toggle2-on');
              toggleIcon.classList.remove('bi-toggle2-off');
              document.body.classList.add("darkTheme");
              localStorage.setItem("forceDarkTheme", "true");
            } else {
              toggleIcon.classList.remove('bi-toggle2-on');
              toggleIcon.classList.add('bi-toggle2-off');
              document.body.classList.remove("darkTheme");
              localStorage.setItem("forceDarkTheme", "false");
            }
          });