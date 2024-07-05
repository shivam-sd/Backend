

const btn = document.querySelector("button");
div = true;

btn.addEventListener("click" , () => {
    if(div === true){
        div = false;
        getcolor()
        document.querySelector("div").style.display = 'none';
        }
        else{
            div = true;
            getcolor()
        document.querySelector("div").style.display = 'block'
    }
});

function getcolor(){
    let random = Math.floor(Math.random()*16777215);
    let hexa = "#" + random.toString(16);
    document.querySelector("body").style.backgroundColor = hexa;
}
getcolor()