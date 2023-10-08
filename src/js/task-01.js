const categoriesLinksEl = document.querySelectorAll('.item');
console.log("Number of categories:", categoriesLinksEl.length)

categoriesLinksEl.forEach(item => {
    const nameOfCategory = item.querySelector('h2');
    const listOfCategory = item.querySelector('ul');
    const itemOfCategory = listOfCategory.querySelectorAll('li')
    console.log("Category:",nameOfCategory.textContent);
    console.log("Elements:",itemOfCategory.length)
})