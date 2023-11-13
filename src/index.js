const welSectCont = document.querySelector('#welcome-section');
const mainLogo = document.querySelector('.main-logo-link-div');
const navCont = document.querySelector('#nav-bar-container');
const productScroller = document.querySelector('.product-inner-scroller');
const storyTitle = document.querySelector('#story-title');
const storyDescr = document.querySelector('#story-descr');
const storyCont = document.querySelector('#story-section');
const foundersSect = document.querySelector('#founders-section');



const wellSectOpt = {
    rootMargin: "-100px",
};

const parallaxOpt = {

};

const mainSecOpt = {
    threshold: 1.0
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
            console.log("Hi");
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
addAnimation();