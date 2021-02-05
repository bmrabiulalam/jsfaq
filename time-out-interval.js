function doS(){
    console.log(3333);
}
doS();
console.log(2222);
setTimeout(() => {console.log(1111)}, 4000);
setTimeout(doS, 3000);
console.log(4444);
console.log(4444);
console.log(4444);

setInterval(doS, 1500); // ctrl + c to stop the execution