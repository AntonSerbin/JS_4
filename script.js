 var buttonChangeColorRed= document.querySelector("#changeColorRed");
 buttonChangeColorRed.addEventListener(`click`,function() {
	var listP = document.getElementsByTagName('p');
 	for (var countP=0; countP<listP.length; countP++)
 	listP[countP].style.color = "red";

});

 var buttonChangeColorBlack= document.querySelector("#changeColorBlack");
 buttonChangeColorBlack.addEventListener(`click`,function() {
	var listP = document.getElementsByTagName('p');
 	for (var countP=0; countP<listP.length; countP++) {
 	listP[countP].style.color = "black";
 	listP[countP].style.textDecoration = "none";}

});
// <!-- end Task1 -->

 var addShadow= document.querySelector("#addShadow")
 addShadow.addEventListener(`click`,function() {
 	var listImg = document.getElementsByTagName('img');
  	for (var countImg=0; countImg<listImg.length; countImg++)
 	listImg[countImg].style.boxShadow = "10px 10px 10px grey";
});
 var deleteShadow= document.querySelector("#deleteShadow")
 deleteShadow.addEventListener(`click`,function() {
 	var listImg = document.getElementsByTagName('img');
  	for (var countImg=0; countImg<listImg.length; countImg++)
 	listImg[countImg].style.boxShadow = "none";
});
// <!-- end Task2 -->

 var addNumberP= document.querySelector("#addNumberP");
 addNumberP.addEventListener(`click`,function() {
 	var listP = document.getElementsByTagName('p');
 	for (var countP=0; countP<listP.length; countP++)
 	listP[countP].innerHTML=  "Абзац №" + countP + ". " + listP[countP].innerHTML;
  	});
// <!-- end Task3 -->

var count1=0;
var buttonCounter1 = document.querySelector("#buttonCounter1");
buttonCounter1.addEventListener(`click`,function() {
 	count1++;
 	document.getElementById("counter1").innerHTML = count1;
 	});

var count2=0;
var buttonCounter2 = document.querySelector("#buttonCounter2");
buttonCounter2.addEventListener(`click`,function() {
 	count2++;
 	document.getElementById("counter2").innerHTML = count2;
 	});
// <!-- end Task4 -->


var task5but = document.querySelector("#task5button");
task5but.addEventListener(`click`, function() {
	var a = +document.getElementById("numberTask5").value;
	var b = +document.getElementById("powerTask5").value;
	document.getElementById("resultPowerTask5").innerHTML = Math.pow(a,b);
	});
// <!-- end Task5 -->

var task6string = document.querySelector("#task6button");
task6string.addEventListener(`click`, function() {
	var stringTask6=document.getElementById("stringForSearch").value;
	var list = document.getElementsByTagName(stringTask6);
	for (var countP=0; countP<list.length; countP++)
 		{list[countP].style.textDecoration = "underline"};
 		});
 

// <!-- end Task6 --> 

var button7 = document.querySelector("#button7");
button7.addEventListener(`click`, function() {
	var years = +document.getElementById("years").value;
	if (years>17) {document.getElementById("resultTask7").innerHTML="Добро пожаловать!";}
	 	else {document.getElementById("resultTask7").innerHTML="Вы еще молоды";};
											});
// <!-- end Task7 -->

var years2;
function getElementTask8(){
					years2 = +document.getElementById("years2").value;
					checkAgeTask8(years2);	
					};
function checkAgeTask8(age) {
	if (age>17) {document.getElementById("resultTask8").innerHTML="Добро пожаловать!";}
		else {document.getElementById("resultTask8").innerHTML="Вы еще молоды";};
	if (!!!age) {document.getElementById("resultTask8").innerHTML="Not undefined - не ввели возвраст";};//- проверка номер один											
	age=age||alert("Не введен аргумент"); //-проверка номер два	
	};


// <!-- end Task8 --> -проверка сделана но через задницу! 

var massive9 = [];
var button9= document.querySelector("#button9");
button9.addEventListener(`click`, function() {
		var addMassive9 = document.getElementById("addMassive9").value;
				function massiveTask9(a) {
				if (!!!a) {document.getElementById("massive9New").innerHTML="Не введен элемент";
						return	};
				var lengthMass = massive9.push(a);
				document.getElementById("massive9New").innerHTML=massive9;
				document.getElementById("massive9Length").innerHTML=lengthMass;						
										}
		massiveTask9(addMassive9);
											});
// <!-- end Task9 -->

var button10= document.querySelector("#button10");
button10.addEventListener(`click`, function() {
		var number10 = parseInt(document.getElementById("number10").value);
		var res10;
		if (number10>=10) {res10=number10*number10}
			else if (number10<=7) {res10="Число меньше равно 7"}
				else {res10=number10-1};
		document.getElementById("result10").innerHTML = res10;
												});

// <!-- end Task10 -->

var button11= document.querySelector("#button11"),
	button11NewGame= document.querySelector("#button11NewGame"),
 	rand11,
	countRandom=0;	

function random11(){
	rand11 = Math.floor(Math.random() * 11)
					};
random11();
document.getElementById("hint11").innerHTML = "hint = " + rand11;

button11.addEventListener(`click`, function() {
	var number11 = parseInt(document.getElementById("number11").value);
	if (countRandom<2) {document.getElementById("try11").innerHTML = "Попытка номер "+ (countRandom+1)}
		else {	document.getElementById("try11").innerHTML = "Кончились попытки";
				document.getElementById("result11").innerHTML = "Не угадали! :("
				return};
	if (number11==rand11) {document.getElementById("result11").innerHTML = "Угадали число! "+ rand11};			
	if (number11<rand11) {document.getElementById("result11").innerHTML = "Загаданное число больше"};			
	if (number11>rand11) {document.getElementById("result11").innerHTML = "Загаданное число меньше"};			
	countRandom++;
							});

button11NewGame.addEventListener(`click`, function() {
								countRandom=0;
								random11();
								document.getElementById("try11").innerHTML = "Попытка номер "+ (countRandom);
								document.getElementById("result11").innerHTML = "Загаданно новое число";
								document.getElementById("hint11").innerHTML = "hint = " + rand11;
													})	;
// <!-- end Task11 -->