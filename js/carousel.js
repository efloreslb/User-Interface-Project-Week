// // Carousel Component

class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.items = document.querySelectorAll('.carousel-item');
        this.nextBtn = document.querySelector(".carousel-button-next");
        this.prevBtn = document.querySelector(".carousel-button-prev");
        this.counter = 0;
        this.current = this.items[this.counter];
        this.nextBtn.addEventListener('click', this.nextItem.bind(this));
        this.prevBtn.addEventListener('click', this.prevItem.bind(this));
    }

    prevItem() {
        if (this.counter === 0) {
            console.log(`if ${this.counter}`);
            this.counter = this.items.length - 1;
            this.items.forEach(item => {
                item.classList.remove('carousel-current');
            });
            this.current = this.items[this.counter];
            this.current.classList.add('carousel-current');
        }
        else {
            console.log(`else ${this.counter}`);
            this.counter = this.counter - 1;
            this.items.forEach(item => {
                item.classList.remove('carousel-current');
            });
            this.current = this.items[this.counter];
            this.current.classList.add('carousel-current');
        }
    }

    nextItem() {
        if (this.counter >= this.items.length-1) {
            this.counter = 0;
            this.items.forEach(item => {
                item.classList.remove('carousel-current');
            })
            this.current = this.items[this.counter];
            this.current.classList.add('carousel-current');
        }
        else {
            this.items.forEach(item => {
                item.classList.remove('carousel-current');
            })
            this.counter++;
            this.current = this.items[this.counter];
            this.current.classList.add('carousel-current');
        }
    }
}

const carousel = new Carousel(document.querySelector('.carousel-container'));