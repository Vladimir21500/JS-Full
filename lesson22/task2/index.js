/* 1. создать 3 сектора
2. создать 10 рядов в секторе
3. создать 10 мест в ряду
4. по клику мыши по месту получаем (номер сектора, номер ряда, номер места) 
алгоритм
секторы: создаем массив секторов, с помощью цикла до 3 
добаваляем элемент сектор в арену и пушим сектор в массив
и так для всех элементов
отображение координат места: 
при нажатии создаем обработчик, который:
на погружении возвращает индекс+1 элемента 
 обработчик:создает переменную координат и содержит в себе 3 обработчика
 1. записывает в переменную индекс сектора
 2. записывает индекс ряда
 3. записывает индекс места
 4. добавляет текст координат в боард
*/
const arena = document.querySelector(`.arena`);

let coordinates = ``;
/* const sectors = [];
const lines = [];
const seats = []; */

const getIndex = (index, type) => {
  coordinates += `${type} ${index + 1} `;
};

const getPosition = () => {
  document
    .querySelector(`.sector`)
    .addEventListener(`click`, getIndex(/* sectors.indexOf() */ 2, `S`), true);

  document
    .querySelector(`.sector__line`)
    .addEventListener(`click`, getIndex(3, `L`), true);

  document
    .querySelector(`.sector__seat`)
    .addEventListener(`click`, getIndex(2, `P`), true);
};

for (let i = 1; i <= 3; i += 1) {
  const sectorElem = document.createElement(`div`);
  sectorElem.classList.add(`sector`);
  /*   sectors.push(sectorElem);
   */ arena.append(sectorElem);
}
const sectors = Array.from(document.querySelectorAll(`.sector`));

sectors.forEach((sector) => {
  for (let i = 1; i <= 10; i += 1) {
    const sectorLineElem = document.createElement(`div`);
    sectorLineElem.classList.add(`sector__line`);
    /*     lines.push(sectorLineElem);
     */ sector.append(sectorLineElem);
  }
});

const lines = Array.from(document.querySelectorAll(`.sector__line`));

lines.forEach((line) => {
  for (let i = 1; i <= 10; i += 1) {
    let sectorSeatElem = 0;
    sectorSeatElem = document.createElement(`div`);
    sectorSeatElem.classList.add(`sector__seat`);
    /*     seats.push(sectorSeatElem);
     */ line.append(sectorSeatElem);
  }
});
/* const seats = Array.from(document.querySelectorAll(`.sector__seat`));
document.querySelector(`.sector__seat`).addEventListener(`click`, getPosition);
 */
const seats = Array.from(document.querySelectorAll(`.sector__seat`));

document.querySelector(`.sector__seat`).addEventListener(`click`, () => {
  console.log(`event work correct`);
});

const board = document.querySelector(`.board__selected-seat`);
board.textContent = coordinates;
