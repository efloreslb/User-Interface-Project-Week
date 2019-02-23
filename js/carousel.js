// Carousel Component
let carouselStatus = 1;
let carouselTimer = 4000;

window.onload = () => {
    carouselLoop();
}

let startCarouselLoop = setInterval(() => {
    carouselLoop();
}, carouselTimer);

document.querySelector("#carousel-container").onmouseenter = () => {
    clearInterval(startCarouselLoop);
}

document.querySelector("#carousel-container").onmouseleave = () => {
    startCarouselLoop = setInterval(() => {
        carouselLoop();
    }, carouselTimer);
}

document.querySelector(".carousel-button-previous").onclick = () => {
    if(carouselStatus === 1) {
        carouselStatus = 2;
    } else if (carouselStatus === 2) {
        carouselStatus = 3;
    } else if(carouselStatus === 3) {
        carouselStatus = 1;
    }
    carouselLoop();
}

document.querySelector(".carousel-button-next").onclick = () => {
    carouselLoop();
}

let carouselLoop = () => {
    if(carouselStatus === 1) {
        document.querySelector("#carousel-item02").style.opacity = '0';
        setTimeout(() => {
            document.querySelector('#carousel-item01').style.right = "0px";
            //document.querySelector('#carousel-item01').style.zIndex = "100";
            document.querySelector('#carousel-item02').style.right = "-800px";
            //document.querySelector('#carousel-item02').style.zIndex = "150";
            document.querySelector('#carousel-item03').style.right = "800px";
            //document.querySelector('#carousel-item03').style.zIndex = "50";
        }, 100);
        setTimeout(() => {
            document.querySelector("#carousel-item02").style.opacity = '1';
        }, 1000)
        carouselStatus = 2;
    }

    else if(carouselStatus === 2) {
        document.querySelector("#carousel-item03").style.opacity = '0';
        setTimeout(() => {
            document.querySelector('#carousel-item02').style.right = "0px";
            //document.querySelector('#carousel-item02').style.zIndex = "100";
            document.querySelector('#carousel-item03').style.right = "-800px";
            //document.querySelector('#carousel-item03').style.zIndex = "150";
            document.querySelector('#carousel-item01').style.right = "800px";
            //document.querySelector('#carousel-item01').style.zIndex = "50";
        }, 100);
        setTimeout(() => {
            document.querySelector("#carousel-item03").style.opacity = '1';
        }, 1000)
        carouselStatus = 3;
    }

    else if(carouselStatus === 3) {
        document.querySelector("#carousel-item01").style.opacity = '0';
        setTimeout(() => {
            document.querySelector('#carousel-item03').style.right = "0px";
            //document.querySelector('#carousel-item03').style.zIndex = "100";
            document.querySelector('#carousel-item01').style.right = "-800px";
            //document.querySelector('#carousel-item01').style.zIndex = "150";
            document.querySelector('#carousel-item02').style.right = "800px";
            //document.querySelector('#carousel-item02').style.zIndex = "50";
        }, 100);
        setTimeout(() => {
            document.querySelector("#carousel-item01").style.opacity = '1';
        }, 1000)
        carouselStatus = 1;
    }
}