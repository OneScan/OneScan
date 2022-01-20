let btn = document.querySelector(".qr-button");
let qr_code_element = document.querySelector(".qr-code");

btn.addEventListener("click", () => {
    let user_input = document.querySelector("#input_text");
	
    if(user_input.value != "") {
        if(qr_code_element.childElementCount == 0){
            generate(user_input);
        } else{
            qr_code_element.innerHTML = "";
            generate(user_input);
        }
    } else {
        console.log("not valid input");
    }
})

function generate(user_input){

    qr_code_element.style = "";

    var qrcode = new QRCode(qr_code_element, {
        text: `${user_input.value}`,
        width: 400,
        height: 400,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });

    let download = document.createElement("button");
    qr_code_element.appendChild(download);

    let download_link = document.createElement("a");
    download_link.setAttribute("download", "onescan-smartcode.png");
    download_link.innerText = "DOWNLOAD";

    download.appendChild(download_link);

    let qr_img = document.querySelector(".qr-code img");
    let qr_code_canvas = document.querySelector("canvas");

    if(qr_img.getAttribute("src") == null){
        setTimeout(() => {
            download_link.setAttribute("href", `${qr_code_canvas.toDataURL()}`);
        }, 400);
    } else {
        setTimeout(() => {
            download_link.setAttribute("href", `${qr_img.getAttribute("src")}`);
        }, 400);
    }
}