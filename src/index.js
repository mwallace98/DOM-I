const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')
//Images

const logoImg = document.querySelector("#logo-img");
logoImg.src = "http://localhost:9000/img/logo.png"

const ctaImg = document.querySelector("#cta-img");
ctaImg.src = "http://localhost:9000/img/cta.png";

const accentImg = document.querySelector("#middle-img");
accentImg.src = "http://localhost:9000/img/accent.png";


//Footer

const footertext = document.querySelector("footer a");
footertext.textContent = "Copyright Great Idea! 2021";
footertext.classList.add("bold");

//Contact text

const contact = document.querySelector("section.contact");
contact.querySelector("h4").textContent = "Contact";
contact.querySelector("p:nth-of-type(1)").textContent = "123 Way 456 Street Somewhere, USA";
contact.querySelector("p:nth-of-type(2)").textContent = "1 (888) 888-8888";
contact.querySelector("p:nth-of-type(3)").textContent = "sales@greatidea.io";

//bottom content

const bottomCont = document.querySelector(".bottom-content");
const bottomHeaders = bottomCont.querySelectorAll("h4");
bottomHeaders[0].textContent = siteContent["main-content"]["services-h4"];
bottomHeaders[1].textContent = siteContent["main-content"]["product-h4"];
bottomHeaders[2].textContent = siteContent["main-content"]["vision-h4"];

const bottomPara = bottomCont.querySelectorAll("p");
bottomPara[0].textContent = siteContent["main-content"]["services-content"];
bottomPara[1].textContent = siteContent["main-content"]["product-content"];
bottomPara[2].textContent = siteContent["main-content"]["vision-content"];


//top Content

const topCont = document.querySelector(".top-content");
topCont.children[0].children[0].textContent = siteContent["main-content"]["features-h4"];
topCont.children[0].children[1].textContent = siteContent["main-content"]["features-content"];
topCont.children[1].children[0].textContent = siteContent["main-content"]["about-h4"];
topCont.children[1].children[1].textContent = siteContent["main-content"]["about-content"];

//CTA

const ctaHeader = document.querySelector(".cta h1");
ctaHeader.textContent = "DOM Is Awesome"
document.querySelector(".cta button").textContent = "Get Started"


// NAv links

const navlinks = document.querySelectorAll(" nav a")
const navText = Object.values(siteContent.nav);
navlinks.forEach((links, index) => {
  links.textContent = navText[index]
  links.classList.add("italic")
});

