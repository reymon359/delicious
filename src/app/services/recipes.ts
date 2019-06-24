import { Recipe } from './recipe';

// Here will go the recipes info
export const RECIPES: Recipe[] = [
    {
        id: 'paella-pollo',
        title: 'Paella de Pollo',
        dateCreated: new Date('2019-06-21T00:00:00.000Z'),
        author: 'Paloma Cascales',
        img: './assets/img/recipes/paella_pollo.jpg',
        desc: 'La paella de pollo mitica de la mia mama',
        time: 30,
        meal: 'lunch',
        ingredients: ['rice', 'chicken', 'pepper'],
        steps: [
            {
                number: 1,
                title: 'Primer pasito',
                img: './assets/img/recipes/paella_pollo_1.jpg',
                desc: 'En este paso hay que ewhiuoghwuifhweiu fwe ewfhui fhweui fweh foewiofn ewji nfieuofhbiwue    '
            }
        ]
    },
    {
        id: 'paella-pollo',
        title: 'Paella de Pollo',
        dateCreated: new Date('2019-06-21T00:00:00.000Z'),
        author: 'Paloma Cascales',
        img: './assets/img/recipes/paella_pollo.jpg',
        desc: 'La paella de pollo mitica de la mia mama',
        time: 30,
        meal: 'lunch',
        ingredients: ['rice', 'chicken', 'pepper'],
        steps: [
            {
                number: 1,
                title: 'Primer pasito',
                img: './assets/img/recipes/paella_pollo_1.jpg',
                desc: 'En este paso hay que ewhiuoghwuifhweiu fwe ewfhui fhweui fweh foewiofn ewji nfieuofhbiwue    '
            }
        ]
    },
];
