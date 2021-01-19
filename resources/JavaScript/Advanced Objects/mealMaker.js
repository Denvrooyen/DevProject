const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers() {
        return this.courses.appetizers;
    },
    get mains() {
        return this.courses.mains;
    },
    get desserts() {
        return this.courses.desserts;
    },
    set appetizers(appetizers) {
        this.courses.appetizers = appetizers;
    },
    set mains(mains) {
        this.courses.mains = mains;
    },
    set desserts(desserts) {
        this.courses.desserts = desserts;
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };
        return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}, The price is ${totalPrice}.`;
    }
}

menu.addDishToCourse('appetizers', 'Ceasar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Snails', 5.00);
menu.addDishToCourse('appetizers', 'Chicken Liver', 4.50);

menu.addDishToCourse('mains', 'Oxtail & Roasted Veggies', 10.00);
menu.addDishToCourse('mains', 'Steak & Garlic Potato', 10.25);
menu.addDishToCourse('mains', 'Fish', 11.25);

menu.addDishToCourse('desserts', 'Malva Pudding', 4.00);
menu.addDishToCourse('desserts', 'Brandy Tart', 3.00);
menu.addDishToCourse('desserts', 'Ice Cream', 2.50);
const meal = menu.generateRandomMeal();
console.log(meal);