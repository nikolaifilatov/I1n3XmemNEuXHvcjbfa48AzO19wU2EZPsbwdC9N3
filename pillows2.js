
class Detail {
  constructor(s1, s2) {
    this.position_x = 0;
    this.position_y = 0;
    this.width = s1 / 5;
    this.height = s2 / 5;
  }
}

class SmetaStr{
  constructor(desc,unit,count,cost,total,bold = false, italic = false, color = 'black',backgroundColor = 'white'){
    this.bold = bold;
    this.italic = italic;
    this.color = color;
    this.backgroundColor = backgroundColor;
    this.val = [desc, unit, count, cost, total];
  }
}


class Foam{

  constructor(make, name, x, y, z, pillowCount,type = 'pillow' ){
    this.make = make;
    this.foam = foamM.get(name);
    this.name = this.foam.name;
    this.z = z;
    this.count = Number.parseFloat((roundToMultiple(x * y / 20000, 0.1) * pillowCount).toFixed(1));
    this.listCost = this.foam.cost * z;
    this.totalCost = roundToMultiple(this.count * this.listCost,1);


    if (name == 'Холлофайбер'){
      x/=100;
      y/=100;
      z/=100;
      this.count = Number.parseFloat((roundToMultiple(x * y * z / 0.04 * 2.4, 0.1) * pillowCount).toFixed(1));
      
      
      if(type == 'dekor'){
        this.count = Number.parseFloat((roundToMultiple(x * y * z / 0.03 * 0.5, 0.1) * pillowCount).toFixed(1));
      }


      this.fiberCost = foamM.get('Холлофайбер').cost;
      this.totalCost = Number.parseInt((this.count * this.fiberCost ).toFixed(0));
    }

    if (name == 'Поролоновая крошка') {
      x /= 100;
      y /= 100;
      z /= 100;
      this.count = Number.parseFloat(roundToMultiple((x * y * z / 0.04 * 1.5) * pillowCount, 0.1).toFixed(1));

      if (type == 'dekor') {
        this.count = Number.parseFloat((roundToMultiple(x * y * z / 0.03 * 0.3, 0.1) * pillowCount).toFixed(1));
      }
      this.fiberCost = foamM.get('Поролоновая крошка').cost;
      this.totalCost = Number.parseInt((this.count * this.fiberCost).toFixed(0));
    }

    if (name == 'Смесь крошки и холлофайбера') {
      x /= 100;
      y /= 100;
      z /= 100;
      this.count = Number.parseFloat((roundToMultiple(x * y * z / 0.04 * 1.9,0.1) * pillowCount).toFixed(1));
      if (type == 'dekor') {
        this.count = Number.parseFloat((roundToMultiple(x * y * z / 0.03 * 0.4, 0.1) * pillowCount).toFixed(1));
      }
      this.fiberCost = foamM.get('Смесь крошки и холлофайбера').cost;
      this.totalCost = Number.parseInt((this.count * this.fiberCost ).toFixed(0));
    }

    


    if (!make) { this.totalCost = 0 };


    switch (name) {
      case 'Холлофайбер':
        this.strToOrder = new SmetaStr(this.foam.name + ' (шарики)', 'кг', this.count, this.fiberCost, this.totalCost);
      break;

      case 'Поролоновая крошка':
        this.strToOrder = new SmetaStr(this.foam.name , 'кг', this.count, this.fiberCost, this.totalCost);
        break;

      case 'Смесь крошки и холлофайбера':
        this.strToOrder = new SmetaStr(this.foam.name, 'кг', this.count, this.fiberCost, this.totalCost);
        break;

  default:
        this.strToOrder = new SmetaStr('Эластичный пенополиуретан марки ' + name + ' толщиной ' + z + 'см', 'лист', this.count, this.listCost, this.totalCost);
    break;
}



    
  }
}

