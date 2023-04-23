console.log('hello user');
let c,p,d,ct,ob,a;
c=0;
p=0;
d=0;
ct=0;
ob=0;
a=0;
//navbar
function navdrop(){
      document.getElementById("nav").classList.toggle("act");
}
function navlift(){
      document.getElementById("nav").classList.toggle("act1");
}
function footdrop(){
      document.getElementById("foot").classList.toggle("act2");
      document.getElementById("foot1").classList.toggle("act2");
}
function footlift(){
      document.getElementById("foot").classList.toggle("act3");
      document.getElementById("foot1").classList.toggle("act3");
}
/*---------------------image slider-----------------------*/
var slider_img = document.querySelector('.slider-img');
var images = ['desp-1.png','desp-2.png'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
	
}

function togglepopup(){
      document.getElementById("info1").classList.toggle("act12");
}

var stage=0;

function bgchange(){
      if(stage == 0){
      document.querySelector(".bg").style.background="url(images/stage2-enter.png)";
      document.querySelector(".stage1").style.display="none";
      document.getElementById('desp').src="images/desp-3.png";
      document.querySelector(".stage2-enter").style.display="block";
      stage++;
     }
     else if(stage==1){
      document.querySelector(".bg").style.background="url(images/stage3.png)";
      document.querySelector(".stage2").style.display="none";
      document.querySelector(".stage3").style.display="block";
      document.querySelector(".foot1").style.bottom="-5vh";
      document.getElementById('desp').src="images/desp-5.png";
      stage++;
     }
     else if(stage==2){
      document.querySelector(".bg").style.background="url(images/stage4.png)";
      document.querySelector(".vip").style.display="none";
      document.querySelector(".foot1").style.bottom="-60vh";
      document.getElementById('desp').src="images/desp-3.png";
      stage++;
     }
     else if(stage==3){
      document.querySelector(".stage5").style.display="block";
      document.querySelector(".stage2").style.display="none";
      document.querySelector(".foot1").style.bottom="-5vh";
      document.getElementById('desp').src="images/desp-6.png";
      stage++;
     }
     else if(stage==4){
      document.querySelector(".bg").style.background="url(images/stage5.png)";
      document.querySelector(".stage2").style.display="block";
      document.querySelector(".stage5").style.display="none";
      document.querySelector(".foot1").style.display="none";
      stage++;
     }
     else if(stage==5){
      document.querySelector(".bg").style.background="url(images/stage5.png)";
      document.querySelector(".stage2").style.display="none";
      document.querySelector(".stage6").style.display="block";
      document.querySelector(".foot1").style.display="block";
      document.getElementById('desp').src="images/desp-6.png";
      stage++;
     }
     else if(stage==6){
      document.querySelector(".bg").style.background="url(images/stage6.png)";
      document.querySelector(".stage2").style.display="block";
      document.querySelector(".stage6").style.display="none";
      document.querySelector(".foot1").style.display="none";
      f4();
      stage++;
     }
     else if(stage==7){
      document.querySelector(".bg").style.background="url(images/stage6.png)";
      document.querySelector(".stage2").style.display="none";
      document.querySelector(".stage7").style.display="block";
      document.querySelector(".foot1").style.display="block";
      document.getElementById('desp').src="images/desp-6.png";
      f5();
      stage++;
     }
     else if(stage==8){
      document.querySelector(".stage2").style.display="none";
      document.querySelector(".foot1").style.display="none";
      document.querySelector(".stage7").style.display="none";
      document.querySelector(".win").style.display="block";
      f6();
      document.querySelector(".ct").textContent = `${ct}/5 `
      document.querySelector(".c").textContent = `${c}/5 `
      document.querySelector(".ob").textContent = `${ob}/5 `
      document.querySelector(".p").textContent = `${p}/5 `
      document.querySelector(".a").textContent = `${a}/5 `
      document.querySelector(".d").textContent = `${d}/5 `
     }
}
/*----------------------------*/
function move17(){
    document.querySelector(".bg").style.background="url(images/stage2.png)";
    document.querySelector(".stage2-enter").style.display="none";
    document.querySelector(".foot1").style.display="block"
    document.querySelector(".foot1").style.bottom="-61vh"
    document.querySelector(".stage2").style.display="block"
    f1();
}

