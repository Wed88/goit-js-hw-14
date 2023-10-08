const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsContainerEl = document.querySelector('#ingredients');

const elements = ingredients.map(element => {
  const listsEl = document.createElement('li');
  listsEl.textContent = element;
  listsEl.classList.add('item');

  return listsEl
});

ingredientsContainerEl.append(...elements);
