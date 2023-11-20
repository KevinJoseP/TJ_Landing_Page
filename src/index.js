const welSectCont = document.querySelector('#welcome-section');
const mainLogo = document.querySelector('.main-logo-link-div');
const navCont = document.querySelector('#nav-bar-container');
const productScroller = document.querySelector('.product-inner-scroller');
const storyTitle = document.querySelector('#story-title');
const storyDescr = document.querySelector('#story-descr');
const storyCont = document.querySelector('#story-section');
const foundersSect = document.querySelector('#founders-section');
const foundersSectCont = document.querySelectorAll('.founders-section-photo-container');
const galleryPhotos = document.querySelectorAll('.photo-cont');
const galleryVideos = document.querySelectorAll('.video-cont');
const whyTitle = document.querySelector('#why-title');
const whyReasons = document.querySelectorAll('.why-reason');
const menuBtn = document.querySelector('#menu-button');
const menuNav = document.querySelector('#mobile-nav');
const closeBtn = document.querySelector('.close-symbol');



const wellSectOpt = {
    rootMargin: "-100px",
};

const storyOpt = {
    threshold: 0.3
};

const mainSecOpt = {
    threshold: 1.0
}
const foundersSectOpt = {
    threshold: 0.7
}

const galleryOpts = {
    threshold: 0.7
} 

const whyOpts = {
    rootMargin: "-100px"
}

const navObserver = new IntersectionObserver(function(entries, navObserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting)
        {
            mainLogo.classList.add("display-none");
            navCont.classList.remove("nav-bar-bg-colour2");
            navCont.classList.add("nav-bar-bg-colour1");
        }
        else
        {
            mainLogo.classList.remove("display-none");
            navCont.classList.remove("nav-bar-bg-colour1");
            navCont.classList.add("nav-bar-bg-colour2");

        }
    });

}, wellSectOpt);

const storyObserver = new IntersectionObserver(function(entries, storyObserver)
{
    entries.forEach(entry => {
        if (entry.isIntersecting)
        {
            storyTitle.classList.add('animate-slide-in');
            storyDescr.classList.add('animate-slide-in');
            storyObserver.unobserve(entry.target);
        }
        else
        {
            return;
        }
    })
}, storyOpt);

const foundersSectObserver = new IntersectionObserver(function (entries, foundersSectObserver){
    entries.forEach(entry => {
        if (!entry.isIntersecting)
        {
            return;
        }
        else
        {
            entry.target.classList.add('appear');
            foundersSectObserver.unobserve(entry.target);
        }
    })
}, foundersSectOpt);

const galleryObserver = new IntersectionObserver(function (entries, galleryObserver){
    entries.forEach(entry => {
        if (!entry.isIntersecting)
        {
            return;
        }
        else
        {
            entry.target.classList.add('appear');
            galleryObserver.unobserve(entry.target);
        }
    });
}, galleryOpts);

function addAnimation()
{
    if (!productScroller)return;
    const scrollerContent = Array.from(productScroller.children);
    scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        productScroller.appendChild(duplicatedItem);
    });
}

const whyObserver = new IntersectionObserver(function (entries, whyObserver){
    entries.forEach(entry => {
        if(!entry.isIntersecting)
        {
            return;
        }
        else
        {
            entry.target.classList.add('appear');
            whyObserver.unobserve(entry.target);
        }
    });
}, whyOpts);

function handleMenuSelect(event)
{
    event.preventDefault();
    menuNav.style.display = "None";
    navCont.style.display = "flex";
}

function handleCloseSelect(event)
{
    event.preventDefault();
    menuNav.style.display = "flex";
    navCont.style.display = "None";
}


if (welSectCont)navObserver.observe(welSectCont);
if (storyCont)storyObserver.observe(storyCont);
// if (foundersSect)navObserver.observe(foundersSect);
foundersSectCont.forEach(founder => {
    if (founder)foundersSectObserver.observe(founder);
});
galleryPhotos.forEach(photo => {
    if (photo)galleryObserver.observe(photo);
});
galleryVideos.forEach(video => {
    if (video)galleryObserver.observe(video);
});
if (whyTitle)whyObserver.observe(whyTitle);
whyReasons.forEach(reason => {
    if (reason)whyObserver.observe(reason);
});


if (menuBtn)menuBtn.addEventListener('click', handleMenuSelect);
if (closeBtn)closeBtn.addEventListener('click', handleCloseSelect);

addAnimation();