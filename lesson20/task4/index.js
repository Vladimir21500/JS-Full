export function getTitle() {
  const title = document.querySelector(`.title`);
  return title.textContent;
}
export function getDescription() {
  const descr = document.querySelector(`.about`);
  return descr.innerText;
}
export function getPlans() {
  const plans = document.querySelector(`.plans`);
  return plans.innerHTML;
}
export function getGoal() {
  const goal = document.querySelector(`.goal`);
  return goal.outerHTML;
}