class Aselex{
  constructor(make, x, y, z, h, pillowCount,type = 'pillow'){
    this.make = make;
    this.makeIndex = make ? 1 : 0;
    this.z = z;
    this.h = h;
    this.count = Number.parseFloat(roundToMultiple((((x + 10) * (y + 10)) + ((y + 10) * (z + 10)) + ((x + 10) * (z + 10))) * 2 / 14000 * pillowCount, 0.1).toFixed(2));

    if(type == 'valik'){
      this.count = Number.parseFloat(roundToMultiple((((x + 10) * (y *3.2 + 10)) + ((y + 10) * (y + 10)) + ((y + 10) * (y + 10)))/ 14000, 0.1).toFixed(2));
    }

    if (type == 'dekor') {
      this.count = Number.parseFloat(roundToMultiple(((x + 10) * (y + 10)) * 2 / 14000, 0.1).toFixed(2));
    }

    this.cost = materialCost['aselex' + h];
    this.totalCost = Number.parseInt((this.cost * this.count).toFixed(0));
    if (!make) { this.totalCost = 0 };
    this.strToOrder = new SmetaStr('Аселекс ' + h + 'гр/м','пог.м.',this.count,this.cost,this.totalCost)
  }
}

class CaseCover{
  constructor(make, x, y, z, pillowCount, type = 'pillow'){
    this.make = make;
    this.makeIndex = make ? 1 : 0;
    let maxSize = x;
    if(y>x){
      maxSize = y;
    }

    this.count = roundToMultiple(maxSize/100,0.1)+0.5;
    this.cost = materialCost.caseCoverCost;
    this.totalCost = Number.parseInt(this.cost * this.count * pillowCount.toFixed(0));

    

    if (type == 'dekor') { 
      this.makeCaseCut = jobCost.makeCaseCoverCutCost;
      this.makeCaseCutTotalCost = this.makeCaseCut * pillowCount;

      this.makeCaseSew = jobCost.makeCaseCoverSewCost;
      this.makeCaseSewTotalCoat = this.makeCaseSew * pillowCount;

      this.podkladkaCount = Number.parseFloat(roundToMultiple((x+10) / 100 * pillowCount,0.1).toFixed(1));
      this.podkladkaTotalCost = this.podkladkaCount * materialCost.podkladkaCost;

      this.totalCost = this.makeCaseCutTotalCost + this.makeCaseSewTotalCoat + this.podkladkaTotalCost;  
    }


    

    if (!make) { this.totalCost = 0};

    this.strToOrder = new SmetaStr('Внутренний чехол', 'шт', pillowCount, Number.parseInt((this.cost * this.count).toFixed(0)), this.totalCost)

    this.strToOrderPodkladkaCaseCover = new SmetaStr('Ткань подкладка', 'пог.м', this.podkladkaCount, materialCost.podkladkaCost, this.podkladkaTotalCost);

    this.strToOrderCaseCoverCut = new SmetaStr('Раскрой внутреннего чехла', 'шт', pillowCount, jobCost.makeCaseCoverCutCost, this.makeCaseCutTotalCost);

    this.strToOrderCaseCoverSew = new SmetaStr('Пошив внутреннего чехла', 'шт', pillowCount, jobCost.makeCaseCoverSewCost, this.makeCaseSewTotalCoat);


  }
}

class MakePillow{
  constructor(make, x, y, z, pillowCount, pillowType){
    this.make = make;
    this.makeIndex = make ? 1 : 0;
    this.cost =  roundToMultiple(jobCost.makePillow * (x + y + z), 10);
    if (pillowType == typeM.get('madagaskar').index){
      this.cost = this.cost / 2;
    }
    if (this.cost < 400){this.cost =400};
    if (pillowType == 8) { 
      this.cost =400;
    }
    if(pillowType == 5){
      this.cost = 250;
    }

    this.totalCost = this.cost * pillowCount;
    if (!make) { this.totalCost = 0 };
    this.strToOrder = new SmetaStr('Изготовление', 'шт', pillowCount, this.cost, this.totalCost);

    this.t = 0;
  }
  
}

