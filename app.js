let result = document.getElementById("inputext");
const btn = document.querySelectorAll(".btn");

/*============ For getting the value of btn, Here we use for loop ============*/

for (item of btn) {
    item.addEventListener("click", (e) => {
        btntext = e.target.innerText;

        if (btntext == "*") {
            btntext = "*";
        }

        if (btntext == "/") {
            btntext = "/";
        }
        result.value += btntext;
    });
}

function sin() {
    result.value = Math.sin(result.value);
}

function cos() {
    result.value = Math.cos(result.value);
}

function tan() {
    result.value = Math.tan(result.value);
}

function pow() {
    result.value = Math.pow(result.value, 2);
}

function sqrt() {
    result.value = Math.sqrt(result.value, 2);
}

function log() {
    result.value = Math.log(result.value);
}

function pi() {
    result.value = Math.PI.toFixed(10);
}

function e() {
    result.value = Math.E.toFixed(10);
}

let operate = () => {
    try {
        result.value = eval(result.value)
    } catch(err) {
        result.value = "Enter valid input";
    }
};

function clr() {
    result.value = "";
}

function del() {
    result.value = result.value.slice(0, -1);
}

function sin() {
    result.value = Math.sin(result.value)
}