function Sport_Function () {
    var Sport_Output;
    var Sport = document.getElementById("Sport_Input").value;
    var Sport_String = " is the greatest sport!";
    switch(Sport) {
        case "Baseball":
            Sport_Output = "Baseball" + Sport_String;
        break;
        case "Football":
            Sport_Output = "Football" + Sport_String;
        break;
        case "Soccer":
            Sport_Output = "Soccer" + Sport_String;
        break;
        case "Basketball":
            Sport_Output = "Basketball" + Sport_String;
        break;
        case "Golf":
            Sport_Output = "Golf" + Sport_String;
        break;
        case "Hockey":
            Sport_Output = "Hockey" + Sport_String;
        break;
        default:
            Sport_Output = "Please enter a sport exactly as writte on the above list.";
    }
    document.getElementById("Output").innerHTML = Sport_Output;
}

function Hello_World_Function () {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "White");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);

ctx.font = "60px Arial";
ctx.fillText("Hello World",90,100);