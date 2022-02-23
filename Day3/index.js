window.onload = function () {
    var x = {};
    var input = document.getElementById("txt");
    Object.defineProperty(x, "inputValue", {
      get: function () {
        return value;
      },
      set: function (inputVal) {
        input.value = inputVal;
        value = inputVal;
      },
    });
    input.addEventListener("input", function () {
      x.inputValue = input.value;
      document.getElementById("p").innerHTML = x.inputValue;
    });
    setInterval(function () {
      x.inputValue = Math.floor(Math.random() * 100)+1;
      document.getElementById("p").innerHTML = x.inputValue;
    }, 3000);
  };