class MakeCover{
  constructor(make, x, y, z, pillowCount, materialArray, type = 'pillow', fabrickId = 0) {
    this.make = make;
    this.fabrick = getMaterialByIdFromArray(materialArray,fabrickId);
    this.makeIndex = make ? 1 : 0;

    this.cutCost = roundToMultiple ((x + y + z) * jobCost.makePillowCoverCut,10);

    this.strRapport = this.fabrick.rapport  !='0' ? ' (подбор рисунка)': '';

    if(this.fabrick.rapport){
      (this.cutCost = this.cutCost * 1.4);
    }
    if (this.fabrick.typeEng == 'KOJA') {
      (this.cutCost = this.cutCost * 2);
    }
    this.cutCost = roundToMultiple(this.cutCost,10);
    
    this.sewCost = roundToMultiple((x + y + z) * jobCost.makePillowCoverSew, 10);
    if (this.fabrick.rapport) {
      (this.sewCost = this.sewCost * 1.4);
    }
    if (this.fabrick.typeEng == 'KOJA') {
      (this.sewCost = this.sewCost * 2);
    }


    this.sewCost = roundToMultiple(this.sewCost,10);
    
    this.overlockMake = this.fabrick.overlock=='1'? true : false 

    if (this.fabrick.typeEng == 'KOJA') { this.overlockMake = false}

    this.overlockCount = Number.parseFloat(roundToMultiple((x * 10 + y * 8  + z * 8) /100 * pillowCount, 0.1).toFixed(1));


    if (type == 'valik') {
      this.cutCost = roundToMultiple((x + y + z) * jobCost.makePillowCoverCut, 10);//600;
      this.sewCost = roundToMultiple((x + y + z) * jobCost.makePillowCoverSew, 10);//;
      this.overlockCount = Number.parseFloat(roundToMultiple(((y * 8)+((x+y)*2)) / 100 * pillowCount, 0.1)).toFixed(1);
    }
    if (type == 'dekor') {
      this.cutCost = roundToMultiple((x+z ) * jobCost.makePillowCoverCut, 10);//600;
      this.sewCost = roundToMultiple((x + z ) * jobCost.makePillowCoverSew, 10);//;
      this.overlockCount = Number.parseFloat(roundToMultiple(((x+y) * 4) / 100 * pillowCount, 0.1)).toFixed(1);
    }

    this.overlockCost = jobCost.makePillowCoverOverlock;

    this.cutTotalCost = this.cutCost * pillowCount;
    this.sewTotalCost = this.sewCost * pillowCount;
    this.overlockTotalCost = roundToMultiple(this.overlockCount * this.overlockCost,1);
    if (!this.overlockMake) { this.overlockTotalCost =0; }

    this.totalCost = this.cutTotalCost + this.sewTotalCost + this.overlockTotalCost;

    if (!make) { this.totalCost = 0 };

    this.strToOrderCut = new SmetaStr('Раскрой внешнего чехла' + this.strRapport, 'шт', pillowCount, this.cutCost, this.cutTotalCost);

    this.strToOrderSew = new SmetaStr('Пошив внешнего чехла' + this.strRapport, 'шт', pillowCount, this.sewCost, this.sewTotalCost);

    if (this.overlockMake){
      this.strToOrderOverlock = new SmetaStr('Обработка среза ткани оверлоком', 'пог.м.', this.overlockCount, this.overlockCost, this.overlockTotalCost);
    }
    

  }
}


class MakeZip{
  constructor(make, x, pillowCount, materialType = VEL){
    this.make = make;
    this.makeIndex = make ? 1 : 0;

    this.count = Number.parseFloat((roundToMultiple(x/100  , 0.1) * pillowCount).toFixed(1));

    this.zipCost = materialCost.zipCost;
    this.zipCount = Number.parseFloat((roundToMultiple(x / 100, 0.1) * pillowCount).toFixed(1));
    this.zipTotalCost = Number.parseInt((this.zipCost * this.zipCount).toFixed(0))  ;
    
    this.lockCost = materialCost.zipLockCost;
    this.lockTotalCost = this.lockCost * pillowCount;

    this.installCost = materialCost.zipInstallCost;
     if (materialType == KOJA){ this.installCost = this.installCost * 2 };
    this.installTotalCost = Number.parseInt((this.installCost * this.zipCount).toFixed(0));
   



    this.strToOrderZipCost = new SmetaStr('Рулонная молния №6', 'пог.м.', this.zipCount, this.zipCost, this.zipTotalCost);

    this.strToOrderLockCost = new SmetaStr('Бегунок для молнии №6', 'шт', pillowCount, this.lockCost, this.lockTotalCost);

    this.strToOrderZipInstallCost = new SmetaStr('Установка "молнии"', 'пог.м.', this.zipCount, this.installCost, this.installTotalCost);

    this.totalCost = this.zipTotalCost + this.lockTotalCost + this.installTotalCost;

    if (!make) { this.totalCost = 0 };

  }
}

