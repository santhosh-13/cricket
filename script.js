var sum = 0;
var wicks = 0;
var delivery = 0;
var over = 0;
var target = Math.floor(Math.random()* 100)+ 30;
window.onload = function () {
    document.getElementById("target").innerHTML = target;
    document.getElementById("mar").innerHTML="India needs "+target+" runs in "+5+"."+0+" overs to win this match."
}
function runs(a) {
    delivery += 1;
    document.getElementById("over").innerHTML = "(" + Math.floor(delivery / 6) + "." + delivery % 6 + ")";
    var x = Math.floor(Math.random() * 6) + 1
    document.getElementById("bowler").innerHTML = x;
    if (a == '1' && x != 1) {
        sum += 1;
    }
    if (a == '2' && x != 2) {
        sum += 2;
    }
    if (a == '3' && x != 3) {
        sum += 3;
    }
    if (a == '4' && x != 4) {
        sum += 4;
    }
    if (a == '5' && x != 5) {
        sum += 5;
    }
    if (a == '6' && x != 6) {
        sum += 6;
    }
    if ((a == '1' && x == 1) || (a == '2' && x == 2) || (a == '3' && x == 3) || (a == '4' && x == 4) || (a == '5' && x == 5) || (a == '6' && x == 6)) {
        wicks += 1;
        sum - x;
    }
    document.getElementById("wickets").innerHTML = wicks;
    document.getElementById("total").innerHTML = sum;
    if (delivery == 30) {
        alert("Batting Over,Better Luck Next Time..");
        tryagain();
    }
    if (wicks == 10) {
        alert("Batting Over,Better Luck Next Time..");
        tryagain();
    }
    if (target <= sum) {
        alert("Batting Over,You Win!!");
        tryagain();
    }
    document.getElementById("mar").innerHTML = "India needs " + Math.floor(target - sum) + "runs in " + Math.floor(30 - delivery) + "balls to win this match."
}
function tryagain() {
    sum = 0;
    wicks = 0;
    delivery = 0;
    over = 0;
    document.getElementById("wickets").innerHTML = wicks;
    document.getElementById("bowler").innerHTML = 0;
    document.getElementById("total").innerHTML = sum;
    document.getElementById("over").innerHTML = "(0.0 / 5.0)";
    target = Math.floor(Math.random() * 100) + 30;
    window.onload;
    document.getElementById("target").innerHTML = target;
    document.getElementById("mar").innerHTML = "India needs " + target + " runs in" + 5 + "." + 0 + " overs to win this match."
}