let name = prompt('Как тебя зовут?');
alert(`Привет ${name} !`); 


function multi(){
    alert(document.getElementById('num1').value * document.getElementById('num2').value);
    alert(document.getElementById("display1").innerHTML = area);
}

function area() {
    var side1 = parseInt(document.getElementById("side1").value);

    var side2 = parseInt(document.getElementById("side2").value);

    var side3 = parseInt(document.getElementById("side3").value);

    var s = (side1 + side2 + side3) / 2;

    var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
    

    alert(document.getElementById("display").innerHTML = area);
}

function myFunction() {
    let a = document.getElementById("one").value;
    let b = document.getElementById("two").value;
    let c = (a > b) ? a : b;
    document.getElementById("cucumber").innerHTML = c;



document.querySelector("button").onclick = myFunction;

}

function proverit(){
    zadachi_1 = '8';
    zadachi_2 = 'именованное хранилище данных';
    zadachi_3 = 'var, let ,const';
    zadachi_4 = 'нет';
    zadachi_5 = 'замыкание';
    zadachi_6 = 'stack' ;
    zadachi_7 = 'ИЛИ';
    zadachi_8 = 'И';
    zadachi_9 = 'НЕ';
    zadachi_10 = 'упорядоченная коллекция данных';
    otv_1 = document.getElementById('z_1').value;
    otv_2 = document.getElementById('z_2').value;
    otv_3 = document.getElementById('z_3').value;
    otv_4 = document.getElementById('z_4').value;
    otv_5 = document.getElementById('z_5').value;
    otv_6 = document.getElementById('z_6').value;
    otv_7 = document.getElementById('z_7').value;
    otv_8 = document.getElementById('z_8').value;
    otv_9 = document.getElementById('z_9').value;
    otv_10 = document.getElementById('z_10').value;
    ball = 0;
    if(otv_1 == zadachi_1){
    ball +=1;
    }
    if(otv_2 == zadachi_2){
    ball +=1;
    }
    if(otv_3 == zadachi_3){
    ball +=1;
    }
    if(otv_4 == zadachi_4){
    ball +=1;
    }
    if(otv_5 == zadachi_5){
    ball +=1;
    }
    if(otv_6 == zadachi_6){
    ball +=1;
    }
    if(otv_7 == zadachi_7){
    ball +=1;
    }
    if(otv_8 == zadachi_8){
    ball +=1;
    }
    if(otv_9 == zadachi_9){
    ball +=1;
    }
    if(otv_10 == zadachi_10){
    ball +=1;
    }
    vsego_zadach = 10;
    procent_vip = ball/vsego_zadach * 100;
    document.getElementById('rezultat').innerHTML = "Ваш результат: "+procent_vip+"%.";
    }


var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");
    
var span = document.getElementsByClassName("close")[0];
    
btn.onclick = function() {
    modal.style.display = "block";
}
    
span.onclick = function() {
    modal.style.display = "none";
}
    
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}