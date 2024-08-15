const wrapper = document.querySelector('.wrapper')
const loader = document.querySelector('.loader')
const body = document.body
const mouseCustom = document.getElementById('mouse')
const yearsNode = document.getElementById('year')
const developmentNode = document.getElementById('development')
const sliderWrapper = document.getElementById('slider__wrapper')
const btnUp = document.querySelector('.btn-up')
const reviewsBody = document.querySelector('.reviews__body')
const modal = document.getElementById('modal')
const toggleButton = document.querySelector('.modal__close')
const openMenu = document.querySelector('.menu-trigger')
const closeMenu = document.querySelector('.close-trigger')
const menuLines = document.querySelectorAll('.menu__header')
const menuCV = document.querySelector('.first-section-menu')
const menuSocial = document.querySelector('.first-section__social')
const reviewsLink = document.querySelector('.first-section__reviews')
const magicList = document.querySelector('.magic-list')
const menuLinks = document.querySelectorAll('.first-section-menu ul a')
const hideSidebar = document.querySelector(".hide-sidebar");
const downButton = document.querySelector(".down-button");
const upButton = document.querySelector(".up-button");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const containerSlider = document.querySelector(".amazing-slider");
const controls = document.querySelector(".controls");
const firstSectionImage = document.querySelector(".first-section_image");
const mobileWrapper = document.getElementById("mobile__wrapper");
let coordsCursorX = null
let smoother;

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const particles = Particles.init({
  selector: '#particles-js',
  color: '#7c89fe',
  maxParticles: 350,
  sizeVariations: 10,
  speed: 2,
  minDistance: 10,
  connectParticles: false
});

