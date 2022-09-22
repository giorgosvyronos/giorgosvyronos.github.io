const readMore = document.querySelector('#read-more-btn');
const text = document.querySelector('#text');

readMore.addEventListener('click',(e)=>{
    text.classList.toggle('show-more');
})