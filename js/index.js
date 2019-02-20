// JS goes here

//Nav Component

const toggleNav = () => {
    nav.classList.toggle('nav-hidden');

    navButton.forEach(button => {
        button.classList.toggle('nav-button-hidden');
    })
}

const toggleButton = () => {
    button.classList.toggle('nav-button-hidden')
}

const nav = document.querySelector('.nav-content');
const navButton = document.querySelectorAll('.nav-button');
navButton.forEach(button => { 
    button.addEventListener('click', toggleNav)
})

//Tab Component

class TabLink {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.tabContent = document.querySelector(`.tab-content[data-tab="${this.data}"]`);
        this.tabContent = new TabContent(this.tabContent);
        this.element.addEventListener('click', this.tabSelect.bind(this));
    }

    tabSelect() {
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => tab.classList.remove('tab-selected'));
        this.element.classList.add('tab-selected');
        this.tabContent.contentSelect();
    }
}

class TabContent {
    constructor(element) {
        this.element = element;
    }

    contentSelect() {
        const contents = document.querySelectorAll('.tab-content');
        contents.forEach(content => content.classList.remove('tab-content-selected'));
        this.element.classList.add('tab-content-selected');
    }
}

const tabs = document.querySelectorAll('.tab-section .tab')
                     .forEach(tab => new TabLink(tab));


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
            document.querySelector('#carousel-item01').style.zIndex = "100";
            document.querySelector('#carousel-item02').style.right = "-800px";
            document.querySelector('#carousel-item02').style.zIndex = "150";
            document.querySelector('#carousel-item03').style.right = "800px";
            document.querySelector('#carousel-item03').style.zIndex = "50";
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
            document.querySelector('#carousel-item02').style.zIndex = "100";
            document.querySelector('#carousel-item03').style.right = "-800px";
            document.querySelector('#carousel-item03').style.zIndex = "150";
            document.querySelector('#carousel-item01').style.right = "800px";
            document.querySelector('#carousel-item01').style.zIndex = "50";
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
            document.querySelector('#carousel-item03').style.zIndex = "100";
            document.querySelector('#carousel-item01').style.right = "-800px";
            document.querySelector('#carousel-item01').style.zIndex = "150";
            document.querySelector('#carousel-item02').style.right = "800px";
            document.querySelector('#carousel-item02').style.zIndex = "50";
        }, 100);
        setTimeout(() => {
            document.querySelector("#carousel-item01").style.opacity = '1';
        }, 1000)
        carouselStatus = 1;
    }
}