//theme

const root = document.documentElement;
const darkBackground = "#2b2b2b";
const lightBackground = "#fafafa";
const darkText = '#424242';
const lightText = '#fff';
const text = document.querySelectorAll('.theme-text, .menu-nav-link');
const btn = document.querySelector('.change-theme');

btn.addEventListener('click', () => {
        if (document.body.classList.contains('dark-theme')) {
            btn.innerText = 'Dark';
            root.style.setProperty('--theme-background', lightBackground);
            root.style.setProperty('--theme-text', darkText);
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            text.forEach((el) => {
                el.classList.remove('dark-theme-descr');
                el.classList.add('light-theme-descr')
            });

        } else {
            btn.innerText = 'Light';
            root.style.setProperty('--theme-background', darkBackground);
            root.style.setProperty('--theme-text', lightText);
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            text.forEach((el) => {
                el.classList.remove('light-theme-descr');
                el.classList.add('dark-theme-descr');
            });
        }
    }
);

// video playing

const videoPlay = document.querySelector('.video-controller-play');
const videoPause = document.querySelector('.video-controller-pause');
const video = document.querySelector('.video');
const barline = document.querySelector('.bar-line');


videoPlay.addEventListener('click', () => {
    video.play();
    videoPlay.style.display = 'none';
    videoPause.style.display = 'block';
});

videoPause.addEventListener('click', () => {
    video.pause();
    videoPause.style.display = 'none';
    videoPlay.style.display = 'block';
});

video.ontimeupdate = function () {
    let percentage = (video.currentTime / video.duration) * 100;
    barline.style.width = percentage + '%';
}

//menu
const burger = document.querySelector('.burger');
const close = document.querySelector('.close');
const menu = document.querySelector('.menu');
const body = document.body;

let keys = {
    ESC: 27,
}

menu.inert = true;

function showMenu() {
    menu.classList.add('menu-showed');
    body.style.overflow = 'hidden';


    document.addEventListener('keydown', function (e) {
        if (e.keyCode == keys.ESC) {
            closeMenu();
        }
    });

}

function closeMenu() {
    menu.classList.remove('menu-showed');
    body.style.overflow = 'initial';
}

burger.addEventListener('click', showMenu);
close.addEventListener('click', closeMenu);