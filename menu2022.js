const evro = 106.3;

class Menu{
  constructor(){
    this.menu = document.createElement('div');
    this.menu.id = 'menu';
    this.menu.classList.add('menu');
    document.querySelector('header').insertAdjacentElement('beforeend', this.menu);
    this.menu.insertAdjacentHTML('beforeend', '<img src="/img/masterskaya-oval-3.jpg" alt="">')


    document.querySelector('html').addEventListener('click', event => {
      let element = event.target;
      let menuButton = document.querySelector("#menuButton");
      let menuPanel = document.querySelector("#menu");

      if (element.id == menuButton.id) {
        event.preventDefault();
        menuPanel.classList.add("rightPositionShow");
      }
      else{
        menuPanel.classList.remove("rightPositionShow");
      }
      menuPanel.classList.add("rightPositionHide");
    })
  }

  addSection(caption,items,color = 'black'){
    let list ='<ul class="menu_list">';
    
    items.forEach(element => {
      list += `<li class="menu_item" ><a style="color:${color}" href="${element.h}">${element.c}</a></li>`;
    
  });

    list+='</ul>';
    this.menu.insertAdjacentHTML('beforeend', `<h2 class="menu_caption">${caption}</h2><hr>${list}`);

  }
}



document.addEventListener("DOMContentLoaded", ()=>{
return;
addCaption();
setTime();
addMessage(false)



let menu = new Menu;
  menu.addSection('<a href="tel:+79165726120">8916-572-61-20</a>', 
  [{ h: '/dostavka', c: 'Доставка' },
    { h: 'https://shkaf-shkafych.ru/shkaf-na-zakaz', c: 'Шкафы на заказ от наших партнеров' },
  //  { h: '/partner', c: 'Партнерская программа' },
]);

 
  
menu.addSection('Подушки',[
  {h:'/podushki',c:'Подушки для диванов и кресел'},

  //{ h: '../podushki-iz-kozhi.html', c: 'Подушки из натуральной кожи' },
 // { h: '../valiki-dlya-divana-i-kresla.html', c: 'Мягкие валики' },
  { h: '/podushka-madagaskar.html', c: 'Подушки "Мадагаскар" калькулятор' },
  { h: '/podushka-aquarelle.html', c: 'Подушки "Акварель" калькулятор' },
]);


  menu.addSection('Мягкие стеновые панели', [
    { h: '/myagkie-steni.html', c: 'Панели' },
    { h: '/myagkie-steni.html#calculator', c: 'Калькулятор' },
    { h: '/myagkie-steni.html#montaj', c: 'Монтаж' },
  ])

  menu.addSection('Кровати на заказ', [
    { h: '/krovati-na-zakaz.html', c: 'Кровати в ткани и коже' },
    { h: '../krovati-na-zakaz.html#calculator', c: 'Калькулятор' },
    { h: '/matressdb', c: 'Матрасы Materlux' },
  ])

  menu.addSection('Материалы', [
    { h: '/outdoor', c: 'Для улицы' },
    { h: '/jakk', c: 'Жаккард' },
    { h: '/vel', c: 'Велюр' },
    // { h: '/tkan.html?name=sherst', c: 'Искусственная шерсть' },
    { h: '/zam', c: 'Искусственная замша' },
    { h: '/rog', c: 'Рогожка' },
    { h: '/shin', c: 'Шенилл' },
    { h: '/fl', c: 'Флок' },
    { h: '/buckle', c: 'Букле' },
    { h: '/bar', c: 'Бархат' },
    { h: 'kojzam', c: 'Искусственная кожа' },
    { h: '/koja', c: 'Натуральная кожа' },
  ])
    menu.addSection('Наполнители', [

    {h: '/foam-st2536', c: 'Стандартный поролон  ST2536' },
    { h: 'foam-st3040', c: 'Стандартный поролон  ST3040' },
    { h: 'foam-hr3535', c: 'Поролон с добавление латекса HR3535' },
    { h: 'foam-s2525', c: 'Мягкий поролон S2525' },
    { h: 'foam-el4060', c: 'Плотный поролон EL4060' },
    { h: 'foam-lr4010', c: 'Поролон с памятью LR4010' },
    { h: 'foam-ll5020', c: 'Мягкий поролон с латексом LL5020' },
    { h: 'hollowfiber-chip', c: 'Холлофайбер®(шарики)'},
    { h: 'foam-pvv100', c: 'Поролон вторичного вспенивания'},
    { h: 'foam-chip', c: 'Поролоновая крошка'},
    { h: 'foam-hollowfiber-chip', c: 'Смесь поролоновой крошки и холлофайбера'},
    
  ]) 

  menu.addSection('Антислайд®', [
    { h: '/antislide', c: 'Антислайд®' },
  ])



  menu.addSection('Контакты', [
    { h: '/', c: 'Мастерская' },
    { h: 'tel:+79165726120', c: '8916-572-61-20' },
    { h: 'tel:+79168503359', c: '8916-850-33-59' },
    { h: 'tel:+79168503359', c: '8916-088-06-40' },
    { h: 'whatsapp://send?phone=+79168503359', c: 'WhatApp 8916-850-33-59' },
    { h: 'whatsapp://send?phone=+79160880640', c: 'WhatApp 8916-088-06-40' },
    { h: 'whatsapp://send?phone=+79165726120', c: 'WhatApp 8916-572-61-20' },
    { h: 'mailto:vopros@oval-co.ru', c: 'vopros@oval-co.ru' },
    { h: '/kontakti', c: 'Адрес и схема заезда' },
  ],'blue')

  menu.addSection('Отзывы', [
    { h: 'https://yandex.ru/search/smart/?clid=2186727&lr=213&text=%D0%BC%D0%B0%D1%81%D1%82%D0%B5%D1%80%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B2%D0%B0%D0%BB+&suggest_reqid=34414505195278003570110634522435', c: 'Посмотреть' },
    { h: 'https://yandex.ru/ugcpub/cabinet?main_tab=professions', c: 'Написать' },
    { h: 'https://yandex.ru/support/reviews/review.html#concept_up1_vfc_ygb', c: 'Инструкция' },
  ])

  addFooter();

}
)



