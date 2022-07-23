(()=>{"use strict";var __webpack_modules__={790:()=>{eval("\n;// CONCATENATED MODULE: ./modules/auth.js\nconst auth = () => {\r\n    const buttonAuth = document.querySelector('.button-auth')\r\nconst modalAuth = document.querySelector('.modal-auth')\r\nconst buttonOut = document.querySelector('.button-out')\r\nconst userName = document.querySelector('.user-name')\r\nconst closeAuth = document.querySelector('.close-auth')\r\nconst logInForm = document.getElementById('logInForm')\r\nconst inputLogin = document.getElementById('login')\r\nconst inputPassword = document.getElementById('password')\r\n\r\n\r\n\r\nconst login = (user) => {\r\n    buttonAuth.style.display = 'none'\r\n\r\n    buttonOut.style.display = 'flex'\r\n    userName.style.display = 'flex'\r\n    userName.textContent = user.login\r\n    modalAuth.style.display = 'none'\r\n}\r\n\r\nconst logout = () => {\r\n    buttonAuth.style.display = 'flex'\r\n\r\n    buttonOut.style.display = 'none'\r\n    userName.style.display = 'none'\r\n    userName.textContent = ''\r\n\r\n    localStorage.removeItem('user')\r\n}\r\n\r\nbuttonAuth.addEventListener('click', () => {\r\n    modalAuth.style.display = 'flex'\r\n})\r\n\r\ncloseAuth.addEventListener('click', () => {\r\n    modalAuth.style.display = 'none'\r\n})\r\n\r\nbuttonOut.addEventListener('click', () => {\r\n    logout()\r\n})\r\n\r\n\r\nlogInForm.addEventListener('submit', (event) => {\r\n    event.preventDefault();\r\n\r\n    const user = {\r\n        login: inputLogin.value,\r\n        password: inputPassword.value\r\n    }\r\n\r\n    localStorage.setItem('user', JSON.stringify(user))\r\n    login(user);\r\n})\r\n\r\nif (localStorage.getItem(\"user\")) {\r\n    login(JSON.parse(localStorage.getItem(\"user\")))\r\n}\r\n}\n;// CONCATENATED MODULE: ./modules/partners.js\nconst partners = () => {\r\n    const renderItems = (data) => {\r\n        // console.log(data);\r\n        data.forEach((elem, index) => {\r\n            console.log(elem);\r\n        })\r\n    }\r\n    \r\n    \r\n    fetch('https://glotest-d41b8-default-rtdb.firebaseio.com/db/partners.json')\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n        renderItems(data)\r\n    })\r\n    .catch((error) => {\r\n        console.log(error)\r\n    })\r\n}\r\n\r\n\r\n\r\n\r\n\n;// CONCATENATED MODULE: ./second.js\n\r\n\r\n\r\nauth()\r\npartners()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzkwLmpzIiwibWFwcGluZ3MiOiI7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7QUMzRE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3JCc0M7QUFDUTtBQUM5QztBQUNBLElBQUk7QUFDSixRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hdXRoLmpzPzRhNDIiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9wYXJ0bmVycy5qcz82MzBmIiwid2VicGFjazovLy8uL3NlY29uZC5qcz8wMzI4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhdXRoID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYnV0dG9uQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tYXV0aCcpXHJcbmNvbnN0IG1vZGFsQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hdXRoJylcclxuY29uc3QgYnV0dG9uT3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1vdXQnKVxyXG5jb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLW5hbWUnKVxyXG5jb25zdCBjbG9zZUF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYXV0aCcpXHJcbmNvbnN0IGxvZ0luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dJbkZvcm0nKVxyXG5jb25zdCBpbnB1dExvZ2luID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luJylcclxuY29uc3QgaW5wdXRQYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpXHJcblxyXG5cclxuXHJcbmNvbnN0IGxvZ2luID0gKHVzZXIpID0+IHtcclxuICAgIGJ1dHRvbkF1dGguc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG5cclxuICAgIGJ1dHRvbk91dC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICB1c2VyTmFtZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICB1c2VyTmFtZS50ZXh0Q29udGVudCA9IHVzZXIubG9naW5cclxuICAgIG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbn1cclxuXHJcbmNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIGJ1dHRvbkF1dGguc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG5cclxuICAgIGJ1dHRvbk91dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICB1c2VyTmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICB1c2VyTmFtZS50ZXh0Q29udGVudCA9ICcnXHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKVxyXG59XHJcblxyXG5idXR0b25BdXRoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbW9kYWxBdXRoLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxufSlcclxuXHJcbmNsb3NlQXV0aC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbn0pXHJcblxyXG5idXR0b25PdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBsb2dvdXQoKVxyXG59KVxyXG5cclxuXHJcbmxvZ0luRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgdXNlciA9IHtcclxuICAgICAgICBsb2dpbjogaW5wdXRMb2dpbi52YWx1ZSxcclxuICAgICAgICBwYXNzd29yZDogaW5wdXRQYXNzd29yZC52YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpXHJcbiAgICBsb2dpbih1c2VyKTtcclxufSlcclxuXHJcbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpIHtcclxuICAgIGxvZ2luKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKSlcclxufVxyXG59IiwiZXhwb3J0IGNvbnN0IHBhcnRuZXJzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmVuZGVySXRlbXMgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIGRhdGEuZm9yRWFjaCgoZWxlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBmZXRjaCgnaHR0cHM6Ly9nbG90ZXN0LWQ0MWI4LWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9kYi9wYXJ0bmVycy5qc29uJylcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICByZW5kZXJJdGVtcyhkYXRhKVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7IGF1dGggfSBmcm9tICcuL21vZHVsZXMvYXV0aCc7XHJcbmltcG9ydCB7IHBhcnRuZXJzIH0gZnJvbSAnLi9tb2R1bGVzL3BhcnRuZXJzJztcclxuXHJcbmF1dGgoKVxyXG5wYXJ0bmVycygpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///790\n")}},__webpack_exports__={};__webpack_modules__[790]()})();