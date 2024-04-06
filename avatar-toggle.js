

const image = document.querySelector('#avatar');

image.addEventListener('click', () => {
    if(image.src.match('assets/santa.png')){
        image.src = 'assets/reindeer.png';
    }else if(image.src.match('assets/reindeer.png')){
        image.src = 'assets/bear.png';
    }else if(image.src.match('assets/bear.png')){
        image.src = 'assets/cookie.png';
    }else if(image.src.match('assets/cookie.png')){
        image.src = 'assets/snowman.png';
    }else{
        image.src = 'assets/santa.png';
    }
});