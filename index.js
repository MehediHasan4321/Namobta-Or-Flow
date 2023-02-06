window.onload = () => {
    main()
}
function main() {
    // all references....
    const numInp = document.getElementById("num-input");
    const btn = document.getElementById("namota-generator-btn")

    btn.addEventListener("click", () => {
        let number = numInp.value
        let mgs = namota(number)
        generateDiv(mgs)
    })
}

function namota(n) {
    let result = [];
    for (let i = 1; i <= 10; i++) {
        let singleLine = n + " * " + i + " = " + n * i
        result.unshift(singleLine)
    }
    return result.join("\n")
}

function generateDiv(mgs) {
    let containerBox = document.getElementById("content")
    let newDiv = document.createElement("div")
    newDiv.classList= "display";
    newDiv.innerHTML = mgs;
    containerBox.appendChild(newDiv)

    return newDiv
}

