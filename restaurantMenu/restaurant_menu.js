const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict- $22.99', 'Oatmeal- $21.99', 'Frittata- $15'];
const mainCourseMenu = ['Steak- $25.99', 'Pasta- $21.99', 'Burger- $29.99', 'Salmon- $35'];
const dessertMenu = ['Cake- $12', 'Ice Cream- $10.99', 'Pudding- $13.99', 'Fruit Salad- $8.99'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index+1}: ${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i+1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;