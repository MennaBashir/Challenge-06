let T;
let func = setInterval(function () {
    let t1 = new Date("Jan 4,2024 23:59:59");
    let t2 = new Date();
     T = t1 - t2;
    document.querySelector("#day").innerHTML = (`0${Math.floor(T / (1000 * 60 * 60 * 24))}`);
    let x = T % (1000 * 60 * 60 * 24);
    document.querySelector("#hour").innerHTML = (`${Math.floor(x / (1000 * 60 * 60))}`);
    let y = x % (1000 * 60 * 60);
    document.querySelector("#minuit").innerHTML = (`${Math.floor(y / (1000 * 60))}`);
    let z = y % (1000 * 60);
    document.querySelector("#second").innerHTML = (`${Math.floor(z / 1000)}`);
    if(T<0)
{
    clearInterval(func);
}
}, 1000);


