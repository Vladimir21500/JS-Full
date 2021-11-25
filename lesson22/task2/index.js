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

const sectors = [];
for (let i = 1; i <= 3; i += 1) {
  const sectorElem = document.createElement(`div`);
  sectorElem.classList.add(`sector`);
  sectors.push(sectorElem);
  arena.append(sectorElem);
}

const lines = [];
sectors.forEach((sector) => {
  for (let i = 1; i <= 10; i += 1) {
    const sectorLineElem = document.createElement(`div`);
    sectorLineElem.classList.add(`sector__line`);
    lines.push(sectorLineElem);
    sector.append(sectorLineElem);
  }
});

let sectorSeatElem = 0;

lines.forEach((line) => {
  for (let i = 1; i <= 10; i += 1) {
    sectorSeatElem = document.createElement(`div`);
    sectorSeatElem.classList.add(`sector__seat`);
    lines.push(sectorSeatElem);
    line.append(sectorSeatElem);
  }
});

sectorSeatElem.addEventListener(`click`, () => {
  alert(`work`);
});
