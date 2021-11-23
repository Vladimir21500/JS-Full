function getSection(num) {
  document.querySelector(`span[data-number = "${num}"]`);
  return document.querySelector(`span[data-number = "${num}"]`).parentElement
    .dataset.section;
}
