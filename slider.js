function renderSlider() {
    const imgSliders = [
        {
            image: 'https://cf.shopee.vn/file/6e36727796354a86e43e084795b1c71c_xxhdpi',
        },

        {
            image: 'https://cf.shopee.vn/file/73065c7eac86531bb36c85b2f88f82f9_xxhdpi',
        },

        {
            image: 'https://cf.shopee.vn/file/ded5a538bded7b92220de3a84d54c1f9_xxhdpi',
        },

        {
            image: 'https://cf.shopee.vn/file/62ed4775f5a70cfba0f723698e5fbd5e_xxhdpi',
        },

        {
            image: 'https://cf.shopee.vn/file/b5b7b939612461797de8d26341c625be_xxhdpi',
        },
        
    ]

    let sliderMain = $('.banner__slider-list')
    let slider = ''

    for(getImg of imgSliders) {
       slider += `
       <li class="banner__slider-item">
         <img src="${getImg.image}" alt="Banner-1">
        </li>
       `
    }
    sliderMain.innerHTML = slider
}

renderSlider()

let sliderMain = $('.banner__slider-list')
const sliderItems = $$('.banner__slider-item');
const dotItems = $$('.banner__slider-dots--item');
const prevBtn = $('.banner__slider-prev--btn');
const nextBtn = $('.banner__slider-next--btn');
const sliderItemWidth = sliderItems[0].offsetWidth;
const sliderItemLength = sliderItems.length;
let positionX = 0;
let index = 0;

prevBtn.addEventListener('click', () => {
    handleChangeSlider(-1)
})

nextBtn.addEventListener('click', () => {
    handleChangeSlider(1)
})

dotItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        dotItems.forEach(el => el.classList.remove('active'))
        const sliderIndex = e.target.dataset.index
        index = sliderIndex;
        item.classList.add('active');
        positionX =  -1 * index * sliderItemWidth
        sliderMain.style = `transform: translateX(${positionX}px)`
    })
})

function handleChangeSlider(direction) {
    if(direction === -1) {
        index--
        if(index <= -1) {
            index = sliderItemLength - 1
            positionX = -sliderItemWidth * sliderItemLength
            dotItems[0].classList.remove('active');
        }
        positionX = positionX + sliderItemWidth
        sliderMain.style = `transform: translateX(${positionX}px)`

        dotItems[index].classList.add('active');
        const checkActive = $('.active')
        if(checkActive) {
           dotItems[index + 1].classList.remove('active');
        }
        
    }else if(direction === 1) {
        index++
        positionX =  positionX - sliderItemWidth
        if(index >= sliderItemLength) {
            index = 0;
            positionX = 0;
            dotItems[sliderItemLength - 1].classList.remove('active');
        }
        sliderMain.style = `transform: translateX(${positionX}px)`

        dotItems[index].classList.add('active');
        const checkActive = $('.active')
        if(checkActive) {
            dotItems[index - 1].classList.remove('active');
        }
    }
}

setInterval(function() {handleChangeSlider(1)}, 3000)