class Trim{
  constructor(make, x, y, pillowCount, name, type = 'pillow', materialType = VEL){
    this.make = make;
    this.trim = trimM.get(name);
    this.makeIndex = make ? 1 : 0;
    this.name = this.trim.name;
    this.count = Number.parseFloat(roundToMultiple((x + y) * 4 / 100, 0.1).toFixed(1));
    this.type = type;
    this.cost = this.trim.cost ;

    if (this.type == 'valik'){
      this.count = Number.parseFloat(roundToMultiple(y * 3.2 * 2 / 100, 0.1).toFixed(1));
    }
    if (this.type == 'dekor') {
      this.count = Number.parseFloat(roundToMultiple((x+y) * 2 / 100, 0.1).toFixed(1));
    }

    if (materialType == KOJA){
      this.cost *=  2;
    }

    // this.cost = this.trim.cost * this.count;

    this.totalCost = Number.parseInt((this.cost * this.count * pillowCount).toFixed(0));
    this.strToOrder = new SmetaStr(this.trim.caption, 'пог.м', (roundToMultiple(this.count * pillowCount,0.1)).toFixed(1), this.cost, this.totalCost);
    if (!make) { this.totalCost = 0 };
  }
  
}

class Fix{
  constructor(make, x, pillowCount, name, materialType = VEL){
    this.make = make;
    this.fix = fixM.get(name);
    this.makeIndex = make ? 1 : 0;
    this.name = this.fix.name;
    this.cost = this.fix.cost;
    if (materialType == KOJA && this.name != fixM.get('antislide').name) { this.cost = this.cost * 1.5};
    this.count = this.fix.count;
    this.velcro1Cost= 0;
    this.velcro2Cost = 0;
    if(name == fixM.get('velcro').name){
      this.velcro1Cost = materialCost.velcro1;
      this.velcro2Cost = materialCost.velcro2;
      this.count = Number.parseFloat(roundToMultiple((x-10) * 2 / 100, 0.1)).toFixed(1);
    }

    if (name == fixM.get('antislide').name) {
      this.count = roundToMultiple((x - 20)/ 100, 0.5);
    }

    
    this.strToOrderVelcro1 = new SmetaStr('Лента-липучка пришивная шириной 50мм', 'пог.м.', this.count * pillowCount, this.velcro1Cost, this.velcro1Cost * this.count * pillowCount);

    this.strToOrderVelcro2 = new SmetaStr('Лента-липучка самоклеящаяся шириной 25мм', 'пог.м.', this.count * pillowCount, this.velcro1Cost, this.velcro2Cost * this.count * pillowCount);

    this.totalCost = this.cost * this.count * pillowCount;

    this.strToOrder = new SmetaStr(this.fix.caption, this.fix.unit, this.count * pillowCount, this.cost, this.totalCost);

    this.totalCost += (this.velcro1Cost * this.count * pillowCount + this.velcro2Cost * this.count * pillowCount)
    if (!make) { this.totalCost = 0 };

  }
}

class MakeButton{
  constructor(make, count, pillowCount, materialType = VEL){
  this.make = make;
  this.makeIndex = make ? 1 : 0;
  this.count = Number.parseInt(count);
  this.buttonCost = materialCost.button;
  this.buttonTotalCost = this.buttonCost * count * pillowCount * 2;
  this.makeButton = jobCost.makeButton;
    if (materialType == 'KOJA') { this.makeButton = roundToMultiple(this.makeButton * 2.5,10)};
  this.makeButtonTotalCost = this.makeButton * count * pillowCount * 2;
  
  this.instalButton = jobCost.installButton;
  this.installButtonTotalCost = this.instalButton * count * pillowCount;

  this.totalCost = this.buttonTotalCost + this.makeButtonTotalCost + this.installButtonTotalCost;

  this.strToOrderButton = new SmetaStr('Заготовка для пуговицы, металлическая', 'шт', 2 * count * pillowCount, this.buttonCost, this.buttonTotalCost);

    if (materialType == KOJA){
      this.strToOrderMakeButton = new SmetaStr('Обтяжка пуговицы кожей', 'шт', 2 * count * pillowCount, this.makeButton, this.makeButtonTotalCost);
    }
    else{
      this.strToOrderMakeButton = new SmetaStr('Обтяжка пуговицы тканью', 'шт', 2 * count * pillowCount, this.makeButton, this.makeButtonTotalCost);
    }
  
  
  this.strToOrderInstallButton = new SmetaStr('Установка пуговицы', 'шт', count * pillowCount, this.instalButton, this.installButtonTotalCost);

  if (!make) { this.totalCost = 0 };
}
  
}




