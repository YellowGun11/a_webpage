var imgList = document.getElementsByClassName("img_content");
var textList = document.getElementsByClassName("text_content");
var imgBox = document.getElementsByClassName("img_box")[0];
var textBox = document.getElementsByClassName("text_box")[0];
var imgpotBox=document.getElementsByClassName("img_pot")[0];
var imgpotList=imgpotBox.getElementsByTagName("div");
var textpotBox=document.getElementsByClassName("text_pot")[0];
var textpotList=textpotBox.getElementsByTagName("div");
var comeNumber;
var goNumber;
var comeNumber0;
var goNumber0;
var number=0;
var number0=0;
var imgAn;
var textAn;
var navOne=document.getElementsByClassName("nav_one")[0];
var topList=document.getElementsByClassName("bottom_list");
var familyBox=document.getElementsByClassName("family_part_box")[0];
window.onload= function () {
    imgpotList[number].style.borderColor="white";
    imgAn=setInterval(nextImg,3000);
    setInterval(nextbigImg,10000);
    onscroll=function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        // console.log("scrollTop:"+scrollTop)
        if (scrollTop < 587) {
            navOne.style.position="absolute";
            navOne.style.left=0;
            for (let i=0;i<topList.length;i++){
                topList[i].style.bottom= 130 +"px";
                topList[i].style.top= "auto";
            }
            // console.log("=====================")
        } else {
            navOne.style.position="fixed";
            navOne.style.left=-1349+"px";
            // console.log(navOne.style.left)
            // console.log("312=======================")
        }

        if(scrollTop>1776&&scrollTop<2576){
            familyBox.style.top=(scrollTop-1776)/4+"px";
            // console.log("top:"+familyBox.style.top);
            // document.body.style.background="url('../images/boxes-bg.jpg')";
        }
    }
}


//导航板块
var topList=document.getElementsByClassName("bottom_list");
function openNav(){
    navOne.style.left=0;
    for (let i=0;i<topList.length;i++){
        topList[i].style.top= 130 +"px";
        topList[i].style.bottom= "auto";
    }
}
















//两轮播板块
imgBox.onmouseover = function(){
    clearInterval(imgAn);
}


imgBox.onmouseout=function () {
    imgAn=setInterval(nextImg,3000);
}

textBox.onmouseover = function(){
    clearInterval(textAn);
}


textBox.onmouseout=function () {
    textAn=setInterval(nextText,3000);
}

function nextImg() {
    goNumber=number;
    number++;
    comeNumber=number;
    if (comeNumber==4){
        number=0;
        comeNumber=0;
    }
    imgList[goNumber].style.animation="goLeft 0.2s linear forwards";
    imgList[comeNumber].style.animation="comeRight 0.2s linear forwards";
    imgpotList[goNumber].style.borderColor="#A5CCD8";
    imgpotList[comeNumber].style.borderColor="white";
}
function previousImg(){
    goNumber=number;
    number--;
    comeNumber=number;
    if (comeNumber<0){
        number=3;
        comeNumber=3;
    }
    imgList[goNumber].style.animation="goRight 0.2s linear forwards";
    imgList[comeNumber].style.animation="comeLeft 0.2s linear forwards";
    imgpotList[goNumber].style.borderColor="#A5CCD8";
    imgpotList[comeNumber].style.borderColor="white";
}
//图片圆点函数
function imgSeclect(num) {
    if(num>number){
        imgList[number].style.animation="goLeft 0.2s linear forwards";
        imgList[num].style.animation="comeRight 0.2s linear forwards";
        imgpotList[number].style.borderColor="#A5CCD8";
        imgpotList[num].style.borderColor="white";
        number=num;
    }
    else if(num<number){
        imgList[number].style.animation="goRight 0.2s linear forwards";
        imgList[num].style.animation="comeLeft 0.2s linear forwards";
        imgpotList[number].style.borderColor="#A5CCD8";
        imgpotList[num].style.borderColor="white";
        number=num;
    }
}




