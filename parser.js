
document.addEventListener("DOMContentLoaded", function (event) {

  //получаем главный элемент дома, так как вся нам нужная информация хранится в нем   
  let body = document.querySelector('main')
  
  //создаем обьект, в которм будем хранить данные
  let infoAboutModelClother={
    title:'',
    price: null,
    withSale: null,
    mainPhoto: null,
    arrayPhotoes: null
  }

  //находим элемент <div>, в которм хранится информация об названии продукции, ее цены и , если такая имеется, скидка
  let decriptionOfClother =body.querySelector('div.product-hero')
   
  //название продукции
  infoAboutModelClother.title = decriptionOfClother.querySelector('h1').innerHTML

  // цена без скидок. Здесь сделана проверка, если есть скидка то атрибуты элемента будут разнык
  infoAboutModelClother.price = decriptionOfClother.querySelector('span[data-id="previous-price"').innerHTML==="" ?
                                decriptionOfClother.querySelector('.current-price').innerHTML : 
                                decriptionOfClother.querySelector('span[data-id="previous-price"').innerHTML

  //цена со скидкой, если такая скидка имеется. Если же нет, то приравниваем скидку к пустой строке                              
  infoAboutModelClother.withSale = !!decriptionOfClother.querySelector('.product-price-discounted') ?
                                     decriptionOfClother.querySelector('.product-price-discounted').innerHTML : ''

  // находим элемент, в который загружается основная фотография
  infoAboutModelClother.mainFoto = body.querySelector('.asos-product div.image-container[data-gallery-index="1"] .amp-page .amp-frame .fullImageContainer img.img')
                                  .getAttribute('src') 

  // находим массив фотография, находящиеся левее основной фотографии. Так как querySelectorAll возращает NodeList,
  //который не является обьектом,то мы этот обьект преобразуем массив.                             
  infoAboutModelClother.arrayFotos =Array.from( body.querySelectorAll('.asos-product .gallery-aside-wrapper ul.thumbnails li img'))
                                   .map((elem)=>{return elem.getAttribute('src')})
                         
  //вывод полученной информации в консоль                                 
  console.log( infoAboutModelClother)
  
})







 