function move19(){
      document.querySelector(".stage2-enter").style.display="none";
      document.querySelector(".deadend").style.display="block";
}

function peek1(){
      document.querySelector(".bg").style.background="url(images/vip1.png)";
      document.querySelector(".stage3").style.display="none";
      document.querySelector(".foot1").style.bottom="-41vh";
      document.getElementById('desp').src="images/desp-4.png";
      document.querySelector(".vip1").style.display="block";
      document.querySelector(".stage2").style.display="block"
      f2();
}
function peek2(){
      document.querySelector(".bg").style.background="url(images/vip2.png)";
      document.querySelector(".stage3").style.display="none";
      document.querySelector(".foot1").style.bottom="-49vh";
      document.getElementById('desp').src="images/desp-4.png";
      document.querySelector(".vip2").style.display="block";
      document.querySelector(".stage2").style.display="block"
      f2();
}
function peek3(){
      document.querySelector(".bg").style.background="url(images/vip3.png)";
      document.querySelector(".stage3").style.display="none";
      document.querySelector(".foot1").style.bottom="-9vh";
      document.getElementById('desp').src="images/desp-4.png";
      document.querySelector(".vip3").style.display="block";
      document.querySelector(".stage2").style.display="block"
      f3();
      //console.log(ct);
}

function p1(){
      document.getElementById('tog').src="images/p1.jpg";
      document.getElementById('tog').style.width="50%"
      togglepopup();
}
function p4(){
      document.getElementById('tog').src="images/p4.jpg";
      document.getElementById('tog').style.width="80%"
      togglepopup();
}
function c1(){
      document.getElementById('tog').src="images/c1.png";
      document.getElementById('tog').style.width="130%"
      togglepopup();
}
/*------------------vip2-----------*/
function p2(){
      document.getElementById('tog').src="images/p2.jpg";
      document.getElementById('tog').style.width="50%"
      togglepopup();
}
function p3(){
      document.getElementById('tog').src="images/p3.jpg";
      document.getElementById('tog').style.width="50%"
      togglepopup();
}
function c3(){
      document.getElementById('tog').src="images/c3.png";
      document.getElementById('tog').style.width="20%"
      togglepopup();
}
/*--------------------vip3---------------------------*/
function c2(){
      document.getElementById('tog').src="images/c2.png";
      document.getElementById('tog').style.width="100%"
      togglepopup();
}
/*-------------------------stage5---------------------*/
function op1(){
      document.querySelector('.stage5').style.display="none";
      document.querySelector('.deadend').style.display="block";
      document.querySelector('.foot1').style.display="none";
      document.getElementById('txt').innerHTML="There are 40 pirates you cannot fight with them.";
}
function op2(){
      document.querySelector('.stage5').style.display="none";
      document.querySelector('.deadend').style.display="block";
      document.querySelector('.foot1').style.display="none";
      document.getElementById('txt').innerHTML="You are most wanted you cannot call guards.";
}
function op3(){
      bgchange();
}
/*----------------------stage6-----------------*/
function op11(){
      bgchange();
}
function op12(){
      document.querySelector('.stage6').style.display="none";
      document.querySelector('.deadend').style.display="block";
      document.querySelector('.foot1').style.display="none";
      document.getElementById('txt').innerHTML="Secured vault has no windows.";
}
/*----------------------stage7-----------------*/
function op21(){
      document.querySelector('.stage7').style.display="none";
      document.querySelector('.deadend').style.display="block";
      document.querySelector('.foot1').style.display="none";
      document.getElementById('txt').innerHTML="This is not the treasure, train reached madras,soldiers caught you";
}
/*---------------------------soft skills--------------------------*/
function f1(){
  ct+=2;
}
function f2(){
 ct+=1;
 ob+=3;
 d+=3
}
function f3(){
      ct+=1;
      ob+=2;
      c+=5;
      d+=3
}
function f4(){
      ct+=1;
      a+=3;
}
function f5(){
      p+=5;
      d+=2
}
function f6(){
      ct+=1;
      ob+=2;
      a+=2;
}

/*-------------------------------------------*/