const classesBlocks = ['.container', '.portfolio', '.tehnology', '.amazing-slider', '.magic-list', '.particles']
const options = {
  start: {

    textStartOptions: {
      opacity: 0.3,
      transform: 'translate(0, 0)'
    },
    vertical: {
      opacity: 0,
      y: 100,
      transform: 'rotateX(90deg)'
    },
    horizontal: {
      opacity: 0,
      x: -200
    },
    horizontalSlider: {
      normal: {
        x: -600
      },
      reverse: {
        x: 600
      }
    },
    main: {
      opacity: 1
    },
    portfolioLeft: {
      opacity: 0, 
      x: -100
    },
    portfolioRight: {
      opacity: 0, 
      x: 100
    }

  },
  end: {
    textEndOptions: {
      opacity: 0,
      transform: 'translate(0px, 25vh)',
    },
    main: {
      opacity: 0
    },
    portfolio: {
      opacity: 1, 
      x: 0
    },
    vertical: {
      opacity: 1, 
      y: 0,
      transform: 'rotateX(0deg)'
    },
    horizontal: {
      opacity: 1,
      x: 0,
      y: 0,
      transform: 'rotate(0deg) scale(1) translate(0, 0)'
    }
  },
  sliderController: {
      opacity: 0,
      transform: 'translate(100%, 0)'
  },
  notGsapScroll: {
    block: 'start',
    inline: 'nearest',
    behavior: 'smooth'
  }
}
const data = {
  dataSlider: [
    {
      id: 1,
      image: 'wordpress.png',
      title: 'Wordpress',
      web: 'https://ru.wordpress.org/'
    },
    {
      id: 2,
      image: 'js.png',
      title: 'JavaScript',
      web: 'https://learn.javascript.ru/'
    },
    {
      id: 3,
      image: 'ts.png',
      title: 'TypeScript',
      web: 'https://www.typescriptlang.org/'
    },
    {
      id: 4,
      image: 'tailwind.png',
      title: 'Tailwind',
      web: 'https://tailwindcss.com/'
    },
    {
      id: 5,
      image: 'bootstrap.png',
      title: 'Bootstrap',
      web: 'https://getbootstrap.com/'
    },
    {
      id: 6,
      image: 'react.png',
      title: 'React JS',
      web: 'https://ru.legacy.reactjs.org/'
    },
    {
      id: 7,
      image: 'swiper.png',
      title: 'Swiper JS',
      web: 'https://swiperjs.com/'
    },
    {
      id: 8,
      image: 'axios.png',
      title: 'Axios',
      web: 'https://axios-http.com/ru/docs/intro'
    },
    {
      id: 9,
      image: 'seo.png',
      title: 'SEO',
      web: 'https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%B8%D1%81%D0%BA%D0%BE%D0%B2%D0%B0%D1%8F_%D0%BE%D0%BF%D1%82%D0%B8%D0%BC%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F'
    },
    {
      id: 10,
      image: 'html.png',
      title: 'HTML',
      web: 'https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/HTML_basics'
    },
    {
      id: 11,
      image: 'css.png',
      title: 'CSS',
      web: 'https://developer.mozilla.org/ru/docs/Web/CSS'
    },
    {
      id: 12,
      image: 'git.png',
      title: 'Git',
      web: 'https://git-scm.com/'
    },
    {
      id: 13,
      image: 'node.png',
      title: 'Node JS',
      web: 'https://nodejs.org/en'
    },
    {
      id: 14,
      image: 'api.png',
      title: 'Rest API',
      web: 'https://www.ibm.com/topics/rest-apis#:~:text=A%20REST%20API%20(also%20called,transfer%20(REST)%20architectural%20style.'
    },
    {
      id: 15,
      image: 'vue.png',
      title: 'Vue JS',
      web: 'https://vuejs.org/'
    },
    {
      id: 16,
      image: 'vscode.png',
      title: 'VS code',
      web: 'https://code.visualstudio.com/'
    },
    {
      id: 17,
      image: 'storm.png',
      title: 'Webstorm',
      web: 'https://www.jetbrains.com/ru-ru/webstorm/'
    }
  ],
  dataAmazingSlider: {
      slides: [
        {
          id: 1,
          image: 'ps-2.webp'
        },
        {
          id: 2,
          image: 'ps-1.webp'
        },
        {
          id: 3,
          image: 'ps-4.webp'
        },
        {
          id: 4,
          image: 'ps-5.webp'
        },
        {
          id: 5,
          image: 'ps-6.webp'
        },
        {
          id: 6,
          image: 'ps-8.webp'
        },
        {
          id: 7,
          image: 'ps-9.webp'
        },
        {
          id: 8,
          image: 'ps-10.webp'
        },
        
      ],
      info: [
        {
          id: 1,
          title: 'Life app',
          desc: 'Application using canvas',
          backgroundColor: '#32323203',
          link: 'https://roman1306r.github.io/life-app/'
        },
        {
          id: 2,
          title: 'Witcher app',
          desc: 'Application using swiper js, particles js',
          backgroundColor: '#171e12',
          link: 'https://roman1306r.github.io/witcher-app/'
        },
        {
          id: 3,
          title: 'English app',
          desc: 'MERN is an application that allows you to test and deepen your knowledge of English words with Google Translator integration',
          backgroundColor: '#003128',
          link: 'https://roman1306r.github.io/english-helper/'
        },
        {
          id: 4,
          title: 'Collection of apps',
          desc: 'Here are collected applications such as calculator, to-do list, password generator, body mass index calculator, timer, tic-tac-toe game and basket. Application using React, axios, typescript',
          backgroundColor: '#2b2b2b',
          link: 'https://roman1306r.github.io/apps-collection'
        },
        {
          id: 5,
          title: 'Social network',
          desc: 'The application has login, the ability to add / remove friends, view another person\'s profile, edit your profile, status, avatar, change the theme to dark',
          backgroundColor: '#0d0d2f',
          link: 'https://roman1306r.github.io/social-network/'
        },
        {
          id: 6,
          title: 'Rock paper scissors',
          desc: 'Advanced task from the site frontend mentor.io based on the game rock-paper-scissors. You will be playing against the AI "Skynet". The source code is provided',
          backgroundColor: '#160021',
          link: 'https://roman1306r.github.io/rock-paper-scissors/'
        },
        {
          id: 7,
          title: 'Search address by IP',
          desc: 'The application allows you to find coordinates on the map by ip address. Validation of the entered ip is + mobile version',
          backgroundColor: '#2b2b2b',
          link: 'https://ip-adress-search.netlify.app/'
        },
        {
          id: 8,
          title: 'Stock photos',
          desc: 'Search for stock photos in high quality. Free 50 requests per hour. Written in React + Unsplash API',
          backgroundColor: '#757575',
          link: 'https://roman1306r.github.io/unsplash-api/'
        },
      ],
      count: 8
  },
  dataMagicList: [
    {
      id: 1,
      title: 'Discussion of the task, deadline, price'
    },
    {
      id: 2,
      title: 'Confirmation of the transaction'
    },
    {
      id: 3,
      title: 'Fulfillment of an order'
    },
    {
      id: 4,
      title: 'Showing completed work, edits'
    },
    {
      id: 5,
      title: 'Payment for work performed'
    },
    {
      id: 6,
      title: 'Mutual feedback=)'
    },
  ]
}

