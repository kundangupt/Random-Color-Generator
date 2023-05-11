const GetColor = () => {
    const randomNum =  Math.floor(Math.random()*16777215);
    const randomCode = "#" +randomNum.toString(16);
    document.body.style.backgroundColor =randomCode;
    document.getElementById("color-code"). innerText = randomCode;

    document.clipboard.writeText(randomCode);
}

// event Call
document.getElementById('btn').addEventListener(
    'click',
    GetColor
)


// intial Call
GetColor();