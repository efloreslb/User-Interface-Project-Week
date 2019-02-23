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
        TweenMax.from(".tab-content-img", 0.5, {
            opacity:0,
            delay:0.1,
            scale:0,
            ease:Bounce.easeOut
        })
    }
}

const tabs = document.querySelectorAll('.tab-section .tab')
                     .forEach(tab => new TabLink(tab));


//GSAP Animations

TweenMax.staggerFrom(".team-photo", 0.5, {
    opacity:0,
    x:100,
    delay:0.05
}, 0.2);

TweenMax.staggerFrom(".tab", 0.5, {
    opacity:0,
    delay:0.1,
    scale:0,
    ease:Bounce.easeOut
}, 0.3)