function start() {
    setTimeout(() => wrapper.classList.add('active'), 2000)
    if(ScrollTrigger.isTouch !== 1) {
      if(localStorage.gsap === 'true') initScrollSmoother()
      else if (!localStorage.gsap) {
        const warning = createWarning()
        setTimeout(() => warning.classList.add('show'), 2000)
      }
    } else {  
      firstSectionImage.setAttribute('src', 'img/header/bgm.webp')
    }
    setTimeout(() => {
      loader.classList.add('close')
      modal.classList.remove('off')
    }, 2000)
    setYearOnWebsite()
    initHeaderMenu()
}

const watchCursor = event => mouseCustom.style.cssText = `transform: translate(${event.clientX - 10}px, ${event.clientY -10}px)`;

function setYearOnWebsite() {
    const dateFooter = document.getElementById('dateNow')
    const currentTime = new Date()
    const getCurrentTime = (number) => Number(number) < 9 ? '0' + number : number
    dateFooter.innerHTML = `${getCurrentTime(currentTime.getDate())}.${getCurrentTime(currentTime.getMonth() + 1)}.${currentTime.getFullYear()}`
    developmentNode.textContent = new Date(Date.now() - new Date('2022', '1', '01').getTime()).getFullYear() - 1970
    yearsNode.textContent = new Date(Date.now() - new Date('1999', '05', '13').getTime()).getFullYear() - 1970
}

function createWarning() {
    const div = document.createElement('div')
    div.classList.add('warning')

    div.insertAdjacentHTML('afterbegin',
      `<div class="warning__dark"></div>
      <div class="warning__container">
        <h2 class="warning__title">To leave smooth scrolling</h2>
        <p class="warning__text">Smooth scrolling takes up a significant part of hardware resources. Disabling it will allow the site to work faster and without delays. Recommended for weak devices.</p>
        <div class="warning__buttons link">
          <button id="leave" class="warning__buttons-btn agr">I agree</button>
          <button id="not-leave" class="warning__buttons-btn rem">Remove</button>
        </div>
      </div>`)
    div.addEventListener('click', warningHandle)
    body.prepend(div)
    return div
}

function warningHandle(event) {
  event.preventDefault()
  if(event.target.classList.contains('agr')) {
      this.classList.add('hide')
      initScrollSmoother()
      localStorage.setItem('gsap', true)
      return this.removeEventListener('click', warningHandle)
  } else if(event.target.classList.contains('rem')) {
      this.classList.add('hide')
      localStorage.setItem('gsap', false)
      return this.removeEventListener('click', warningHandle)
  } else return false
}

function drawSlider(data) {
    let index = 0
    while (index < data.length) {
        const html = `<div data-swiper-parallax-scale="0.1" class="swiper-slide slide link">
                          <a target='_blank' href=${data[index].web}><img width='90' alt=${data[index].title} src='./img/tehnology/${data[index].image}' /></a>
                          <h3>${data[index].title}</h3>
                      </div>`
        sliderWrapper.insertAdjacentHTML('beforeend', html)
        index++
    }
}

function drawReviews(num) {
    let index = 1

    while (index <= num) {
        const html = `<div class="reviews__body-item">
                          <img alt='review' src='./img/particles/${index}.png' />
                      </div>`
        reviewsBody.insertAdjacentHTML('beforeend', html)
        index++
    }
}