class Fabrick{
  constructor(make, x, y, z, id, color, pillowCount, trim, materialArray, type = 'pillow'){
    this.make = make;
    this.makeIndex = make ? 1 : 0;
    this.material = getMaterialByIdFromArray(materialArray,id)
    this.color = color

    
    this.details = []
     if(type == 'pillow'){
        for (let j = 0; j < pillowCount; j++) {
            this.details.push(new Detail(x + 5, y + 5));
            this.details.push(new Detail(x+ 5, y + 5));
            this.details.push(new Detail(x + 5, z + 5));
            this.details.push(new Detail(x + 5, z/ 2 + 5));
            this.details.push(new Detail(x + 5, z/ 2 + 5));
            this.details.push(new Detail(z + 5, y + 5));
            this.details.push(new Detail(z + 5, y + 5));

            if (trim) {
              let countTrimDetail = [1, 1, 1, 1];
              countTrimDetail.forEach(() => {
                this.details.push(new Detail(x + 5, 5));
                this.details.push(new Detail(y + 5, 5));
              });
            }

          }
     }
     if(type == 'valik'){
       for (let j = 0; j < pillowCount; j++) {
         this.details.push(new Detail(x + 5, y + 5));
         this.details.push(new Detail(y + 5, y + 5));
         this.details.push(new Detail(y + 5, y + 5));
       }
     }

    if (type == 'dekor') {
      for (let j = 0; j < pillowCount; j++) {
        this.details.push(new Detail(x + 5, y + 5));
        this.details.push(new Detail(x + 5, y + 5));
      }
      if (trim) {
        
          this.details.push(new Detail(x + 5, 5));
          this.details.push(new Detail(y + 5, 5));
        this.details.push(new Detail(x + 5, 5));
        this.details.push(new Detail(y + 5, 5));
      }
    }

    this.count = Number.parseFloat(new raschet_kolichesva_materiala(140).createPlace(this.details).material_count(this.details).toFixed(1));

    if (this.count < 1) { this.count = 1;}
    this.strRapport = this.material.rapport !='0' ? ' (требуется подбор рисунка)' : '';
    if(this.material.rapport!='0'){
      this.count = roundToMultiple(this.count * 1.3,0.1);
    }
     

    this.cost = this.material.cost;
    this.totalCost = roundToMultiple(this.cost * this.count,1);
    if (!make) { this.totalCost = 0 };


    if (this.material.typeEng == 'KOJA') {
      this.count = Math.ceil(this.count / 3.5);
      this.totalCost = roundToMultiple(this.cost * 4.5 * this.count, 10);

      this.strToOrder = new SmetaStr(this.color + '(' + this.material.typeRus + ')' , 'шкура.', this.count, roundToMultiple(this.cost * 4.5,10), this.totalCost);
    } 
    else{
      this.strToOrder = new SmetaStr(this.color + '(' + this.material.typeRus + ')' + this.strRapport, 'пог.м.', Number.parseFloat(this.count.toFixed(1)), this.cost, this.totalCost);
    }


   

    if(id ==19){
      this.strToOrder = new SmetaStr('Предоставляется заказчиком (без учета на подбор рисунка)', 'пог.м.', roundToMultiple(this.count,0.1), this.cost, this.totalCost);
    }

  }
}




class raschet_kolichesva_materiala {

  constructor(material_width) {
    this.width = material_width;
    this.place = []
  }

  createPlace = function (detailsArr) {

    let maxLenght = 0
    detailsArr.forEach((element) => {
      maxLenght += element.width
    })


    for (let col = 0; col < maxLenght; col++) {
      this.place.push(new Array())
    }

    let w = this.width / 5

    this.place.forEach(element => {
      for (let i = 0; i < w; i++) {
        element.push(0)
      }
    })
    return this;
  }


