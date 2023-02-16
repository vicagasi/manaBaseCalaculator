
function calcAll(){
    l = document.getElementById('land').value;
    r = document.getElementById('red').value;
    u = document.getElementById('blue').value;
    b = document.getElementById('black').value;
    w = document.getElementById('white').value;
    g = document.getElementById('green').value;
    determineLands(l,r,u,b,w,g);
}

function determineLands(lands, red, blue, black, white, green){
    let totalColor = red + blue + black + white + green;
    let redOut = landForColor(lands, red, totalColor);
    let blueOut = landForColor(lands, blue, totalColor);
    let blackOut = landForColor(lands, black, totalColor);
    let whiteOut = landForColor(lands, white, totalColor);
    let greenOut = landForColor(lands, green, totalColor);
    setOutput(redOut, blueOut, blackOut, whiteOut, greenOut);
}

// Set divs to display the calculations
function setOutput(red, blue, black, white, green){
    document.getElementById("rOut").value = red;
    document.getElementById("uOut").value = blue;
    document.getElementById("bOut").value = black;
    document.getElementById("wOut").value = white;
    document.getElementById("gOut").value = green;
}

// Returns the amount of lands for a specific color
function landForColor(lands, currColor, totalColor) {
    let percentage = currColor / totalColor;
    let output = lands * percentage;
    return Math.round(output);
}