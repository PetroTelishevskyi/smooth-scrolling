function smoothScrolling(classNameForScroll) {
    // Init variables
    const menuLinks = document.querySelectorAll(classNameForScroll);

    if(menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener('click', e => {
                const currentLink = e.target;
                // Check atribut in link
                if (currentLink.dataset.goto && document.querySelector(currentLink.dataset.goto)) {
                    // Init section on page
                    const gotoBlock = document.querySelector(currentLink.dataset.goto);
                    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset - document.querySelector('header').offsetHeight;
                
                    window.scrollTo({
                        top: gotoBlockValue,
                        behavior: 'smooth'
                    });

                    e.preventDefault();
                };
            });
        });
    };
};

smoothScrolling('.menu__link[data-goto]')