class Button {
  button;
  constructor(parentId, caption, idName, idNumber, event) {
    this.parent = document.querySelector('#' + parentId)
    this.caption = caption
    this.id = idName + '_' + idNumber

    this.button = document.createElement('button')
    this.parent.insertAdjacentElement('beforeend', this.button)
    this.button.textContent = this.caption
    this.button.id = this.id
    this.button.addEventListener('click', event)

  }
}


class GreenButton extends Button {
  constructor(parentId, caption, idName, idNumber, event) {
    super(parentId, caption, idName, idNumber, event)
    this.button.classList.add('greenPillowButton')
  }
}

class RedButton extends Button {
  constructor(parentId, caption, idName, idNumber, event) {
    super(parentId, caption, idName, idNumber, event)
    this.button.classList.add('redPillowButton')
  }
}

class BlueButton extends Button {
  constructor(parentId, caption, idName, idNumber, event) {
    super(parentId, caption, idName, idNumber, event)
    this.button.classList.add('bluePillowButton')
  }
}

class BlueButton2023 extends Button {
  constructor(parentId, caption, idName, idNumber, event) {
    super(parentId, caption, idName, idNumber, event)
    this.button.classList.add('bluePillowButton')
  }
}

class OrangButton extends Button {
  constructor(parentId, caption, idName, idNumber, event) {
    super(parentId, caption, idName, idNumber, event)
    this.button.classList.add('orangePillowButton')
  }
}

class WhiteButton extends Button {
  constructor(parentId, caption, idName, idNumber, event) {
    super(parentId, caption, idName, idNumber, event)
    this.button.classList.add('whitePillowButton')
  }
}

class WhiteButtonSelect extends Button {


  constructor(parentId, caption, idName, idNumber, event) {


    super(parentId, caption, idName, idNumber, event)
    this.button.classList.add('whiteSelectButton')
    this.button.textContent = caption + ' ▼';
    let ttt = 0;
  }
  setValue(value){
    this.button.setAttribute('data-value',value)
  }

  setCaption(value){
    this.button.caption = value;
  }

  getValue(){
    return this.button.getAttribute('data-value');
  }
}

class WhiteButtonCheck extends Button {