  move_detail = function (detail, x, y) {
    detail.position_x = x;
    detail.position_y = y;
  }

  place_detail = function (detail, x, y) {
    for (let j = x; j < detail.position_x + detail.width; j++) {
      for (let i = y; i < detail.position_y + detail.height; i++) {
        this.place[j][i] = 1;
      }
    }
   // console.log(`деталь размером ${detail.width * 5}x${detail.height * 5} х=${x * 5}, y=${y * 5}`)
  }

  collision = function (detail) {

    for (let j = detail.position_x; j < detail.position_x + detail.width; j++) {
      for (let i = detail.position_y; i < detail.position_y + detail.height; i++) {
        //console.log(j + ' ' + i)
        if (this.place[j][i] == 1) {
          return true;
        }
        if (detail.position_y + detail.height > this.width) {
          return true;
        }
      }
    }
    return false;
  }

  material_count = function (details) {

    rotateDetails(details, this.width / 5)

    let lastPoint = 0;
    let w = this.width / 5
    let xr = 0

    let detailNumber = 1
    details.forEach(e => {
      let pos_x = 0
      let pos_y = 0
      while (this.collision(e)) {
        pos_y++;
        if (pos_y + e.height > w) {
          pos_y = 0;
          pos_x++;
        }
        this.move_detail(e, pos_x, pos_y)
      }
      this.place_detail(e, e.position_x, e.position_y)

      let right_edge = e.position_x + e.width;

      if (right_edge > lastPoint) {
        lastPoint = right_edge;
       // console.log(`lastPoint change to${lastPoint * 5}`)
      }

      //console.log(`деталь ${detailNumber} lastPoint ${lastPoint*5}`)
      detailNumber++
    })


    //console.log(`Итоговый LastPoint = ${lastPoint * 5}`)
    return roundToMultiple(lastPoint * 5 / 100, 0.1)

  }



}





class PillowBase2{


