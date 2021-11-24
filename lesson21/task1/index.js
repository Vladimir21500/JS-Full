const divElem = document.querySelector(`.rect_div`);
const pElem = document.querySelector(`.rect_p`);
const spanElem = document.querySelector(`.rect_span`);
const eventsListItem = document.querySelector(`.events-list`);

const logTarget = (text, color) => {
  eventsListItem.innerHTML += `<span style="color:${color}; margin-left:8px;">${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, `DIV`, `green`);
const logGreenP = logTarget.bind(null, `P`, `green`);
const logGreenSpan = logTarget.bind(null, `SPAN`, `green`);

const logGreyDiv = logTarget.bind(null, `DIV`, `grey`);
const logGreyP = logTarget.bind(null, `P`, `grey`);
const logGreySpan = logTarget.bind(null, `SPAN`, `grey`);

const attachEvent = () => {
  divElem.addEventListener(`click`, logGreyDiv, true);
  pElem.addEventListener(`click`, logGreyP, true);
  spanElem.addEventListener(`click`, logGreySpan, true);

  divElem.addEventListener(`click`, logGreenDiv);
  pElem.addEventListener(`click`, logGreenP);
  spanElem.addEventListener(`click`, logGreenSpan);
};

const removeEvent = () => {
  divElem.removeEventListener(`click`, logGreyDiv, true);
  pElem.removeEventListener(`click`, logGreyP, true);
  spanElem.removeEventListener(`click`, logGreySpan, true);

  divElem.removeEventListener(`click`, logGreenDiv);
  pElem.removeEventListener(`click`, logGreenP);
  spanElem.removeEventListener(`click`, logGreenSpan);
};
attachEvent();

const attachBtn = document.querySelector(`.attach-handlers-btn`);
attachBtn.addEventListener(`click`, attachEvent);

const removeBtn = document.querySelector(`.remove-handlers-btn`);
removeBtn.addEventListener(`click`, removeEvent);

const clearBtn = document.querySelector(`.clear-btn`);
clearBtn.addEventListener(`click`, () => {
  eventsListItem.textContent = ``;
});