  constructor(parentId, caption, idName, idNumber, event, value) {

    super(parentId, caption, idName, idNumber, event)
    this.parent = document.querySelector('#' + parentId)
    this.button.textContent = '✓';
  
    this.button.classList.add('whiteCheckButton');
    this.button.classList.add('colorGain');

    if(value){
      this.button.classList.remove('colorGain')
      this.button.setAttribute('data-t', 'true');

    }
    else{
      this.button.classList.add('colorGain');
      this.button.setAttribute('data-t', 'false');
      
    }
   
    let ttt = 0;
  }
  setValue(value) {
    this.button.setAttribute('data-value', value)
  }

  setCaption(value) {
    this.button.caption = value;
  }

  getValue() {
    return this.button.getAttribute('data-value');
  }
}


function showHideFabrick(e){
  if (document.querySelector('#imgBox')){
     let fabrick = document.querySelector('#imgBox')
      if (event.target.textContent =='Скрыть ткань')
      {
        fabrick.style.display='none'
        event.target.textContent ='Показать ткань'
      }
      else{
        fabrick.style.display = 'block'
        event.target.textContent = 'Скрыть ткань'
      }

  }



}




function addMaterialDescription(sample) {

  let descriptionBox = document.querySelector('#materialDescription');
  let str = '';
  let koja = sample.type == KOJA ? true : false;

  str += sample.description;
  str += '<h4>Состав</h4><ul>';
  sample.composition.forEach(element => {
    str += `<li>${element.name} ${element.value}</li>`;
  }); str += '</ul>';

  if (koja) {
     str += '<p>Средняя площадь одной шкуры 4,5м2</p><br>'; 
    str += `<p>Цена за 1 квадратный метр ${sample.cost}р.</p><br><p>Кожа продается только целыми шкурами.</p><br><p>Средняя стоимость шкуры ${roundToMultiple(sample.cost * 4.6,50).toFixed(0)}р. </p><br>`;
    }

  else{
    str += '<p>Ширина материала 140см (±2см)</p><br>';
    str += `<p>Тест Мартиндейла  ${sample.martindale} циклов</p><br>`;
    str += `<p>Цена за 1 погонный метр ${sample.cost}р.</p><br>`;
  }
  
  
  str += `<p>Производство ${sample.country}.</p><br>`;
  str += `<p>${sample.seller}.</p><br>`;

  descriptionBox.insertAdjacentHTML('beforeend', str);
}

function addMaterialToImgBox2(mat) {
  let imgBox = document.querySelector("#imgBox");

  let str = '<div class="content_gallery"><div class="content_gallery_items_fabrick">';
  mat.sample.forEach((element,index) => {
    str += `<div class="content_gallery_item"><div class="content_img"><a href="../obrazec.html?name=${mat.id}&i=${index}"><img src="../tkan/${element.img}" alt="" /> </a> </div> <span class="item_name">${element.name} </span> </div>`;
  });
  imgBox.innerHTML='';
  imgBox.insertAdjacentHTML('beforeend', str);
}

function addMaterialToImgBox3(mat) {
  let imgBox = document.querySelector("#imgBox");

  let str = '<div class="content_gallery"><div class="content_gallery_items_fabrick">';
  mat.sample.forEach((element, index) => {
    str += `<div class="content_gallery_item"><div class="content_img"><a href=""><img src="${element.img}" alt="" /> </a> </div> <span class="item_name">${element.name} </span> </div>`;
  });
  imgBox.innerHTML = '';
  imgBox.insertAdjacentHTML('beforeend', str);
}

function addMaterialToImgBox(sample) {
  let imgBox = document.querySelector("#imgBox");

  let str = '<div class="content_gallery"><div class="content_gallery_items_fabrick">';
  sample.sample.forEach((element, index) => {
    str += `<div class="content_gallery_item"><div class="content_img"><a href="obrazec.html?name=${sample.id}&i=${index}"><img src="tkan/${element.img}" alt="" /> </a> </div> <span class="item_name">${element.name} </span> </div>`;
  });
  imgBox.innerHTML = '';
  imgBox.insertAdjacentHTML('beforeend', str);
}

function addMaterialToSelect(selectId, arr, selectedIndex) {
  let select = document.querySelector(selectId);
  let str = '';

  arr.sort(compare_price);

  if (select){
  
    arr.forEach(element => {
      let sample = getMaterialByName(element.name);
      str += `<option value="${sample.name}">${sample.name} ${sample.cost}р/м.  ${sample.type.replace(' ','_')} </option>`
    });
  }
  select.insertAdjacentHTML('beforeend',str);
  select.selectedIndex = selectedIndex;
}

