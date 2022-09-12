// preloader
const preloader = document.querySelector('.preloader');
const loader = document.querySelector('.loader');

// load listener for when our page compleyly loaded
window.addEventListener("load", () => {
    
    loader.classList.add("hide-preloader")
    preloader.classList.add("hide-preloader");
}) 

// Dynamic nav bar
const linksContainer = document.querySelector(".links-container");
const navBtn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const link = document.querySelectorAll(".link"); 


navBtn.addEventListener("click", () => {
    const conrainerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if(conrainerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    }else{
        
        linksContainer.style.height =  0;
    }
    link.forEach((linkBtn) => {
        linkBtn.addEventListener("click", (e) => {
            linksContainer.style.height =  0;
        })
    })
})
// show navbar even when we scroll down
const navbar = document.querySelector(".navbar")
const topLinkBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

// scroll
    if(scrollHeight > 100){
        topLinkBtn.classList.add("show-scrollBtn")
    }else{
        topLinkBtn.classList.remove("show-scrollBtn")
    }
    
    
    if(navHeight < scrollHeight){
        navbar.classList.add("fixed-nav")
    }else{
        navbar.classList.remove("fixed-nav")
    }
})

// slideShow
// slide show
// functions
function classSwitcher() {
    slides.forEach((slide) => slide.classList.remove("active-slider"));
    points.forEach((point) => point.classList.remove("active-slider"));
    slides[active].classList.add("active-slider")
    points[active].classList.add("active-slider")
}
const goNext = () => {
    active = (active == slides.length -1) ? 0 : active +1;
    classSwitcher()
}
let goPrev = () => {
    active = (active == 0) ? slides.length - 1 : active - 1
    classSwitcher()
}

// select elements
const slideShow = document.querySelector(".slide-show");
const prev = document.querySelector(".Prev");
const next = document.querySelector(".Next");
const slides = document.querySelectorAll(".slide");
const points = document.querySelectorAll(".point");


// variables
let active = 0;
let timer = 3000;

// setInterval
let runSlideshow = setInterval(goNext, timer)

points.forEach((point,index) => {
    point.addEventListener("click", (e) => {
        active = index;
        classSwitcher()
    })
})

// next event
next.addEventListener("click", e => goNext())

// prev event
prev.addEventListener("click", e => goPrev())

// mouse over
slideShow.addEventListener("mouseover", e => clearInterval(runSlideshow))

//mouse live
slideShow.addEventListener("mouseleave", e => runSlideshow = setInterval(goNext, timer))

// services section
const services = [
    {
        id: 1,
        title: "خم ورق",
        photo: "./photogry/دستگاه خم.jpg",
        desc: "توان دستگاه از ۲۸۰<br>قدرت خم از ۱میل تا ۲۰میل <br>دروازه داخلی ۴ متر",
        alt: "خم ورق"
    },
    {
        id: 2,
        title: "برش لیزر",
        photo: "./photogry/برش لیزر.jpg",
        desc: "توان دستگاه ۳ کیلو وات <br> برش از ۱میل تا ۲۰ میل آهن <br>از ۱ میل تا ۱۲ میل استیل<br> ا میل تا ۶ میل آلمینیوم",
        alt: "برش لیزر"
    },
    {
        id: 3,
        title: "نورد ورق",
        photo: "./photogry/دستگاه نورد.jpg",
        desc: " از یک ملیمتر تل ۲۰ میلیمتر دهنه کارگیر ۲ متر توان زدن قیف تا ",
        alt: "نورد ورق"

    },
    {
        id: 4,
        title: "نورد پروفیل",
        photo: "./photogry/نورد پروفیل.jpg",
        desc: "نورد پروفیل از قوطی ۱۰ در ۱۰ تا ۴۰ در ۸۰ نورد لوله و استیل از قطر یک سانت تا قطر ۱۰ سانت توان بالا در نورد تسمه به صورت نر و تخت ",
        alt: "نورد پروفیل"
    },
    {
        id: 5,
        title: "جوشکاری(co2,برق,آرگون)",
        photo: "./photogry/جوشکاری.jpg",
        desc: " جوشکاری <ul><li>برق</li><li>آرگون</li><li>و غیره co2 </li></ul>",
        alt: "جوشکاری آرگون"
    },
    {
        id: 6,
        title: "برش(گیوتین)",
        photo: "./photogry/برش گیوتین.jpg",
        desc: "برش از ۱میل تا ۲۰ میل <br><br> ورودی دستگاه تا ۳ متر ",
        alt: "برش گیوتین"
    },
    {
        id: 7,
        title: "لوله خم کن",
        photo: "./photogry/خم پروفیل.jpg",
        desc: "توان خم لوله   از ۱ اینچ تا ۴ اینچ به طریق سی ان سی و منوال ",
        alt: "برش گیوتین"
    },
    {
        id: 7,
        title: "قیف صنعتی ",
        photo: "./photos/دستگاه گیوتین.jpg",
        desc: "ساخت قیف های صنعتی  ازدهانه پایین ۲۰ ملیمتر تا ۱۵۰۰ میلیمتر ",
        alt: "برش گیوتین"
    }
];
const servicesContainer = document.querySelector(".services-des-container")

window.addEventListener("DOMContentLoaded", () => {
    showServicesDocument();
});

function showServicesDocument(){
    let displayServices= services.map((item) => {
        return `
        <!-- start service item -->
        <div class="service-des">
            <!-- service photo -->
            <div class="service-photo-container">
                <img src="${item.photo}" alt="${item.alt}" class="service-photo"> 
            </div>
            <div class="service-information">
                <h3 class="service-title">${item.title}</h3>
                <p class="service-decription">
                ${item.desc}
                </p>
            </div>            
        </div>
        <!-- end service item -->
        `
    }).join("");

    servicesContainer.innerHTML = displayServices;
}