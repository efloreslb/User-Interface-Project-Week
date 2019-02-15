// JS goes here

//Nav Component

const toggleNav = () => {
    nav.classList.toggle('nav-hidden');
}

const nav = document.querySelector('.nav-content');
const navButton = document.querySelector('.menu-button');
navButton.addEventListener('click', toggleNav);



//Tab-Component

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