function addMaterialToSuperSelect(superSelectInstans, arr, selectedValue){

}


function addCaption(){
  
  let wrapper = document.querySelector('.wrapper');
  if (wrapper){
    wrapper.insertAdjacentHTML('afterbegin',
    '<header class="header"><img src="../img/logo.jpg" alt="logo" class="prelogo"><a href="/index.html" class="header_logo">ОВАЛ <span class="headePhone">8916-572-61-20</span><br><span class="header_time">Открыто до 16:30</span></a><nav class="header_menu"><div class="header_menu">'
    // +'<a href="/shop.html" class="header_link">МАГАЗИН</a>'
    +'<a href="/preview.html?t=all" class="header_link">РАБОТЫ</a><a href="/" id="menuButton" class="header_link">МЕНЮ</a></div></nav></header>'
    );
  }
  
}

function addFooter(){
  document.querySelector('.main').insertAdjacentHTML('afterend', '<footer class="footer"><div div class= "footer_content_1" ><ul class="footer_list"> <li class="footer_item">ОВАЛ</li><li class="footer_item">Будни 8:00 - 16:30</li><li class="footer_item">8916-572-61-20</li><li class="footer_item">8916-850-33-59</li><li class="footer_item">8916-088-06-40</li></ul></div><div class="footer_content_2"> <ul class="footer_list"><li class="footer_item"><a href="whatsapp://send?phone=+79168503359">whatsapp <br>8916-850-33-59</a></li><li class="footer_item"><a href="whatsapp://send?phone=+79160880640">whatsapp <br>8916-088-06-40</a></li><li class="footer_item"><a href="whatsapp://send?phone=+79165726120">whatsapp <br>8916-572-61-20</a></li><li class="footer_item"><a href="mailto:vopros@oval-co.ru">vopros@oval-co.ru</a></li><li class="footer_item">Москва</li><li class="footer_item">Алтуфьевское шоссе 27а стр9</li></ul> </div></footer > ');
  
}

