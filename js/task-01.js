const categoriesLinksEl = document.querySelectorAll('.item');
console.log("Number of categories:", categoriesLinksEl.length)

categoriesLinksEl.forEach(item => {
    const nameOfCategory = item.firstElementChild;
    const listOfCategory = item.lastElementChild;
    const itemOfCategory = listOfCategory.children;
    console.log("Category:",nameOfCategory.textContent);
    console.log("Elements:",itemOfCategory.length);
})

