import { Recipe } from './recipe';

// Here will go the recipes info
export const RECIPES: Recipe[] = [
    {
        id: 'paella-pollo',
        title: 'Paella de Pollo',
        img: './assets/recipes/paella_pollo.jpg',
        desc: 'La paella de pollo mitica de la mia mama',
        time: 30,
        steps: [
            {
                number: 1,
                title: 'Primer pasito',
                img: './assets/recipes/paella_pollo_1.jpg',
                desc: 'En este paso hay que ewhiuoghwuifhweiu fwe ewfhui fhweui fweh foewiofn ewji nfieuofhbiwue    '
            }
        ]
    },
    {
        id: 'paella-pollo2',
        title: 'Paella de Pollo2',
        img: './assets/recipes/paella_pollo.jpg',
        desc: 'La paella de pollo2 mitica de la mia mama',
        time: 30,
        steps: [
            {
                number: 1,
                title: 'Primer pasito',
                img: './assets/recipes/paella_pollo_1.jpg',
                desc: 'En este paso hay que ewhiuoghwuifhweiu fwe ewfhui fhweui fweh foewiofn ewji nfieuofhbiwue    '
            }
        ]
    }
];