  constructor(count, type, x, y, z, foam1, foam2, foam3, aselex, caseCover, makePillow, makeCover, zip, trim, fix, buttons, fabrick, materialArray){

    this.count = count;
    this.type = type;
    this.x = x;
    this.y = y;
    this.z = z;
    this.foam1 = foam1;
    this.foam2 = foam2;
    this.foam3 = foam3;
    this.aselex = aselex;
    this.caseCover = caseCover;
    this.makePillow = makePillow;
    this.makeCover = makeCover;
    this.zip = zip;
    this.trim = trim;
    this.fix = fix;
    this.buttons = buttons;
    this.material = getMaterialByIdFromArray(materialArray,fabrick.material.id);
    this.fabrick = fabrick;
    this.color = fabrick.color;

    this.caption =  getPillowCaptionFromIndex(this.type) + ' ' + x + 'x' + y + 'x' + z + 'см ' + this.count + 'шт';

    this.cost = 0;
    this.cost += foam1.totalCost;
    this.cost += foam2.totalCost;
    this.cost += foam3.totalCost;
    this.cost += aselex.totalCost;
    this.cost += caseCover.totalCost;
    this.cost += makePillow.totalCost;
    this.cost += makeCover.totalCost;
    this.cost += zip.totalCost;
    this.cost += trim.totalCost;
    this.cost += fix.totalCost;
    this.cost += fabrick.totalCost;
    this.cost += buttons.totalCost;

    this.smeta = [];
    this.smeta.push(new SmetaStr('.', '', '', '', '', false, false, 'white'));
    this.smeta.push(new SmetaStr(this.caption, '', '', '', '',true,false,'black','lightgray'));
    this.smeta.push(new SmetaStr('.', '', '', '', '',false, false, 'white'));
    
    this.smeta.push(new SmetaStr('Черновые материалы', '', '', '', '',true,true));

    if(foam1.make && makePillow.make && foam1.foam.name != 'none'){
      this.smeta.push(foam1.strToOrder);
    }
   
    if (foam2.make && makePillow.make && foam2.foam.name != 'none') {
      this.smeta.push(foam2.strToOrder);
    } 
    
    if (foam3.make && makePillow.make && foam3.foam.name != 'none') {
      this.smeta.push(foam3.strToOrder);
    } 

    if(makePillow.make && aselex.make){
      this.smeta.push(aselex.strToOrder);
    }

    if (makePillow.make && caseCover.make){
      if(type != 5){
        this.smeta.push(caseCover.strToOrder);
      }
      else{
        this.smeta.push(caseCover.strToOrderPodkladkaCaseCover);
      }
      
    }

    if (makeCover.make && fix.make && this.fix.name == 'velcro') {
      this.smeta.push(this.fix.strToOrderVelcro1);
      this.smeta.push(this.fix.strToOrderVelcro2);
    }

    if (makeCover.make && zip.make ) {
      this.smeta.push(this.zip.strToOrderZipCost);
      this.smeta.push(this.zip.strToOrderLockCost)
    }

    if (makeCover.make && fix.make && this.fix.name == 'antislide') {
      this.smeta.push(fix.strToOrder);
    }

    if(buttons.make){
      this.smeta.push(buttons.strToOrderButton);
    }




    
    this.smeta.push(new SmetaStr('.', '', '', '', '', false, false, 'white'));
    this.smeta.push(new SmetaStr('Работа', '', '', '', '', true, true));

    if (makePillow.make) {
      this.smeta.push(makePillow.strToOrder);
    }

    if (makePillow.make && caseCover.make && type == 5)  {
      this.smeta.push(caseCover.strToOrderCaseCoverCut);
      this.smeta.push(caseCover.strToOrderCaseCoverSew);
    }

    if(makeCover.make){
      this.smeta.push(makeCover.strToOrderCut);
      if (this.fabrick.material.overlock=='1') {
        this.smeta.push(makeCover.strToOrderOverlock);
      }
      
      this.smeta.push(makeCover.strToOrderSew);
    }

    if (makeCover.make && zip.make) {
      this.smeta.push(this.zip.strToOrderZipInstallCost);
    }

    if (makeCover.make && trim.make) {
      this.smeta.push(trim.strToOrder);
    }

    if (makeCover.make && fix.make && this.fix.name != 'antislide') {
      this.smeta.push(fix.strToOrder);
    }

    if (buttons.make) {
      this.smeta.push(buttons.strToOrderMakeButton);
      this.smeta.push(buttons.strToOrderInstallButton);
    }

    if (makeCover.make) {
      this.smeta.push(new SmetaStr('.', '', '', '', '', false, false, 'white'));
      this.smeta.push(new SmetaStr('Обивочный материал', '', '', '', '', true, true));
      this.smeta.push(fabrick.strToOrder);
    }
    
    

  }

  toString(){
    let str = 'P';
    str += this.count;
    str += 'T';
    str += getStr_000_Value(this.type);
    str += 'S';
    str += getStr_000_Value(this.x);
    str += getStr_000_Value(this.y);
    str += getStr_000_Value(this.z);
    str += 'M';
    str += 'F';
    str += getStr_000_Value(this.foam1.foam.index);
    str += getStr_000_Value(this.foam2.foam.index);
    str += getStr_000_Value(this.foam3.foam.index);
    str += 'H';
    str += this.foam1.z;
    str += 'J';
    str += this.foam2.z;
    str += 'L';
    str += this.foam3.z;
    str += 'O';
    str += this.aselex.makeIndex;
    str += this.aselex.h;
    str += this.caseCover.makeIndex;
    str += 'W';
    str += this.makePillow.makeIndex;
    str += this.makeCover.makeIndex;
    str += this.zip.makeIndex;
    str += this.trim.trim.index;// getTrimIndex(this.trim.name);
    str += this.fix.fix.index;////getFixIndex(this.fix.name);
    str += 'U';
    str += this.fabrick.material.id;
    str += 'K';
    str += getColorIndex(this.material, this.color);
    str += 'B';
    str += this.buttons.count;
    return str;
  }
}






function rotateDetails(detailsArr, width) {
  let rotatePosible = true

  detailsArr.forEach(e => {
    if (e.width > width) {
      rotatePosible = false
      return
    }
  })

  if (rotatePosible) {
    detailsArr.forEach(e => {
      let s = e.width
      e.width = e.height
      e.height = s
    })
  }

}

function costPosition(str,cost,count){
  return Number.parseInt(cost) * count;
}

