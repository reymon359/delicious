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
                imgs: [
                    'https://lh3.googleusercontent.com/4HFOXUnziof66T8y72a0jFKUW_fXdksH621zul5rOLo62or1xA_HRIjf0SVYvQOJjNKgn3v2N6R7AOFJQ9HLaDqvy5TR15Y05gXY_HqXlnnXg8N7hvQwi3-3oo3etPKnS-NsYDgIf0jCqtTkmbKPyoN6apBKz1wXi-om5mdk6Ye6i0CuRZGYiqFb00N7shVFmMO25eYed0HDg9t_auXH9SuWDknxoe--4K6d5ODQaeq5-b3gcJ6_1-fKDPYO3QMrpJnSEsxVGl5B2WKR8bKub_HDMM906IUQ-uMbG077k2-tgG_hYCeOYVCpDuJIzIFiAdimSj3v04JYr_eamiNVRpVQ5MwYxsEVNHgTWKE5lQsntDrWxfrdBDI7waPtvQLBpyWxA990SS4H0Fv6hxo0hKngQmQo_H4GMqrrL4XWCJ16ypeDd4wZyxY6gn6NXamyzL9nji2uvNtQ2DZEV6sJIYx_aqAU96jP_qcKddtDJi5l6Bem8xHZ4GfNmP6d7IR5sBKU-6s-Z-lY2p_u1iH6tHfEntRuBD0KWg8eBBsTYv-zDYezoxTQJoHNgEwBSjiQBOeLHLNzUc3Z8sbW2EaMaLRUMYiC7moEHSg0a998piWBGnt8EBS8FV7VXRRZUIwMfgX2EiSTnCW5bwEcSWHMu9fQeK7IP3n8XEsLgItSuAC_w-oJSZ9Le9hLL3T88doeaf4LonqWyqfPeJLwTe7N_E-XCw=w678-h903-no',
                    'https://lh3.googleusercontent.com/Un3zl4XweEDt55tBnMJaJ4xQgdvifD3LFyongb3BUUXKFZ__jFeKJrhV3S8QfqgDt61bJFrOebl3IXS9mL5iRqqQPcWw9ytXpszhH0ZQiw_OHVbQhxDzpVYOXOuMhkxVtRAa_5XqJvTSVsq2Mc6gDJv1uRjXGtRfh_-hf1PwvLENje_4MNaqjwi-lKKowRUgRrSX7PqVdRaBRCYHHpAN1r9NaGkLm3jp1TgvPIk50nolito6lZaliIJzVU2YthXSHQoJxQY4EX-4QWAdTsGQSNBR3tCfnJDPfwOcj5sTfjgU3PZBBokJccFWTsbHRYCHYUXSaRYzZs5gVlcz6-Dld7cRVevfTd2pCK1pc-gOExwxral7nF-NHzyInbT9atvURJC_24hMlxp5FG_VpRsgiTrEr5UUEPyJ30M_cwSZvxMFrCxMF5tsmjDUiYXp5a0uZrn_Fji_thh_C_048FEcyWh6esy7Gohvf5jnk4mfChaHFa5HIeMmaFB1lHMsqKMYQLgjYCMGcxk9jtmUwZF9lUJJDe59yTJqJTnUMGUGR2tvoELRu_sWg7P6qDlJmKTmpcxT1Mjy50anVZgo09F8GtPDqWt5veq-8JXoDtPIWNv_2ryJT78ZyhK3jbQslHSBpzz1IeaYLtG7CBFP7tj8XsUyJMeU6I9UvStn4Vt0LWYfi3ByWNGYGStor4HB3HGqnuZitQS1FK3y03S7dM4obtSIBw=w678-h903-no'
                ]
            },
            {
                desc: 'Ponemos en la paellera aceite y unos ajos, los cuales tienen un corte. Los dejamos que se vayan haciendo y friendo un poco a fuego bajo-medio hasta que estén blanditos y huele bastante a ajo (como en la segunda imagen). Luego los apartamos a un lado.',
                imgs: [
                    'https://lh3.googleusercontent.com/34lgBKLvef82bJsCz5V1x9opMVW8Mo_lurnrmlyA5lSA6rSj0ULVKNhWWvJQhyerhDr7dAtAPH1mvSjw9vaLKqykd-2CGi4am23wUQxgedetippG1cZ5Mz1ZvXSnKOZ3DTLgL8PExV-eVyqgPT6U77FUkN-C4yUoL5Cm5U2F33LXCMXg7Us83xwmmwUHrO3A9xNeKtnwKvR4pUevEEtbQ2ACup3IJ3pCb84nyI-5ES-7wJOKUeRLnwGkJrg9q_x95mDHhOa7fya0RAOCsBJ_d2EpVrOwvi8v06L-dFYiwSEbcLqiDavgulxUpfE4ACiLZIqgkG4ow-DYthmTkV-sVANk3h_vXRwJtZYgBv_N3sBP0XvHWrZtUCcCaFSmjESO27KV8ZyEsqLbR9Nd3mfCiehP36XB-cNZqE4IsiU_LYgFUwicTLhCoSJNADMEQple1_FjZKXv7tgtUyVOb4PVtbHBbbdSO8enWNxV2k_lRCQx0TWmWNaKLgSK8fdhDn1o29MUg7Z9NDfYEFR4RMcvbvoCPiLLO8ubB_VFacQzWf9Rv3HW78dpdWlnHXt-Gjap-2pKU4XWB9txGqB7XT3vvg4tyKToaAE-1xNRtGXsNEzWVJDmhEHNdUzLvGaFSCkf0MLl18pJsYp1NgvSNG6D920CmSarzRje35BwBIlMfLhnEErEbLu5-rIG1hlHHZIuhXy6tJaDHu8v9g7DDTlA_bE8SQ=w678-h903-no',
                     'https://lh3.googleusercontent.com/0OlAb2dxZAf1Zcj2mVdKK_LL3ll3tKQDq61rSqIaFzuaeA1W3mzvv4Nh26RKiwnjfk2H_lmpeiLCGmPnC0U6QDdaJwjXyQvZVZiz_6mYotz9oU-Yos2SPKqkTpXSfslwqSRq_uUON2EkC9-iA_GI3Z_7mvIWU9mcjKhAzzL9sUXexdJ91W5jp78HAB2RCD70ZVQtxBiXIa_g2B4bxR_gDLQLvXSuf2QfZ16GLp1Dz0Erg7_IK7igrw-lGCvshKZkJ4XKjPaOOtqrE5dygsp0pEUE7cPAxh_r2Kch5OuH0vjJjYXtSx5ZWCZZVAoXhXY3_3fHml7TCZ2F2ymEt2Brs8eJERtJ4IIyPNg2xKpMOPoJFbJh7YNz1J7wpRh39TH6hY-mlTy6TBaqED4NMonwrEsafBIMESpDB9DVyktpvrV2_u5t4MuGKV9vJ-vnB4b7UZU3AayeTlX1kX-uRPIDwiqjlWPq4_Gi_6WWefoqXP75KS87Bxiy0_YZiLjv27xdryinko5IftE4aXb56CKvJNGOHgPZzir1FANIFI0vRXNiIcKybPQisvWB70jLMrqdTq4GYGSyJyojqiB5Lm3bVebPCRmx9y4vQVrBxzmEFSJw31vcmcwwVSv8PGcNtXhPVCLFLFFTfUHuXVSR4KQvEIPMZMqlqhA2EDfPa9Qy4FPKMeKr4v1iUmZsXFrUjZgjROgHe8dB5bvWxaA75_E5XVfV4A=w678-h903-no',
                      'https://lh3.googleusercontent.com/bAv--b3o00cXirMUgAXdSm7DHUdEi-MxvTg2wYh0tLpowoxAzvzVAr9eTB1_d4vqDzZ77aar4R0D0AVHuONU4WPIxBm3vOyjyeszYfv8AlN97kqQVarjfcS9oYzvQXhl1e4ObITFdiS4JA5JG4kFqHfwgktN94trCMtfbBmXkdCmrexUFBZ6x2wr_wZLljKeKDo038Hh4JuxuBzsIUKGx1viG-Bc-fdfBhE6hCgRiUmbp8CCGQWwn40nhMt0IgAoRIrgZ6pOlXA9zopIjDzl4vzvBrXaqYDfReRuk0eEpedraNjLNeb9Y1YsoxIDOJC2qhXrazCjxvy9tbnc7yBhhzbqsGPHFTePX3CUcDoW6QufOE7ttmvtj2mKm4mLeUpaoFwmhbF25Zkubacx-MdHBfpyeDoVRhvovVHhJeXmToyC-G4wubEdh_aGLwCtjuhisO5lptzbIbvg05GuBYVhLRYcATjtfH63wY3hpEuUoY_fFzncJMHgVu9tdNqDEigdB67ehlEBLKgkNd1XuZ0rWQ9nR4q_9geTPLbvBolYOBHCVQ7Pt5-5zbHuGTVHJPztbVBtgnmdVMdg1CHXNVAPPUPK6SrhmcSdaFjmS5BrSFWwGK2zcfsEZB5-kOJXl-tQ3yUJjFbGFPsq7zy3aZW68Mnlkn5Lcy3z9ThgPuPHoNRNmINGDqDYh759RnFhuc5xW-S830i2c09m855Zj0xAgDlxKg=w678-h903-no'
                    ]
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
                imgs: ['./assets/img/recipes/risotto-calamares/risotto_calamares_step3_1.jpg', './assets/img/recipes/risotto-calamares/risotto_calamares_step3_2.jpg', './assets/img/recipes/risotto-calamares/risotto_calamares_step3_3.jpg']
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
                imgs: ['./assets/img/recipes/risotto-calamares/risotto_calamares_step8_1.jpg', './assets/img/recipes/risotto-calamares/risotto_calamares_step8_2.jpg']
            },
            {
                desc: 'Cuando el arroz ha adquirido su punto, añadimos un trozo de mantequilla, algo más de queso y removemos por última vez. Con la mantequilla el plato adquiere más sabor y brillo. Y por último emplatamos.',
                imgs: ['./assets/img/recipes/risotto-calamares/risotto_calamares_step9_1.jpg', './assets/img/recipes/risotto-calamares/risotto_calamares_step9_2.jpg']
            }
        ]
    },
    {
        id: 'tortilla-patata',
        title: 'Tortilla de patata',
        dateCreated: new Date('2019-07-15T00:00:00.000Z'),
        author: 'Paloma Cascales',
        img: './assets/img/recipes/tortilla-patata/tortilla_patata_step7_2.jpg',
        desc: 'Tortilla de patata con cebolla para varias personas.',
        time: 30,
        people: 4,
        meal: 0,
        lang: 'es',
        advices: ['El secreto de una buena tortilla de patatas es no poner mucha patata'],
        ingredients: ['patata', 'huevo', 'cebolla', 'aceite', 'sal'],
        steps: [
            {
                desc: 'Cogemos 1 patata por tortilla (en este ejemplo 4), las cortamos y les ponemos sal.Luego las añadimos a una sartén a fuego medio con aceite para que se vayan haciendo.',
                imgs: ['./assets/img/recipes/tortilla-patata/tortilla_patata_step1_1.jpg']
            },
            {
                desc: 'Cuando estén un poco blanditas las partimos un poco. Cuando están hechas apagamos el fuego y las dejamos escurriendo',
                imgs: ['./assets/img/recipes/tortilla-patata/tortilla_patata_step2_1.jpg', './assets/img/recipes/tortilla-patata/tortilla_patata_step2_2.jpg']
            },
            {
                desc: 'Partimos 1 cebolla por tortilla. Luego les ponemos un chorro de aceite y las metemos en el microondas unos 10 minutos para pocharlas. Si a los 10 min no están pochadas las ponemos un poco más. Otros modos de pochar la cebolla son válidos también.',
                imgs: ['./assets/img/recipes/tortilla-patata/tortilla_patata_step3_1.jpg', './assets/img/recipes/tortilla-patata/tortilla_patata_step3_2.jpg', './assets/img/recipes/tortilla-patata/tortilla_patata_step3_3.jpg']
            },
            {
                desc: 'Batimos 3 huevos por tortilla y echamos la patata y la cebolla pochada repartida equitativamente. Si sobra cebolla o patata la ponemos en un cuenco aparte.',
                imgs: ['./assets/img/recipes/tortilla-patata/tortilla_patata_step4_1.jpg', './assets/img/recipes/tortilla-patata/tortilla_patata_step4_2.jpg']
            },
            {
                desc: 'Luego ponemos un poco de aceite en la sartén y echamos los huevos con la patata y la cebolla',
                imgs: ['./assets/img/recipes/tortilla-patata/tortilla_patata_step5_1.jpg']
            },
            {
                desc: 'Ahora viene lo más complicado, cuando la parte inferior esté medio hecha le damos la vuelta con un plato y la ponemos boca abajo para que se haga la otra cara.',
                imgs: ['./assets/img/recipes/tortilla-patata/tortilla_patata_step6_1.jpg']
            },
            {
                desc: 'Una vez hechas las dos caras y el interior en el punto deseado la volcamos en un plato y la servimos.',
                imgs: ['./assets/img/recipes/tortilla-patata/tortilla_patata_step7_1.jpg', './assets/img/recipes/tortilla-patata/tortilla_patata_step7_2.jpg']
            }
        ]
    }
];
