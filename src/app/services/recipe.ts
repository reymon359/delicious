
// Recipe interface
export class Recipe {
    id: string; // recipe id
    title: string; // Title
    dateCreated: Date;
    author: string;
    img: string; // Main recipe img
    desc: string; // Recipe description
    time: number; // Cooking time
    people: number; // number of people
    lang: string[]; // languages the recipe is explained
    advices: string[]; // some cooking advices
    meal: number; // Meals in numbers to improve filtering
    // Lunch Dinner Dessert Snack Appetizer Entree Soup Salad
    // Comida Cena Postre Almuerzo Aperitivo Entrante Sopa Ensalada
    ingredients: string[];
    steps: Step[];
}


// Steps interface
export class Step {
    desc: Desc[]; // Steps description
    imgs: string[]; // step img
}
// Description interface
export class Desc {
    lang: string; // Steps description
    text: string; // step img
}