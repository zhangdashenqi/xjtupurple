let codeFace;
let refresh = () => {
    $(".floatMenu").toggle("fast");
    codeFace.clear();
    document.getElementById("qrCodeDisplay").innerHTML = "";
    if (app.qrCode === "") {
        app.qrCode = app.generateCode();
    }
    codeFace = new QRCode("qrCodeDisplay", {
        text: "               " + app.qrCode + "               ",
        width: 150,
        height: 150,
        colorDark: app.colorOfCode,
        correctLevel: QRCode.CorrectLevel.H
    });
}
$("document").ready(() => {
    codeFace = new QRCode("qrCodeDisplay", {
        text: "               " + app.qrCode + "               ",
        width: 150,
        height: 150,
        colorDark: app.colorOfCode,
        correctLevel: QRCode.CorrectLevel.H
    });
    document.querySelector("#menuToggler").addEventListener("click", refresh);
    document.querySelector("#submitButton").addEventListener("click", refresh);
});