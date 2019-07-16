import { Recipe } from './recipe';

// Here will go the recipes info
export const RECIPES: Recipe[] = [
    {
        id: 'paella-pollo',
        title: 'Paella de Pollo',
        dateCreated: new Date('2019-06-21T00:00:00.000Z'),
        author: 'Paloma Cascales',
        img: './assets/img/recipes/paella-pollo/paella_pollo_step9_1.jpg',
        desc: 'Paella de pollo y pimientos típica de los fines de semana 🥘.',
        time: 60,
        people: 4,
        meal: 0,
        lang: 'es',
        advices: ['Poner bastante de todo para dar más sabor'],
        ingredients: ['arroz', 'pimientos', 'tomate', 'pollo', 'azafran', 'colorante', 'ajo', 'aceite'],
        steps: [
            {
                desc: 'Pelar 2 tomates y triturarlos con la batidora. Que no queden muy caldoso. Luego freir el tomate con aceite. Estará listo cuando ya no le salga mucha agua. Una vez en ese estado lo dejamos ahí con el fuego apagado.',
                imgs: ['./assets/img/recipes/paella-pollo/paella_pollo_step1_1.jpg', './assets/img/recipes/paella-pollo/paella_pollo_step1_2.jpg']
            },
            {
                desc: 'Ponemos en la paellera aceite y unos ajos, los cuales tienen un corte. Los dejamos que se vayan haciendo y friendo un poco a fuego bajo-medio hasta que estén blanditos y huele bastante a ajo (como en la segunda imagen). Luego los apartamos a un lado.',
                imgs: ['./assets/img/recipes/paella-pollo/paella_pollo_step2_1.jpg', './assets/img/recipes/paella-pollo/paella_pollo_step2_2.jpg', './assets/img/recipes/paella-pollo/paella_pollo_step2_3.jpg']
            },
            {
                desc: 'Ahora es el turno del pollo, previamente lavado y con sal. Ponemos el pollo en la paella con el aceite que quedaba al quitar los ajos a fuego fuerte. Lo dejamos un rato tapado y le damos la vuelta a las piezas para que se tuesten por ambos lados. La carne no tiene que hacerse solamente tiene que tostarse un poco.',
                imgs: ['./assets/img/recipes/paella-pollo/paella_pollo_step3_1.jpg', './assets/img/recipes/paella-pollo/paella_pollo_step3_2.jpg', './assets/img/recipes/paella-pollo/paella_pollo_step3_3.jpg']
            },
            {
                desc: 'Ahora echamos un vaso y poco más de caldo por cada vaso de arroz en el tomate. El caldo usado es uno obtenido de una crema de verduras pero se puede usar otro ya hecho. Luego echamos el caldo en el pollo con los ajos y echamos colorante o azafran y sal por encima.',
                imgs: ['./assets/img/recipes/paella-pollo/paella_pollo_step4_1.jpg', './assets/img/recipes/paella-pollo/paella_pollo_step4_2.jpg', './assets/img/recipes/paella-pollo/paella_pollo_step4_3.jpg']
            },
            {
                desc: 'Ahora lo ponemos unos 20-30min a fuego medio y lo tapamos. Al pasar la media hora se puede dejar así hasta que se quiera. Por ejemplo hacerlo por la mañana y dejarlo en este estado hasta la hora de comer. Pero antes de echar el arroz hay que recalentarlo hasta hervir.',
                imgs: ['./assets/img/recipes/paella-pollo/paella_pollo_step5_1.jpg']
            },
            {
                desc: 'Ahora vamos a hacer los pimientos. Una vez cortados los ponemos en una sartén con aceite, los tapamos y les vamos dando la vuelta.Una vez medio hechos apagamos el fuego y los tapamos.',
                imgs: ['./assets/img/recipes/paella-pollo/paella_pollo_step6_1.jpg', './assets/img/recipes/paella-pollo/paella_pollo_step6_2.jpg', './assets/img/recipes/paella-pollo/paella_pollo_step6_3.jpg']
            },
            {
                desc: 'Ahora es el momento del arroz. En un recipiente echamos 4 vasos, 1 por persona. Volcamos el recipiente en la paella y removemos.',
                imgs: ['./assets/img/recipes/paella-pollo/paella_pollo_step7_1.jpg', './assets/img/recipes/paella-pollo/paella_pollo_step7_2.jpg', './assets/img/recipes/paella-pollo/paella_pollo_step7_3.jpg']
            },
            {
                desc: 'Ponemos los pimientos por encima y se deja a fuego medio hirviendo unos 15 minutos. En la segunda foto no se ve bien pero está burbujeando. Tras los 15 minutos lo bajamos a fuego lento para que se acabe de hacer.',
                imgs: ['./assets/img/recipes/paella-pollo/paella_pollo_step8_1.jpg', './assets/img/recipes/paella-pollo/paella_pollo_step8_2.jpg', './assets/img/recipes/paella-pollo/paella_pollo_step8_3.jpg']
            },
            {
                desc: 'Y ya estaría listo. Solo queda disfrutarlo!',
                imgs: ['./assets/img/recipes/paella-pollo/paella_pollo_step9_1.jpg', './assets/img/recipes/paella-pollo/paella_pollo_step9_2.jpg', './assets/img/recipes/paella-pollo/paella_pollo_step9_3.jpg']
            }
        ]
    },
    {
        id: 'risotto-calamares',
        title: 'Risotto de calamares',
        dateCreated: new Date('2019-06-24T00:00:00.000Z'),
        author: 'Paloma Cascales',
        img: './assets/img/recipes/risotto-calamares/risotto_calamares_step9_1.jpg',
        desc: 'Risotto de calamares para varias personas',
        time: 30,
        people: 4,
        meal: 0,
        lang: 'es',
        advices: ['No pasarse con el vino'],
        ingredients: ['arroz', 'calamar', 'queso', 'vino', 'aceite', 'caldo de pescado', 'mantequilla', 'sal'],
        steps: [
            {
                desc: 'Ponemos los calamares a descongelar en caso de estar congelados y lo mismo con el caldo si también lo está.',
                imgs: ['./assets/img/recipes/risotto-calamares/risotto_calamares_step1_1.jpg', './assets/img/recipes/risotto-calamares/risotto_calamares_step1_2.jpg']
            },
            {
                desc: 'Mientras tanto cortamos cebolla y la pochamos',
                imgs: ['./assets/img/recipes/risotto-calamares/risotto_calamares_step2_1.jpg']
            },
            {
                desc: 'Añadimos aceite a la sartén, echamos los calamares, un poco de sal y un vaso de vino blanco. Y removemos hasta que se hagan un poco. Al mismo tiempo ponemos el caldo de pescado a calentar a fuego medio-alto',
                imgs: ['./assets/img/recipes/risotto-calamares/risotto_calamares_step3_1.jpg', './assets/img/recipes/risotto-calamares/risotto_calamares_step3_2.jpg','./assets/img/recipes/risotto-calamares/risotto_calamares_step3_3.jpg']
            },
            {
                desc: 'Ponemos 3 vasos de arroz para 4 personas en un cuenco y lo echamos con los calamares una vez estén fritos/hechos',
                imgs: ['./assets/img/recipes/risotto-calamares/risotto_calamares_step4_1.jpg', './assets/img/recipes/risotto-calamares/risotto_calamares_step4_2.jpg']
            },
            {
                desc: 'Echamos un poco de aceite para freír el arroz y removemos hasta que la gran mayoría del arroz tenga un color transparente',
                imgs: ['./assets/img/recipes/risotto-calamares/risotto_calamares_step5_1.jpg']
            }, 
             {
                desc: 'Una vez el arroz tenga el color descrito anteriormente añadimos el caldo de pescado hasta que cubra el arroz. Entonces Añadimos otro vaso de vino y un poco de sal y removemos( no hay que añadir mucha sal porque luego añadiremos queso ). Si el arroz consume el caldo añadimos más caldo. ',
                imgs: ['./assets/img/recipes/risotto-calamares/risotto_calamares_step6_1.jpg']
            },
            {
                desc: 'Añadimos queso rallado. ',
                imgs: ['./assets/img/recipes/risotto-calamares/risotto_calamares_step7_1.jpg']
            },
            {
                desc: 'Seguimos añadiendo caldo y queso hasta que el arroz este en su punto, más blando y entonces apagamos el fuego y lo dejamos reposar tapado.',
                imgs: ['./assets/img/recipes/risotto-calamares/risotto_calamares_step8_1.jpg','./assets/img/recipes/risotto-calamares/risotto_calamares_step8_2.jpg']
            },
            {
                desc: 'Cuando el arroz ha adquirido su punto, añadimos un trozo de mantequilla, algo más de queso y removemos por última vez. Con la mantequilla el plato adquiere más sabor y brillo. Y por último emplatamos.',
                imgs: ['./assets/img/recipes/risotto-calamares/risotto_calamares_step9_1.jpg','./assets/img/recipes/risotto-calamares/risotto_calamares_step9_2.jpg']
            },
        ]
    },
    {
        id: 'tortilla-patata',
        title: 'Tortilla de patata',
        dateCreated: new Date('2019-07-15T00:00:00.000Z'),
        author: 'Paloma Cascales',
        img: './assets/img/recipes/risotto-calamares/risotto_calamares_step9_1.jpg',
        desc: 'Risotto de calamares para varias personas',
        time: 30,
        people: 4,
        meal: 0,
        lang: 'es',
        advices: ['El secreto de una buena tortilla de patatas es no poner mucha patata'],
        ingredients: ['patata', 'huevo', 'cebolla', 'aceite', 'sal'],
        steps: [
            {
                desc: 'Cogemos 1 patata por persona (en este ejemplo 4), las cortamos y les ponemos sal.Luego las añadimos a una sartén a fuego medio con aceite para que se vayan haciendo.',
                imgs: ['./assets/img/recipes/tortilla-patata/tortilla_patata_step1_1.jpg']
            },
            {
                desc: 'Cuando estén un poco blanditas las partimos un poco. Cuando están hechas apagamos el fuego y las dejamos escurriendo',
                imgs: ['./assets/img/recipes/tortilla-patata/tortilla_patata_step2_1.jpg','./assets/img/recipes/tortilla-patata/tortilla_patata_step2_2.jpg']
            },
            {
                desc: 'Partimos 1 cebolla por persona. Luego les ponemos un chorro de aceite y las metemos en el microondas unos 10 minutos para pocharlas. Si a los 10 min no están pochadas las ponemos un poco más. Otros modos de pochar la cebolla son válidos también.',
                imgs: ['./assets/img/recipes/tortilla-patata/tortilla_patata_step3_1.jpg', './assets/img/recipes/tortilla-patata/tortilla_patata_step3_2.jpg','./assets/img/recipes/tortilla-patata/tortilla_patata_step3_3.jpg']
            },
            {
                desc: 'Ponemos 3 vasos de arroz para 4 personas en un cuenco y lo echamos con los calamares una vez estén fritos/hechos',
                imgs: ['./assets/img/recipes/tortilla-patata/tortilla_patata_step4_1.jpg', './assets/img/recipes/tortilla-patata/tortilla_patata_step4_2.jpg']
            },
            {
                desc: 'Echamos un poco de aceite para freír el arroz y removemos hasta que la gran mayoría del arroz tenga un color transparente',
                imgs: ['./assets/img/recipes/tortilla-patata/tortilla_patata_step5_1.jpg']
            }, 
             {
                desc: 'Una vez el arroz tenga el color descrito anteriormente añadimos el caldo de pescado hasta que cubra el arroz. Entonces Añadimos otro vaso de vino y un poco de sal y removemos( no hay que añadir mucha sal porque luego añadiremos queso ). Si el arroz consume el caldo añadimos más caldo. ',
                imgs: ['./assets/img/recipes/tortilla-patata/tortilla_patata_step6_1.jpg']
            },
            {
                desc: 'Añadimos queso rallado. ',
                imgs: ['./assets/img/recipes/tortilla-patata/tortilla_patata_step7_1.jpg']
            },
            {
                desc: 'Seguimos añadiendo caldo y queso hasta que el arroz este en su punto, más blando y entonces apagamos el fuego y lo dejamos reposar tapado.',
                imgs: ['./assets/img/recipes/tortilla-patata/tortilla_patata_step8_1.jpg','./assets/img/recipes/tortilla-patata/tortilla_patata_step8_2.jpg']
            },
            {
                desc: 'Cuando el arroz ha adquirido su punto, añadimos un trozo de mantequilla, algo más de queso y removemos por última vez. Con la mantequilla el plato adquiere más sabor y brillo. Y por último emplatamos.',
                imgs: ['./assets/img/recipes/tortilla-patata/tortilla_patata_step9_1.jpg','./assets/img/recipes/tortilla-patata/tortilla_patata_step9_2.jpg']
            },
        ]
    }
];