function firstLettetToUp(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

function setTime(){
  let time = document.querySelector('.header_time');

  if (time) {
    let day = new Date().getDay();
    let hours = new Date().getHours();
    let minute = new Date().getMinutes();
    if (day == 6 || day == 0) {
      time.textContent = ' Закрыто до понедельника';
      //time.textContent = ' Закрыто до 9 января';
      return;
    }
    if (day == 5 && hours > 16 &&  minute >30) {
      time.textContent = ' Закрыто до понедельника';
      //time.textContent = ' Закрыто до 9 января';
      return;
    }

    if (hours < 8) {
      time.textContent = ' Закрыто до 8:00';
      //time.textContent = ' Закрыто до 9 января';
      return;
    }
    
    if (hours > 16 && minute > 30) {
      time.textContent = ' Закрыто до завтра';
      // time.textContent = ' Закрыто до 9 января';
      return;
    }

    if (hours > 17) {
      time.textContent = ' Закрыто до завтра';
      // time.textContent = ' Закрыто до 9 января';
      
      return;
    }
  }
}

function changeFabric() {

  let sample = getMaterialByName(document.querySelector('#tkan').value);

  addMaterialToImgBox(sample);
}
function changeFabric2(fabrickName) {
 

  let sample = getMaterialByName(fabrickName);

  addMaterialToImgBox(sample);
}

function roundToMultiple(num, multiple) {
  return Math.ceil(num / multiple) * multiple;
}

function costPosition(str, cost, count) {
  return Number.parseInt(cost) * count;
}

class SuperSelectItem {
  constructor(caption, value, imgUrl, description='') {
    this.caption = caption;
    this.value = value;
    this.imgUrl = imgUrl;
    
    this.description = description;
  }

}




class SuperSelect {

  parent;
  value;
  caption;
  selectDiv;
  button;
  itemsMap;
  leftFrame;

  constructor(id, caption, itemsMap, selectedItem, ) {
    this.parent = document.querySelector('#' + id);
    this.caption = caption;
    
    this.itemsMap = itemsMap;
    
    this.selectDiv = document.createElement('div');
    this.selectDiv.id = this.parent.id + '_selectDiv';
    this.selectDiv.classList.add('menuSelect');
    // this.description = description;


    if (this.parent) {
      let spanLeft = document.createElement('span');
      this.parent.insertAdjacentElement('afterbegin', spanLeft);
      spanLeft.textContent = this.caption;

      this.parent.insertAdjacentElement('beforeend', this.selectDiv)

      this.button = new WhiteButtonSelect(this.parent.id, itemsMap.get(selectedItem).caption, this.parent.id + '_selectButton', '', ()=>{
        let allMenuWindow = document.querySelectorAll('.menuSelect');

        allMenuWindow.forEach(element => {
          if (element.id != this.selectDiv.id){
            element.classList.remove('rightPositionShow');
          }
        });


        if (this.selectDiv.classList.contains('rightPositionShow')) {
          this.selectDiv.classList.remove('rightPositionShow');
        }
        else {
          this.selectDiv.classList.add('rightPositionShow');
        }
      });
      this.button.setValue(itemsMap.get(selectedItem).value);
      
      

    }

    //updateMap(itemsMap);
    itemsMap.forEach((element,index) => {
      this.addItem(element, index)}
      );

     

  }





  addItem(obj,index) {
    let div = document.createElement('div');
    

    div.classList.add('menuClick');
    div.classList.add('sideMenuItem');

    div.addEventListener('click', ()=>{
      let element = event.target;
      let item = this.itemsMap.get(element.getAttribute('data-t'));
      this.caption = item.caption;
      this.selectDiv.classList.remove('rightPositionShow');
      this.button.button.textContent = item.caption + ' ▼';
      this.button.setCaption(item.caption + ' ▼');
      this.button.setValue(item.value);
      this.value = item.value;
      //создаю событие
      const anEvent = new Event('change');
      this.button.button.dispatchEvent(anEvent);
      
    })

    let divLeft = document.createElement('div') ;
    divLeft.classList.add('leftSection');
    divLeft.setAttribute('data-t', obj.value);
    divLeft.addEventListener('click', ()=>{
      let element = event.target;/////////////////////////////////
      let item = this.itemsMap.get(element.getAttribute('data-t'));
      this.caption = item.caption;
      this.selectDiv.classList.remove('rightPositionShow');
      this.button.button.textContent = item.caption + ' ▼';
      this.button.setCaption(item.caption + ' ▼');
      this.button.setValue(item.value);
      this.value = item.value;
    })


    let divRight = document.createElement('div');
    divRight.classList.add('rightSection');
    divRight.setAttribute('data-t', obj.value);

    div.insertAdjacentElement('beforeend', divLeft);
    // div.insertAdjacentElement('beforeend', divRight);




    let label = document.createElement('span');
    
    label.id = this.parent.id + '_label_' + index;
    label.setAttribute('data-t', obj.value);

    this.selectDiv.insertAdjacentElement('beforeend',div);
    divLeft.insertAdjacentElement('beforeend',label);
    label.textContent = obj.caption;
    

    if (obj.imgUrl != '' && obj.imgUrl != 'Материал заказчика 0р/м'){
      divLeft.insertAdjacentElement('beforeend', document.createElement('br'));
      let img = document.createElement('img');
      img.setAttribute('decoding', 'async')
      img.classList.add('menuClick');
      img.src = obj.imgUrl;
      
      img.alt = ' ';
      img.style.width = '100%';
      img.setAttribute('data-t', obj.value);
      divLeft.insertAdjacentElement('beforeend', img);

      img.addEventListener('click', () => {
        let element = event.target;/////////////////////////////////
        let item = this.itemsMap.get(element.parentElement.getAttribute('data-t'));
        this.caption = item.caption;
        this.selectDiv.classList.remove('rightPositionShow');
        this.button.button.textContent = item.caption + ' ▼';
        this.button.setCaption(item.caption + ' ▼');
        this.button.setValue(item.value);
        this.value = item.value;
        
      })
    }
    let label2 = document.createElement('span');

    label2.id = this.parent.id + '_label2_' + index;
    label.setAttribute('data-t', obj.value);
    divLeft.insertAdjacentElement('beforeend', label2);
    label2.innerHTML = obj.description;
    label2.style.fontSize = 'small';

    
  }

  setValue(value){
    this.button.button.setAttribute('data-value', value);
  }

  setCaption(value){
    this.button.caption = value;
  }

  getValue(){
    return this.button.getValue();
    
  }

  updateMap(newMap){

    this.itemsMap.clear();
    this.selectDiv.innerHTML='';
    this.itemsMap = newMap;
    this.itemsMap.forEach((element, index) => {
      this.addItem(element, index)
    }
    );

    
  }

  

}

class SuperCheck{

  constructor(id, caption, value){
    this.parent = document.querySelector('#' + id);
    this.caption = caption;
    this.on = true

    this.checkDiv = document.createElement('div');
    this.checkDiv.id = this.parent.id + '_checkDiv';
    this.checkDiv.classList.add('menuSelect');

    if (this.parent) {
      this.parent.insertAdjacentElement('beforeend', this.checkDiv)

      let spanLeft = document.createElement('span');
      this.parent.insertAdjacentElement('afterbegin', spanLeft);
      spanLeft.textContent = this.caption;
      
      let divRight = document.createElement('span');
      divRight.style.gridColumn = '2/3';
      divRight.style.textAlign = 'right';
      divRight.id = this.parent.id + '_divRight';
      divRight.WebkitJustifyContent = 'end';
      this.parent.insertAdjacentElement('beforeend', divRight);

      this.button = new WhiteButtonCheck(this.parent.lastChild.id, '', this.parent.id + '_selectButton', '', () => {
        let element = event.target;
          if (element.getAttribute('data-t')=='true') {
            element.setAttribute('data-t','false');
            element.classList.add('colorGain');
        }
        else{
          if(!this.on){return}
          element.setAttribute('data-t', 'true');
          element.classList.remove('colorGain');
        }
        });

    }

return this;
  }

get(){
  return this.button.button.getAttribute('data-t');
}
set(value){
  this.button.button.setAttribute('data-t', value);
  this.button.button.classList.remove('colorGain');
}

On(){
  this.on = true;
}

  Off() {
    this.on = false;
    this.button.button.setAttribute('data-t', 'false');
    this.button.button.classList.add('colorGain');
  }


}

class Opori {
  constructor(name, cost, height, imgLink, material='m') {
    let addedWork = material='m'? 1000 : 2000
    this.name = name;
    this.cost = roundToMultiple(cost * evro * 4 * 1.3 + addedWork, 10);
    this.caption = name + ' высота ' + height;

    this.height = height;
    this.imgLink = imgLink;
  }
}

class Panel{
  constructor(id, caption, fabricKoef, difficulty, imgLink) {
    this.id = id;
    this.caption = caption;
    this.fabricKoef = fabricKoef;
    this.difficulty = difficulty;
    this.imgLink = imgLink
  }
}

class Head extends Panel {
  constructor(id, caption, fabricKoef, difficulty, imgLink) {
    super(id, caption, fabricKoef, difficulty, imgLink);
  }
}

class WP extends Panel{ //WallPanel
  constructor(id, caption, fabricKoef, difficulty, imgLink) {
    super(id, caption, fabricKoef, difficulty, imgLink);
  }
}

function getPanelIdFromArray(id,arr) {
  return arr.find(e=> e.id == id)
  //return material.find(e => e.id == id);
}



function addElement(node, container, id, classList) {
  let el = document.createElement(node);
  document.querySelector(container).insertAdjacentElement('beforeend', el);
  el.id = id;
  classList.forEach(e => {
    el.classList.add(e);
  });
  return el;
}

function placeBasket() {
  let adress = window.location.href;
 let a =  addElement('a','html','basket',['basketIcon']);
 a.innerHTML = '<img src="/img/basket.png" alt="корзина" />';
 a.href = '/basket.html';
  a.caption = 'Перейти в корзину';
}


function addMessage(show) {

  // let str = 'Уважаемые заказчики!<br> Мы на каникулах. <br>Мастерская начнет работать 31 июля.'
  let str = 'С Новым Годом!<br>Мастерская на новогодних каникулах<br>Мы начнинаем работать 9 января '

  if(show){

    let div = document.createElement('div');
    div.innerHTML = str;
    div.classList.add('message');

    if(document.querySelector('h1')){
      document.querySelector('h1').insertAdjacentElement('beforebegin',div);
    }
    else{
      document.querySelector('h2').insertAdjacentElement('beforebegin',div);
    }

    

  //   addElement('div','h1','message',[]);
  //   document.querySelector('#message').textContent =str ;
   }
  
}







