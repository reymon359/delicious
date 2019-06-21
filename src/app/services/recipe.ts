
// Recipe interface
export class Recipe {
    id: string; // recipe id
    title: string; // Title
    dateCreated: Date;
    img: string; // Main recipe img
    desc: string; // Recipe description
    time: number; // Cooking time
    steps: Step[];
}


// Steps interface
export class Step {
    number: number;  // step number
    title: string; // Title
    img: string; // step img
    desc: string; // Steps description
}
