const page = 'none';
const aq = page == 'aquarelle' ? true : false;


let divOrderIndex = 0;
let pillowIndex = 0;
let allPillows = new Map();
let selectColor

const material = []




const loadMaterials= async() =>{
    return [
  {
    "id": "19",
    "nameId": "fabricdefisorder",
    "caption": "Ткань (материал заказчика)",
    "pageUrl": "fabric-order",
    "cost": 0,
    "unit": "погонный метр",
    "seller": "",
    "country": "",
    "description": "",
    "martindale": "0",
    "content": [
      ""
    ],
    "typeEng": "",
    "typeRus": "",
    "rapport": "1",
    "overlock": "1",
    "sample": [
      {
        "caption": "Ткань заказчика",
        "name": "fabricdefisorder",
        "h1": "Ткань заказчика Ткань заказчика",
        "nameId": "Ткань-заказчика-Ткань-заказчика",
        "samplePageUrl": "../tkan/fabric-order/preview.jpg",
        "parentPageUrl": "https://www.oval-co.ru",
        "previewUrl": "../tkan/fabric-order/preview.jpg",
        "imgUrl": "../tkan/fabric-order/preview.jpg",
        "img": "../tkan/fabric-order/preview.jpg",
        "imgAlt": "Материал заказчика",
        "imgTitle": "Материал заказчика",
        "srcset": "../tkan/fabric-order/preview.jpg 400w, ../tkan/fabric-order/preview.jpg 800w, ../tkan/fabric-order/preview.jpg 100vw, ../tkan/fabric-order/preview.jpgg 1200w",
        "size": "(max-width: 400px) 400px,(max-width: 800px) 800px,(max-width: 1000px) 1000px,(max-width: 1200px) 1200px, 100vw"
      }
    ],
    "previewImg": "../tkan/fabric-order/preview.jpg",
    "status": true
  },
  {
    "id": "20",
    "nameId": "kiton",
    "caption": "Kiton",
    "pageUrl": "kiton",
    "cost": 650,
    "unit": "погонный метр",
    "seller": "Поставщик материала компания <a href=\"http://www.souz-m.ru\" target=\"_blank\"> СОЮЗ-М</a>",
    "country": "Китай",
    "description": "<p>Однотонная рогожка на подложке с мелким переплетением. Простая и прочная ткань</p>",
    "martindale": "51000",
    "content": [
      "полиэстер-100%"
    ],
    "typeEng": "ROG",
    "typeRus": "Рогожка",
    "rapport": "0",
    "overlock": "1",
    "sample": [
      {
        "caption": "1",
        "name": "kiton",
        "h1": "Kiton 1",
        "nameId": "kiton-1",
        "samplePageUrl": "../samples/kiton/kiton-1",
        "parentPageUrl": "../../material/kiton",
        "previewUrl": "../tkan/kiton/kiton-1.jpg",
        "imgUrl": "../../tkan/kiton/kiton-1-big.jpg",
        "img": "../tkan/kiton/kiton-1.jpg",
        "imgAlt": "kiton 1",
        "imgTitle": "kiton 1",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "2",
        "name": "kiton",
        "h1": "Kiton 2",
        "nameId": "kiton-2",
        "samplePageUrl": "../samples/kiton/kiton-2",
        "parentPageUrl": "../../material/kiton",
        "previewUrl": "../tkan/kiton/kiton-2.jpg",
        "imgUrl": "../../tkan/kiton/kiton-2-big.jpg",
        "img": "../tkan/kiton/kiton-2.jpg",
        "imgAlt": "kiton 2",
        "imgTitle": "kiton 2",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "3",
        "name": "kiton",
        "h1": "Kiton 3",
        "nameId": "kiton-3",
        "samplePageUrl": "../samples/kiton/kiton-3",
        "parentPageUrl": "../../material/kiton",
        "previewUrl": "../tkan/kiton/kiton-3.jpg",
        "imgUrl": "../../tkan/kiton/kiton-3-big.jpg",
        "img": "../tkan/kiton/kiton-3.jpg",
        "imgAlt": "kiton 3",
        "imgTitle": "kiton 3",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "4",
        "name": "kiton",
        "h1": "Kiton 4",
        "nameId": "kiton-4",
        "samplePageUrl": "../samples/kiton/kiton-4",
        "parentPageUrl": "../../material/kiton",
        "previewUrl": "../tkan/kiton/kiton-4.jpg",
        "imgUrl": "../../tkan/kiton/kiton-4-big.jpg",
        "img": "../tkan/kiton/kiton-4.jpg",
        "imgAlt": "kiton 4",
        "imgTitle": "kiton 4",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "5",
        "name": "kiton",
        "h1": "Kiton 5",
        "nameId": "kiton-5",
        "samplePageUrl": "../samples/kiton/kiton-5",
        "parentPageUrl": "../../material/kiton",
        "previewUrl": "../tkan/kiton/kiton-5.jpg",
        "imgUrl": "../../tkan/kiton/kiton-5-big.jpg",
        "img": "../tkan/kiton/kiton-5.jpg",
        "imgAlt": "kiton 5",
        "imgTitle": "kiton 5",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "6",
        "name": "kiton",
        "h1": "Kiton 6",
        "nameId": "kiton-6",
        "samplePageUrl": "../samples/kiton/kiton-6",
        "parentPageUrl": "../../material/kiton",
        "previewUrl": "../tkan/kiton/kiton-6.jpg",
        "imgUrl": "../../tkan/kiton/kiton-6-big.jpg",
        "img": "../tkan/kiton/kiton-6.jpg",
        "imgAlt": "kiton 6",
        "imgTitle": "kiton 6",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "7",
        "name": "kiton",
        "h1": "Kiton 7",
        "nameId": "kiton-7",
        "samplePageUrl": "../samples/kiton/kiton-7",
        "parentPageUrl": "../../material/kiton",
        "previewUrl": "../tkan/kiton/kiton-7.jpg",
        "imgUrl": "../../tkan/kiton/kiton-7-big.jpg",
        "img": "../tkan/kiton/kiton-7.jpg",
        "imgAlt": "kiton 7",
        "imgTitle": "kiton 7",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "8",
        "name": "kiton",
        "h1": "Kiton 8",
        "nameId": "kiton-8",
        "samplePageUrl": "../samples/kiton/kiton-8",
        "parentPageUrl": "../../material/kiton",
        "previewUrl": "../tkan/kiton/kiton-8.jpg",
        "imgUrl": "../../tkan/kiton/kiton-8-big.jpg",
        "img": "../tkan/kiton/kiton-8.jpg",
        "imgAlt": "kiton 8",
        "imgTitle": "kiton 8",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "9",
        "name": "kiton",
        "h1": "Kiton 9",
        "nameId": "kiton-9",
        "samplePageUrl": "../samples/kiton/kiton-9",
        "parentPageUrl": "../../material/kiton",
        "previewUrl": "../tkan/kiton/kiton-9.jpg",
        "imgUrl": "../../tkan/kiton/kiton-9-big.jpg",
        "img": "../tkan/kiton/kiton-9.jpg",
        "imgAlt": "kiton 9",
        "imgTitle": "kiton 9",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "10",
        "name": "kiton",
        "h1": "Kiton 10",
        "nameId": "kiton-10",
        "samplePageUrl": "../samples/kiton/kiton-10",
        "parentPageUrl": "../../material/kiton",
        "previewUrl": "../tkan/kiton/kiton-10.jpg",
        "imgUrl": "../../tkan/kiton/kiton-10-big.jpg",
        "img": "../tkan/kiton/kiton-10.jpg",
        "imgAlt": "kiton 10",
        "imgTitle": "kiton 10",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "11",
        "name": "kiton",
        "h1": "Kiton 11",
        "nameId": "kiton-11",
        "samplePageUrl": "../samples/kiton/kiton-11",
        "parentPageUrl": "../../material/kiton",
        "previewUrl": "../tkan/kiton/kiton-11.jpg",
        "imgUrl": "../../tkan/kiton/kiton-11-big.jpg",
        "img": "../tkan/kiton/kiton-11.jpg",
        "imgAlt": "kiton 11",
        "imgTitle": "kiton 11",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "12",
        "name": "kiton",
        "h1": "Kiton 12",
        "nameId": "kiton-12",
        "samplePageUrl": "../samples/kiton/kiton-12",
        "parentPageUrl": "../../material/kiton",
        "previewUrl": "../tkan/kiton/kiton-12.jpg",
        "imgUrl": "../../tkan/kiton/kiton-12-big.jpg",
        "img": "../tkan/kiton/kiton-12.jpg",
        "imgAlt": "kiton 12",
        "imgTitle": "kiton 12",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "13",
        "name": "kiton",
        "h1": "Kiton 13",
        "nameId": "kiton-13",
        "samplePageUrl": "../samples/kiton/kiton-13",
        "parentPageUrl": "../../material/kiton",
        "previewUrl": "../tkan/kiton/kiton-13.jpg",
        "imgUrl": "../../tkan/kiton/kiton-13-big.jpg",
        "img": "../tkan/kiton/kiton-13.jpg",
        "imgAlt": "kiton 13",
        "imgTitle": "kiton 13",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "14",
        "name": "kiton",
        "h1": "Kiton 14",
        "nameId": "kiton-14",
        "samplePageUrl": "../samples/kiton/kiton-14",
        "parentPageUrl": "../../material/kiton",
        "previewUrl": "../tkan/kiton/kiton-14.jpg",
        "imgUrl": "../../tkan/kiton/kiton-14-big.jpg",
        "img": "../tkan/kiton/kiton-14.jpg",
        "imgAlt": "kiton 14",
        "imgTitle": "kiton 14",
        "srcset": "",
        "size": ""
      }
    ],
    "previewImg": "../tkan/kiton/preview.jpg",
    "status": true
  },
  {
    "id": "22",
    "nameId": "sanremo",
    "caption": "Sanremo",
    "pageUrl": "sanremo",
    "cost": 990,
    "unit": "погонный метр",
    "seller": "Поставщик материала компания <a href=\"http://www.souz-m.ru\" target=\"_blank\"> СОЮЗ-М</a>",
    "country": "Китай",
    "description": "<p>Велюр с crush-эффектом. Ворс специально “замят” в разных направлениях, что создает разводы. Если Вам нравится такой эффект, то вероятно Вам понравится и ткань. Материал приятен на ощупь, хорошо растягтвается для изделий сложных форм. Отличный показатель по тесту Мартиндейла</p>",
    "martindale": "51000",
    "content": [
      "полиэстер-100%"
    ],
    "typeEng": "VEL",
    "typeRus": "Велюр",
    "rapport": "0",
    "overlock": "1",
    "sample": [
      {
        "caption": "000",
        "name": "sanremo",
        "h1": "Sanremo 000",
        "nameId": "sanremo-000",
        "samplePageUrl": "../samples/sanremo/sanremo-000",
        "parentPageUrl": "../../material/sanremo",
        "previewUrl": "../tkan/sanremo/sanremo-000.jpg",
        "imgUrl": "../../tkan/sanremo/sanremo-000-big.jpg",
        "img": "../tkan/sanremo/sanremo-000.jpg",
        "imgAlt": "sanremo 000",
        "imgTitle": "sanremo 000",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "102",
        "name": "sanremo",
        "h1": "Sanremo 102",
        "nameId": "sanremo-102",
        "samplePageUrl": "../samples/sanremo/sanremo-102",
        "parentPageUrl": "../../material/sanremo",
        "previewUrl": "../tkan/sanremo/sanremo-102.jpg",
        "imgUrl": "../../tkan/sanremo/sanremo-102-big.jpg",
        "img": "../tkan/sanremo/sanremo-102.jpg",
        "imgAlt": "sanremo 102",
        "imgTitle": "sanremo 102",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "235",
        "name": "sanremo",
        "h1": "Sanremo 235",
        "nameId": "sanremo-235",
        "samplePageUrl": "../samples/sanremo/sanremo-235",
        "parentPageUrl": "../../material/sanremo",
        "previewUrl": "../tkan/sanremo/sanremo-235.jpg",
        "imgUrl": "../../tkan/sanremo/sanremo-235-big.jpg",
        "img": "../tkan/sanremo/sanremo-235.jpg",
        "imgAlt": "sanremo 235",
        "imgTitle": "sanremo 235",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "290",
        "name": "sanremo",
        "h1": "Sanremo 290",
        "nameId": "sanremo-290",
        "samplePageUrl": "../samples/sanremo/sanremo-290",
        "parentPageUrl": "../../material/sanremo",
        "previewUrl": "../tkan/sanremo/sanremo-290.jpg",
        "imgUrl": "../../tkan/sanremo/sanremo-290-big.jpg",
        "img": "../tkan/sanremo/sanremo-290.jpg",
        "imgAlt": "sanremo 290",
        "imgTitle": "sanremo 290",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "291",
        "name": "sanremo",
        "h1": "Sanremo 291",
        "nameId": "sanremo-291",
        "samplePageUrl": "../samples/sanremo/sanremo-291",
        "parentPageUrl": "../../material/sanremo",
        "previewUrl": "../tkan/sanremo/sanremo-291.jpg",
        "imgUrl": "../../tkan/sanremo/sanremo-291-big.jpg",
        "img": "../tkan/sanremo/sanremo-291.jpg",
        "imgAlt": "sanremo 291",
        "imgTitle": "sanremo 291",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "370",
        "name": "sanremo",
        "h1": "Sanremo 370",
        "nameId": "sanremo-370",
        "samplePageUrl": "../samples/sanremo/sanremo-370",
        "parentPageUrl": "../../material/sanremo",
        "previewUrl": "../tkan/sanremo/sanremo-370.jpg",
        "imgUrl": "../../tkan/sanremo/sanremo-370-big.jpg",
        "img": "../tkan/sanremo/sanremo-370.jpg",
        "imgAlt": "sanremo 370",
        "imgTitle": "sanremo 370",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "380",
        "name": "sanremo",
        "h1": "Sanremo 380",
        "nameId": "sanremo-380",
        "samplePageUrl": "../samples/sanremo/sanremo-380",
        "parentPageUrl": "../../material/sanremo",
        "previewUrl": "../tkan/sanremo/sanremo-380.jpg",
        "imgUrl": "../../tkan/sanremo/sanremo-380-big.jpg",
        "img": "../tkan/sanremo/sanremo-380.jpg",
        "imgAlt": "sanremo 380",
        "imgTitle": "sanremo 380",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "388",
        "name": "sanremo",
        "h1": "Sanremo 388",
        "nameId": "sanremo-388",
        "samplePageUrl": "../samples/sanremo/sanremo-388",
        "parentPageUrl": "../../material/sanremo",
        "previewUrl": "../tkan/sanremo/sanremo-388.jpg",
        "imgUrl": "../../tkan/sanremo/sanremo-388-big.jpg",
        "img": "../tkan/sanremo/sanremo-388.jpg",
        "imgAlt": "sanremo 388",
        "imgTitle": "sanremo 388",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "393",
        "name": "sanremo",
        "h1": "Sanremo 393",
        "nameId": "sanremo-393",
        "samplePageUrl": "../samples/sanremo/sanremo-393",
        "parentPageUrl": "../../material/sanremo",
        "previewUrl": "../tkan/sanremo/sanremo-393.jpg",
        "imgUrl": "../../tkan/sanremo/sanremo-393-big.jpg",
        "img": "../tkan/sanremo/sanremo-393.jpg",
        "imgAlt": "sanremo 393",
        "imgTitle": "sanremo 393",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "493",
        "name": "sanremo",
        "h1": "Sanremo 493",
        "nameId": "sanremo-493",
        "samplePageUrl": "../samples/sanremo/sanremo-493",
        "parentPageUrl": "../../material/sanremo",
        "previewUrl": "../tkan/sanremo/sanremo-493.jpg",
        "imgUrl": "../../tkan/sanremo/sanremo-493-big.jpg",
        "img": "../tkan/sanremo/sanremo-493.jpg",
        "imgAlt": "sanremo 493",
        "imgTitle": "sanremo 493",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "520",
        "name": "sanremo",
        "h1": "Sanremo 520",
        "nameId": "sanremo-520",
        "samplePageUrl": "../samples/sanremo/sanremo-520",
        "parentPageUrl": "../../material/sanremo",
        "previewUrl": "../tkan/sanremo/sanremo-520.jpg",
        "imgUrl": "../../tkan/sanremo/sanremo-520-big.jpg",
        "img": "../tkan/sanremo/sanremo-520.jpg",
        "imgAlt": "sanremo 520",
        "imgTitle": "sanremo 520",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "657",
        "name": "sanremo",
        "h1": "Sanremo 657",
        "nameId": "sanremo-657",
        "samplePageUrl": "../samples/sanremo/sanremo-657",
        "parentPageUrl": "../../material/sanremo",
        "previewUrl": "../tkan/sanremo/sanremo-657.jpg",
        "imgUrl": "../../tkan/sanremo/sanremo-657-big.jpg",
        "img": "../tkan/sanremo/sanremo-657.jpg",
        "imgAlt": "sanremo 657",
        "imgTitle": "sanremo 657",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "696",
        "name": "sanremo",
        "h1": "Sanremo 696",
        "nameId": "sanremo-696",
        "samplePageUrl": "../samples/sanremo/sanremo-696",
        "parentPageUrl": "../../material/sanremo",
        "previewUrl": "../tkan/sanremo/sanremo-696.jpg",
        "imgUrl": "../../tkan/sanremo/sanremo-696-big.jpg",
        "img": "../tkan/sanremo/sanremo-696.jpg",
        "imgAlt": "sanremo 696",
        "imgTitle": "sanremo 696",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "750",
        "name": "sanremo",
        "h1": "Sanremo 750",
        "nameId": "sanremo-750",
        "samplePageUrl": "../samples/sanremo/sanremo-750",
        "parentPageUrl": "../../material/sanremo",
        "previewUrl": "../tkan/sanremo/sanremo-750.jpg",
        "imgUrl": "../../tkan/sanremo/sanremo-750-big.jpg",
        "img": "../tkan/sanremo/sanremo-750.jpg",
        "imgAlt": "sanremo 750",
        "imgTitle": "sanremo 750",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "795",
        "name": "sanremo",
        "h1": "Sanremo 795",
        "nameId": "sanremo-795",
        "samplePageUrl": "../samples/sanremo/sanremo-795",
        "parentPageUrl": "../../material/sanremo",
        "previewUrl": "../tkan/sanremo/sanremo-795.jpg",
        "imgUrl": "../../tkan/sanremo/sanremo-795-big.jpg",
        "img": "../tkan/sanremo/sanremo-795.jpg",
        "imgAlt": "sanremo 795",
        "imgTitle": "sanremo 795",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "894",
        "name": "sanremo",
        "h1": "Sanremo 894",
        "nameId": "sanremo-894",
        "samplePageUrl": "../samples/sanremo/sanremo-894",
        "parentPageUrl": "../../material/sanremo",
        "previewUrl": "../tkan/sanremo/sanremo-894.jpg",
        "imgUrl": "../../tkan/sanremo/sanremo-894-big.jpg",
        "img": "../tkan/sanremo/sanremo-894.jpg",
        "imgAlt": "sanremo 894",
        "imgTitle": "sanremo 894",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "900",
        "name": "sanremo",
        "h1": "Sanremo 900",
        "nameId": "sanremo-900",
        "samplePageUrl": "../samples/sanremo/sanremo-900",
        "parentPageUrl": "../../material/sanremo",
        "previewUrl": "../tkan/sanremo/sanremo-900.jpg",
        "imgUrl": "../../tkan/sanremo/sanremo-900-big.jpg",
        "img": "../tkan/sanremo/sanremo-900.jpg",
        "imgAlt": "sanremo 900",
        "imgTitle": "sanremo 900",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "968",
        "name": "sanremo",
        "h1": "Sanremo 968",
        "nameId": "sanremo-968",
        "samplePageUrl": "../samples/sanremo/sanremo-968",
        "parentPageUrl": "../../material/sanremo",
        "previewUrl": "../tkan/sanremo/sanremo-968.jpg",
        "imgUrl": "../../tkan/sanremo/sanremo-968-big.jpg",
        "img": "../tkan/sanremo/sanremo-968.jpg",
        "imgAlt": "sanremo 968",
        "imgTitle": "sanremo 968",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "994",
        "name": "sanremo",
        "h1": "Sanremo 994",
        "nameId": "sanremo-994",
        "samplePageUrl": "../samples/sanremo/sanremo-994",
        "parentPageUrl": "../../material/sanremo",
        "previewUrl": "../tkan/sanremo/sanremo-994.jpg",
        "imgUrl": "../../tkan/sanremo/sanremo-994-big.jpg",
        "img": "../tkan/sanremo/sanremo-994.jpg",
        "imgAlt": "sanremo 994",
        "imgTitle": "sanremo 994",
        "srcset": "",
        "size": ""
      }
    ],
    "previewImg": "../tkan/sanremo/preview.jpg",
    "status": true
  },
  {
    "id": "27",
    "nameId": "madagaskar",
    "caption": "Madagaskar",
    "pageUrl": "madagaskar",
    "cost": 650,
    "unit": "погонный метр",
    "seller": "Поставщик материала компания <a href=\"http://www.souz-m.ru\" target=\"_blank\"> СОЮЗ-М</a>",
    "country": "Китай",
    "description": "<p>Однотонная рогожка с мелким переплетением. Простая и прочная ткань.</p><p>Несмотря на общую однотонность ткани, нити материала прокрашены в разной степени. Поэтому ткань смотрится несколько иначе, чем просто однотонки.</a>.",
    "martindale": "70000",
    "content": [
      "полиэстер-100%"
    ],
    "typeEng": "ROG",
    "typeRus": "Рогожка",
    "rapport": "0",
    "overlock": "1",
    "sample": [
      {
        "caption": "01",
        "name": "madagaskar",
        "h1": "Madagaskar 01",
        "nameId": "madagaskar-01",
        "samplePageUrl": "../samples/madagaskar/madagaskar-01",
        "parentPageUrl": "../../material/madagaskar",
        "previewUrl": "../tkan/madagaskar/madagaskar-01.jpg",
        "imgUrl": "../../tkan/madagaskar/madagaskar-01-big.jpg",
        "img": "../tkan/madagaskar/madagaskar-01.jpg",
        "imgAlt": "madagaskar 01",
        "imgTitle": "madagaskar 01",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "02",
        "name": "madagaskar",
        "h1": "Madagaskar 02",
        "nameId": "madagaskar-02",
        "samplePageUrl": "../samples/madagaskar/madagaskar-02",
        "parentPageUrl": "../../material/madagaskar",
        "previewUrl": "../tkan/madagaskar/madagaskar-02.jpg",
        "imgUrl": "../../tkan/madagaskar/madagaskar-02-big.jpg",
        "img": "../tkan/madagaskar/madagaskar-02.jpg",
        "imgAlt": "madagaskar 02",
        "imgTitle": "madagaskar 02",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "03",
        "name": "madagaskar",
        "h1": "Madagaskar 03",
        "nameId": "madagaskar-03",
        "samplePageUrl": "../samples/madagaskar/madagaskar-03",
        "parentPageUrl": "../../material/madagaskar",
        "previewUrl": "../tkan/madagaskar/madagaskar-03.jpg",
        "imgUrl": "../../tkan/madagaskar/madagaskar-03-big.jpg",
        "img": "../tkan/madagaskar/madagaskar-03.jpg",
        "imgAlt": "madagaskar 03",
        "imgTitle": "madagaskar 03",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "04",
        "name": "madagaskar",
        "h1": "Madagaskar 04",
        "nameId": "madagaskar-04",
        "samplePageUrl": "../samples/madagaskar/madagaskar-04",
        "parentPageUrl": "../../material/madagaskar",
        "previewUrl": "../tkan/madagaskar/madagaskar-04.jpg",
        "imgUrl": "../../tkan/madagaskar/madagaskar-04-big.jpg",
        "img": "../tkan/madagaskar/madagaskar-04.jpg",
        "imgAlt": "madagaskar 04",
        "imgTitle": "madagaskar 04",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "05",
        "name": "madagaskar",
        "h1": "Madagaskar 05",
        "nameId": "madagaskar-05",
        "samplePageUrl": "../samples/madagaskar/madagaskar-05",
        "parentPageUrl": "../../material/madagaskar",
        "previewUrl": "../tkan/madagaskar/madagaskar-05.jpg",
        "imgUrl": "../../tkan/madagaskar/madagaskar-05-big.jpg",
        "img": "../tkan/madagaskar/madagaskar-05.jpg",
        "imgAlt": "madagaskar 05",
        "imgTitle": "madagaskar 05",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "06",
        "name": "madagaskar",
        "h1": "Madagaskar 06",
        "nameId": "madagaskar-06",
        "samplePageUrl": "../samples/madagaskar/madagaskar-06",
        "parentPageUrl": "../../material/madagaskar",
        "previewUrl": "../tkan/madagaskar/madagaskar-06.jpg",
        "imgUrl": "../../tkan/madagaskar/madagaskar-06-big.jpg",
        "img": "../tkan/madagaskar/madagaskar-06.jpg",
        "imgAlt": "madagaskar 06",
        "imgTitle": "madagaskar 06",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "07",
        "name": "madagaskar",
        "h1": "Madagaskar 07",
        "nameId": "madagaskar-07",
        "samplePageUrl": "../samples/madagaskar/madagaskar-07",
        "parentPageUrl": "../../material/madagaskar",
        "previewUrl": "../tkan/madagaskar/madagaskar-07.jpg",
        "imgUrl": "../../tkan/madagaskar/madagaskar-07-big.jpg",
        "img": "../tkan/madagaskar/madagaskar-07.jpg",
        "imgAlt": "madagaskar 07",
        "imgTitle": "madagaskar 07",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "08",
        "name": "madagaskar",
        "h1": "Madagaskar 08",
        "nameId": "madagaskar-08",
        "samplePageUrl": "../samples/madagaskar/madagaskar-08",
        "parentPageUrl": "../../material/madagaskar",
        "previewUrl": "../tkan/madagaskar/madagaskar-08.jpg",
        "imgUrl": "../../tkan/madagaskar/madagaskar-08-big.jpg",
        "img": "../tkan/madagaskar/madagaskar-08.jpg",
        "imgAlt": "madagaskar 08",
        "imgTitle": "madagaskar 08",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "09",
        "name": "madagaskar",
        "h1": "Madagaskar 09",
        "nameId": "madagaskar-09",
        "samplePageUrl": "../samples/madagaskar/madagaskar-09",
        "parentPageUrl": "../../material/madagaskar",
        "previewUrl": "../tkan/madagaskar/madagaskar-09.jpg",
        "imgUrl": "../../tkan/madagaskar/madagaskar-09-big.jpg",
        "img": "../tkan/madagaskar/madagaskar-09.jpg",
        "imgAlt": "madagaskar 09",
        "imgTitle": "madagaskar 09",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "11",
        "name": "madagaskar",
        "h1": "Madagaskar 11",
        "nameId": "madagaskar-11",
        "samplePageUrl": "../samples/madagaskar/madagaskar-11",
        "parentPageUrl": "../../material/madagaskar",
        "previewUrl": "../tkan/madagaskar/madagaskar-11.jpg",
        "imgUrl": "../../tkan/madagaskar/madagaskar-11-big.jpg",
        "img": "../tkan/madagaskar/madagaskar-11.jpg",
        "imgAlt": "madagaskar 11",
        "imgTitle": "madagaskar 11",
        "srcset": "",
        "size": ""
      }
    ],
    "previewImg": "../tkan/madagaskar/preview.jpg",
    "status": true
  },
  {
    "id": "33",
    "nameId": "velutto",
    "caption": "Velutto",
    "pageUrl": "velutto",
    "cost": 570,
    "unit": "погонный метр",
    "seller": "Поставщик материала компания <a href=\"http://www.souz-m.ru\" target=\"_blank\"> СОЮЗ-М</a>",
    "country": "Китай",
    "description": "<p>Недорогая ворсовая ткань. Бюджетное решение для желающих иметь мебель в бархатной обивке. Конечно, это не бархат. Но сильно на него похож. Так же как и на бархате, после касания рукой остаются разводы.  </p>",
    "martindale": "60000",
    "content": [
      "полиэстер-100%"
    ],
    "typeEng": "VEL",
    "typeRus": "Велюр",
    "rapport": "0",
    "overlock": "1",
    "sample": [
      {
        "caption": "1",
        "name": "velutto",
        "h1": "Velutto 1",
        "nameId": "velutto-1",
        "samplePageUrl": "../samples/velutto/velutto-1",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-1.jpg",
        "imgUrl": "../../tkan/velutto/velutto-1-big.jpg",
        "img": "../tkan/velutto/velutto-1.jpg",
        "imgAlt": "velutto 1",
        "imgTitle": "velutto 1",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "2",
        "name": "velutto",
        "h1": "Velutto 2",
        "nameId": "velutto-2",
        "samplePageUrl": "../samples/velutto/velutto-2",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-2.jpg",
        "imgUrl": "../../tkan/velutto/velutto-2-big.jpg",
        "img": "../tkan/velutto/velutto-2.jpg",
        "imgAlt": "velutto 2",
        "imgTitle": "velutto 2",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "3",
        "name": "velutto",
        "h1": "Velutto 3",
        "nameId": "velutto-3",
        "samplePageUrl": "../samples/velutto/velutto-3",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-3.jpg",
        "imgUrl": "../../tkan/velutto/velutto-3-big.jpg",
        "img": "../tkan/velutto/velutto-3.jpg",
        "imgAlt": "velutto 3",
        "imgTitle": "velutto 3",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "4",
        "name": "velutto",
        "h1": "Velutto 4",
        "nameId": "velutto-4",
        "samplePageUrl": "../samples/velutto/velutto-4",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-4.jpg",
        "imgUrl": "../../tkan/velutto/velutto-4-big.jpg",
        "img": "../tkan/velutto/velutto-4.jpg",
        "imgAlt": "velutto 4",
        "imgTitle": "velutto 4",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "5",
        "name": "velutto",
        "h1": "Velutto 5",
        "nameId": "velutto-5",
        "samplePageUrl": "../samples/velutto/velutto-5",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-5.jpg",
        "imgUrl": "../../tkan/velutto/velutto-5-big.jpg",
        "img": "../tkan/velutto/velutto-5.jpg",
        "imgAlt": "velutto 5",
        "imgTitle": "velutto 5",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "6",
        "name": "velutto",
        "h1": "Velutto 6",
        "nameId": "velutto-6",
        "samplePageUrl": "../samples/velutto/velutto-6",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-6.jpg",
        "imgUrl": "../../tkan/velutto/velutto-6-big.jpg",
        "img": "../tkan/velutto/velutto-6.jpg",
        "imgAlt": "velutto 6",
        "imgTitle": "velutto 6",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "7",
        "name": "velutto",
        "h1": "Velutto 7",
        "nameId": "velutto-7",
        "samplePageUrl": "../samples/velutto/velutto-7",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-7.jpg",
        "imgUrl": "../../tkan/velutto/velutto-7-big.jpg",
        "img": "../tkan/velutto/velutto-7.jpg",
        "imgAlt": "velutto 7",
        "imgTitle": "velutto 7",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "8",
        "name": "velutto",
        "h1": "Velutto 8",
        "nameId": "velutto-8",
        "samplePageUrl": "../samples/velutto/velutto-8",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-8.jpg",
        "imgUrl": "../../tkan/velutto/velutto-8-big.jpg",
        "img": "../tkan/velutto/velutto-8.jpg",
        "imgAlt": "velutto 8",
        "imgTitle": "velutto 8",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "9",
        "name": "velutto",
        "h1": "Velutto 9",
        "nameId": "velutto-9",
        "samplePageUrl": "../samples/velutto/velutto-9",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-9.jpg",
        "imgUrl": "../../tkan/velutto/velutto-9-big.jpg",
        "img": "../tkan/velutto/velutto-9.jpg",
        "imgAlt": "velutto 9",
        "imgTitle": "velutto 9",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "10",
        "name": "velutto",
        "h1": "Velutto 10",
        "nameId": "velutto-10",
        "samplePageUrl": "../samples/velutto/velutto-10",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-10.jpg",
        "imgUrl": "../../tkan/velutto/velutto-10-big.jpg",
        "img": "../tkan/velutto/velutto-10.jpg",
        "imgAlt": "velutto 10",
        "imgTitle": "velutto 10",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "11",
        "name": "velutto",
        "h1": "Velutto 11",
        "nameId": "velutto-11",
        "samplePageUrl": "../samples/velutto/velutto-11",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-11.jpg",
        "imgUrl": "../../tkan/velutto/velutto-11-big.jpg",
        "img": "../tkan/velutto/velutto-11.jpg",
        "imgAlt": "velutto 11",
        "imgTitle": "velutto 11",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "12",
        "name": "velutto",
        "h1": "Velutto 12",
        "nameId": "velutto-12",
        "samplePageUrl": "../samples/velutto/velutto-12",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-12.jpg",
        "imgUrl": "../../tkan/velutto/velutto-12-big.jpg",
        "img": "../tkan/velutto/velutto-12.jpg",
        "imgAlt": "velutto 12",
        "imgTitle": "velutto 12",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "13",
        "name": "velutto",
        "h1": "Velutto 13",
        "nameId": "velutto-13",
        "samplePageUrl": "../samples/velutto/velutto-13",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-13.jpg",
        "imgUrl": "../../tkan/velutto/velutto-13-big.jpg",
        "img": "../tkan/velutto/velutto-13.jpg",
        "imgAlt": "velutto 13",
        "imgTitle": "velutto 13",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "14",
        "name": "velutto",
        "h1": "Velutto 14",
        "nameId": "velutto-14",
        "samplePageUrl": "../samples/velutto/velutto-14",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-14.jpg",
        "imgUrl": "../../tkan/velutto/velutto-14-big.jpg",
        "img": "../tkan/velutto/velutto-14.jpg",
        "imgAlt": "velutto 14",
        "imgTitle": "velutto 14",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "15",
        "name": "velutto",
        "h1": "Velutto 15",
        "nameId": "velutto-15",
        "samplePageUrl": "../samples/velutto/velutto-15",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-15.jpg",
        "imgUrl": "../../tkan/velutto/velutto-15-big.jpg",
        "img": "../tkan/velutto/velutto-15.jpg",
        "imgAlt": "velutto 15",
        "imgTitle": "velutto 15",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "16",
        "name": "velutto",
        "h1": "Velutto 16",
        "nameId": "velutto-16",
        "samplePageUrl": "../samples/velutto/velutto-16",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-16.jpg",
        "imgUrl": "../../tkan/velutto/velutto-16-big.jpg",
        "img": "../tkan/velutto/velutto-16.jpg",
        "imgAlt": "velutto 16",
        "imgTitle": "velutto 16",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "17",
        "name": "velutto",
        "h1": "Velutto 17",
        "nameId": "velutto-17",
        "samplePageUrl": "../samples/velutto/velutto-17",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-17.jpg",
        "imgUrl": "../../tkan/velutto/velutto-17-big.jpg",
        "img": "../tkan/velutto/velutto-17.jpg",
        "imgAlt": "velutto 17",
        "imgTitle": "velutto 17",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "18",
        "name": "velutto",
        "h1": "Velutto 18",
        "nameId": "velutto-18",
        "samplePageUrl": "../samples/velutto/velutto-18",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-18.jpg",
        "imgUrl": "../../tkan/velutto/velutto-18-big.jpg",
        "img": "../tkan/velutto/velutto-18.jpg",
        "imgAlt": "velutto 18",
        "imgTitle": "velutto 18",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "19",
        "name": "velutto",
        "h1": "Velutto 19",
        "nameId": "velutto-19",
        "samplePageUrl": "../samples/velutto/velutto-19",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-19.jpg",
        "imgUrl": "../../tkan/velutto/velutto-19-big.jpg",
        "img": "../tkan/velutto/velutto-19.jpg",
        "imgAlt": "velutto 19",
        "imgTitle": "velutto 19",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "20",
        "name": "velutto",
        "h1": "Velutto 20",
        "nameId": "velutto-20",
        "samplePageUrl": "../samples/velutto/velutto-20",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-20.jpg",
        "imgUrl": "../../tkan/velutto/velutto-20-big.jpg",
        "img": "../tkan/velutto/velutto-20.jpg",
        "imgAlt": "velutto 20",
        "imgTitle": "velutto 20",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "21",
        "name": "velutto",
        "h1": "Velutto 21",
        "nameId": "velutto-21",
        "samplePageUrl": "../samples/velutto/velutto-21",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-21.jpg",
        "imgUrl": "../../tkan/velutto/velutto-21-big.jpg",
        "img": "../tkan/velutto/velutto-21.jpg",
        "imgAlt": "velutto 21",
        "imgTitle": "velutto 21",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "22",
        "name": "velutto",
        "h1": "Velutto 22",
        "nameId": "velutto-22",
        "samplePageUrl": "../samples/velutto/velutto-22",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-22.jpg",
        "imgUrl": "../../tkan/velutto/velutto-22-big.jpg",
        "img": "../tkan/velutto/velutto-22.jpg",
        "imgAlt": "velutto 22",
        "imgTitle": "velutto 22",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "23",
        "name": "velutto",
        "h1": "Velutto 23",
        "nameId": "velutto-23",
        "samplePageUrl": "../samples/velutto/velutto-23",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-23.jpg",
        "imgUrl": "../../tkan/velutto/velutto-23-big.jpg",
        "img": "../tkan/velutto/velutto-23.jpg",
        "imgAlt": "velutto 23",
        "imgTitle": "velutto 23",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "24",
        "name": "velutto",
        "h1": "Velutto 24",
        "nameId": "velutto-24",
        "samplePageUrl": "../samples/velutto/velutto-24",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-24.jpg",
        "imgUrl": "../../tkan/velutto/velutto-24-big.jpg",
        "img": "../tkan/velutto/velutto-24.jpg",
        "imgAlt": "velutto 24",
        "imgTitle": "velutto 24",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "25",
        "name": "velutto",
        "h1": "Velutto 25",
        "nameId": "velutto-25",
        "samplePageUrl": "../samples/velutto/velutto-25",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-25.jpg",
        "imgUrl": "../../tkan/velutto/velutto-25-big.jpg",
        "img": "../tkan/velutto/velutto-25.jpg",
        "imgAlt": "velutto 25",
        "imgTitle": "velutto 25",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "26",
        "name": "velutto",
        "h1": "Velutto 26",
        "nameId": "velutto-26",
        "samplePageUrl": "../samples/velutto/velutto-26",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-26.jpg",
        "imgUrl": "../../tkan/velutto/velutto-26-big.jpg",
        "img": "../tkan/velutto/velutto-26.jpg",
        "imgAlt": "velutto 26",
        "imgTitle": "velutto 26",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "27",
        "name": "velutto",
        "h1": "Velutto 27",
        "nameId": "velutto-27",
        "samplePageUrl": "../samples/velutto/velutto-27",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-27.jpg",
        "imgUrl": "../../tkan/velutto/velutto-27-big.jpg",
        "img": "../tkan/velutto/velutto-27.jpg",
        "imgAlt": "velutto 27",
        "imgTitle": "velutto 27",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "28",
        "name": "velutto",
        "h1": "Velutto 28",
        "nameId": "velutto-28",
        "samplePageUrl": "../samples/velutto/velutto-28",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-28.jpg",
        "imgUrl": "../../tkan/velutto/velutto-28-big.jpg",
        "img": "../tkan/velutto/velutto-28.jpg",
        "imgAlt": "velutto 28",
        "imgTitle": "velutto 28",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "29",
        "name": "velutto",
        "h1": "Velutto 29",
        "nameId": "velutto-29",
        "samplePageUrl": "../samples/velutto/velutto-29",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-29.jpg",
        "imgUrl": "../../tkan/velutto/velutto-29-big.jpg",
        "img": "../tkan/velutto/velutto-29.jpg",
        "imgAlt": "velutto 29",
        "imgTitle": "velutto 29",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "30",
        "name": "velutto",
        "h1": "Velutto 30",
        "nameId": "velutto-30",
        "samplePageUrl": "../samples/velutto/velutto-30",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-30.jpg",
        "imgUrl": "../../tkan/velutto/velutto-30-big.jpg",
        "img": "../tkan/velutto/velutto-30.jpg",
        "imgAlt": "velutto 30",
        "imgTitle": "velutto 30",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "31",
        "name": "velutto",
        "h1": "Velutto 31",
        "nameId": "velutto-31",
        "samplePageUrl": "../samples/velutto/velutto-31",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-31.jpg",
        "imgUrl": "../../tkan/velutto/velutto-31-big.jpg",
        "img": "../tkan/velutto/velutto-31.jpg",
        "imgAlt": "velutto 31",
        "imgTitle": "velutto 31",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "32",
        "name": "velutto",
        "h1": "Velutto 32",
        "nameId": "velutto-32",
        "samplePageUrl": "../samples/velutto/velutto-32",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-32.jpg",
        "imgUrl": "../../tkan/velutto/velutto-32-big.jpg",
        "img": "../tkan/velutto/velutto-32.jpg",
        "imgAlt": "velutto 32",
        "imgTitle": "velutto 32",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "33",
        "name": "velutto",
        "h1": "Velutto 33",
        "nameId": "velutto-33",
        "samplePageUrl": "../samples/velutto/velutto-33",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-33.jpg",
        "imgUrl": "../../tkan/velutto/velutto-33-big.jpg",
        "img": "../tkan/velutto/velutto-33.jpg",
        "imgAlt": "velutto 33",
        "imgTitle": "velutto 33",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "34",
        "name": "velutto",
        "h1": "Velutto 34",
        "nameId": "velutto-34",
        "samplePageUrl": "../samples/velutto/velutto-34",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-34.jpg",
        "imgUrl": "../../tkan/velutto/velutto-34-big.jpg",
        "img": "../tkan/velutto/velutto-34.jpg",
        "imgAlt": "velutto 34",
        "imgTitle": "velutto 34",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "35",
        "name": "velutto",
        "h1": "Velutto 35",
        "nameId": "velutto-35",
        "samplePageUrl": "../samples/velutto/velutto-35",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-35.jpg",
        "imgUrl": "../../tkan/velutto/velutto-35-big.jpg",
        "img": "../tkan/velutto/velutto-35.jpg",
        "imgAlt": "velutto 35",
        "imgTitle": "velutto 35",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "36",
        "name": "velutto",
        "h1": "Velutto 36",
        "nameId": "velutto-36",
        "samplePageUrl": "../samples/velutto/velutto-36",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-36.jpg",
        "imgUrl": "../../tkan/velutto/velutto-36-big.jpg",
        "img": "../tkan/velutto/velutto-36.jpg",
        "imgAlt": "velutto 36",
        "imgTitle": "velutto 36",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "37",
        "name": "velutto",
        "h1": "Velutto 37",
        "nameId": "velutto-37",
        "samplePageUrl": "../samples/velutto/velutto-37",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-37.jpg",
        "imgUrl": "../../tkan/velutto/velutto-37-big.jpg",
        "img": "../tkan/velutto/velutto-37.jpg",
        "imgAlt": "velutto 37",
        "imgTitle": "velutto 37",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "38",
        "name": "velutto",
        "h1": "Velutto 38",
        "nameId": "velutto-38",
        "samplePageUrl": "../samples/velutto/velutto-38",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-38.jpg",
        "imgUrl": "../../tkan/velutto/velutto-38-big.jpg",
        "img": "../tkan/velutto/velutto-38.jpg",
        "imgAlt": "velutto 38",
        "imgTitle": "velutto 38",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "39",
        "name": "velutto",
        "h1": "Velutto 39",
        "nameId": "velutto-39",
        "samplePageUrl": "../samples/velutto/velutto-39",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-39.jpg",
        "imgUrl": "../../tkan/velutto/velutto-39-big.jpg",
        "img": "../tkan/velutto/velutto-39.jpg",
        "imgAlt": "velutto 39",
        "imgTitle": "velutto 39",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "40",
        "name": "velutto",
        "h1": "Velutto 40",
        "nameId": "velutto-40",
        "samplePageUrl": "../samples/velutto/velutto-40",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-40.jpg",
        "imgUrl": "../../tkan/velutto/velutto-40-big.jpg",
        "img": "../tkan/velutto/velutto-40.jpg",
        "imgAlt": "velutto 40",
        "imgTitle": "velutto 40",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "41",
        "name": "velutto",
        "h1": "Velutto 41",
        "nameId": "velutto-41",
        "samplePageUrl": "../samples/velutto/velutto-41",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-41.jpg",
        "imgUrl": "../../tkan/velutto/velutto-41-big.jpg",
        "img": "../tkan/velutto/velutto-41.jpg",
        "imgAlt": "velutto 41",
        "imgTitle": "velutto 41",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "42",
        "name": "velutto",
        "h1": "Velutto 42",
        "nameId": "velutto-42",
        "samplePageUrl": "../samples/velutto/velutto-42",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-42.jpg",
        "imgUrl": "../../tkan/velutto/velutto-42-big.jpg",
        "img": "../tkan/velutto/velutto-42.jpg",
        "imgAlt": "velutto 42",
        "imgTitle": "velutto 42",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "43",
        "name": "velutto",
        "h1": "Velutto 43",
        "nameId": "velutto-43",
        "samplePageUrl": "../samples/velutto/velutto-43",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-43.jpg",
        "imgUrl": "../../tkan/velutto/velutto-43-big.jpg",
        "img": "../tkan/velutto/velutto-43.jpg",
        "imgAlt": "velutto 43",
        "imgTitle": "velutto 43",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "44",
        "name": "velutto",
        "h1": "Velutto 44",
        "nameId": "velutto-44",
        "samplePageUrl": "../samples/velutto/velutto-44",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-44.jpg",
        "imgUrl": "../../tkan/velutto/velutto-44-big.jpg",
        "img": "../tkan/velutto/velutto-44.jpg",
        "imgAlt": "velutto 44",
        "imgTitle": "velutto 44",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "45",
        "name": "velutto",
        "h1": "Velutto 45",
        "nameId": "velutto-45",
        "samplePageUrl": "../samples/velutto/velutto-45",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-45.jpg",
        "imgUrl": "../../tkan/velutto/velutto-45-big.jpg",
        "img": "../tkan/velutto/velutto-45.jpg",
        "imgAlt": "velutto 45",
        "imgTitle": "velutto 45",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "46",
        "name": "velutto",
        "h1": "Velutto 46",
        "nameId": "velutto-46",
        "samplePageUrl": "../samples/velutto/velutto-46",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-46.jpg",
        "imgUrl": "../../tkan/velutto/velutto-46-big.jpg",
        "img": "../tkan/velutto/velutto-46.jpg",
        "imgAlt": "velutto 46",
        "imgTitle": "velutto 46",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "47",
        "name": "velutto",
        "h1": "Velutto 47",
        "nameId": "velutto-47",
        "samplePageUrl": "../samples/velutto/velutto-47",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-47.jpg",
        "imgUrl": "../../tkan/velutto/velutto-47-big.jpg",
        "img": "../tkan/velutto/velutto-47.jpg",
        "imgAlt": "velutto 47",
        "imgTitle": "velutto 47",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "48",
        "name": "velutto",
        "h1": "Velutto 48",
        "nameId": "velutto-48",
        "samplePageUrl": "../samples/velutto/velutto-48",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-48.jpg",
        "imgUrl": "../../tkan/velutto/velutto-48-big.jpg",
        "img": "../tkan/velutto/velutto-48.jpg",
        "imgAlt": "velutto 48",
        "imgTitle": "velutto 48",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "49",
        "name": "velutto",
        "h1": "Velutto 49",
        "nameId": "velutto-49",
        "samplePageUrl": "../samples/velutto/velutto-49",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-49.jpg",
        "imgUrl": "../../tkan/velutto/velutto-49-big.jpg",
        "img": "../tkan/velutto/velutto-49.jpg",
        "imgAlt": "velutto 49",
        "imgTitle": "velutto 49",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "50",
        "name": "velutto",
        "h1": "Velutto 50",
        "nameId": "velutto-50",
        "samplePageUrl": "../samples/velutto/velutto-50",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-50.jpg",
        "imgUrl": "../../tkan/velutto/velutto-50-big.jpg",
        "img": "../tkan/velutto/velutto-50.jpg",
        "imgAlt": "velutto 50",
        "imgTitle": "velutto 50",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "51",
        "name": "velutto",
        "h1": "Velutto 51",
        "nameId": "velutto-51",
        "samplePageUrl": "../samples/velutto/velutto-51",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-51.jpg",
        "imgUrl": "../../tkan/velutto/velutto-51-big.jpg",
        "img": "../tkan/velutto/velutto-51.jpg",
        "imgAlt": "velutto 51",
        "imgTitle": "velutto 51",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "52",
        "name": "velutto",
        "h1": "Velutto 52",
        "nameId": "velutto-52",
        "samplePageUrl": "../samples/velutto/velutto-52",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-52.jpg",
        "imgUrl": "../../tkan/velutto/velutto-52-big.jpg",
        "img": "../tkan/velutto/velutto-52.jpg",
        "imgAlt": "velutto 52",
        "imgTitle": "velutto 52",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "53",
        "name": "velutto",
        "h1": "Velutto 53",
        "nameId": "velutto-53",
        "samplePageUrl": "../samples/velutto/velutto-53",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-53.jpg",
        "imgUrl": "../../tkan/velutto/velutto-53-big.jpg",
        "img": "../tkan/velutto/velutto-53.jpg",
        "imgAlt": "velutto 53",
        "imgTitle": "velutto 53",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "54",
        "name": "velutto",
        "h1": "Velutto 54",
        "nameId": "velutto-54",
        "samplePageUrl": "../samples/velutto/velutto-54",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-54.jpg",
        "imgUrl": "../../tkan/velutto/velutto-54-big.jpg",
        "img": "../tkan/velutto/velutto-54.jpg",
        "imgAlt": "velutto 54",
        "imgTitle": "velutto 54",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "55",
        "name": "velutto",
        "h1": "Velutto 55",
        "nameId": "velutto-55",
        "samplePageUrl": "../samples/velutto/velutto-55",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-55.jpg",
        "imgUrl": "../../tkan/velutto/velutto-55-big.jpg",
        "img": "../tkan/velutto/velutto-55.jpg",
        "imgAlt": "velutto 55",
        "imgTitle": "velutto 55",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "56",
        "name": "velutto",
        "h1": "Velutto 56",
        "nameId": "velutto-56",
        "samplePageUrl": "../samples/velutto/velutto-56",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-56.jpg",
        "imgUrl": "../../tkan/velutto/velutto-56-big.jpg",
        "img": "../tkan/velutto/velutto-56.jpg",
        "imgAlt": "velutto 56",
        "imgTitle": "velutto 56",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "57",
        "name": "velutto",
        "h1": "Velutto 57",
        "nameId": "velutto-57",
        "samplePageUrl": "../samples/velutto/velutto-57",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-57.jpg",
        "imgUrl": "../../tkan/velutto/velutto-57-big.jpg",
        "img": "../tkan/velutto/velutto-57.jpg",
        "imgAlt": "velutto 57",
        "imgTitle": "velutto 57",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "58",
        "name": "velutto",
        "h1": "Velutto 58",
        "nameId": "velutto-58",
        "samplePageUrl": "../samples/velutto/velutto-58",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-58.jpg",
        "imgUrl": "../../tkan/velutto/velutto-58-big.jpg",
        "img": "../tkan/velutto/velutto-58.jpg",
        "imgAlt": "velutto 58",
        "imgTitle": "velutto 58",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "59",
        "name": "velutto",
        "h1": "Velutto 59",
        "nameId": "velutto-59",
        "samplePageUrl": "../samples/velutto/velutto-59",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-59.jpg",
        "imgUrl": "../../tkan/velutto/velutto-59-big.jpg",
        "img": "../tkan/velutto/velutto-59.jpg",
        "imgAlt": "velutto 59",
        "imgTitle": "velutto 59",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "60",
        "name": "velutto",
        "h1": "Velutto 60",
        "nameId": "velutto-60",
        "samplePageUrl": "../samples/velutto/velutto-60",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-60.jpg",
        "imgUrl": "../../tkan/velutto/velutto-60-big.jpg",
        "img": "../tkan/velutto/velutto-60.jpg",
        "imgAlt": "velutto 60",
        "imgTitle": "velutto 60",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "61",
        "name": "velutto",
        "h1": "Velutto 61",
        "nameId": "velutto-61",
        "samplePageUrl": "../samples/velutto/velutto-61",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-61.jpg",
        "imgUrl": "../../tkan/velutto/velutto-61-big.jpg",
        "img": "../tkan/velutto/velutto-61.jpg",
        "imgAlt": "velutto 61",
        "imgTitle": "velutto 61",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "62",
        "name": "velutto",
        "h1": "Velutto 62",
        "nameId": "velutto-62",
        "samplePageUrl": "../samples/velutto/velutto-62",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-62.jpg",
        "imgUrl": "../../tkan/velutto/velutto-62-big.jpg",
        "img": "../tkan/velutto/velutto-62.jpg",
        "imgAlt": "velutto 62",
        "imgTitle": "velutto 62",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "63",
        "name": "velutto",
        "h1": "Velutto 63",
        "nameId": "velutto-63",
        "samplePageUrl": "../samples/velutto/velutto-63",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-63.jpg",
        "imgUrl": "../../tkan/velutto/velutto-63-big.jpg",
        "img": "../tkan/velutto/velutto-63.jpg",
        "imgAlt": "velutto 63",
        "imgTitle": "velutto 63",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "64",
        "name": "velutto",
        "h1": "Velutto 64",
        "nameId": "velutto-64",
        "samplePageUrl": "../samples/velutto/velutto-64",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-64.jpg",
        "imgUrl": "../../tkan/velutto/velutto-64-big.jpg",
        "img": "../tkan/velutto/velutto-64.jpg",
        "imgAlt": "velutto 64",
        "imgTitle": "velutto 64",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "65",
        "name": "velutto",
        "h1": "Velutto 65",
        "nameId": "velutto-65",
        "samplePageUrl": "../samples/velutto/velutto-65",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-65.jpg",
        "imgUrl": "../../tkan/velutto/velutto-65-big.jpg",
        "img": "../tkan/velutto/velutto-65.jpg",
        "imgAlt": "velutto 65",
        "imgTitle": "velutto 65",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "66",
        "name": "velutto",
        "h1": "Velutto 66",
        "nameId": "velutto-66",
        "samplePageUrl": "../samples/velutto/velutto-66",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-66.jpg",
        "imgUrl": "../../tkan/velutto/velutto-66-big.jpg",
        "img": "../tkan/velutto/velutto-66.jpg",
        "imgAlt": "velutto 66",
        "imgTitle": "velutto 66",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "67",
        "name": "velutto",
        "h1": "Velutto 67",
        "nameId": "velutto-67",
        "samplePageUrl": "../samples/velutto/velutto-67",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-67.jpg",
        "imgUrl": "../../tkan/velutto/velutto-67-big.jpg",
        "img": "../tkan/velutto/velutto-67.jpg",
        "imgAlt": "velutto 67",
        "imgTitle": "velutto 67",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "68",
        "name": "velutto",
        "h1": "Velutto 68",
        "nameId": "velutto-68",
        "samplePageUrl": "../samples/velutto/velutto-68",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-68.jpg",
        "imgUrl": "../../tkan/velutto/velutto-68-big.jpg",
        "img": "../tkan/velutto/velutto-68.jpg",
        "imgAlt": "velutto 68",
        "imgTitle": "velutto 68",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "69",
        "name": "velutto",
        "h1": "Velutto 69",
        "nameId": "velutto-69",
        "samplePageUrl": "../samples/velutto/velutto-69",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-69.jpg",
        "imgUrl": "../../tkan/velutto/velutto-69-big.jpg",
        "img": "../tkan/velutto/velutto-69.jpg",
        "imgAlt": "velutto 69",
        "imgTitle": "velutto 69",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "70",
        "name": "velutto",
        "h1": "Velutto 70",
        "nameId": "velutto-70",
        "samplePageUrl": "../samples/velutto/velutto-70",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-70.jpg",
        "imgUrl": "../../tkan/velutto/velutto-70-big.jpg",
        "img": "../tkan/velutto/velutto-70.jpg",
        "imgAlt": "velutto 70",
        "imgTitle": "velutto 70",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "71",
        "name": "velutto",
        "h1": "Velutto 71",
        "nameId": "velutto-71",
        "samplePageUrl": "../samples/velutto/velutto-71",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-71.jpg",
        "imgUrl": "../../tkan/velutto/velutto-71-big.jpg",
        "img": "../tkan/velutto/velutto-71.jpg",
        "imgAlt": "velutto 71",
        "imgTitle": "velutto 71",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "72",
        "name": "velutto",
        "h1": "Velutto 72",
        "nameId": "velutto-72",
        "samplePageUrl": "../samples/velutto/velutto-72",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-72.jpg",
        "imgUrl": "../../tkan/velutto/velutto-72-big.jpg",
        "img": "../tkan/velutto/velutto-72.jpg",
        "imgAlt": "velutto 72",
        "imgTitle": "velutto 72",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "73",
        "name": "velutto",
        "h1": "Velutto 73",
        "nameId": "velutto-73",
        "samplePageUrl": "../samples/velutto/velutto-73",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-73.jpg",
        "imgUrl": "../../tkan/velutto/velutto-73-big.jpg",
        "img": "../tkan/velutto/velutto-73.jpg",
        "imgAlt": "velutto 73",
        "imgTitle": "velutto 73",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "74",
        "name": "velutto",
        "h1": "Velutto 74",
        "nameId": "velutto-74",
        "samplePageUrl": "../samples/velutto/velutto-74",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-74.jpg",
        "imgUrl": "../../tkan/velutto/velutto-74-big.jpg",
        "img": "../tkan/velutto/velutto-74.jpg",
        "imgAlt": "velutto 74",
        "imgTitle": "velutto 74",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "75",
        "name": "velutto",
        "h1": "Velutto 75",
        "nameId": "velutto-75",
        "samplePageUrl": "../samples/velutto/velutto-75",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-75.jpg",
        "imgUrl": "../../tkan/velutto/velutto-75-big.jpg",
        "img": "../tkan/velutto/velutto-75.jpg",
        "imgAlt": "velutto 75",
        "imgTitle": "velutto 75",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "76",
        "name": "velutto",
        "h1": "Velutto 76",
        "nameId": "velutto-76",
        "samplePageUrl": "../samples/velutto/velutto-76",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-76.jpg",
        "imgUrl": "../../tkan/velutto/velutto-76-big.jpg",
        "img": "../tkan/velutto/velutto-76.jpg",
        "imgAlt": "velutto 76",
        "imgTitle": "velutto 76",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "77",
        "name": "velutto",
        "h1": "Velutto 77",
        "nameId": "velutto-77",
        "samplePageUrl": "../samples/velutto/velutto-77",
        "parentPageUrl": "../../material/velutto",
        "previewUrl": "../tkan/velutto/velutto-77.jpg",
        "imgUrl": "../../tkan/velutto/velutto-77-big.jpg",
        "img": "../tkan/velutto/velutto-77.jpg",
        "imgAlt": "velutto 77",
        "imgTitle": "velutto 77",
        "srcset": "",
        "size": ""
      }
    ],
    "previewImg": "../tkan/velutto/preview.jpg",
    "status": true
  },
  {
    "id": "37",
    "nameId": "velvetdefislux",
    "caption": "Velvet lux",
    "pageUrl": "velvet-lux",
    "cost": 1020,
    "unit": "погонный метр",
    "seller": "Поставщик материала компания <a href=\"http://www.souz-m.ru\" target=\"_blank\"> СОЮЗ-М</a>",
    "country": "Китай",
    "description": "<p>Это однотонный микровельвет. Он прочный и приятный на ощупь. В альбоме почти 100 цветов. Благодаря своей цене и цветовой карте, Velvet lux на голову опережает конкурентов. Это самый популярный материал среди наших заказчиков. Нет необходимости подбирать рисунок в изделии, а значит будет меньший расход ткани на заказ. По сравнению с тканями с рисунком можно сэкономить до 20%.</p ><p>У ткани приличный показатель прочности. Например, подушки для дивана из этой ткани простужат долго. А в случае необходимости, пошить новые чехлы получится достаточно дешево. </p>",
    "martindale": "25000",
    "content": [
      "полиэстер-100%"
    ],
    "typeEng": "VEL",
    "typeRus": "Велюр",
    "rapport": "0",
    "overlock": "0",
    "sample": [
      {
        "caption": "1",
        "name": "velvetdefislux",
        "h1": "Velvet lux 1",
        "nameId": "velvet-lux-1",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-1",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-1.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-1-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-1.jpg",
        "imgAlt": "velvet lux 1",
        "imgTitle": "velvet lux 1",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "2",
        "name": "velvetdefislux",
        "h1": "Velvet lux 2",
        "nameId": "velvet-lux-2",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-2",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-2.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-2-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-2.jpg",
        "imgAlt": "velvet lux 2",
        "imgTitle": "velvet lux 2",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "3",
        "name": "velvetdefislux",
        "h1": "Velvet lux 3",
        "nameId": "velvet-lux-3",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-3",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-3.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-3-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-3.jpg",
        "imgAlt": "velvet lux 3",
        "imgTitle": "velvet lux 3",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "4",
        "name": "velvetdefislux",
        "h1": "Velvet lux 4",
        "nameId": "velvet-lux-4",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-4",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-4.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-4-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-4.jpg",
        "imgAlt": "velvet lux 4",
        "imgTitle": "velvet lux 4",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "5",
        "name": "velvetdefislux",
        "h1": "Velvet lux 5",
        "nameId": "velvet-lux-5",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-5",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-5.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-5-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-5.jpg",
        "imgAlt": "velvet lux 5",
        "imgTitle": "velvet lux 5",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "6",
        "name": "velvetdefislux",
        "h1": "Velvet lux 6",
        "nameId": "velvet-lux-6",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-6",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-6.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-6-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-6.jpg",
        "imgAlt": "velvet lux 6",
        "imgTitle": "velvet lux 6",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "7",
        "name": "velvetdefislux",
        "h1": "Velvet lux 7",
        "nameId": "velvet-lux-7",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-7",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-7.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-7-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-7.jpg",
        "imgAlt": "velvet lux 7",
        "imgTitle": "velvet lux 7",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "8",
        "name": "velvetdefislux",
        "h1": "Velvet lux 8",
        "nameId": "velvet-lux-8",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-8",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-8.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-8-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-8.jpg",
        "imgAlt": "velvet lux 8",
        "imgTitle": "velvet lux 8",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "9",
        "name": "velvetdefislux",
        "h1": "Velvet lux 9",
        "nameId": "velvet-lux-9",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-9",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-9.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-9-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-9.jpg",
        "imgAlt": "velvet lux 9",
        "imgTitle": "velvet lux 9",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "10",
        "name": "velvetdefislux",
        "h1": "Velvet lux 10",
        "nameId": "velvet-lux-10",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-10",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-10.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-10-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-10.jpg",
        "imgAlt": "velvet lux 10",
        "imgTitle": "velvet lux 10",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "11",
        "name": "velvetdefislux",
        "h1": "Velvet lux 11",
        "nameId": "velvet-lux-11",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-11",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-11.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-11-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-11.jpg",
        "imgAlt": "velvet lux 11",
        "imgTitle": "velvet lux 11",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "12",
        "name": "velvetdefislux",
        "h1": "Velvet lux 12",
        "nameId": "velvet-lux-12",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-12",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-12.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-12-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-12.jpg",
        "imgAlt": "velvet lux 12",
        "imgTitle": "velvet lux 12",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "13",
        "name": "velvetdefislux",
        "h1": "Velvet lux 13",
        "nameId": "velvet-lux-13",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-13",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-13.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-13-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-13.jpg",
        "imgAlt": "velvet lux 13",
        "imgTitle": "velvet lux 13",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "14",
        "name": "velvetdefislux",
        "h1": "Velvet lux 14",
        "nameId": "velvet-lux-14",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-14",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-14.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-14-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-14.jpg",
        "imgAlt": "velvet lux 14",
        "imgTitle": "velvet lux 14",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "15",
        "name": "velvetdefislux",
        "h1": "Velvet lux 15",
        "nameId": "velvet-lux-15",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-15",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-15.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-15-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-15.jpg",
        "imgAlt": "velvet lux 15",
        "imgTitle": "velvet lux 15",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "16",
        "name": "velvetdefislux",
        "h1": "Velvet lux 16",
        "nameId": "velvet-lux-16",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-16",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-16.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-16-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-16.jpg",
        "imgAlt": "velvet lux 16",
        "imgTitle": "velvet lux 16",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "17",
        "name": "velvetdefislux",
        "h1": "Velvet lux 17",
        "nameId": "velvet-lux-17",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-17",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-17.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-17-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-17.jpg",
        "imgAlt": "velvet lux 17",
        "imgTitle": "velvet lux 17",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "18",
        "name": "velvetdefislux",
        "h1": "Velvet lux 18",
        "nameId": "velvet-lux-18",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-18",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-18.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-18-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-18.jpg",
        "imgAlt": "velvet lux 18",
        "imgTitle": "velvet lux 18",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "19",
        "name": "velvetdefislux",
        "h1": "Velvet lux 19",
        "nameId": "velvet-lux-19",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-19",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-19.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-19-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-19.jpg",
        "imgAlt": "velvet lux 19",
        "imgTitle": "velvet lux 19",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "20",
        "name": "velvetdefislux",
        "h1": "Velvet lux 20",
        "nameId": "velvet-lux-20",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-20",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-20.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-20-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-20.jpg",
        "imgAlt": "velvet lux 20",
        "imgTitle": "velvet lux 20",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "21",
        "name": "velvetdefislux",
        "h1": "Velvet lux 21",
        "nameId": "velvet-lux-21",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-21",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-21.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-21-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-21.jpg",
        "imgAlt": "velvet lux 21",
        "imgTitle": "velvet lux 21",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "22",
        "name": "velvetdefislux",
        "h1": "Velvet lux 22",
        "nameId": "velvet-lux-22",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-22",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-22.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-22-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-22.jpg",
        "imgAlt": "velvet lux 22",
        "imgTitle": "velvet lux 22",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "23",
        "name": "velvetdefislux",
        "h1": "Velvet lux 23",
        "nameId": "velvet-lux-23",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-23",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-23.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-23-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-23.jpg",
        "imgAlt": "velvet lux 23",
        "imgTitle": "velvet lux 23",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "24",
        "name": "velvetdefislux",
        "h1": "Velvet lux 24",
        "nameId": "velvet-lux-24",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-24",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-24.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-24-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-24.jpg",
        "imgAlt": "velvet lux 24",
        "imgTitle": "velvet lux 24",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "25",
        "name": "velvetdefislux",
        "h1": "Velvet lux 25",
        "nameId": "velvet-lux-25",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-25",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-25.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-25-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-25.jpg",
        "imgAlt": "velvet lux 25",
        "imgTitle": "velvet lux 25",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "26",
        "name": "velvetdefislux",
        "h1": "Velvet lux 26",
        "nameId": "velvet-lux-26",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-26",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-26.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-26-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-26.jpg",
        "imgAlt": "velvet lux 26",
        "imgTitle": "velvet lux 26",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "27",
        "name": "velvetdefislux",
        "h1": "Velvet lux 27",
        "nameId": "velvet-lux-27",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-27",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-27.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-27-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-27.jpg",
        "imgAlt": "velvet lux 27",
        "imgTitle": "velvet lux 27",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "28",
        "name": "velvetdefislux",
        "h1": "Velvet lux 28",
        "nameId": "velvet-lux-28",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-28",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-28.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-28-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-28.jpg",
        "imgAlt": "velvet lux 28",
        "imgTitle": "velvet lux 28",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "29",
        "name": "velvetdefislux",
        "h1": "Velvet lux 29",
        "nameId": "velvet-lux-29",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-29",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-29.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-29-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-29.jpg",
        "imgAlt": "velvet lux 29",
        "imgTitle": "velvet lux 29",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "30",
        "name": "velvetdefislux",
        "h1": "Velvet lux 30",
        "nameId": "velvet-lux-30",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-30",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-30.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-30-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-30.jpg",
        "imgAlt": "velvet lux 30",
        "imgTitle": "velvet lux 30",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "31",
        "name": "velvetdefislux",
        "h1": "Velvet lux 31",
        "nameId": "velvet-lux-31",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-31",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-31.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-31-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-31.jpg",
        "imgAlt": "velvet lux 31",
        "imgTitle": "velvet lux 31",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "32",
        "name": "velvetdefislux",
        "h1": "Velvet lux 32",
        "nameId": "velvet-lux-32",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-32",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-32.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-32-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-32.jpg",
        "imgAlt": "velvet lux 32",
        "imgTitle": "velvet lux 32",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "33",
        "name": "velvetdefislux",
        "h1": "Velvet lux 33",
        "nameId": "velvet-lux-33",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-33",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-33.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-33-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-33.jpg",
        "imgAlt": "velvet lux 33",
        "imgTitle": "velvet lux 33",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "34",
        "name": "velvetdefislux",
        "h1": "Velvet lux 34",
        "nameId": "velvet-lux-34",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-34",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-34.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-34-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-34.jpg",
        "imgAlt": "velvet lux 34",
        "imgTitle": "velvet lux 34",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "35",
        "name": "velvetdefislux",
        "h1": "Velvet lux 35",
        "nameId": "velvet-lux-35",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-35",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-35.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-35-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-35.jpg",
        "imgAlt": "velvet lux 35",
        "imgTitle": "velvet lux 35",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "36",
        "name": "velvetdefislux",
        "h1": "Velvet lux 36",
        "nameId": "velvet-lux-36",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-36",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-36.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-36-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-36.jpg",
        "imgAlt": "velvet lux 36",
        "imgTitle": "velvet lux 36",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "37",
        "name": "velvetdefislux",
        "h1": "Velvet lux 37",
        "nameId": "velvet-lux-37",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-37",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-37.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-37-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-37.jpg",
        "imgAlt": "velvet lux 37",
        "imgTitle": "velvet lux 37",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "38",
        "name": "velvetdefislux",
        "h1": "Velvet lux 38",
        "nameId": "velvet-lux-38",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-38",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-38.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-38-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-38.jpg",
        "imgAlt": "velvet lux 38",
        "imgTitle": "velvet lux 38",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "39",
        "name": "velvetdefislux",
        "h1": "Velvet lux 39",
        "nameId": "velvet-lux-39",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-39",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-39.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-39-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-39.jpg",
        "imgAlt": "velvet lux 39",
        "imgTitle": "velvet lux 39",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "40",
        "name": "velvetdefislux",
        "h1": "Velvet lux 40",
        "nameId": "velvet-lux-40",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-40",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-40.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-40-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-40.jpg",
        "imgAlt": "velvet lux 40",
        "imgTitle": "velvet lux 40",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "41",
        "name": "velvetdefislux",
        "h1": "Velvet lux 41",
        "nameId": "velvet-lux-41",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-41",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-41.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-41-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-41.jpg",
        "imgAlt": "velvet lux 41",
        "imgTitle": "velvet lux 41",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "42",
        "name": "velvetdefislux",
        "h1": "Velvet lux 42",
        "nameId": "velvet-lux-42",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-42",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-42.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-42-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-42.jpg",
        "imgAlt": "velvet lux 42",
        "imgTitle": "velvet lux 42",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "43",
        "name": "velvetdefislux",
        "h1": "Velvet lux 43",
        "nameId": "velvet-lux-43",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-43",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-43.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-43-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-43.jpg",
        "imgAlt": "velvet lux 43",
        "imgTitle": "velvet lux 43",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "44",
        "name": "velvetdefislux",
        "h1": "Velvet lux 44",
        "nameId": "velvet-lux-44",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-44",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-44.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-44-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-44.jpg",
        "imgAlt": "velvet lux 44",
        "imgTitle": "velvet lux 44",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "45",
        "name": "velvetdefislux",
        "h1": "Velvet lux 45",
        "nameId": "velvet-lux-45",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-45",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-45.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-45-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-45.jpg",
        "imgAlt": "velvet lux 45",
        "imgTitle": "velvet lux 45",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "46",
        "name": "velvetdefislux",
        "h1": "Velvet lux 46",
        "nameId": "velvet-lux-46",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-46",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-46.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-46-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-46.jpg",
        "imgAlt": "velvet lux 46",
        "imgTitle": "velvet lux 46",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "47",
        "name": "velvetdefislux",
        "h1": "Velvet lux 47",
        "nameId": "velvet-lux-47",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-47",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-47.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-47-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-47.jpg",
        "imgAlt": "velvet lux 47",
        "imgTitle": "velvet lux 47",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "48",
        "name": "velvetdefislux",
        "h1": "Velvet lux 48",
        "nameId": "velvet-lux-48",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-48",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-48.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-48-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-48.jpg",
        "imgAlt": "velvet lux 48",
        "imgTitle": "velvet lux 48",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "49",
        "name": "velvetdefislux",
        "h1": "Velvet lux 49",
        "nameId": "velvet-lux-49",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-49",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-49.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-49-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-49.jpg",
        "imgAlt": "velvet lux 49",
        "imgTitle": "velvet lux 49",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "50",
        "name": "velvetdefislux",
        "h1": "Velvet lux 50",
        "nameId": "velvet-lux-50",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-50",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-50.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-50-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-50.jpg",
        "imgAlt": "velvet lux 50",
        "imgTitle": "velvet lux 50",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "51",
        "name": "velvetdefislux",
        "h1": "Velvet lux 51",
        "nameId": "velvet-lux-51",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-51",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-51.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-51-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-51.jpg",
        "imgAlt": "velvet lux 51",
        "imgTitle": "velvet lux 51",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "52",
        "name": "velvetdefislux",
        "h1": "Velvet lux 52",
        "nameId": "velvet-lux-52",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-52",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-52.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-52-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-52.jpg",
        "imgAlt": "velvet lux 52",
        "imgTitle": "velvet lux 52",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "53",
        "name": "velvetdefislux",
        "h1": "Velvet lux 53",
        "nameId": "velvet-lux-53",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-53",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-53.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-53-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-53.jpg",
        "imgAlt": "velvet lux 53",
        "imgTitle": "velvet lux 53",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "54",
        "name": "velvetdefislux",
        "h1": "Velvet lux 54",
        "nameId": "velvet-lux-54",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-54",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-54.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-54-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-54.jpg",
        "imgAlt": "velvet lux 54",
        "imgTitle": "velvet lux 54",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "55",
        "name": "velvetdefislux",
        "h1": "Velvet lux 55",
        "nameId": "velvet-lux-55",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-55",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-55.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-55-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-55.jpg",
        "imgAlt": "velvet lux 55",
        "imgTitle": "velvet lux 55",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "56",
        "name": "velvetdefislux",
        "h1": "Velvet lux 56",
        "nameId": "velvet-lux-56",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-56",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-56.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-56-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-56.jpg",
        "imgAlt": "velvet lux 56",
        "imgTitle": "velvet lux 56",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "57",
        "name": "velvetdefislux",
        "h1": "Velvet lux 57",
        "nameId": "velvet-lux-57",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-57",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-57.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-57-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-57.jpg",
        "imgAlt": "velvet lux 57",
        "imgTitle": "velvet lux 57",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "58",
        "name": "velvetdefislux",
        "h1": "Velvet lux 58",
        "nameId": "velvet-lux-58",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-58",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-58.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-58-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-58.jpg",
        "imgAlt": "velvet lux 58",
        "imgTitle": "velvet lux 58",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "59",
        "name": "velvetdefislux",
        "h1": "Velvet lux 59",
        "nameId": "velvet-lux-59",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-59",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-59.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-59-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-59.jpg",
        "imgAlt": "velvet lux 59",
        "imgTitle": "velvet lux 59",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "60",
        "name": "velvetdefislux",
        "h1": "Velvet lux 60",
        "nameId": "velvet-lux-60",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-60",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-60.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-60-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-60.jpg",
        "imgAlt": "velvet lux 60",
        "imgTitle": "velvet lux 60",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "61",
        "name": "velvetdefislux",
        "h1": "Velvet lux 61",
        "nameId": "velvet-lux-61",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-61",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-61.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-61-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-61.jpg",
        "imgAlt": "velvet lux 61",
        "imgTitle": "velvet lux 61",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "62",
        "name": "velvetdefislux",
        "h1": "Velvet lux 62",
        "nameId": "velvet-lux-62",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-62",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-62.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-62-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-62.jpg",
        "imgAlt": "velvet lux 62",
        "imgTitle": "velvet lux 62",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "63",
        "name": "velvetdefislux",
        "h1": "Velvet lux 63",
        "nameId": "velvet-lux-63",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-63",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-63.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-63-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-63.jpg",
        "imgAlt": "velvet lux 63",
        "imgTitle": "velvet lux 63",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "64",
        "name": "velvetdefislux",
        "h1": "Velvet lux 64",
        "nameId": "velvet-lux-64",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-64",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-64.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-64-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-64.jpg",
        "imgAlt": "velvet lux 64",
        "imgTitle": "velvet lux 64",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "65",
        "name": "velvetdefislux",
        "h1": "Velvet lux 65",
        "nameId": "velvet-lux-65",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-65",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-65.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-65-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-65.jpg",
        "imgAlt": "velvet lux 65",
        "imgTitle": "velvet lux 65",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "66",
        "name": "velvetdefislux",
        "h1": "Velvet lux 66",
        "nameId": "velvet-lux-66",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-66",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-66.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-66-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-66.jpg",
        "imgAlt": "velvet lux 66",
        "imgTitle": "velvet lux 66",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "67",
        "name": "velvetdefislux",
        "h1": "Velvet lux 67",
        "nameId": "velvet-lux-67",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-67",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-67.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-67-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-67.jpg",
        "imgAlt": "velvet lux 67",
        "imgTitle": "velvet lux 67",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "68",
        "name": "velvetdefislux",
        "h1": "Velvet lux 68",
        "nameId": "velvet-lux-68",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-68",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-68.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-68-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-68.jpg",
        "imgAlt": "velvet lux 68",
        "imgTitle": "velvet lux 68",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "69",
        "name": "velvetdefislux",
        "h1": "Velvet lux 69",
        "nameId": "velvet-lux-69",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-69",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-69.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-69-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-69.jpg",
        "imgAlt": "velvet lux 69",
        "imgTitle": "velvet lux 69",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "70",
        "name": "velvetdefislux",
        "h1": "Velvet lux 70",
        "nameId": "velvet-lux-70",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-70",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-70.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-70-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-70.jpg",
        "imgAlt": "velvet lux 70",
        "imgTitle": "velvet lux 70",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "71",
        "name": "velvetdefislux",
        "h1": "Velvet lux 71",
        "nameId": "velvet-lux-71",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-71",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-71.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-71-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-71.jpg",
        "imgAlt": "velvet lux 71",
        "imgTitle": "velvet lux 71",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "72",
        "name": "velvetdefislux",
        "h1": "Velvet lux 72",
        "nameId": "velvet-lux-72",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-72",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-72.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-72-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-72.jpg",
        "imgAlt": "velvet lux 72",
        "imgTitle": "velvet lux 72",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "73",
        "name": "velvetdefislux",
        "h1": "Velvet lux 73",
        "nameId": "velvet-lux-73",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-73",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-73.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-73-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-73.jpg",
        "imgAlt": "velvet lux 73",
        "imgTitle": "velvet lux 73",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "74",
        "name": "velvetdefislux",
        "h1": "Velvet lux 74",
        "nameId": "velvet-lux-74",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-74",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-74.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-74-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-74.jpg",
        "imgAlt": "velvet lux 74",
        "imgTitle": "velvet lux 74",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "75",
        "name": "velvetdefislux",
        "h1": "Velvet lux 75",
        "nameId": "velvet-lux-75",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-75",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-75.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-75-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-75.jpg",
        "imgAlt": "velvet lux 75",
        "imgTitle": "velvet lux 75",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "76",
        "name": "velvetdefislux",
        "h1": "Velvet lux 76",
        "nameId": "velvet-lux-76",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-76",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-76.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-76-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-76.jpg",
        "imgAlt": "velvet lux 76",
        "imgTitle": "velvet lux 76",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "77",
        "name": "velvetdefislux",
        "h1": "Velvet lux 77",
        "nameId": "velvet-lux-77",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-77",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-77.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-77-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-77.jpg",
        "imgAlt": "velvet lux 77",
        "imgTitle": "velvet lux 77",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "78",
        "name": "velvetdefislux",
        "h1": "Velvet lux 78",
        "nameId": "velvet-lux-78",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-78",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-78.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-78-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-78.jpg",
        "imgAlt": "velvet lux 78",
        "imgTitle": "velvet lux 78",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "79",
        "name": "velvetdefislux",
        "h1": "Velvet lux 79",
        "nameId": "velvet-lux-79",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-79",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-79.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-79-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-79.jpg",
        "imgAlt": "velvet lux 79",
        "imgTitle": "velvet lux 79",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "80",
        "name": "velvetdefislux",
        "h1": "Velvet lux 80",
        "nameId": "velvet-lux-80",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-80",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-80.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-80-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-80.jpg",
        "imgAlt": "velvet lux 80",
        "imgTitle": "velvet lux 80",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "81",
        "name": "velvetdefislux",
        "h1": "Velvet lux 81",
        "nameId": "velvet-lux-81",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-81",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-81.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-81-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-81.jpg",
        "imgAlt": "velvet lux 81",
        "imgTitle": "velvet lux 81",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "82",
        "name": "velvetdefislux",
        "h1": "Velvet lux 82",
        "nameId": "velvet-lux-82",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-82",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-82.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-82-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-82.jpg",
        "imgAlt": "velvet lux 82",
        "imgTitle": "velvet lux 82",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "83",
        "name": "velvetdefislux",
        "h1": "Velvet lux 83",
        "nameId": "velvet-lux-83",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-83",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-83.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-83-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-83.jpg",
        "imgAlt": "velvet lux 83",
        "imgTitle": "velvet lux 83",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "84",
        "name": "velvetdefislux",
        "h1": "Velvet lux 84",
        "nameId": "velvet-lux-84",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-84",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-84.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-84-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-84.jpg",
        "imgAlt": "velvet lux 84",
        "imgTitle": "velvet lux 84",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "85",
        "name": "velvetdefislux",
        "h1": "Velvet lux 85",
        "nameId": "velvet-lux-85",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-85",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-85.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-85-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-85.jpg",
        "imgAlt": "velvet lux 85",
        "imgTitle": "velvet lux 85",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "86",
        "name": "velvetdefislux",
        "h1": "Velvet lux 86",
        "nameId": "velvet-lux-86",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-86",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-86.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-86-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-86.jpg",
        "imgAlt": "velvet lux 86",
        "imgTitle": "velvet lux 86",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "87",
        "name": "velvetdefislux",
        "h1": "Velvet lux 87",
        "nameId": "velvet-lux-87",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-87",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-87.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-87-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-87.jpg",
        "imgAlt": "velvet lux 87",
        "imgTitle": "velvet lux 87",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "88",
        "name": "velvetdefislux",
        "h1": "Velvet lux 88",
        "nameId": "velvet-lux-88",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-88",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-88.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-88-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-88.jpg",
        "imgAlt": "velvet lux 88",
        "imgTitle": "velvet lux 88",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "89",
        "name": "velvetdefislux",
        "h1": "Velvet lux 89",
        "nameId": "velvet-lux-89",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-89",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-89.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-89-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-89.jpg",
        "imgAlt": "velvet lux 89",
        "imgTitle": "velvet lux 89",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "90",
        "name": "velvetdefislux",
        "h1": "Velvet lux 90",
        "nameId": "velvet-lux-90",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-90",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-90.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-90-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-90.jpg",
        "imgAlt": "velvet lux 90",
        "imgTitle": "velvet lux 90",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "91",
        "name": "velvetdefislux",
        "h1": "Velvet lux 91",
        "nameId": "velvet-lux-91",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-91",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-91.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-91-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-91.jpg",
        "imgAlt": "velvet lux 91",
        "imgTitle": "velvet lux 91",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "92",
        "name": "velvetdefislux",
        "h1": "Velvet lux 92",
        "nameId": "velvet-lux-92",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-92",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-92.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-92-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-92.jpg",
        "imgAlt": "velvet lux 92",
        "imgTitle": "velvet lux 92",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "93",
        "name": "velvetdefislux",
        "h1": "Velvet lux 93",
        "nameId": "velvet-lux-93",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-93",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-93.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-93-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-93.jpg",
        "imgAlt": "velvet lux 93",
        "imgTitle": "velvet lux 93",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "94",
        "name": "velvetdefislux",
        "h1": "Velvet lux 94",
        "nameId": "velvet-lux-94",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-94",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-94.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-94-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-94.jpg",
        "imgAlt": "velvet lux 94",
        "imgTitle": "velvet lux 94",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "95",
        "name": "velvetdefislux",
        "h1": "Velvet lux 95",
        "nameId": "velvet-lux-95",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-95",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-95.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-95-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-95.jpg",
        "imgAlt": "velvet lux 95",
        "imgTitle": "velvet lux 95",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "96",
        "name": "velvetdefislux",
        "h1": "Velvet lux 96",
        "nameId": "velvet-lux-96",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-96",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-96.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-96-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-96.jpg",
        "imgAlt": "velvet lux 96",
        "imgTitle": "velvet lux 96",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "97",
        "name": "velvetdefislux",
        "h1": "Velvet lux 97",
        "nameId": "velvet-lux-97",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-97",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-97.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-97-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-97.jpg",
        "imgAlt": "velvet lux 97",
        "imgTitle": "velvet lux 97",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "98",
        "name": "velvetdefislux",
        "h1": "Velvet lux 98",
        "nameId": "velvet-lux-98",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-98",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-98.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-98-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-98.jpg",
        "imgAlt": "velvet lux 98",
        "imgTitle": "velvet lux 98",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "99",
        "name": "velvetdefislux",
        "h1": "Velvet lux 99",
        "nameId": "velvet-lux-99",
        "samplePageUrl": "../samples/velvet-lux/velvet-lux-99",
        "parentPageUrl": "../../material/velvet-lux",
        "previewUrl": "../tkan/velvet-lux/velvet-lux-99.jpg",
        "imgUrl": "../../tkan/velvet-lux/velvet-lux-99-big.jpg",
        "img": "../tkan/velvet-lux/velvet-lux-99.jpg",
        "imgAlt": "velvet lux 99",
        "imgTitle": "velvet lux 99",
        "srcset": "",
        "size": ""
      }
    ],
    "previewImg": "../tkan/velvet-lux/preview.jpg",
    "status": true
  },
  {
    "id": "70",
    "nameId": "laguna",
    "caption": "Laguna",
    "pageUrl": "laguna",
    "cost": 420,
    "unit": "погонный метр",
    "seller": "Поставщик материала компания <a href=\"http://www.souz-m.ru\" target=\"_blank\"> СОЮЗ-М</a>",
    "country": "Китай",
    "description": "<p>Простая и недорогая рогожка. </p>",
    "martindale": "50000",
    "content": [
      "полиэстер-100%"
    ],
    "typeEng": "ROG",
    "typeRus": "Рогожка",
    "rapport": "0",
    "overlock": "1",
    "sample": [
      {
        "caption": "100",
        "name": "laguna",
        "h1": "Laguna 100",
        "nameId": "laguna-100",
        "samplePageUrl": "../samples/laguna/laguna-100",
        "parentPageUrl": "../../material/laguna",
        "previewUrl": "../tkan/laguna/laguna-100.jpg",
        "imgUrl": "../../tkan/laguna/laguna-100-big.jpg",
        "img": "../tkan/laguna/laguna-100.jpg",
        "imgAlt": "laguna 100",
        "imgTitle": "laguna 100",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "130",
        "name": "laguna",
        "h1": "Laguna 130",
        "nameId": "laguna-130",
        "samplePageUrl": "../samples/laguna/laguna-130",
        "parentPageUrl": "../../material/laguna",
        "previewUrl": "../tkan/laguna/laguna-130.jpg",
        "imgUrl": "../../tkan/laguna/laguna-130-big.jpg",
        "img": "../tkan/laguna/laguna-130.jpg",
        "imgAlt": "laguna 130",
        "imgTitle": "laguna 130",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "223",
        "name": "laguna",
        "h1": "Laguna 223",
        "nameId": "laguna-223",
        "samplePageUrl": "../samples/laguna/laguna-223",
        "parentPageUrl": "../../material/laguna",
        "previewUrl": "../tkan/laguna/laguna-223.jpg",
        "imgUrl": "../../tkan/laguna/laguna-223-big.jpg",
        "img": "../tkan/laguna/laguna-223.jpg",
        "imgAlt": "laguna 223",
        "imgTitle": "laguna 223",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "290",
        "name": "laguna",
        "h1": "Laguna 290",
        "nameId": "laguna-290",
        "samplePageUrl": "../samples/laguna/laguna-290",
        "parentPageUrl": "../../material/laguna",
        "previewUrl": "../tkan/laguna/laguna-290.jpg",
        "imgUrl": "../../tkan/laguna/laguna-290-big.jpg",
        "img": "../tkan/laguna/laguna-290.jpg",
        "imgAlt": "laguna 290",
        "imgTitle": "laguna 290",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "293",
        "name": "laguna",
        "h1": "Laguna 293",
        "nameId": "laguna-293",
        "samplePageUrl": "../samples/laguna/laguna-293",
        "parentPageUrl": "../../material/laguna",
        "previewUrl": "../tkan/laguna/laguna-293.jpg",
        "imgUrl": "../../tkan/laguna/laguna-293-big.jpg",
        "img": "../tkan/laguna/laguna-293.jpg",
        "imgAlt": "laguna 293",
        "imgTitle": "laguna 293",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "310",
        "name": "laguna",
        "h1": "Laguna 310",
        "nameId": "laguna-310",
        "samplePageUrl": "../samples/laguna/laguna-310",
        "parentPageUrl": "../../material/laguna",
        "previewUrl": "../tkan/laguna/laguna-310.jpg",
        "imgUrl": "../../tkan/laguna/laguna-310-big.jpg",
        "img": "../tkan/laguna/laguna-310.jpg",
        "imgAlt": "laguna 310",
        "imgTitle": "laguna 310",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "380",
        "name": "laguna",
        "h1": "Laguna 380",
        "nameId": "laguna-380",
        "samplePageUrl": "../samples/laguna/laguna-380",
        "parentPageUrl": "../../material/laguna",
        "previewUrl": "../tkan/laguna/laguna-380.jpg",
        "imgUrl": "../../tkan/laguna/laguna-380-big.jpg",
        "img": "../tkan/laguna/laguna-380.jpg",
        "imgAlt": "laguna 380",
        "imgTitle": "laguna 380",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "555",
        "name": "laguna",
        "h1": "Laguna 555",
        "nameId": "laguna-555",
        "samplePageUrl": "../samples/laguna/laguna-555",
        "parentPageUrl": "../../material/laguna",
        "previewUrl": "../tkan/laguna/laguna-555.jpg",
        "imgUrl": "../../tkan/laguna/laguna-555-big.jpg",
        "img": "../tkan/laguna/laguna-555.jpg",
        "imgAlt": "laguna 555",
        "imgTitle": "laguna 555",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "670",
        "name": "laguna",
        "h1": "Laguna 670",
        "nameId": "laguna-670",
        "samplePageUrl": "../samples/laguna/laguna-670",
        "parentPageUrl": "../../material/laguna",
        "previewUrl": "../tkan/laguna/laguna-670.jpg",
        "imgUrl": "../../tkan/laguna/laguna-670-big.jpg",
        "img": "../tkan/laguna/laguna-670.jpg",
        "imgAlt": "laguna 670",
        "imgTitle": "laguna 670",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "693",
        "name": "laguna",
        "h1": "Laguna 693",
        "nameId": "laguna-693",
        "samplePageUrl": "../samples/laguna/laguna-693",
        "parentPageUrl": "../../material/laguna",
        "previewUrl": "../tkan/laguna/laguna-693.jpg",
        "imgUrl": "../../tkan/laguna/laguna-693-big.jpg",
        "img": "../tkan/laguna/laguna-693.jpg",
        "imgAlt": "laguna 693",
        "imgTitle": "laguna 693",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "795",
        "name": "laguna",
        "h1": "Laguna 795",
        "nameId": "laguna-795",
        "samplePageUrl": "../samples/laguna/laguna-795",
        "parentPageUrl": "../../material/laguna",
        "previewUrl": "../tkan/laguna/laguna-795.jpg",
        "imgUrl": "../../tkan/laguna/laguna-795-big.jpg",
        "img": "../tkan/laguna/laguna-795.jpg",
        "imgAlt": "laguna 795",
        "imgTitle": "laguna 795",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "932",
        "name": "laguna",
        "h1": "Laguna 932",
        "nameId": "laguna-932",
        "samplePageUrl": "../samples/laguna/laguna-932",
        "parentPageUrl": "../../material/laguna",
        "previewUrl": "../tkan/laguna/laguna-932.jpg",
        "imgUrl": "../../tkan/laguna/laguna-932-big.jpg",
        "img": "../tkan/laguna/laguna-932.jpg",
        "imgAlt": "laguna 932",
        "imgTitle": "laguna 932",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "994",
        "name": "laguna",
        "h1": "Laguna 994",
        "nameId": "laguna-994",
        "samplePageUrl": "../samples/laguna/laguna-994",
        "parentPageUrl": "../../material/laguna",
        "previewUrl": "../tkan/laguna/laguna-994.jpg",
        "imgUrl": "../../tkan/laguna/laguna-994-big.jpg",
        "img": "../tkan/laguna/laguna-994.jpg",
        "imgAlt": "laguna 994",
        "imgTitle": "laguna 994",
        "srcset": "",
        "size": ""
      },
      {
        "caption": "997",
        "name": "laguna",
        "h1": "Laguna 997",
        "nameId": "laguna-997",
        "samplePageUrl": "../samples/laguna/laguna-997",
        "parentPageUrl": "../../material/laguna",
        "previewUrl": "../tkan/laguna/laguna-997.jpg",
        "imgUrl": "../../tkan/laguna/laguna-997-big.jpg",
        "img": "../tkan/laguna/laguna-997.jpg",
        "imgAlt": "laguna 997",
        "imgTitle": "laguna 997",
        "srcset": "",
        "size": ""
      }
    ],
    "previewImg": "../tkan/laguna/preview.jpg",
    "status": true
  },
  {
    "id": "106",
    "nameId": "wtdefiscuba",
    "caption": "wt-Cuba",
    "pageUrl": "wt-cuba",
    "cost": 550,
    "unit": "погонный метр",
    "seller": "Поставщик материала компания <a href=\"https://viptextil.ru\" target=\"_blank\"> VIP ТЕКСТИЛЬ </a>",
    "country": "Китай",
    "description": "<p>Инновационный жаккард Cuba – это современный материал для пляжной и уличной мебели. Красивая в своей простоте, лаконичная рогожка впишется в любой экстерьер – дача, беседка, открытая площадка ресторана, объекты пляжного отдыха.</p><p>\r\nВнешне деликатная Cuba очень износостойка. В тесте Мартиндейла выдерживает более 100 000 циклов, в тесте на устойчивость к сухому/влажному трению – 4 балла, практически не пиллингуется – 4-5 баллов в тесте из 5 возможных. Наличие поперечной нити в полотне гарантирует устойчивость ткани к вытяжению и сохранение ее первозданного вида надолго.\r\nБлагодаря полиуретановой пропитке, Cuba не пропускает воду внутрь волокон – ваша мебель защищена от промокания даже в самый сильный ливень!\r\nТакая ткань незаменима при производстве туристического снаряжения (тентовых полотен, палаток), пляжной мебели (зонтов, лежаков, качелей), оборудования для кафе и ресторанов.</p>",
    "martindale": "100000",
    "content": [
      "полиэстер-100%"
    ],
    "typeEng": "OUTDOOR",
    "typeRus": "Рогожка",
    "rapport": "0",
    "overlock": "1",
    "sample": [
      {
        "caption": "Black",
        "name": "wtdefiscuba",
        "h1": "wt-Cuba Black",
        "nameId": "wt-cuba-black",
        "samplePageUrl": "../samples/wt-cuba/wt-cuba-black",
        "parentPageUrl": "../../material/wt-cuba",
        "previewUrl": "../../tkan/wt-cuba/wt-cuba-black-400.jpg",
        "imgUrl": "../../tkan/wt-cuba/wt-cuba-black.jpg",
        "img": "../../tkan/wt-cuba/wt-cuba-black-400.jpg",
        "imgAlt": "Wt cuba black",
        "imgTitle": "Wt cuba black",
        "srcset": "../tkan/wt-cuba/wt-cuba-black-400.jpg 400w, ../tkan/wt-cuba/wt-cuba-black-800.jpg 800w, ../tkan/wt-cuba/wt-cuba-black-1000.jpg 1000w, ../tkan/wt-cuba/wt-cuba-black-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Denim",
        "name": "wtdefiscuba",
        "h1": "wt-Cuba Denim",
        "nameId": "wt-cuba-denim",
        "samplePageUrl": "../samples/wt-cuba/wt-cuba-denim",
        "parentPageUrl": "../../material/wt-cuba",
        "previewUrl": "../../tkan/wt-cuba/wt-cuba-denim-400.jpg",
        "imgUrl": "../../tkan/wt-cuba/wt-cuba-denim.jpg",
        "img": "../../tkan/wt-cuba/wt-cuba-denim-400.jpg",
        "imgAlt": "Wt cuba denim",
        "imgTitle": "Wt cuba denim",
        "srcset": "../tkan/wt-cuba/wt-cuba-denim-400.jpg 400w, ../tkan/wt-cuba/wt-cuba-denim-800.jpg 800w, ../tkan/wt-cuba/wt-cuba-denim-1000.jpg 1000w, ../tkan/wt-cuba/wt-cuba-denim-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Chokolate",
        "name": "wtdefiscuba",
        "h1": "wt-Cuba Chokolate",
        "nameId": "wt-cuba-chokolate",
        "samplePageUrl": "../samples/wt-cuba/wt-cuba-chokolate",
        "parentPageUrl": "../../material/wt-cuba",
        "previewUrl": "../../tkan/wt-cuba/wt-cuba-chokolate-400.jpg",
        "imgUrl": "../../tkan/wt-cuba/wt-cuba-chokolate.jpg",
        "img": "../../tkan/wt-cuba/wt-cuba-chokolate-400.jpg",
        "imgAlt": "Wt cuba chokolate",
        "imgTitle": "Wt cuba chokolate",
        "srcset": "../tkan/wt-cuba/wt-cuba-chokolate-400.jpg 400w, ../tkan/wt-cuba/wt-cuba-chokolate-800.jpg 800w, ../tkan/wt-cuba/wt-cuba-chokolate-1000.jpg 1000w, ../tkan/wt-cuba/wt-cuba-chokolate-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Beige",
        "name": "wtdefiscuba",
        "h1": "wt-Cuba Beige",
        "nameId": "wt-cuba-beige",
        "samplePageUrl": "../samples/wt-cuba/wt-cuba-beige",
        "parentPageUrl": "../../material/wt-cuba",
        "previewUrl": "../../tkan/wt-cuba/wt-cuba-beige-400.jpg",
        "imgUrl": "../../tkan/wt-cuba/wt-cuba-beige.jpg",
        "img": "../../tkan/wt-cuba/wt-cuba-beige-400.jpg",
        "imgAlt": "Wt cuba beige",
        "imgTitle": "Wt cuba beige",
        "srcset": "../tkan/wt-cuba/wt-cuba-beige-400.jpg 400w, ../tkan/wt-cuba/wt-cuba-beige-800.jpg 800w, ../tkan/wt-cuba/wt-cuba-beige-1000.jpg 1000w, ../tkan/wt-cuba/wt-cuba-beige-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Khaki",
        "name": "wtdefiscuba",
        "h1": "wt-Cuba Khaki",
        "nameId": "wt-cuba-khaki",
        "samplePageUrl": "../samples/wt-cuba/wt-cuba-khaki",
        "parentPageUrl": "../../material/wt-cuba",
        "previewUrl": "../../tkan/wt-cuba/wt-cuba-khaki-400.jpg",
        "imgUrl": "../../tkan/wt-cuba/wt-cuba-khaki.jpg",
        "img": "../../tkan/wt-cuba/wt-cuba-khaki-400.jpg",
        "imgAlt": "Wt cuba khaki",
        "imgTitle": "Wt cuba khaki",
        "srcset": "../tkan/wt-cuba/wt-cuba-khaki-400.jpg 400w, ../tkan/wt-cuba/wt-cuba-khaki-800.jpg 800w, ../tkan/wt-cuba/wt-cuba-khaki-1000.jpg 1000w, ../tkan/wt-cuba/wt-cuba-khaki-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Grass",
        "name": "wtdefiscuba",
        "h1": "wt-Cuba Grass",
        "nameId": "wt-cuba-grass",
        "samplePageUrl": "../samples/wt-cuba/wt-cuba-grass",
        "parentPageUrl": "../../material/wt-cuba",
        "previewUrl": "../../tkan/wt-cuba/wt-cuba-grass-400.jpg",
        "imgUrl": "../../tkan/wt-cuba/wt-cuba-grass.jpg",
        "img": "../../tkan/wt-cuba/wt-cuba-grass-400.jpg",
        "imgAlt": "Wt cuba grass",
        "imgTitle": "Wt cuba grass",
        "srcset": "../tkan/wt-cuba/wt-cuba-grass-400.jpg 400w, ../tkan/wt-cuba/wt-cuba-grass-800.jpg 800w, ../tkan/wt-cuba/wt-cuba-grass-1000.jpg 1000w, ../tkan/wt-cuba/wt-cuba-grass-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Verbena",
        "name": "wtdefiscuba",
        "h1": "wt-Cuba Verbena",
        "nameId": "wt-cuba-verbena",
        "samplePageUrl": "../samples/wt-cuba/wt-cuba-verbena",
        "parentPageUrl": "../../material/wt-cuba",
        "previewUrl": "../../tkan/wt-cuba/wt-cuba-verbena-400.jpg",
        "imgUrl": "../../tkan/wt-cuba/wt-cuba-verbena.jpg",
        "img": "../../tkan/wt-cuba/wt-cuba-verbena-400.jpg",
        "imgAlt": "Wt cuba verbena",
        "imgTitle": "Wt cuba verbena",
        "srcset": "../tkan/wt-cuba/wt-cuba-verbena-400.jpg 400w, ../tkan/wt-cuba/wt-cuba-verbena-800.jpg 800w, ../tkan/wt-cuba/wt-cuba-verbena-1000.jpg 1000w, ../tkan/wt-cuba/wt-cuba-verbena-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Berry",
        "name": "wtdefiscuba",
        "h1": "wt-Cuba Berry",
        "nameId": "wt-cuba-berry",
        "samplePageUrl": "../samples/wt-cuba/wt-cuba-berry",
        "parentPageUrl": "../../material/wt-cuba",
        "previewUrl": "../../tkan/wt-cuba/wt-cuba-berry-400.jpg",
        "imgUrl": "../../tkan/wt-cuba/wt-cuba-berry.jpg",
        "img": "../../tkan/wt-cuba/wt-cuba-berry-400.jpg",
        "imgAlt": "Wt cuba berry",
        "imgTitle": "Wt cuba berry",
        "srcset": "../tkan/wt-cuba/wt-cuba-berry-400.jpg 400w, ../tkan/wt-cuba/wt-cuba-berry-800.jpg 800w, ../tkan/wt-cuba/wt-cuba-berry-1000.jpg 1000w, ../tkan/wt-cuba/wt-cuba-berry-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Sunny",
        "name": "wtdefiscuba",
        "h1": "wt-Cuba Sunny",
        "nameId": "wt-cuba-sunny",
        "samplePageUrl": "../samples/wt-cuba/wt-cuba-sunny",
        "parentPageUrl": "../../material/wt-cuba",
        "previewUrl": "../../tkan/wt-cuba/wt-cuba-sunny-400.jpg",
        "imgUrl": "../../tkan/wt-cuba/wt-cuba-sunny.jpg",
        "img": "../../tkan/wt-cuba/wt-cuba-sunny-400.jpg",
        "imgAlt": "Wt cuba sunny",
        "imgTitle": "Wt cuba sunny",
        "srcset": "../tkan/wt-cuba/wt-cuba-sunny-400.jpg 400w, ../tkan/wt-cuba/wt-cuba-sunny-800.jpg 800w, ../tkan/wt-cuba/wt-cuba-sunny-1000.jpg 1000w, ../tkan/wt-cuba/wt-cuba-sunny-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Lime",
        "name": "wtdefiscuba",
        "h1": "wt-Cuba Lime",
        "nameId": "wt-cuba-lime",
        "samplePageUrl": "../samples/wt-cuba/wt-cuba-lime",
        "parentPageUrl": "../../material/wt-cuba",
        "previewUrl": "../../tkan/wt-cuba/wt-cuba-lime-400.jpg",
        "imgUrl": "../../tkan/wt-cuba/wt-cuba-lime.jpg",
        "img": "../../tkan/wt-cuba/wt-cuba-lime-400.jpg",
        "imgAlt": "Wt cuba lime",
        "imgTitle": "Wt cuba lime",
        "srcset": "../tkan/wt-cuba/wt-cuba-lime-400.jpg 400w, ../tkan/wt-cuba/wt-cuba-lime-800.jpg 800w, ../tkan/wt-cuba/wt-cuba-lime-1000.jpg 1000w, ../tkan/wt-cuba/wt-cuba-lime-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Aquamarine",
        "name": "wtdefiscuba",
        "h1": "wt-Cuba Aquamarine",
        "nameId": "wt-cuba-aquamarine",
        "samplePageUrl": "../samples/wt-cuba/wt-cuba-aquamarine",
        "parentPageUrl": "../../material/wt-cuba",
        "previewUrl": "../../tkan/wt-cuba/wt-cuba-aquamarine-400.jpg",
        "imgUrl": "../../tkan/wt-cuba/wt-cuba-aquamarine.jpg",
        "img": "../../tkan/wt-cuba/wt-cuba-aquamarine-400.jpg",
        "imgAlt": "Wt cuba aquamarine",
        "imgTitle": "Wt cuba aquamarine",
        "srcset": "../tkan/wt-cuba/wt-cuba-aquamarine-400.jpg 400w, ../tkan/wt-cuba/wt-cuba-aquamarine-800.jpg 800w, ../tkan/wt-cuba/wt-cuba-aquamarine-1000.jpg 1000w, ../tkan/wt-cuba/wt-cuba-aquamarine-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Deepsea",
        "name": "wtdefiscuba",
        "h1": "wt-Cuba Deepsea",
        "nameId": "wt-cuba-deepsea",
        "samplePageUrl": "../samples/wt-cuba/wt-cuba-deep-sea",
        "parentPageUrl": "../../material/wt-cuba",
        "previewUrl": "../../tkan/wt-cuba/wt-cuba-deep-sea-400.jpg",
        "imgUrl": "../../tkan/wt-cuba/wt-cuba-deep-sea.jpg",
        "img": "../../tkan/wt-cuba/wt-cuba-deep-sea-400.jpg",
        "imgAlt": "Wt cuba deep sea",
        "imgTitle": "Wt cuba deep sea",
        "srcset": "../tkan/wt-cuba/wt-cuba-deep-sea-400.jpg 400w, ../tkan/wt-cuba/wt-cuba-deep-sea-800.jpg 800w, ../tkan/wt-cuba/wt-cuba-deep-sea-1000.jpg 1000w, ../tkan/wt-cuba/wt-cuba-deep-sea-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Bluesky",
        "name": "wtdefiscuba",
        "h1": "wt-Cuba Bluesky",
        "nameId": "wt-cuba-bluesky",
        "samplePageUrl": "../samples/wt-cuba/wt-cuba-blue-sky",
        "parentPageUrl": "../../material/wt-cuba",
        "previewUrl": "../../tkan/wt-cuba/wt-cuba-blue-sky-400.jpg",
        "imgUrl": "../../tkan/wt-cuba/wt-cuba-blue-sky.jpg",
        "img": "../../tkan/wt-cuba/wt-cuba-blue-sky-400.jpg",
        "imgAlt": "Wt cuba blue sky",
        "imgTitle": "Wt cuba blue sky",
        "srcset": "../tkan/wt-cuba/wt-cuba-blue-sky-400.jpg 400w, ../tkan/wt-cuba/wt-cuba-blue-sky-800.jpg 800w, ../tkan/wt-cuba/wt-cuba-blue-sky-1000.jpg 1000w, ../tkan/wt-cuba/wt-cuba-blue-sky-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Icecream",
        "name": "wtdefiscuba",
        "h1": "wt-Cuba Icecream",
        "nameId": "wt-cuba-icecream",
        "samplePageUrl": "../samples/wt-cuba/wt-cuba-ice-cream",
        "parentPageUrl": "../../material/wt-cuba",
        "previewUrl": "../../tkan/wt-cuba/wt-cuba-ice-cream-400.jpg",
        "imgUrl": "../../tkan/wt-cuba/wt-cuba-ice-cream.jpg",
        "img": "../../tkan/wt-cuba/wt-cuba-ice-cream-400.jpg",
        "imgAlt": "Wt cuba ice cream",
        "imgTitle": "Wt cuba ice cream",
        "srcset": "../tkan/wt-cuba/wt-cuba-ice-cream-400.jpg 400w, ../tkan/wt-cuba/wt-cuba-ice-cream-800.jpg 800w, ../tkan/wt-cuba/wt-cuba-ice-cream-1000.jpg 1000w, ../tkan/wt-cuba/wt-cuba-ice-cream-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Silver",
        "name": "wtdefiscuba",
        "h1": "wt-Cuba Silver",
        "nameId": "wt-cuba-silver",
        "samplePageUrl": "../samples/wt-cuba/wt-cuba-silver",
        "parentPageUrl": "../../material/wt-cuba",
        "previewUrl": "../../tkan/wt-cuba/wt-cuba-silver-400.jpg",
        "imgUrl": "../../tkan/wt-cuba/wt-cuba-silver.jpg",
        "img": "../../tkan/wt-cuba/wt-cuba-silver-400.jpg",
        "imgAlt": "Wt cuba silver",
        "imgTitle": "Wt cuba silver",
        "srcset": "../tkan/wt-cuba/wt-cuba-silver-400.jpg 400w, ../tkan/wt-cuba/wt-cuba-silver-800.jpg 800w, ../tkan/wt-cuba/wt-cuba-silver-1000.jpg 1000w, ../tkan/wt-cuba/wt-cuba-silver-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Gray",
        "name": "wtdefiscuba",
        "h1": "wt-Cuba Gray",
        "nameId": "wt-cuba-gray",
        "samplePageUrl": "../samples/wt-cuba/wt-cuba-gray",
        "parentPageUrl": "../../material/wt-cuba",
        "previewUrl": "../../tkan/wt-cuba/wt-cuba-gray-400.jpg",
        "imgUrl": "../../tkan/wt-cuba/wt-cuba-gray.jpg",
        "img": "../../tkan/wt-cuba/wt-cuba-gray-400.jpg",
        "imgAlt": "Wt cuba gray",
        "imgTitle": "Wt cuba gray",
        "srcset": "../tkan/wt-cuba/wt-cuba-gray-400.jpg 400w, ../tkan/wt-cuba/wt-cuba-gray-800.jpg 800w, ../tkan/wt-cuba/wt-cuba-gray-1000.jpg 1000w, ../tkan/wt-cuba/wt-cuba-gray-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Humus",
        "name": "wtdefiscuba",
        "h1": "wt-Cuba Humus",
        "nameId": "wt-cuba-humus",
        "samplePageUrl": "../samples/wt-cuba/wt-cuba-humus",
        "parentPageUrl": "../../material/wt-cuba",
        "previewUrl": "../../tkan/wt-cuba/wt-cuba-humus-400.jpg",
        "imgUrl": "../../tkan/wt-cuba/wt-cuba-humus.jpg",
        "img": "../../tkan/wt-cuba/wt-cuba-humus-400.jpg",
        "imgAlt": "Wt cuba humus",
        "imgTitle": "Wt cuba humus",
        "srcset": "../tkan/wt-cuba/wt-cuba-humus-400.jpg 400w, ../tkan/wt-cuba/wt-cuba-humus-800.jpg 800w, ../tkan/wt-cuba/wt-cuba-humus-1000.jpg 1000w, ../tkan/wt-cuba/wt-cuba-humus-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Cream",
        "name": "wtdefiscuba",
        "h1": "wt-Cuba Cream",
        "nameId": "wt-cuba-cream",
        "samplePageUrl": "../samples/wt-cuba/wt-cuba-cream",
        "parentPageUrl": "../../material/wt-cuba",
        "previewUrl": "../../tkan/wt-cuba/wt-cuba-cream-400.jpg",
        "imgUrl": "../../tkan/wt-cuba/wt-cuba-cream.jpg",
        "img": "../../tkan/wt-cuba/wt-cuba-cream-400.jpg",
        "imgAlt": "Wt cuba cream",
        "imgTitle": "Wt cuba cream",
        "srcset": "../tkan/wt-cuba/wt-cuba-cream-400.jpg 400w, ../tkan/wt-cuba/wt-cuba-cream-800.jpg 800w, ../tkan/wt-cuba/wt-cuba-cream-1000.jpg 1000w, ../tkan/wt-cuba/wt-cuba-cream-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Milk",
        "name": "wtdefiscuba",
        "h1": "wt-Cuba Milk",
        "nameId": "wt-cuba-milk",
        "samplePageUrl": "../samples/wt-cuba/wt-cuba-milk",
        "parentPageUrl": "../../material/wt-cuba",
        "previewUrl": "../../tkan/wt-cuba/wt-cuba-milk-400.jpg",
        "imgUrl": "../../tkan/wt-cuba/wt-cuba-milk.jpg",
        "img": "../../tkan/wt-cuba/wt-cuba-milk-400.jpg",
        "imgAlt": "Wt cuba milk",
        "imgTitle": "Wt cuba milk",
        "srcset": "../tkan/wt-cuba/wt-cuba-milk-400.jpg 400w, ../tkan/wt-cuba/wt-cuba-milk-800.jpg 800w, ../tkan/wt-cuba/wt-cuba-milk-1000.jpg 1000w, ../tkan/wt-cuba/wt-cuba-milk-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      }
    ],
    "previewImg": "../tkan/wt-cuba/preview.jpg",
    "status": true
  },
  {
    "id": "108",
    "nameId": "oxforddefis600d",
    "caption": "Oxford 600d",
    "pageUrl": "oxford-600d",
    "cost": 480,
    "unit": "погонный метр",
    "seller": "",
    "country": "Китай",
    "description": "<p><ul><li>Влагоотталкивающий материал. Защищает от дождя.</li>\r\n<li>Термостойкий. Выдерживает перепады температур от -50 до +110 градусов, защищает от холода и жары.</li>\r\n<li>Не пропускает холодный воздух. Защищает от ветра.</li>\r\n<li>Грязеотталкивающий. Любые пятна легко отмываются.</li>\r\n<li>Долговечный. OXFORD 600D не подвержен линьке, пилинга, истиранию.</li>\r\n<li>Прочный. Не рвется, не расходится по шву.</li>\r\n<li>Простой в уходе. Ткань легко чистится, при правильной сушке не мнется.</li></ul></p>",
    "martindale": "30000",
    "content": [
      "полиэcтер-100%"
    ],
    "typeEng": "OUTDOOR",
    "typeRus": "Для улицы",
    "rapport": "0",
    "overlock": "0",
    "sample": [
      {
        "caption": "Light green",
        "name": "oxforddefis600d",
        "h1": "Oxford-600d Light green",
        "nameId": "oxford-600d-light-green",
        "samplePageUrl": "../samples/oxford-600d/oxford-600d-light-green",
        "parentPageUrl": "../../material/oxford-600d",
        "previewUrl": "../../tkan/oxford-600d/oxford-600d-light-green-400.jpg",
        "imgUrl": "../../tkan/oxford-600d/oxford-600d-light-green.jpg",
        "img": "../../tkan/oxford-600d/oxford-600d-light-green-400.jpg",
        "imgAlt": "Oxford 600d light green",
        "imgTitle": "Oxford 600d light green",
        "srcset": "../tkan/oxford-600d/oxford-600d-light-green-400.jpg 400w, ../tkan/oxford-600d/oxford-600d-light-green-800.jpg 800w, ../tkan/oxford-600d/oxford-600d-light-green-1000.jpg 1000w, ../tkan/oxford-600d/oxford-600d-light-green-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Yellow",
        "name": "oxforddefis600d",
        "h1": "Oxford-600d Yellow",
        "nameId": "oxford-600d-yellow",
        "samplePageUrl": "../samples/oxford-600d/oxford-600d-yellow",
        "parentPageUrl": "../../material/oxford-600d",
        "previewUrl": "../../tkan/oxford-600d/oxford-600d-yellow-400.jpg",
        "imgUrl": "../../tkan/oxford-600d/oxford-600d-yellow.jpg",
        "img": "../../tkan/oxford-600d/oxford-600d-yellow-400.jpg",
        "imgAlt": "Oxford 600d yellow",
        "imgTitle": "Oxford 600d yellow",
        "srcset": "../tkan/oxford-600d/oxford-600d-yellow-400.jpg 400w, ../tkan/oxford-600d/oxford-600d-yellow-800.jpg 800w, ../tkan/oxford-600d/oxford-600d-yellow-1000.jpg 1000w, ../tkan/oxford-600d/oxford-600d-yellow-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "White",
        "name": "oxforddefis600d",
        "h1": "Oxford-600d White",
        "nameId": "oxford-600d-white",
        "samplePageUrl": "../samples/oxford-600d/oxford-600d-white",
        "parentPageUrl": "../../material/oxford-600d",
        "previewUrl": "../../tkan/oxford-600d/oxford-600d-white-400.jpg",
        "imgUrl": "../../tkan/oxford-600d/oxford-600d-white.jpg",
        "img": "../../tkan/oxford-600d/oxford-600d-white-400.jpg",
        "imgAlt": "Oxford 600d white",
        "imgTitle": "Oxford 600d white",
        "srcset": "../tkan/oxford-600d/oxford-600d-white-400.jpg 400w, ../tkan/oxford-600d/oxford-600d-white-800.jpg 800w, ../tkan/oxford-600d/oxford-600d-white-1000.jpg 1000w, ../tkan/oxford-600d/oxford-600d-white-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Purple",
        "name": "oxforddefis600d",
        "h1": "Oxford-600d Purple",
        "nameId": "oxford-600d-purple",
        "samplePageUrl": "../samples/oxford-600d/oxford-600d-purple",
        "parentPageUrl": "../../material/oxford-600d",
        "previewUrl": "../../tkan/oxford-600d/oxford-600d-purple-400.jpg",
        "imgUrl": "../../tkan/oxford-600d/oxford-600d-purple.jpg",
        "img": "../../tkan/oxford-600d/oxford-600d-purple-400.jpg",
        "imgAlt": "Oxford 600d purple",
        "imgTitle": "Oxford 600d purple",
        "srcset": "../tkan/oxford-600d/oxford-600d-purple-400.jpg 400w, ../tkan/oxford-600d/oxford-600d-purple-800.jpg 800w, ../tkan/oxford-600d/oxford-600d-purple-1000.jpg 1000w, ../tkan/oxford-600d/oxford-600d-purple-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Turquoise",
        "name": "oxforddefis600d",
        "h1": "Oxford-600d Turquoise",
        "nameId": "oxford-600d-turquoise",
        "samplePageUrl": "../samples/oxford-600d/oxford-600d-turquoise",
        "parentPageUrl": "../../material/oxford-600d",
        "previewUrl": "../../tkan/oxford-600d/oxford-600d-turquoise-400.jpg",
        "imgUrl": "../../tkan/oxford-600d/oxford-600d-turquoise.jpg",
        "img": "../../tkan/oxford-600d/oxford-600d-turquoise-400.jpg",
        "imgAlt": "Oxford 600d turquoise",
        "imgTitle": "Oxford 600d turquoise",
        "srcset": "../tkan/oxford-600d/oxford-600d-turquoise-400.jpg 400w, ../tkan/oxford-600d/oxford-600d-turquoise-800.jpg 800w, ../tkan/oxford-600d/oxford-600d-turquoise-1000.jpg 1000w, ../tkan/oxford-600d/oxford-600d-turquoise-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Sea wave",
        "name": "oxforddefis600d",
        "h1": "Oxford-600d Sea wave",
        "nameId": "oxford-600d-sea-wave",
        "samplePageUrl": "../samples/oxford-600d/oxford-600d-sea-wave",
        "parentPageUrl": "../../material/oxford-600d",
        "previewUrl": "../../tkan/oxford-600d/oxford-600d-sea-wave-400.jpg",
        "imgUrl": "../../tkan/oxford-600d/oxford-600d-sea-wave.jpg",
        "img": "../../tkan/oxford-600d/oxford-600d-sea-wave-400.jpg",
        "imgAlt": "Oxford 600d sea wave",
        "imgTitle": "Oxford 600d sea wave",
        "srcset": "../tkan/oxford-600d/oxford-600d-sea-wave-400.jpg 400w, ../tkan/oxford-600d/oxford-600d-sea-wave-800.jpg 800w, ../tkan/oxford-600d/oxford-600d-sea-wave-1000.jpg 1000w, ../tkan/oxford-600d/oxford-600d-sea-wave-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Red",
        "name": "oxforddefis600d",
        "h1": "Oxford-600d Red",
        "nameId": "oxford-600d-red",
        "samplePageUrl": "../samples/oxford-600d/oxford-600d-red",
        "parentPageUrl": "../../material/oxford-600d",
        "previewUrl": "../../tkan/oxford-600d/oxford-600d-red-400.jpg",
        "imgUrl": "../../tkan/oxford-600d/oxford-600d-red.jpg",
        "img": "../../tkan/oxford-600d/oxford-600d-red-400.jpg",
        "imgAlt": "Oxford 600d red",
        "imgTitle": "Oxford 600d red",
        "srcset": "../tkan/oxford-600d/oxford-600d-red-400.jpg 400w, ../tkan/oxford-600d/oxford-600d-red-800.jpg 800w, ../tkan/oxford-600d/oxford-600d-red-1000.jpg 1000w, ../tkan/oxford-600d/oxford-600d-red-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Ultraviolet",
        "name": "oxforddefis600d",
        "h1": "Oxford-600d Ultraviolet",
        "nameId": "oxford-600d-ultraviolet",
        "samplePageUrl": "../samples/oxford-600d/oxford-600d-ultraviolet",
        "parentPageUrl": "../../material/oxford-600d",
        "previewUrl": "../../tkan/oxford-600d/oxford-600d-ultraviolet-400.jpg",
        "imgUrl": "../../tkan/oxford-600d/oxford-600d-ultraviolet.jpg",
        "img": "../../tkan/oxford-600d/oxford-600d-ultraviolet-400.jpg",
        "imgAlt": "Oxford 600d ultraviolet",
        "imgTitle": "Oxford 600d ultraviolet",
        "srcset": "../tkan/oxford-600d/oxford-600d-ultraviolet-400.jpg 400w, ../tkan/oxford-600d/oxford-600d-ultraviolet-800.jpg 800w, ../tkan/oxford-600d/oxford-600d-ultraviolet-1000.jpg 1000w, ../tkan/oxford-600d/oxford-600d-ultraviolet-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Pink",
        "name": "oxforddefis600d",
        "h1": "Oxford-600d Pink",
        "nameId": "oxford-600d-pink",
        "samplePageUrl": "../samples/oxford-600d/oxford-600d-pink",
        "parentPageUrl": "../../material/oxford-600d",
        "previewUrl": "../../tkan/oxford-600d/oxford-600d-pink-400.jpg",
        "imgUrl": "../../tkan/oxford-600d/oxford-600d-pink.jpg",
        "img": "../../tkan/oxford-600d/oxford-600d-pink-400.jpg",
        "imgAlt": "Oxford 600d pink",
        "imgTitle": "Oxford 600d pink",
        "srcset": "../tkan/oxford-600d/oxford-600d-pink-400.jpg 400w, ../tkan/oxford-600d/oxford-600d-pink-800.jpg 800w, ../tkan/oxford-600d/oxford-600d-pink-1000.jpg 1000w, ../tkan/oxford-600d/oxford-600d-pink-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Orange",
        "name": "oxforddefis600d",
        "h1": "Oxford-600d Orange",
        "nameId": "oxford-600d-orange",
        "samplePageUrl": "../samples/oxford-600d/oxford-600d-orange",
        "parentPageUrl": "../../material/oxford-600d",
        "previewUrl": "../../tkan/oxford-600d/oxford-600d-orange-400.jpg",
        "imgUrl": "../../tkan/oxford-600d/oxford-600d-orange.jpg",
        "img": "../../tkan/oxford-600d/oxford-600d-orange-400.jpg",
        "imgAlt": "Oxford 600d orange",
        "imgTitle": "Oxford 600d orange",
        "srcset": "../tkan/oxford-600d/oxford-600d-orange-400.jpg 400w, ../tkan/oxford-600d/oxford-600d-orange-800.jpg 800w, ../tkan/oxford-600d/oxford-600d-orange-1000.jpg 1000w, ../tkan/oxford-600d/oxford-600d-orange-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Ocean",
        "name": "oxforddefis600d",
        "h1": "Oxford-600d Ocean",
        "nameId": "oxford-600d-ocean",
        "samplePageUrl": "../samples/oxford-600d/oxford-600d-ocean",
        "parentPageUrl": "../../material/oxford-600d",
        "previewUrl": "../../tkan/oxford-600d/oxford-600d-ocean-400.jpg",
        "imgUrl": "../../tkan/oxford-600d/oxford-600d-ocean.jpg",
        "img": "../../tkan/oxford-600d/oxford-600d-ocean-400.jpg",
        "imgAlt": "Oxford 600d ocean",
        "imgTitle": "Oxford 600d ocean",
        "srcset": "../tkan/oxford-600d/oxford-600d-ocean-400.jpg 400w, ../tkan/oxford-600d/oxford-600d-ocean-800.jpg 800w, ../tkan/oxford-600d/oxford-600d-ocean-1000.jpg 1000w, ../tkan/oxford-600d/oxford-600d-ocean-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Neon yellow",
        "name": "oxforddefis600d",
        "h1": "Oxford-600d Neon yellow",
        "nameId": "oxford-600d-neon-yellow",
        "samplePageUrl": "../samples/oxford-600d/oxford-600d-neon-yellow",
        "parentPageUrl": "../../material/oxford-600d",
        "previewUrl": "../../tkan/oxford-600d/oxford-600d-neon-yellow-400.jpg",
        "imgUrl": "../../tkan/oxford-600d/oxford-600d-neon-yellow.jpg",
        "img": "../../tkan/oxford-600d/oxford-600d-neon-yellow-400.jpg",
        "imgAlt": "Oxford 600d neon yellow",
        "imgTitle": "Oxford 600d neon yellow",
        "srcset": "../tkan/oxford-600d/oxford-600d-neon-yellow-400.jpg 400w, ../tkan/oxford-600d/oxford-600d-neon-yellow-800.jpg 800w, ../tkan/oxford-600d/oxford-600d-neon-yellow-1000.jpg 1000w, ../tkan/oxford-600d/oxford-600d-neon-yellow-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Navy",
        "name": "oxforddefis600d",
        "h1": "Oxford-600d Navy",
        "nameId": "oxford-600d-navy",
        "samplePageUrl": "../samples/oxford-600d/oxford-600d-navy",
        "parentPageUrl": "../../material/oxford-600d",
        "previewUrl": "../../tkan/oxford-600d/oxford-600d-navy-400.jpg",
        "imgUrl": "../../tkan/oxford-600d/oxford-600d-navy.jpg",
        "img": "../../tkan/oxford-600d/oxford-600d-navy-400.jpg",
        "imgAlt": "Oxford 600d navy",
        "imgTitle": "Oxford 600d navy",
        "srcset": "../tkan/oxford-600d/oxford-600d-navy-400.jpg 400w, ../tkan/oxford-600d/oxford-600d-navy-800.jpg 800w, ../tkan/oxford-600d/oxford-600d-navy-1000.jpg 1000w, ../tkan/oxford-600d/oxford-600d-navy-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Light beige",
        "name": "oxforddefis600d",
        "h1": "Oxford-600d Light beige",
        "nameId": "oxford-600d-light-beige",
        "samplePageUrl": "../samples/oxford-600d/oxford-600d-light-beige",
        "parentPageUrl": "../../material/oxford-600d",
        "previewUrl": "../../tkan/oxford-600d/oxford-600d-light-beige-400.jpg",
        "imgUrl": "../../tkan/oxford-600d/oxford-600d-light-beige.jpg",
        "img": "../../tkan/oxford-600d/oxford-600d-light-beige-400.jpg",
        "imgAlt": "Oxford 600d light beige",
        "imgTitle": "Oxford 600d light beige",
        "srcset": "../tkan/oxford-600d/oxford-600d-light-beige-400.jpg 400w, ../tkan/oxford-600d/oxford-600d-light-beige-800.jpg 800w, ../tkan/oxford-600d/oxford-600d-light-beige-1000.jpg 1000w, ../tkan/oxford-600d/oxford-600d-light-beige-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Khaki",
        "name": "oxforddefis600d",
        "h1": "Oxford-600d Khaki",
        "nameId": "oxford-600d-khaki",
        "samplePageUrl": "../samples/oxford-600d/oxford-600d-khaki",
        "parentPageUrl": "../../material/oxford-600d",
        "previewUrl": "../../tkan/oxford-600d/oxford-600d-khaki-400.jpg",
        "imgUrl": "../../tkan/oxford-600d/oxford-600d-khaki.jpg",
        "img": "../../tkan/oxford-600d/oxford-600d-khaki-400.jpg",
        "imgAlt": "Oxford 600d khaki",
        "imgTitle": "Oxford 600d khaki",
        "srcset": "../tkan/oxford-600d/oxford-600d-khaki-400.jpg 400w, ../tkan/oxford-600d/oxford-600d-khaki-800.jpg 800w, ../tkan/oxford-600d/oxford-600d-khaki-1000.jpg 1000w, ../tkan/oxford-600d/oxford-600d-khaki-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Grey",
        "name": "oxforddefis600d",
        "h1": "Oxford-600d Grey",
        "nameId": "oxford-600d-grey",
        "samplePageUrl": "../samples/oxford-600d/oxford-600d-grey",
        "parentPageUrl": "../../material/oxford-600d",
        "previewUrl": "../../tkan/oxford-600d/oxford-600d-grey-400.jpg",
        "imgUrl": "../../tkan/oxford-600d/oxford-600d-grey.jpg",
        "img": "../../tkan/oxford-600d/oxford-600d-grey-400.jpg",
        "imgAlt": "Oxford 600d grey",
        "imgTitle": "Oxford 600d grey",
        "srcset": "../tkan/oxford-600d/oxford-600d-grey-400.jpg 400w, ../tkan/oxford-600d/oxford-600d-grey-800.jpg 800w, ../tkan/oxford-600d/oxford-600d-grey-1000.jpg 1000w, ../tkan/oxford-600d/oxford-600d-grey-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Green",
        "name": "oxforddefis600d",
        "h1": "Oxford-600d Green",
        "nameId": "oxford-600d-green",
        "samplePageUrl": "../samples/oxford-600d/oxford-600d-green",
        "parentPageUrl": "../../material/oxford-600d",
        "previewUrl": "../../tkan/oxford-600d/oxford-600d-green-400.jpg",
        "imgUrl": "../../tkan/oxford-600d/oxford-600d-green.jpg",
        "img": "../../tkan/oxford-600d/oxford-600d-green-400.jpg",
        "imgAlt": "Oxford 600d green",
        "imgTitle": "Oxford 600d green",
        "srcset": "../tkan/oxford-600d/oxford-600d-green-400.jpg 400w, ../tkan/oxford-600d/oxford-600d-green-800.jpg 800w, ../tkan/oxford-600d/oxford-600d-green-1000.jpg 1000w, ../tkan/oxford-600d/oxford-600d-green-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Green apple",
        "name": "oxforddefis600d",
        "h1": "Oxford-600d Green apple",
        "nameId": "oxford-600d-green-apple",
        "samplePageUrl": "../samples/oxford-600d/oxford-600d-green-apple",
        "parentPageUrl": "../../material/oxford-600d",
        "previewUrl": "../../tkan/oxford-600d/oxford-600d-green-apple-400.jpg",
        "imgUrl": "../../tkan/oxford-600d/oxford-600d-green-apple.jpg",
        "img": "../../tkan/oxford-600d/oxford-600d-green-apple-400.jpg",
        "imgAlt": "Oxford 600d green apple",
        "imgTitle": "Oxford 600d green apple",
        "srcset": "../tkan/oxford-600d/oxford-600d-green-apple-400.jpg 400w, ../tkan/oxford-600d/oxford-600d-green-apple-800.jpg 800w, ../tkan/oxford-600d/oxford-600d-green-apple-1000.jpg 1000w, ../tkan/oxford-600d/oxford-600d-green-apple-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Dark grey",
        "name": "oxforddefis600d",
        "h1": "Oxford-600d Dark grey",
        "nameId": "oxford-600d-dark-grey",
        "samplePageUrl": "../samples/oxford-600d/oxford-600d-dark-grey",
        "parentPageUrl": "../../material/oxford-600d",
        "previewUrl": "../../tkan/oxford-600d/oxford-600d-dark-grey-400.jpg",
        "imgUrl": "../../tkan/oxford-600d/oxford-600d-dark-grey.jpg",
        "img": "../../tkan/oxford-600d/oxford-600d-dark-grey-400.jpg",
        "imgAlt": "Oxford 600d dark grey",
        "imgTitle": "Oxford 600d dark grey",
        "srcset": "../tkan/oxford-600d/oxford-600d-dark-grey-400.jpg 400w, ../tkan/oxford-600d/oxford-600d-dark-grey-800.jpg 800w, ../tkan/oxford-600d/oxford-600d-dark-grey-1000.jpg 1000w, ../tkan/oxford-600d/oxford-600d-dark-grey-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Dark blue",
        "name": "oxforddefis600d",
        "h1": "Oxford-600d Dark blue",
        "nameId": "oxford-600d-dark-blue",
        "samplePageUrl": "../samples/oxford-600d/oxford-600d-dark-blue",
        "parentPageUrl": "../../material/oxford-600d",
        "previewUrl": "../../tkan/oxford-600d/oxford-600d-dark-blue-400.jpg",
        "imgUrl": "../../tkan/oxford-600d/oxford-600d-dark-blue.jpg",
        "img": "../../tkan/oxford-600d/oxford-600d-dark-blue-400.jpg",
        "imgAlt": "Oxford 600d dark blue",
        "imgTitle": "Oxford 600d dark blue",
        "srcset": "../tkan/oxford-600d/oxford-600d-dark-blue-400.jpg 400w, ../tkan/oxford-600d/oxford-600d-dark-blue-800.jpg 800w, ../tkan/oxford-600d/oxford-600d-dark-blue-1000.jpg 1000w, ../tkan/oxford-600d/oxford-600d-dark-blue-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Cream",
        "name": "oxforddefis600d",
        "h1": "Oxford-600d Cream",
        "nameId": "oxford-600d-cream",
        "samplePageUrl": "../samples/oxford-600d/oxford-600d-cream",
        "parentPageUrl": "../../material/oxford-600d",
        "previewUrl": "../../tkan/oxford-600d/oxford-600d-cream-400.jpg",
        "imgUrl": "../../tkan/oxford-600d/oxford-600d-cream.jpg",
        "img": "../../tkan/oxford-600d/oxford-600d-cream-400.jpg",
        "imgAlt": "Oxford 600d cream",
        "imgTitle": "Oxford 600d cream",
        "srcset": "../tkan/oxford-600d/oxford-600d-cream-400.jpg 400w, ../tkan/oxford-600d/oxford-600d-cream-800.jpg 800w, ../tkan/oxford-600d/oxford-600d-cream-1000.jpg 1000w, ../tkan/oxford-600d/oxford-600d-cream-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Bright orange",
        "name": "oxforddefis600d",
        "h1": "Oxford-600d Bright orange",
        "nameId": "oxford-600d-bright-orange",
        "samplePageUrl": "../samples/oxford-600d/oxford-600d-bright-orange",
        "parentPageUrl": "../../material/oxford-600d",
        "previewUrl": "../../tkan/oxford-600d/oxford-600d-bright-orange-400.jpg",
        "imgUrl": "../../tkan/oxford-600d/oxford-600d-bright-orange.jpg",
        "img": "../../tkan/oxford-600d/oxford-600d-bright-orange-400.jpg",
        "imgAlt": "Oxford 600d bright orange",
        "imgTitle": "Oxford 600d bright orange",
        "srcset": "../tkan/oxford-600d/oxford-600d-bright-orange-400.jpg 400w, ../tkan/oxford-600d/oxford-600d-bright-orange-800.jpg 800w, ../tkan/oxford-600d/oxford-600d-bright-orange-1000.jpg 1000w, ../tkan/oxford-600d/oxford-600d-bright-orange-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Bordo",
        "name": "oxforddefis600d",
        "h1": "Oxford-600d Bordo",
        "nameId": "oxford-600d-bordo",
        "samplePageUrl": "../samples/oxford-600d/oxford-600d-bordo",
        "parentPageUrl": "../../material/oxford-600d",
        "previewUrl": "../../tkan/oxford-600d/oxford-600d-bordo-400.jpg",
        "imgUrl": "../../tkan/oxford-600d/oxford-600d-bordo.jpg",
        "img": "../../tkan/oxford-600d/oxford-600d-bordo-400.jpg",
        "imgAlt": "Oxford 600d bordo",
        "imgTitle": "Oxford 600d bordo",
        "srcset": "../tkan/oxford-600d/oxford-600d-bordo-400.jpg 400w, ../tkan/oxford-600d/oxford-600d-bordo-800.jpg 800w, ../tkan/oxford-600d/oxford-600d-bordo-1000.jpg 1000w, ../tkan/oxford-600d/oxford-600d-bordo-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Blue",
        "name": "oxforddefis600d",
        "h1": "Oxford-600d Blue",
        "nameId": "oxford-600d-blue",
        "samplePageUrl": "../samples/oxford-600d/oxford-600d-blue",
        "parentPageUrl": "../../material/oxford-600d",
        "previewUrl": "../../tkan/oxford-600d/oxford-600d-blue-400.jpg",
        "imgUrl": "../../tkan/oxford-600d/oxford-600d-blue.jpg",
        "img": "../../tkan/oxford-600d/oxford-600d-blue-400.jpg",
        "imgAlt": "Oxford 600d blue",
        "imgTitle": "Oxford 600d blue",
        "srcset": "../tkan/oxford-600d/oxford-600d-blue-400.jpg 400w, ../tkan/oxford-600d/oxford-600d-blue-800.jpg 800w, ../tkan/oxford-600d/oxford-600d-blue-1000.jpg 1000w, ../tkan/oxford-600d/oxford-600d-blue-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Black",
        "name": "oxforddefis600d",
        "h1": "Oxford-600d Black",
        "nameId": "oxford-600d-black",
        "samplePageUrl": "../samples/oxford-600d/oxford-600d-black",
        "parentPageUrl": "../../material/oxford-600d",
        "previewUrl": "../../tkan/oxford-600d/oxford-600d-black-400.jpg",
        "imgUrl": "../../tkan/oxford-600d/oxford-600d-black.jpg",
        "img": "../../tkan/oxford-600d/oxford-600d-black-400.jpg",
        "imgAlt": "Oxford 600d black",
        "imgTitle": "Oxford 600d black",
        "srcset": "../tkan/oxford-600d/oxford-600d-black-400.jpg 400w, ../tkan/oxford-600d/oxford-600d-black-800.jpg 800w, ../tkan/oxford-600d/oxford-600d-black-1000.jpg 1000w, ../tkan/oxford-600d/oxford-600d-black-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Beige",
        "name": "oxforddefis600d",
        "h1": "Oxford-600d Beige",
        "nameId": "oxford-600d-beige",
        "samplePageUrl": "../samples/oxford-600d/oxford-600d-beige",
        "parentPageUrl": "../../material/oxford-600d",
        "previewUrl": "../../tkan/oxford-600d/oxford-600d-beige-400.jpg",
        "imgUrl": "../../tkan/oxford-600d/oxford-600d-beige.jpg",
        "img": "../../tkan/oxford-600d/oxford-600d-beige-400.jpg",
        "imgAlt": "Oxford 600d beige",
        "imgTitle": "Oxford 600d beige",
        "srcset": "../tkan/oxford-600d/oxford-600d-beige-400.jpg 400w, ../tkan/oxford-600d/oxford-600d-beige-800.jpg 800w, ../tkan/oxford-600d/oxford-600d-beige-1000.jpg 1000w, ../tkan/oxford-600d/oxford-600d-beige-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Azur",
        "name": "oxforddefis600d",
        "h1": "Oxford-600d Azur",
        "nameId": "oxford-600d-azur",
        "samplePageUrl": "../samples/oxford-600d/oxford-600d-azur",
        "parentPageUrl": "../../material/oxford-600d",
        "previewUrl": "../../tkan/oxford-600d/oxford-600d-azur-400.jpg",
        "imgUrl": "../../tkan/oxford-600d/oxford-600d-azur.jpg",
        "img": "../../tkan/oxford-600d/oxford-600d-azur-400.jpg",
        "imgAlt": "Oxford 600d azur",
        "imgTitle": "Oxford 600d azur",
        "srcset": "../tkan/oxford-600d/oxford-600d-azur-400.jpg 400w, ../tkan/oxford-600d/oxford-600d-azur-800.jpg 800w, ../tkan/oxford-600d/oxford-600d-azur-1000.jpg 1000w, ../tkan/oxford-600d/oxford-600d-azur-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      },
      {
        "caption": "Aquablue",
        "name": "oxforddefis600d",
        "h1": "Oxford-600d Aquablue",
        "nameId": "oxford-600d-aquablue",
        "samplePageUrl": "../samples/oxford-600d/oxford-600d-aqua-blue",
        "parentPageUrl": "../../material/oxford-600d",
        "previewUrl": "../../tkan/oxford-600d/oxford-600d-aqua-blue-400.jpg",
        "imgUrl": "../../tkan/oxford-600d/oxford-600d-aqua-blue.jpg",
        "img": "../../tkan/oxford-600d/oxford-600d-aqua-blue-400.jpg",
        "imgAlt": "Oxford 600d aqua blue",
        "imgTitle": "Oxford 600d aqua blue",
        "srcset": "../tkan/oxford-600d/oxford-600d-aqua-blue-400.jpg 400w, ../tkan/oxford-600d/oxford-600d-aqua-blue-800.jpg 800w, ../tkan/oxford-600d/oxford-600d-aqua-blue-1000.jpg 1000w, ../tkan/oxford-600d/oxford-600d-aqua-blue-1200.jpg 1200w",
        "size": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, 100vw"
      }
    ],
    "previewImg": "../tkan/oxford-600d/preview.jpg",
    "status": true
  }
];
    const query = aq? 'https://oval-co.ru/loadmaterialsa' : 'https://oval-co.ru/loadmaterialsm'
    let res = await fetch(query)
    return await res.json()
}

const addToOrder =(material)=> {

    let p = createPillowFromControlls(material);


    let str = p.x + 'x' + p.y + 'x' + p.z + 'см - ' + p.count + 'шт = ' + roundToMultiple(p.cost, 1) + 'р.';

    let divOrder = document.createElement('div');
    divOrder.id = 'divOrder_' + divOrderIndex;
    divOrderIndex++;
    divOrder.classList.add('select13');
    divOrder.classList.add('select14');
    let span = document.createElement('span');
    span.textContent = str;
    span.setAttribute('data-value', roundToMultiple(p.cost, 1));
    span.setAttribute('data-pillow', 'pillow_' + pillowIndex);
    allPillows.set('pillow_' + pillowIndex, p);
    pillowIndex++;

    span.classList.add('toOrder');
    divOrder.insertAdjacentElement('beforeend', span);
    let button = document.createElement('button');
    button.classList.add('orangeDeleteButton');
    button.textContent = 'Удалить';

    button.addEventListener('click', (event) => {

        let divToRemove = event.target.parentElement;
        let span = divToRemove.firstChild;
        let pillowName = span.getAttribute('data-pillow');
        let mainDiv = event.target.parentElement.parentElement;
        mainDiv.removeChild(divToRemove);
        allPillows.delete(pillowName);
        //calculateTotalOrder();


    })
    divOrder.insertAdjacentElement('beforeend', button);
    document.querySelector('#addToOrder').insertAdjacentElement('afterend', divOrder)


    checkAllPillow();
    //calculateTotalOrder();



}

const calculateTotalOrder =()=> {
    if (allPillows.size == 0) {
        let d = document.querySelector('#dostavka');
        d.parentNode.removeChild(d);

    }
    let totalOrderCost = 0;
    let toOrder = document.querySelectorAll('.toOrder');
    toOrder.forEach(element => {
        totalOrderCost += Number.parseInt(element.getAttribute('data-value'));
    });
    let valueLabel = document.querySelector('#totalCost');
    valueLabel.textContent = totalOrderCost + 'р.';
    valueLabel.setAttribute('data-value', totalOrderCost)
}

const toOrder = ()=> {

    let label = document.querySelector('#totalCost');
    if (label.textContent == '0р.') {
        alert('В заказ нужно добавить хотя бы одну подушку');
        return;
    }

    let str = '';
    allPillows.forEach(element => {
        str += element.toString();
    });

    window.open('./smetaXL.html?S=' + str, '_blank')
}


const createPillowFromControlls = (materialsArr)=> {



    let x = Number.parseInt(document.querySelector('#selectWidth_selectButton_').getAttribute('data-value'));

    let y = Number.parseInt(document.querySelector('#selectHeigth_selectButton_').getAttribute('data-value'));

    let z = Number.parseInt(document.querySelector('#selectThickness_selectButton_').getAttribute('data-value'));

    let count = Number.parseInt(document.querySelector('#selectCount_selectButton_').getAttribute('data-value'));

    let makeFix = document.querySelector('#selectFix_selectButton_').getAttribute('data-value') != 'none' ? true : false;

    let makeTrim = document.querySelector('#selectTrim_selectButton_').getAttribute('data-value') != 'none' ? true : false;

    let id = document.querySelector('#selectFabrick_selectButton_').getAttribute('data-value')
    let curMaterial = getMaterialByIdFromArray(materialsArr, id)

    let buttonCount = Number.parseInt(document.querySelector('#selectButton_selectButton_').getAttribute('data-value'));

    let materialColor = document.querySelector('#selectColor_selectButton_').getAttribute('data-value')


    let materialType = curMaterial.type;

    return new PillowBase2(
        count,
        typeM.get(page).index,
        x,
        y,
        z,
        new Foam(true, document.querySelector('#selectFoam_selectButton_').getAttribute('data-value'), x, y, z, count),
        new Foam(false, 'none', x, y, z, 0),
        new Foam(false, 'none', x, y, z, 0),
        new Aselex(aq, x, y, z, 100, count),
        new CaseCover(aq, x, y, z, count),
        new MakePillow(true, x, y, z, count, typeM.get(page).index),
        new MakeCover(true, x, y, z, count, materialsArr, 'pillow', curMaterial.id),
        new MakeZip(true, x, count, materialType),

        new Trim(makeTrim, x, y, count, document.querySelector('#selectTrim_selectButton_').getAttribute('data-value'), 'pillow', materialType),

        new Fix(makeFix, x, count, document.querySelector('#selectFix_selectButton_').getAttribute('data-value')),

        new MakeButton(buttonCount, document.querySelector('#selectButton_selectButton_').getAttribute('data-value'), count,),

        new Fabrick(true, x, y, z, curMaterial.id, materialColor, count, makeTrim, materialsArr),
        materialsArr
    )
}

const checkAllPillow =()=> {
    let fValue = document.querySelector('#selectFabrick_selectButton_');
    let f = fValue.getAttribute('data-value') != '19' ? true : false;

    if (allPillows.size > 0 && f && !document.querySelector('#dostavka')) {
        if (f) {
            let div = document.createElement('div');
            div.id = 'dostavka';
            div.classList.add('select13');
            div.classList.add('select14');
            let span = document.createElement('span');
            span.textContent = 'Доставка ткани поставщиком ' + jobCost.dostavkaTkani + 'р';
            span.setAttribute('data-value', jobCost.dostavkaTkani);
            span.classList.add('toOrder');
            div.insertAdjacentElement('beforeend', span);
            document.querySelector('#divOrderCost').insertAdjacentElement('beforebegin', div);


        }
    }
}

const updateCalc=(material)=> {
    let p = createPillowFromControlls(material)
     document.querySelector('#cost').textContent = roundToMultiple(p.cost / 2, 1) + 'р';
}

const updateColor=(material)=> {


    let element = document.querySelector('#selectFabrick_selectButton_').getAttribute('data-value')
    let selectedMaterial = getMaterialByIdFromArray(material, element);


    let materialLink = document.querySelector('#materialLink');
    if (materialLink) {
        materialLink.href = selectedMaterial.sample[0].parentPageUrl;
        materialLink.querySelector('img').src = selectedMaterial.previewImg;

        if (selectedMaterial.id == '19') {
            materialLink.href = '';
            materialLink.querySelector('img').src = '../tkan/fabric-order/preview.jpg';
        }
        if (selectedMaterial.id == '95') {
            materialLink.href = '';
            materialLink.querySelector('img').src = '../tkan/leather-order/preview.jpg';
        }
        if (selectedMaterial.id == '96') {
            materialLink.href = '';
            materialLink.querySelector('img').src = '../tkan/fabric-rapport-order/preview.jpg';
        }
    }

    let map = new Map();
    selectedMaterial.sample.forEach(element => {
        map.set(element.caption, new SuperSelectItem(element.caption, element.caption, element.img))
    });
    
    selectColor.updateMap(map);
    document.querySelector('#selectColor_selectButton_').textContent = selectedMaterial.sample[0].caption + ' ▼';
    document.querySelector('#selectColor_selectButton_').setAttribute('data-value', selectedMaterial.sample[0].name)

}



const load = async () => {
    const material = await loadMaterials()
    material.sort(compare_price)

    let selectWidthMap = new Map();
    for (let index = 30; index < 351; index++) {
        selectWidthMap.set(index.toString(), new SuperSelectItem(index.toString() + 'см', index.toString(), ''))
    }

    let selectHeigthMap = new Map();
    for (let index = 30; index < 131; index++) {
        selectHeigthMap.set(index.toString(), new SuperSelectItem(index.toString() + 'см', index.toString(), ''))
    }

    let selectThicknessMap = new Map();
    for (let index = 3; index < 51; index++) {
        selectThicknessMap.set(index.toString(), new SuperSelectItem(index.toString() + 'см', index.toString(), ''))
    }
    let str;

    let selectFoamMap = new Map();
    str = 'Стандартный поролон ST2536';
    selectFoamMap.set(foamM.get('ST2536').name, new SuperSelectItem(str, foamM.get('ST2536').name, ''));
    str = 'Стандартный поролон ST3040';
    selectFoamMap.set(foamM.get('ST3040').name, new SuperSelectItem(str, foamM.get('ST3040').name, ''));
    str = 'Поролон с добавлением латекса HR3535';
    if (aq) { selectFoamMap.set(foamM.get('HR3535').name, new SuperSelectItem(str, foamM.get('HR3535').name, '')); }
    str = 'Плотный поролон EL4060';
    selectFoamMap.set(foamM.get('EL4060').name, new SuperSelectItem(str, foamM.get('EL4060').name, ''));

    if (aq) {
        str = 'Сверхплотный поролон вторичного вспенивания';
        selectFoamMap.set(foamM.get('PVV100').name, new SuperSelectItem(str, foamM.get('PVV100').name, ''));
    };
    if (aq) {
        str = 'Мягкий поролон S2525';
        selectFoamMap.set(foamM.get('S2525').name, new SuperSelectItem(str, foamM.get('S2525').name, ''));
    };
    if (aq) {
        str = 'Мягкий поролон с добавлением латекса LL5020';
        selectFoamMap.set(foamM.get('LL5020').name, new SuperSelectItem(str, foamM.get('LL5020').name, ''));
    };

    str = 'Поролоновая крошка';
    selectFoamMap.set(foamM.get('Поролоновая крошка').name, new SuperSelectItem(str, foamM.get('Поролоновая крошка').name, ''));

    str = 'Холлофайбер';
    selectFoamMap.set(foamM.get('Холлофайбер').name, new SuperSelectItem(str, foamM.get('Холлофайбер').name, ''));




    let selectFixMap = new Map();
    selectFixMap.set(fixM.get('none').name, new SuperSelectItem('Не нужно', fixM.get('none').name, '../img/none.jpg'));
    selectFixMap.set(fixM.get('velcro').name, new SuperSelectItem('Лента-липучка', fixM.get('velcro').name, '../img/fix_1.jpg'));
    selectFixMap.set(fixM.get('antislide').name, new SuperSelectItem('Приложить антислайд', fixM.get('antislide').name, '../img/fix_2.jpg'), 'подходит только для сидений');
    selectFixMap.set(fixM.get('tape2x').name, new SuperSelectItem('2 крепления на подушку', fixM.get('tape2x').name, '../img/fix_3.jpg'));
    selectFixMap.set(fixM.get('tape4x').name, new SuperSelectItem('4 крепления на подушку', fixM.get('tape4x').name, '../img/fix_5.jpg'));
    selectFixMap.set(fixM.get('zavyazka2x').name, new SuperSelectItem('2 завязки на подушку', fixM.get('zavyazka2x').name, '../img/fix_10.jpg'));
    selectFixMap.set(fixM.get('zavyazka4x').name, new SuperSelectItem('4 завязки на подушку', fixM.get('zavyazka4x').name, '../img/fix_11.jpg'));




    let selectTrimMap = new Map();
    if (aq) {
        selectTrimMap.set(trimM.get('singleString').name, new SuperSelectItem('Строчка', trimM.get('singleString').name, '../img/trim_4.jpg'));
    }
    else {
        selectTrimMap.set(trimM.get('none').name, new SuperSelectItem('Не нужно', trimM.get('none').name, '../img/none.jpg'));
    }

    if (aq) { selectTrimMap.set(trimM.get('doubleString').name, new SuperSelectItem('Двойная строчка', trimM.get('doubleString').name, '../img/trim_5.jpg')); };

    selectTrimMap.set(trimM.get('classic').name, new SuperSelectItem('Окантовка', trimM.get('classic').name, '../img/trim_7.jpg'));
    selectTrimMap.set(trimM.get('loft').name, new SuperSelectItem('Окантовка лофт', trimM.get('loft').name, '../img/trim_8.jpg'));

    if (aq) {
        selectTrimMap.set(trimM.get('fatKant').name, new SuperSelectItem('Толстый мягкий кант', trimM.get('fatKant').name, '../img/otdelka_8.jpg'));
    }

    if (aq) {
        selectTrimMap.set(trimM.get('vitoyShnur').name, new SuperSelectItem('Витой шнур', trimM.get('vitoyShnur').name, '../img/trim_10.jpg'));
    }

    let selectButtonMap = new Map();
    for (let index = 0; index < 101; index++) {
        selectButtonMap.set(index.toString(), new SuperSelectItem(index.toString() + 'шт', index.toString(), ''))
    }

    let selectMaterialMap = new Map();

    // if (!aq) {
    //     let idArr = [ '19','70', '27', '20', '32', '33', '37'];
    //     idArr.forEach((e, i) => {
    //         let obj = getMaterialByIdFromArray(material, idArr[i]);
    //         selectMaterialMap.set(obj.id, new SuperSelectItem(obj.caption + ' ' + obj.cost + 'р/м ' + obj.typeRus, obj.id, obj.previewImg))
    //     });
    // }

    // else {
        material.forEach((e, i) => {
            let obj = material[i];
            selectMaterialMap.set(obj.id, new SuperSelectItem(obj.caption + ' ' + obj.cost + 'р/м ' + obj.typeRus, obj.id, obj.previewImg));
        })


    // }




    let currentMaterialId = aq ? '66' : '20';

    let selectColorMap = new Map();
    let objj = getMaterialByIdFromArray(material, currentMaterialId);

    objj.sample.forEach(element => {
        selectColorMap.set(element.caption, new SuperSelectItem(element.caption, element.caption, '../tkan/' + objj.nameId + '/' + element.nameId + '.jpg'))
    });


    let selectCountMap = new Map();
    for (let index = 1; index < 101; index++) {
        selectCountMap.set(index.toString(), new SuperSelectItem(index + 'шт', index.toString(), ''))
    }



    let selectWidth = new SuperSelect('selectWidth', 'Ширина подушки', selectWidthMap, '60');
    let selectHeigth = new SuperSelect('selectHeigth', 'Высота/глубина подушки', selectHeigthMap, '60');
    let selectThickness = new SuperSelect('selectThickness', 'Толщина подушки', selectThicknessMap, '10');

    let selectFoam;
    if (aq) { selectFoam = new SuperSelect('selectFoam', 'Мягкий наполнитель', selectFoamMap, foamM.get('HR3535').name); }
    else {
        selectFoam = new SuperSelect('selectFoam', 'Мягкий наполнитель', selectFoamMap, foamM.get('ST3040').name);
    }


    let selectFix = new SuperSelect('selectFix', 'Фиксация на основании', selectFixMap, fixM.get('none').name);

    let selectTrim;
    if (aq) {
        selectTrim = new SuperSelect('selectTrim', 'Отделка', selectTrimMap, trimM.get('singleString').name);
    }
    else {
        selectTrim = new SuperSelect('selectTrim', 'Отделка', selectTrimMap, trimM.get('none').name);
    }

    let selectButton = new SuperSelect('selectButton', 'Добавить пуговицы', selectButtonMap, '0');

    let obj = getMaterialByIdFromArray(material, currentMaterialId);
    let selectFabrick = new SuperSelect('selectFabrick', 'Обивочный материал', selectMaterialMap, obj.id);




    let colorName = objj.sample[0].caption

    selectColor = new SuperSelect('selectColor', 'Цвет', selectColorMap, colorName);


    let selectCount = new SuperSelect('selectCount', 'Количество подушек', selectCountMap, '1');




    document.querySelectorAll('.menuClick').forEach(e => {
        e.addEventListener('click', ()=>{
            updateCalc(material)
        })
    });

    document.querySelectorAll('.whiteCheckButton').forEach(e => {
        e.addEventListener('click', ()=>{
            updateCalc(material)
        });
    });

    updateCalc(material);


    document.querySelector('#buttonAddToOrder').addEventListener('click', ()=>{
        addToOrder(material)}
    );

    document.querySelector('#selectFabrick_selectButton_').addEventListener('change', async() => {

        updateColor(material)
    });


    //document.querySelector('#toOrder').addEventListener('click', toOrder);


    
}

load()
