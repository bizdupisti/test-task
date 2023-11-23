
document.addEventListener("DOMContentLoaded", function () {
  // Настройка окружения Nunjucks
  const templateString = `
    <div class="women-clothing__item">
        <img src={{img}} alt="Платье" />
        <h3 class="category">{{category}}</h3>
        <p class="name_close">{{name_close}}</p>
        <div class="cost"><s class="pervious_cost"> {{cost}}</s><p class="actual_cost">$129</p></div>
    </div>
    `;

  // Данные для шаблона
  const women_items = [
    {category: "IGURE", name_close: "GREEN MUSCLE FIT POLO SHIRT", cost: "$229.00", img: 'img/woman_list/1.png'},
    {category: "IGURE", name_close: "GREEN MUSCLE FIT POLO SHIRT", cost: "$229.00", img: 'img/woman_list/2.png'},
    {category: "IGURE", name_close: "GREEN MUSCLE FIT POLO SHIRT", cost: "$229.00", img: 'img/woman_list/3.png'},
    {category: "IGURE", name_close: "GREEN MUSCLE FIT POLO SHIRT", cost: "$229.00", img: 'img/woman_list/4.png'}
  ];

  const men_items = [
    {category: "IGURE", name_close: "GREEN MUSCLE FIT POLO SHIRT", cost: "$229.00", img: 'img/men_list/1.png'},
    {category: "IGURE", name_close: "GREEN MUSCLE FIT POLO SHIRT", cost: "$229.00", img: 'img/men_list/2.png'},
    {category: "IGURE", name_close: "GREEN MUSCLE FIT POLO SHIRT", cost: "$229.00", img: 'img/men_list/3.png'},
    {category: "IGURE", name_close: "GREEN MUSCLE FIT POLO SHIRT", cost: "$229.00", img: 'img/men_list/4.png'}
  ];

  const renderedItems = women_items
    .map((item) => nunjucks.renderString(templateString, item))
    .join("");

    const menRenderedItems = men_items
    .map((item) => nunjucks.renderString(templateString, item))
    .join("");

  // Вставка созданных элементов в HTML
  const woman_container = document.querySelector(".women-clothing");
  const men_container = document.querySelector('.men-clothing')
  
  woman_container.innerHTML = renderedItems;
  men_container.innerHTML = menRenderedItems;
});
