window.addEventListener('scroll', function() {
    
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        var halfHeight = rect.height / 2;
    
        return (
            rect.top >= -halfHeight &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + halfHeight
        );
    }
    

    var buttons = document.querySelectorAll('.button-bar button');

    buttons.forEach(function(button) {
        var sectionId = button.getAttribute('data-section');
        var section = document.getElementById(sectionId);

        if (section && isElementInViewport(section)) {
            setActiveButton(sectionId);
        }
    });
});

function setActiveButton(sectionId) {
    var buttons = document.querySelectorAll('.button-bar button');
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });

    var activeButton = document.querySelector(`.button-bar button[data-section="${sectionId}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setActiveButton(sectionId);
    }
}

window.addEventListener('load', function() {
    setActiveButton('intro');
});
