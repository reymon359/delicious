import { Recipe } from './recipe';

// Here will go the recipes info
export const RECIPES: Recipe[] = [
    {
        id: 'paella-pollo',
        title: 'Paella de Pollo',
        dateCreated: new Date('2019-06-21T00:00:00.000Z'),
        author: 'Paloma Cascales',
        img: './assets/img/recipes/paella-pollo/paella_pollo_main.jpg',
        desc: 'Paella de pollo mitica de los fines de semana 🥘',
        time: 30,
        meal: 'lunch',
        lang: ['es'],
        advices: ['Poner bastante de todo para dar más sabor'],
        ingredients: ['arroz', 'pimientos', 'tomate'],
        steps: [
            {
                desc: 'Pelar 2 tomates y triturarlos con la batidora. Que no queden muy caldoso. Luego freir el tomate con aceite. Estará listo cuando ya no le salga mucha agua. Una vez en ese estado lo dejamos ahí con el fuego apagado.',
                imgs: ['./assets/img/recipes/paella-pollo/paella_pollo_step1_1.jpg','./assets/img/recipes/paella-pollo/paella_pollo_step1_2.jpg' ]
            },
            {
                desc: 'Ponemos en la paellera aceite y unos ajos, los cuales tienen un corte. Los dejamos que se vayan haciendo y friendo un poco a fuego bajo-medio hasta que estén blanditos y huele bastante a ajo (como en la segunda imagen). Luego los apartamos a un lado.',
                imgs: ['./assets/img/recipes/paella-pollo/paella_pollo_step2_1.jpg','./assets/img/recipes/paella-pollo/paella_pollo_step2_2.jpg','./assets/img/recipes/paella-pollo/paella_pollo_step2_3.jpg' ]
            },
            {
                desc: 'Ahora es el turno del pollo, previamente lavado y con sal. Ponemos el pollo en la paella con el aceite que quedaba al quitar los ajos a fuego fuerte. Lo dejamos un rato tapado y le damos la vuelta a las piezas para que se tuesten por ambos lados. La carne no tiene que hacerse solamente tiene que tostarse un poco.',
                imgs: ['./assets/img/recipes/paella-pollo/paella_pollo_step3_1.jpg','./assets/img/recipes/paella-pollo/paella_pollo_step3_2.jpg','./assets/img/recipes/paella-pollo/paella_pollo_step3_3.jpg' ]
            },
            {
                desc: 'Ahora echamos un vaso y poco más de caldo por cada vaso de arroz en el tomate. El caldo usado es uno obtenido de una crema de verduras pero se puede usar otro ya hecho. Luego echamos el caldo en el pollo con los ajos y echamos colorante o azafran y sal por encima.',
                imgs: ['./assets/img/recipes/paella-pollo/paella_pollo_step4_1.jpg','./assets/img/recipes/paella-pollo/paella_pollo_step4_2.jpg','./assets/img/recipes/paella-pollo/paella_pollo_step4_3.jpg' ]
            },
        ]
    },
    {
        id: 'paella-pollo2',
        title: 'Paella de Pollo2',
        dateCreated: new Date('2019-06-21T00:00:00.000Z'),
        author: 'Paloma Cascales',
        img: './assets/img/recipes/paella-pollo/paella_pollo.jpg',
        desc: 'La paella de pollo mitica de la mia mama',
        time: 30,
        meal: 'lunch',
        lang: ['es'],
        advices: ['Poner bastante de todo para dar más sabor'],
        ingredients: ['rice', 'chicken', 'pepper'],
          steps: [
            {
                imgs: ['./assets/img/recipes/paella-pollo/paella_pollo_step1_1.jpg'],
                desc: 'Pelar 2 tomates y triturarlos con la batidora. Que no queden muy caldoso. Luego freir el tomate con aceite.'
            },
        ]
    },
    {
        id: 'paella-pollo3',
        title: 'Paella de Pollo3',
        dateCreated: new Date('2019-06-21T00:00:00.000Z'),
        author: 'Paloma Cascales',
        img: './assets/img/recipes/paella-pollo/paella_pollo.jpg',
        desc: 'La paella de pollo mitica de la mia mama',
        time: 30,
        meal: 'lunch',
        lang: ['es'],
        advices: ['Poner bastante de todo para dar más sabor'],
        ingredients: ['rice', 'chicken', 'pepper'],
          steps: [
            {
                imgs: ['./assets/img/recipes/paella-pollo/paella_pollo_step1_1.jpg'],
                desc: 'Pelar 2 tomates y triturarlos con la batidora. Que no queden muy caldoso. Luego freir el tomate con aceite.'
            },
        ]
    },
    {
        id: 'paella-pollo4',
        title: 'Paella de Pollo4',
        dateCreated: new Date('2019-06-21T00:00:00.000Z'),
        author: 'Paloma Cascales',
        img: './assets/img/recipes/paella-pollo/paella_pollo.jpg',
        desc: 'La paella de pollo mitica de la mia mama',
        time: 30,
        meal: 'lunch',
        lang: ['es'],
        advices: ['Poner bastante de todo para dar más sabor'],
        ingredients: ['rice', 'chicken', 'pepper'],
          steps: [
            {
                imgs: ['./assets/img/recipes/paella-pollo/paella_pollo_step1_1.jpg'],
                desc: 'Pelar 2 tomates y triturarlos con la batidora. Que no queden muy caldoso. Luego freir el tomate con aceite.'
            },
        ]
    },
    {
        id: 'paella-pollo5',
        title: 'Paella de Pollo5',
        dateCreated: new Date('2019-06-21T00:00:00.000Z'),
        author: 'Paloma Cascales',
        img: './assets/img/recipes/paella-pollo/paella_pollo.jpg',
        desc: 'La paella de pollo mitica de la mia mama',
        time: 30,
        meal: 'lunch',
        lang: ['es'],
        advices: ['Poner bastante de todo para dar más sabor'],
        ingredients: ['rice', 'chicken', 'pepper'],
          steps: [
            {
                imgs: ['./assets/img/recipes/paella-pollo/paella_pollo_step1_1.jpg'],
                desc: 'Pelar 2 tomates y triturarlos con la batidora. Que no queden muy caldoso. Luego freir el tomate con aceite.'
            },
        ]
    },
    {
        id: 'paella-pollo6',
        title: 'Paella de Pollo6',
        dateCreated: new Date('2019-06-21T00:00:00.000Z'),
        author: 'Paloma Cascales',
        img: './assets/img/recipes/paella-pollo/paella_pollo.jpg',
        desc: 'La paella de pollo mitica de la mia mama',
        time: 30,
        meal: 'lunch',
        lang: ['es'],
        advices: ['Poner bastante de todo para dar más sabor'],
        ingredients: ['rice', 'chicken', 'pepper'],
          steps: [
            {
                imgs: ['./assets/img/recipes/paella-pollo/paella_pollo_step1_1.jpg'],
                desc: 'Pelar 2 tomates y triturarlos con la batidora. Que no queden muy caldoso. Luego freir el tomate con aceite.'
            },
        ]
    },
    {
        id: 'paella-pollo7',
        title: 'Paella de Pollo7',
        dateCreated: new Date('2019-06-21T00:00:00.000Z'),
        author: 'Paloma Cascales',
        img: './assets/img/recipes/paella-pollo/paella_pollo.jpg',
        desc: 'La paella de pollo mitica de la mia mama',
        time: 30,
        meal: 'lunch',
        lang: ['es'],
        advices: ['Poner bastante de todo para dar más sabor'],
        ingredients: ['rice', 'chicken', 'pepper'],
          steps: [
            {
                imgs: ['./assets/img/recipes/paella-pollo/paella_pollo_step1_1.jpg'],
                desc: 'Pelar 2 tomates y triturarlos con la batidora. Que no queden muy caldoso. Luego freir el tomate con aceite.'
            },
        ]
    },
    {
        id: 'paella-pollo8',
        title: 'Paella de Pollo8',
        dateCreated: new Date('2019-06-21T00:00:00.000Z'),
        author: 'Paloma Cascales',
        img: './assets/img/recipes/paella-pollo/paella_pollo.jpg',
        desc: 'La paella de pollo mitica de la mia mama',
        time: 30,
        meal: 'lunch',
        lang: ['es'],
        advices: ['Poner bastante de todo para dar más sabor'],
        ingredients: ['rice', 'chicken', 'pepper'],
          steps: [
            {
                imgs: ['./assets/img/recipes/paella-pollo/paella_pollo_step1_1.jpg'],
                desc: 'Pelar 2 tomates y triturarlos con la batidora. Que no queden muy caldoso. Luego freir el tomate con aceite.'
            },
        ]
    },
];
