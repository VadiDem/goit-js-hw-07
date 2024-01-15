const categoriesList = document.getElementById("categories");
const items = categoriesList.querySelectorAll(".item");

console.log(`Total categories: ${items.length}`);

items.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const categoryItems = item.querySelectorAll("ul li").length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Number of items: ${categoryItems}`);
});
