const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
const links = document.querySelectorAll('a[href^="#"]');
const form = document.querySelector('.contact-form');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') return;

    const target = document.querySelector(targetId);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      nav?.classList.remove('open');
    }
  });
});

if (form) {
  form.addEventListener('submit', (event) => {
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    const invalid = Array.from(inputs).some((input) => !input.value.trim());
    if (invalid) {
      event.preventDefault();
      alert('Пожалуйста, заполните все обязательные поля.');
    }
  });
}

const sliderTrack = document.querySelector('.slider-track');
const sliderSlides = document.querySelectorAll('.testimonial-slide');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');

if (sliderTrack && sliderSlides.length) {
  let currentSlide = 0;

  const updateSlider = () => {
    sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
  };

  prevBtn?.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + sliderSlides.length) % sliderSlides.length;
    updateSlider();
  });

  nextBtn?.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % sliderSlides.length;
    updateSlider();
  });
}
