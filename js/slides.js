let currentSlide = 0;

function changeSlide(slideIndex) {
    const wrapper = document.querySelector('.carousel-wrapper');
    const dots = document.querySelectorAll('.dot');
    const items = document.querySelectorAll('.carousel-item');

    currentSlide = slideIndex;
    const translateValue = -slideIndex * 100 + '%';
    wrapper.style.transform = 'translateX(' + translateValue + ')';

    // Remove 'active-dot' class from all dots
    dots.forEach(dot => dot.classList.remove('active-dot'));

    // Add 'active-dot' class to the clicked dot
    dots[slideIndex].classList.add('active-dot');

    // Toggle 'active' class for items
    items.forEach((item, index) => {
        if (index === slideIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

