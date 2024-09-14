const categories = document.querySelectorAll('.item')
console.log(`Number of categories: ${categories.length}`);

categories.forEach(({ firstElementChild, lastElementChild }) => {
  console.log(`Category: ${firstElementChild.textContent}`);
  console.log(`Elements: ${lastElementChild.children.length}`);
});
