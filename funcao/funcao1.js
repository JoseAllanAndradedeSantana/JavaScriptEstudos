//This pode variar

function f1(){
    console.log(this === window);
}

document.getElementsByTagName('body')[0].onclick = f1;



