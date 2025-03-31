document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  mobileMenuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
  });

  const testimonialSlider = document.querySelector('.testimonial-slider');
  const testimonials = [
    {
      text: '"Uma revolução para meu negócio! Economia de tempo e aumento de produtividade."',
      author: 'Maria Santos, Consultora'
    },
    {
      text: '"As planilhas automatizadas transformaram completamente minha gestão financeira."',
      author: 'João Silva, Empresário'
    },
    {
      text: '"Nunca foi tão fácil organizar e analisar dados do meu negócio."',
      author: 'Ana Oliveira, Empreendedora'
    }
  ];

  function createTestimonialElement(testimonial) {
    const div = document.createElement('div');
    div.classList.add('testimonial');
    div.innerHTML = `
      <p>"${testimonial.text}"</p>
      <span>- ${testimonial.author}</span>
    `;
    return div;
  }

  function rotateTestimonials() {
    const currentTestimonial = testimonialSlider.querySelector('.testimonial');
    if (currentTestimonial) {
      currentTestimonial.remove();
    }

    const nextTestimonial = createTestimonialElement(
      testimonials[Math.floor(Math.random() * testimonials.length)]
    );
    testimonialSlider.appendChild(nextTestimonial);
  }

  setInterval(rotateTestimonials, 5000);

  // Countdown Timer
  function startCountdown() {
    const countdownEl = document.getElementById('countdown');
    const endTime = new Date();
    endTime.setHours(endTime.getHours() + 1); // 24-hour countdown

    function updateCountdown() {
      const now = new Date();
      const difference = endTime.getTime() - now.getTime();

      if (difference > 0) {
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        countdownEl.innerHTML = `Oferta termina em: ${hours}h ${minutes}m ${seconds}s`;
      } else {
        countdownEl.innerHTML = 'Oferta expirada!';
        clearInterval(countdownTimer);
      }
    }

    const countdownTimer = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call
  }

  startCountdown();

  // Video Placeholder Interaction
  const videoPlaceholder = document.querySelector('.video-placeholder');
  videoPlaceholder.addEventListener('click', () => {
    // In a real scenario, you would load an actual video here
    alert('Vídeo demonstrativo será carregado');
  });

  /* Spreadsheet Carousel Initialization
  const spreadsheetSwiper = new Swiper('.spreadsheet-swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  // Dynamically add spreadsheet slides
  const spreadsheetSlides = [
    'img/carrosel1.webp',
    'img/carrosel2.png',
    'img/carrosel3.jpg',
    // Add more spreadsheet image paths
  ];

  const swiperWrapper = document.querySelector('.swiper-wrapper');
  spreadsheetSlides.forEach(slide => {
    const slideElement = document.createElement('div');
    slideElement.classList.add('swiper-slide');
    const img = document.createElement('img');
    img.src = slide;
    img.alt = 'Planilha Template';
    slideElement.appendChild(img);
    swiperWrapper.appendChild(slideElement);
  });
*/

const spreadsheetSlides = [
  "img/carrosel1.wabp",
  "img/carrosel2.png",
  "img/carrosel3.jpg",
  "img/carrosel4.wabp",
  "img/carrosel5.wabp",
  "img/imagem6.jpg",
  "img/imagem7.jpg",
  "img/imagem8.jpg",
  "img/imagem9.jpg",
  "img/imagem10.jpg",
  "img/imagem11.jpg",
  "img/imagem12.jpg"
  // Adicione mais URLs de imagens aqui, se necessário
];

const swiperWrapper = document.querySelector('.swiper-wrapper');

spreadsheetSlides.forEach(slide => {
  const slideElement = document.createElement('div');
  slideElement.classList.add('swiper-slide');

  const img = document.createElement('img');
  img.src = slide;
  img.alt = 'Planilha Template';

  slideElement.appendChild(img);
  swiperWrapper.appendChild(slideElement);
});

const swiper = new Swiper(".spreadsheet-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4, 
      spaceBetween: 50,
    },
  },
  // Adicione a opção autoplay aqui:
  autoplay: {
    delay: 3000, // Intervalo entre os slides em milissegundos (3 segundos)
    disableOnInteraction: false, // Continuar a autoplay mesmo após interação do usuário
  },
});
  // Final Countdown Timer
  function startFinalCountdown() {
    const countdownEl = document.getElementById('final-countdown');
    const endTime = new Date();
    endTime.setHours(endTime.getHours() + 14); // 24-hour countdown

    function updateCountdown() {
      const now = new Date();
      const difference = endTime.getTime() - now.getTime();

      if (difference > 0) {
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        countdownEl.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
      } else {
        countdownEl.innerHTML = 'Oferta Expirada!';
        clearInterval(finalCountdownTimer);
      }
    }

    const finalCountdownTimer = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call
  }

  startFinalCountdown();
});