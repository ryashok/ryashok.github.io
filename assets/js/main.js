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
    event.preventDefault();
    const name = form.querySelector('[name="name"]')?.value?.trim();
    const email = form.querySelector('[name="email"]')?.value?.trim();
    const channel = form.querySelector('[name="channel"]')?.value;
    const message = form.querySelector('[name="message"]')?.value?.trim();
    if (!name || !email || !message) {
      alert('Пожалуйста, заполните все обязательные поля.');
      return;
    }
    const subject = encodeURIComponent('Запись на консультацию — ' + name);
    const body = encodeURIComponent(
      'Имя: ' + name + '\nEmail: ' + email + '\nУдобнее связаться: ' + channel + '\n\nСообщение:\n' + message
    );
    window.location.href = 'mailto:ryashok@gmail.com?subject=' + subject + '&body=' + body;
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
