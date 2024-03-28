const hexbtn = document.getElementById("hexbtn");
// hex functionality 
hexbtn.addEventListener("click",changeColor);
function changeColor(){
    // console.log('hi');
let hexChars = "0123456789ABCDEF";
let hexColor = "";
// console.log(i);

for(let i = 0,charLength = hexChars.length;i<6;++i){
    hexColor = hexChars.charAt( Math.floor(Math.random()* charLength));
    console.log(i);

}
}
