window.onload = function() {
    var sideaInput = document.getElementById("sidea");
    var sidecInput = document.getElementById("sidec");
    var anglebInput = document.getElementById("angleb");

    sideaInput.addEventListener("change", calculateArea);
    sidecInput.addEventListener("change", calculateArea);
    anglebInput.addEventListener("change", calculateArea);

    var sideb2Input = document.getElementById("sideb2");
    var sidec2Input = document.getElementById("sidec2");
    var anglea2Input = document.getElementById("anglea2");

    sideb2Input.addEventListener("change", calculateSide);
    sidec2Input.addEventListener("change", calculateSide);
    anglea2Input.addEventListener("change", calculateSide);

    var sideb3Input = document.getElementById("sideb3");
    var sidec3Input = document.getElementById("sidec3");
    var sidea3Input = document.getElementById("sidea3");

    sideb3Input.addEventListener("change", calculateAngle);
    sidec3Input.addEventListener("change", calculateAngle);
    sidea3Input.addEventListener("change", calculateAngle);
};

function calculateArea() {
    var sidea = parseFloat(document.getElementById("sidea").value);
    var sidec = parseFloat(document.getElementById("sidec").value);
    var angleb = parseFloat(document.getElementById("angleb").value);

    var calculatedValue = 1/2*sidea*sidec*(Math.sin(angleb*Math.PI / 180));

    document.getElementById("area").value = calculatedValue;
}

function calculateSide(){
    var sideb2 = parseFloat(document.getElementById("sideb2").value);
    var sidec2 = parseFloat(document.getElementById("sidec2").value);
    var anglea2 = parseFloat(document.getElementById("anglea2").value);

    var calculatedValue1 = Math.sqrt(Math.pow(sideb2, 2) + Math.pow(sidec2, 2) - 2 * sideb2 * sidec2 * Math.cos(anglea2 * Math.PI / 180));

    document.getElementById("sidea2").value = calculatedValue1;

}

function calculateAngle() {
    var sideb3 = parseFloat(document.getElementById("sideb3").value);
    var sidec3 = parseFloat(document.getElementById("sidec3").value);
    var sidea3 = parseFloat(document.getElementById("sidea3").value);

    var calculatedValue2 = Math.acos(
        (Math.pow(sideb3, 2) + Math.pow(sidec3, 2) - Math.pow(sidea3, 2)) / (2 * sideb3 * sidec3)
    ) * (180 / Math.PI);

    document.getElementById("anglea3").value = calculatedValue2;
}