function drawAmazingSlider(data) {
    let index = 0
    const info = document.getElementById('am-in')
    const slides = document.getElementById('am-sl')
    let infoArray = data.info.toReversed()

    while (index < data.count) {
        const htmlInfo = `<div style="background: ${infoArray[index].backgroundColor}">
                            <h2>${infoArray[index].title}</h2>
                            <p>${infoArray[index].desc}</p>
                            <a class="link" href="${infoArray[index].link}" target="_blank">Look</a>
                          </div>`
        const htmlSlides = `<div style="background-image: url('./img/amazing/${data.slides[index].image}');"></div>`
        info.insertAdjacentHTML('beforeend', htmlInfo)
        slides.insertAdjacentHTML('beforeend', htmlSlides)
        index++
    }
}

function drawMobileSlider(data) {
    if(ScrollTrigger.isTouch !== 1 || window.innerWidth > 1030) return

        let index = 0
        while (index < data.count) {
            const html = `<div style="background: url(./img/amazing/${data.slides[index].image}) center / contain no-repeat" class="swiper-slide slide">
                                <div class='slide__body'>
                                    <a class="link" href="${data.info[index].link}" target="_blank">Look</a>      
                                </div>
                          </div>`
    
            mobileWrapper.insertAdjacentHTML('beforeend', html)
            index++
        }   
}

function drawMagicList(data) {
    let index = 0
    const magicList = document.querySelector('.magic-list')

    while (index < data.length) {
        const html = `<div data-cursor="${data[index].id}" class="magic-list__item link">
                            <div class="magic-list__header">${data[index].title}</div>
                            <div class="cursor">
                                <div class="cursor__image" style="background-image: url(img/magic/${data[index].id}.webp)"></div>
                            </div>
                        </div>`

        magicList.insertAdjacentHTML('beforeend', html)
        index++
    }
    const magicListItems = document.querySelectorAll('.magic-list__item')
    if(magicListItems.length > 0) magicListItems.forEach(item => item.onclick = (event) => event.preventDefault())
}

function closeHeaderMenu() {
  menuLines.forEach(item => item.classList.remove('active'))
  body.classList.remove('no-scroll')
  menuCV.classList.remove('active')
  menuSocial.classList.remove('active')
  reviewsLink.classList.remove('active')
  closeMenuFn()
}

function openHeaderMenu() {
  menuLines.forEach(item => item.classList.add('active'))
  body.classList.add('no-scroll')
  menuCV.classList.add('active')
  menuSocial.classList.add('active')
  reviewsLink.classList.add('active')
}

function watchKeyUp(event) {
    if(event.key === 'Escape') closeHeaderMenu()
    else if (event.key === 'Delete') localStorage.clear()
    else if(event.key === 'ArrowUp') changeSlide('up')
    else if (event.key === 'ArrowDown') changeSlide('down')
}