// 文字轮播函数
function nextText() {
    goNumber0=number0;
    number0++;
    comeNumber0=number0;
    if (comeNumber0==7){
        number0=0;
        comeNumber0=0;
    }
    textList[goNumber0].style.animation="goLeft 0.2s linear forwards";
    textList[comeNumber0].style.animation="comeRight 0.2s linear forwards";
    textpotList[goNumber0].style.borderColor="#CBEBF4";
    textpotList[comeNumber0].style.borderColor="white";
}
function previousText() {
    goNumber0=number0;
    number0--;
    comeNumber0=number0;
    if (comeNumber0<0){
        number0=6;
        comeNumber0=6;
    }
    textList[goNumber0].style.animation="goRight 0.2s linear forwards";
    textList[comeNumber0].style.animation="comeLeft 0.2s linear forwards";
    textpotList[goNumber0].style.borderColor="#CBEBF4";
    textpotList[comeNumber0].style.borderColor="white";
}

//文字圆点函数
function textSeclect(num) {
    if(num>number0){
        textList[number0].style.animation="goLeft 0.2s linear forwards";
        textList[num].style.animation="comeRight 0.2s linear forwards";
        textpotList[number0].style.borderColor="#CBEBF4";
        textpotList[num].style.borderColor="white";
        number0=num;
    }
    else if(num<number0){
        textList[number0].style.animation="goRight 0.2s linear forwards";
        textList[num].style.animation="comeLeft 0.2s linear forwards";
        textpotList[number0].style.borderColor="#CBEBF4";
        textpotList[num].style.borderColor="white";
        number0=num;
    }
}


var textPart=document.getElementsByClassName("text_box")[0];
var imgPart=document.getElementsByClassName("img_box")[0];
function openText() {
    textPart.style.display="block";
    imgPart.style.display="none";
    textAn=setInterval(nextText,3000);
    textpotList[number0].style.borderColor="white";
    clearInterval(imgAn);
}

function openImg() {
    textPart.style.display="none";
    imgPart.style.display="block";
    clearInterval(textAn);
    imgAn=setInterval(nextImg,3000);
}

// 大轮播板块函数
var bigBgList=document.getElementsByClassName("big_img_bg");
var bigimgList=document.getElementsByClassName("big_img_content");
var bigNumber=0;
//显示的div节点big_img_text_box
var bigTextBox=document.getElementsByClassName("big_img_text_box");
//隐藏的div节点big_img_move_text
var bigMoveText=document.getElementsByClassName("big_img_move_text");
//显示遮罩层的div节点big_img_top
var bigImgCover=document.getElementsByClassName("big_img_top");
function moveText(num) {
    var withText=bigTextBox[num].offsetWidth;
    // console.log(num);
    bigMoveText[num].style.width=withText+"px";
    bigImgCover[num].style.backgroundColor="rgba(255,255,255,0.5)"
}
function leaveText(num) {
    // console.log(num);
    bigMoveText[num].style.width=0;
    bigImgCover[num].style.backgroundColor="rgba(255,255,255,0)"
}


// 图片左右切换
function nextbigImg() {
    bigNumber++;
    if (bigNumber==6){
        bigNumber=0;
    }
    for (let i=0;i<bigimgList.length;i++){
        bigimgList[i].style.visibility="hidden";
        bigBgList[i].style.opacity="0";
    }
    bigimgList[bigNumber].style.visibility="visible";
    bigBgList[bigNumber].style.opacity="1";
}
function previousbigImg() {
    bigNumber--;
    if (bigNumber<0){
        bigNumber=5;
    }
    for (let i=0;i<bigimgList.length;i++){
        bigimgList[i].style.visibility="hidden";
        bigBgList[i].style.opacity="0";
    }
    bigimgList[bigNumber].style.visibility="visible";
    bigBgList[bigNumber].style.opacity="1";
}




//Subscribe轮播板块
var subList=document.getElementsByClassName("sub_bg");
function subImg(num) {
    for (let i=0;i<subList.length;i++){
        subList[i].style.visibility="hidden";
    }
    subList[num].style.visibility="visible";
}