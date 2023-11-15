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



const wellSectOpt = {
    rootMargin: "-100px",
};

const parallaxOpt = {

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

let storyLoaded = false;

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

const parallaxObserver = new IntersectionObserver(function(entries, parallaxObserver)
{
    entries.forEach(entry => {
        if (entry.isIntersecting && !storyLoaded)
        {
            storyTitle.classList.remove('opacity-0');
            storyDescr.classList.remove('opacity-0');
            storyTitle.classList.add('animate-slide-in');
            storyDescr.classList.add('animate-slide-in');
            storyLoaded = true;
        }
        else
        {
            storyTitle.classList.remove('animate-slide-in');
            storyDescr.classList.remove('animate-slide-in');
        }
    })
}, parallaxOpt);

const mainSectObserver = new IntersectionObserver(function(entries, mainSectObserver){
    entries.forEach(entry => {
        if (entry.isIntersecting)
        {
            storyLoaded = false;
            storyTitle.classList.add('opacity-0');
            storyDescr.classList.add('opacity-0');
        }
    })
}, mainSecOpt);

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




if (welSectCont)navObserver.observe(welSectCont);
if (storyCont)parallaxObserver.observe(storyCont);
if (welSectCont)mainSectObserver.observe(welSectCont);
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
addAnimation();