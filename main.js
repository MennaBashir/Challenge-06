let func = setInterval(function () {
  let t1 = new Date("Jan 5,2024 23:59:59");
  let t2 = new Date();
  let T = t1 - t2;
  document.querySelector("#day").innerHTML = (`0${Math.floor(T / (1000 * 60 * 60 * 24))}`);
  let x = T % (1000 * 60 * 60 * 24);
  document.querySelector("#hour").innerHTML = (`${Math.floor(x / (1000 * 60 * 60))}`);
  let y = x % (1000 * 60 * 60);
  document.querySelector("#minuit").innerHTML = (`${Math.floor(y / (1000 * 60))}`);
  let z = y % (1000 * 60);
  document.querySelector("#second").innerHTML = (`${Math.floor(z / 1000)}`);
  if (T < 0) {
    clearInterval(func);
    document.querySelector("#day").innerHTML = (`00`);
    document.querySelector("#hour").innerHTML = (`0`);
    document.querySelector("#minuit").innerHTML = (`0`);
    document.querySelector("#second").innerHTML = (`0`);
  }
}, 1000);

