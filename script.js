let rightBtn = document.getElementById('right-arrow');
let leftBtn = document.getElementById('left-arrow');


    rightBtn.addEventListener('click', function(){
        let display = document.querySelector('.hover-box');
        display.style.transform = "translate(-300px)";
    })

    leftBtn.addEventListener('click', function(){
        let display = document.querySelector('.hover-box');
        display.style.transform = "translate(0px)";
    })



        let loop =  setInterval(function(){


            let second = new Date().getSeconds();
            let x= 59;
            let dS =  x -second ;

            if (dS == 0){
                dS = "0";
            }

            let min = new Date().getMinutes();
            let y= 59;
            let dm = y -min;
            
            if(dm == 0){
                dm = "0";
            }

            
            let houe = new Date().getHours();
            let z= 59;
            let dh = z -houe;

            if(dh == 0){
                dh = "0";
            }

            let days = new Date().getDay();
            let a= 6;
            let dd = a -days;

            if(dd == 0){
                dd= "0";
            }

            let location = document.querySelector(".item-sale .sale-head .right-side h1");
            location.innerHTML =  dd + " " + ":" + " " + dh + " " + ":" + " " + dm + " " + ":" + " " + dS;

            if (dS == "0" && dm == "0" && dh == "0" && dd == "0"){
                clearInterval(loop)
            }

        }, 0)


    let rightBtnCat = document.getElementById('right-arrow-cat');
    let leftBtnCat = document.getElementById('left-arrow-cat');

    rightBtnCat.addEventListener('click', function(){
        let catData = document.querySelector('.cat-hover');
        catData.style.transform = "translate(-370px)"
    })

    leftBtnCat.addEventListener('click', function(){
        let catData = document.querySelector('.cat-hover');
        catData.style.transform = "translate(0px)"
    })

        AOS.init();