function watchMagicList(e) {
  if(window.innerWidth > 992) magicList.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px;`
  const cursor = e.target.querySelector('.cursor')
  if(cursor && e.clientX - coordsCursorX >= 5)  cursor.style.transform = 'translate3d(var(--move-x), var(--move-y), 0) rotate(5deg)'
  else if( cursor && e.clientX - coordsCursorX < 5 && e.clientX - coordsCursorX > -5)  cursor.style.transform = 'translate3d(var(--move-x), var(--move-y), 0) rotate(0)'
  else if(cursor && e.clientX - coordsCursorX <= -5) cursor.style.transform = 'translate3d(var(--move-x), var(--move-y), 0) rotate(-5deg)'
  coordsCursorX = e.clientX
}

function windowLoad(){
  function digitsCounterInit(digitsCounterItems){
      let digitsCounters = digitsCounterItems ? digitsCounterItems : document.querySelectorAll('[data-digits-counter]')
      if(digitsCounters) {
          digitsCounters.forEach(digitCounter => {
              digitsCountersAnimate(digitCounter);
          });
      }
  }

  function digitsCountersAnimate(digitCounter){
      let startTimestamp = null;
      const duration = parseInt(digitCounter.dataset.digitCounter)? parseInt(digitCounter.dataset.digitCounter) : 1000;
      const startValue = parseInt(digitCounter.innerHTML)
      const startPosition = 0;
      const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          digitCounter.innerHTML = Math.floor(progress * (startPosition + startValue))
          if (progress < 1) window.requestAnimationFrame(step)
      }
      window.requestAnimationFrame(step)
  }

  const options = {threshold: 0.3}
  let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if(entry.isIntersecting){
              const targetElement = entry.target;
              const digitsCounterItems = targetElement.querySelectorAll('[data-digits-counter]');
              if(digitsCounterItems.length) {
                  digitsCounterInit(digitsCounterItems)
              }
          }
      })
  }, options);
  let sections = document.querySelectorAll('.particles__info')
  if(sections.length){
      sections.forEach(section => {
          observer.observe(section)
      })
  }
}

function initScrollSmoother() {
  smoother = ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.container',
        smooth: 2.1,
        effects: true
    })
}

function scrollToReviews() {
  closeHeaderMenu()
  ScrollTrigger.isTouch !== 1 && smoother ? smoother.scrollTo('.reviews', true, "top top") : document.querySelector('.reviews').scrollIntoView(options.notGsapScroll)
}

const openMenuFn = () => tlOpen.progress() < 1 ? tlOpen.play() : tlOpen.restart()

const closeMenuFn = () => tlClose.progress() < 1 ? tlClose.play() : tlClose.restart()

function doHideSidebar(event) {
  event.preventDefault()
  sidebar.classList.toggle('hide')
  mainSlide.classList.toggle('allwidth')
  controls.classList.toggle('change')
}

function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }

  const height = containerSlider.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}

function showBtnUp() {
  if(window.innerHeight > window.scrollY) btnUp.classList.add('btn-up_hide')
  else {
      modal.classList.add('off')
      btnUp.classList.remove('btn-up_hide')
  }
} 

const scrollUp = () => scrollTo({ top: 0, behavior: 'smooth'})

function closeModal(event) {
  event.preventDefault()
  modal.classList.add('off')
}

function initHeaderMenu() {
  if(menuLinks.length > 0) {
    for (let i = 0; i < menuLinks.length; i++) {
        const menuLink = menuLinks[i];
        menuLink.addEventListener('click', (e) => {
            e.preventDefault()
            menuLines.forEach(item => item.classList.remove('active'))
            body.classList.remove('no-scroll')
            menuCV.classList.remove('active')
            closeMenuFn()
            if(ScrollTrigger.isTouch !== 1 && smoother) smoother.scrollTo(classesBlocks[i], true, "top top")
            else document.querySelector(classesBlocks[i]).scrollIntoView(options.notGsapScroll)
        })
    }
  }
}

function setGsapSettings(classEl, startOption, endOption, start, end, trigger = classEl) {
  gsap.fromTo(classEl, startOption, {
    ...endOption,
    scrollTrigger: {
        trigger,
        start,
        end,
        scrub: true
    }
  })
}

function setGSAP() {
  setGsapSettings('.first-section', options.start.main, options.end.main, 'center', '620')
  setGsapSettings('.main__header-text', options.start.textStartOptions, options.end.textEndOptions, 'top', '320')

  const portfolioLeftItem = gsap.utils.toArray('.portfolio__left .portfolio__item')
  portfolioLeftItem.forEach(item => setGsapSettings(item, options.start.portfolioLeft, options.end.portfolio, '-850', '-100'))
  const portfolioRightItem = gsap.utils.toArray('.portfolio__right .portfolio__item')
  portfolioRightItem.forEach(item => setGsapSettings(item, options.start.portfolioRight, options.end.portfolio, '-850', '-100'))

  setGsapSettings('.tehnology h2', options.start.horizontal, options.end.horizontal, String(-window.innerHeight), String(-window.innerHeight + 400))

  setGsapSettings('.magic-list h2', options.start.horizontal, options.end.horizontal, String(-window.innerHeight), String(-window.innerHeight + 400))

  setGsapSettings('#am-in',  options.start.horizontalSlider.normal, options.end.horizontal, String(-window.innerHeight), String(-window.innerHeight + 200), '.amazing-slider')
  setGsapSettings('#am-sl',  options.start.horizontalSlider.reverse, options.end.horizontal, String(-window.innerHeight), String(-window.innerHeight + 200), '.amazing-slider')

  setGsapSettings('.reviews h2', options.start.horizontal, options.end.horizontal, String(-window.innerHeight), String(-window.innerHeight + 200))

  const ReviewImage = gsap.utils.toArray('.reviews__body-item')
  ReviewImage.forEach(item => setGsapSettings(item, options.start.vertical, options.end.vertical, String(-window.innerHeight - 150), String(-window.innerHeight + 100)))
}

function logger() {
  console.clear()
  console.group('Motion');
  console.log("%cPress ↑ and ↓ for switching slider!", "color: orange; font-size: 20px; font-weight: bold");
  console.log("%cPress DELETE for cleaning localStorage!", "color: green; font-size: 20px; font-weight: bold");
  console.groupEnd()
}

drawAmazingSlider(data.dataAmazingSlider)
drawMagicList(data.dataMagicList)
drawReviews(5)
drawSlider(data.dataSlider)
drawMobileSlider(data.dataAmazingSlider)

window.addEventListener('DOMContentLoaded', start)
document.addEventListener('mousemove', watchCursor)
openMenu.addEventListener('click', openHeaderMenu)
closeMenu.addEventListener('click', closeHeaderMenu)
document.addEventListener('keyup', watchKeyUp)
magicList.addEventListener('mousemove', watchMagicList)
window.addEventListener('load', windowLoad)
reviewsLink.addEventListener('click', scrollToReviews)
hideSidebar.addEventListener('click', doHideSidebar)
upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));
window.addEventListener('scroll', showBtnUp)
btnUp.addEventListener('click', scrollUp)
toggleButton.addEventListener('click', closeModal)
const slidesCount = mainSlide.querySelectorAll("div").length;
let activeSlideIndex = 0;
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

const swiper = new Swiper('.tehnology .swiper', {
  loop: true,
  speed: 5000,
  centeredSlides: true,
  slidesPerView: 5,
  parallax: true,
  waitForTransition: false,
  spaceBetween: 100,
  autoplay: {
      delay: 1,
  },
  breakpoints: {
    1030: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
    767: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  }
});

const mobile = new Swiper('.mobile__slider .swiper', {
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  waitForTransition: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


if(ScrollTrigger.isTouch !== 1) {

    setGSAP()

    const links = document.querySelectorAll('.link')
    if(links.length > 0) {
       links.forEach(link => {
            if(link.classList.contains('scroll-animation')) {
                link.onclick = () => smoother ? smoother.scrollTo(".portfolio", true, "400 center") :  document.querySelector('.portfolio').scrollIntoView(options.notGsapScroll);
            }

            link.addEventListener('mouseover', (event) => {
                if(link.classList.contains('magic-list__item') || link.classList.contains('modal')) mouseCustom.classList.add('hide')
                mouseCustom.classList.add('active')
            })
            link.addEventListener('mouseout', (event) => {
                mouseCustom.classList.remove('hide')
                mouseCustom.classList.remove('active')
            })
       })
    }
}


var openTrigger = $('.menu-trigger');
var openTriggerTop = openTrigger.find('.menu-trigger-bar.top');
var openTriggerMiddle = openTrigger.find('.menu-trigger-bar.middle');
var openTriggerBottom = openTrigger.find('.menu-trigger-bar.bottom');
var closeTrigger = $('.close-trigger');
var closeTriggerLeft = closeTrigger.find('.close-trigger-bar.left');
var closeTriggerRight = closeTrigger.find('.close-trigger-bar.right');
var logo = $('.logo');
var menuContainer = $('.menu-container');
var menu = $('.menu');
var menuTop = $('.menu-bg.top');
var menuMiddle = $('.menu-bg.middle');
var menuBottom = $('.menu-bg.bottom');
var tlOpen = new TimelineMax({paused: true});
var tlClose = new TimelineMax({paused: true});

tlOpen.add("preOpen")
  .to(logo, 0.4, {
            scale: 0.8,
            opacity: 0,
            ease: Power2.easeOut
        }, "preOpen")
.to(openTriggerTop, 0.4, {
  x: "+80px", y: "-80px", delay: 0.1, ease: Power4.easeIn, onComplete: function() {
    closeTrigger.css('z-index','25');
  }
}, "preOpen")
.to(openTriggerMiddle, 0.4, {
  x: "+=80px", y: "-=80px", ease: Power4.easeIn,
  onComplete: function() {
    openTrigger.css('visibility','hidden');
  }
}, "preOpen")
.to(openTriggerBottom, 0.4, {
  x: "+=80px", y: "-=80px", delay: 0.2, ease: Power4.easeIn
}, "preOpen")
.add("open", "-=0.4")
.to(menuTop, 0.8, {
  y: "13%",
  ease: Power4.easeInOut
}, "open")
.to(menuMiddle, 0.8, {
  scaleY: 1,
  ease: Power4.easeInOut
}, "open")
.to(menuBottom, 0.8, {
  y: "-114%",
  ease: Power4.easeInOut
}, "open")
.fromTo(menu, 0.6, {
  y: 30, opacity: 0, visibility: 'hidden'
}, {
  y: 0, opacity: 1, visibility: 'visible', ease: Power4.easeOut
}, "-=0.2")
.add("preClose", "-=0.8")
.to(closeTriggerLeft, 0.8, {
  x: "-=100px", y: "+=100px", ease: Power4.easeOut
}, "preClose")
.to(closeTriggerRight, 0.8, {
  x: "+=100px", y: "+=100px", delay: 0.2, ease: Power4.easeOut
}, "preClose");

tlClose.add("close")
  .to(menuTop, 0.2, {
  backgroundColor: "#6295ca", ease: Power4.easeInOut, onComplete: function() {
    logo.css('z-index','26');
    closeTrigger.css('z-index','5');
 openTrigger.css('visibility','visible');
  }
}, "close")
.to(menuMiddle, 0.2, {
  backgroundColor: "#6295ca", ease: Power4.easeInOut
}, "close")
.to(menuBottom, 0.2, {
  backgroundColor: "#6295ca", ease: Power4.easeInOut
}, "close")
  .to(menu, 0.6, {
  y: 20, opacity: 0, ease: Power4.easeOut, onComplete: function() {
    menu.css('visibility','hidden');
  }
}, "close")
.to(logo, 0.8, {
  scale: 1, opacity: 1, ease: Power4.easeInOut
}, "close", "+=0.2")
.to(menuTop, 0.8, {
  y: "-113%",
  ease: Power4.easeInOut
}, "close", "+=0.2")
.to(menuMiddle, 0.8, {
  scaleY: 0,
  ease: Power4.easeInOut
}, "close", "+=0.2")
.to(menuBottom, 0.8, {
  y: "23%",
  ease: Power4.easeInOut,
  onComplete: function() {
    menuTop.css('background-color','#ffffff');
    menuMiddle.css('background-color','#ffffff');
    menuBottom.css('background-color','#ffffff');
  }
}, "close", "+=0.2")
.to(closeTriggerLeft, 0.2, {
  x: "+=100px", y: "-=100px", ease: Power4.easeIn
}, "close")
.to(closeTriggerRight, 0.2, {
  x: "-=100px", y: "-=100px", delay: 0.1, ease: Power4.easeIn
}, "close")
.to(openTriggerTop, 1, {
  x: "-=80px", y: "+=80px", delay: 0.2, ease: Power4.easeOut
}, "close")
.to(openTriggerMiddle, 1, {
  x: "-=80px", y: "+=80px", ease: Power4.easeOut
}, "close")
.to(openTriggerBottom, 1, {
  x: "-=80px", y: "+=80px", delay: 0.1, ease: Power4.easeOut
}, "close");

openTrigger.on('click', openMenuFn);
closeTrigger.on('click', closeMenuFn);

logger()

