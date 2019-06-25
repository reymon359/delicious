
// Recipe interface
export class Recipe {
    id: string; // recipe id
    title: string; // Title
    dateCreated: Date;
    author: string;
    img: string; // Main recipe img
    desc: string; // Recipe description
    time: number; // Cooking time
    lang: string[]; // languages the recipe is explained
    advices: string[]; // some cooking advices
    meal: string; // snack, lunch, soup, salad
    ingredients: string[];
    steps: Step[];
}


// Steps interface
export class Step {
    desc: string; // Steps description
    imgs: string[]; // step img
}
