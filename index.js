document.addEventListener('DOMContentLoaded', function () {
    let observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    };

    let observerOptions = {
        root: null, // viewport actual
        rootMargin: '100px',
        threshold: 0 // el umbral de visibilidad (10% visible)
    };

    let observer = new IntersectionObserver(observerCallback, observerOptions);

    let elementsToObserve = document.querySelectorAll('.animate-fade');

    elementsToObserve.forEach(element => {
        observer.observe(element);
    });

    //Hover Description
    let descriptionElements = document.querySelectorAll('.description');
    descriptionElements.forEach(function(element) {
        element.addEventListener('mouseenter', function() {
            this.classList.add('active');
        });

        element.addEventListener('mouseleave', function() {
            this.classList.remove('active');
        });
    });

    let buttonBioElements = document.querySelectorAll('.button-bio');
    let biographElements = document.querySelectorAll('.bottom-block__biograph');
    let closeElements = document.querySelectorAll('.close');
    buttonBioElements.forEach(function(button) {
        button.addEventListener('click', function() {
            biographElements.forEach(function(biograph) {
                biograph.classList.add('active');
            });
        });
    });

    closeElements.forEach(function(close) {
        close.addEventListener('click', function() {
            biographElements.forEach(function(biograph) {
                biograph.classList.remove('active');
            });
        });
    });
    
});
