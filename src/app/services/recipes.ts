import { Recipe } from './recipe';

// Here will go the recipes info
export const RECIPES: Recipe[] = [
    {
        id: 'paella-pollo',
        title: 'Paella de Pollo',
        dateCreated: new Date('2019-06-21T00:00:00.000Z'),
        author: 'Paloma Cascales',
        img: 'https://lh3.googleusercontent.com/q5gxVOjiuH9qaR-m4fjYissc1iRenPPNIHcMAB6sx268f-Qu4nZQEUTzWW5ydq2KlyKyky636Q2ds4AeoAPgWpswrWIwnasGHm2fH76IFEW7UQ4psu4KEAhSdUa76Cz1r1ocaOk0L_KozeOIRhOx1J1dzNofBYbmags6bfmD__3UQBHOR_dQq0d-vpApzxGDrlwdxYN3E1PycYOkZQdUk0Y-7eKlVAe1rS3VwuoZnpfMYT9UXrMtA3Wr4qZ2XGMBeeunaw136wneZInEB0hJmQCnNkMef3mYK22kPOCrOW_BB4pvXYy949BQKjUAn8eM22mwu030IQITVkd9yyb75NOu2IzQmtBlPvHd_sSKRIP3pn3p_ot_9IylH-IikdUC0Koc3XKmQg3moOVOiJgzAR48QSrQ65bX0gqaBYrIm3_wYEi0CYR5zjhj5Z-suROGDoy2Y0WPEKim0Jb-XxyUt4sdIT5561L_rzD4UGi05boqhimZCMZ8s7xnU0xpK5AWSNf_8hrXHjZ8hXMpTj4f2xh-_pzgltyOg1hxRqYn_5ZndO2WrW0YA5MQ2OdBTMEOfCPyju6QwqVWC2AnyGv3jwOfz0i2gdZNflwEdTELZ2wKsgPe7VSr629ZidmDnXaUE7ndyHsNArPEJkBhMTO5NuLJ2NeOVobb_LKcxEg6JE0hO4M4FYX9FBvuCxbExdpBfeUN5Rb9WOhg0AybMwnjEb2v7g=w678-h903-no',
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
                imgs: [
                    'https://lh3.googleusercontent.com/hANSP3EKi-PjXVw9aBQqYWB9wNzpSUoRBeSeo9mQ6kfgq6DzZV6dd6AEbzFQMXqP9fSYJSoeLpufLYW5u2a-xe6K0T-C-KPhff7gV7zlf3tQVe8xAyyrVuQa6QHqvhB72GEd3mbgMNOZMctPaUrdjJMnfVPs2PHl6w9VsdXgaXR9m9vMHle61w0ZIDE2Q0tVnf7p3oEKxI5KLlcUwp3f_uKZDa7v1WzMZ6jGFwbOF-EyYUKaojR6Ev5IgHyerdTSxqo7H3ZKaGio-StFC7p6-fX0qmRaMoCDOPWDUSFhFVPCaXUR-xbkwh9ZjTOWwUZEr8ZrCJI_csUjni2RtZ39U_GStiu2Ou829SJyDRjuoqBnb46_xaK2_JyxI07iVuQ_4qKacwJ0zjpYAl72Bbs9gsPGvIIEUVt5CzWRw3Brky1mG7ArCcTBQnIZSTBf0CpXRvMbPiM1OgenHHuow0EQKqg21QKqotUMmtbJhDXFSPSGnGlgITmbHEia6EliLiG5W6P06NuRdVLz5Lfca9Pc6wk8wZh5KNdP838yRNtFyl2aQlyxir0sJFn1RTU6JPDQqT4Lq6tOXznAF75IYqMYRIPHnYBaWaWIeUUZlw0OqjU8VaqRA1dtOZTPdkJrExzf9lXe6WYzhz-HF7i6Be2bmr2x_8_YpyOSRXCm8Edsix-AFVPDjeipra9W-Hq4_dfn_MF4qC5xyed_W0VbylwJ1JkFvQ=w678-h903-no',
                    'https://lh3.googleusercontent.com/5rj5yjB2qyKMX2kFE_ZSM29zN4CMrCkWsM7ZhDhP73RaDH-1GzqjbVgyJSRJ1Blot_tKSYt2hO0WcobKObbEAwkrSj57WK1zeyl63DZ6FOU35FZ9MF0QaKNHqX3VBogMWylsl1JhFst_XFvyJRi3a598NLVyd_JfnZlA-085Hc6wdLCKBSkGUWHkxYakidmV4sc_JkIWevDvxrtwtdmWbV2uWAYg5H6rISSjRatF_YHNcWi_hJeIRvISktfQuUJGAP6FaXDyl4-tHqcI2pn4-vfbdWQefHbmyhjutnieggOO88B1Y_b5SEEmjNSdvpLNAHhqmd_oJPsH9QNnq2xvzh4M5yG5r_3bceu2-4XFBe6tuwnOLyRwkSPzwMtJ54Lp1WGMorWvRyry7T1Ja4KHuTJo-REZ4gznAbJ82pLs_2Q5Ds--U5OEeTw3eIwCIs2Y4kWbqYVK3zyPSbJSJzBkLS7lnbh0WqJZBlqD-1bk1_kUPKNH9keYgnOTEJcGP9QcTBI2IgTDRJCp0MHddBcPMyku31wB9Nm2PYHyE7-91pR2InArryx7ZeG8X4yMz9XQog8ZPCNb9Muio7mu-LAD7Ix7rj0gSZq6UjBE8OKSBlKj8sadTaPUgSmtnJY8w5PuT7_nwf-sVzzNYn9bHjkKt4Lq0GgE93eNJ0cljWOaeRUJRU4gWgpNXRY6kcHQG0iYJbkr1K1HCRtPmtd-xD8Lao5w_Q=w678-h903-no',
                    'https://lh3.googleusercontent.com/21mz_1jjNnW8yxjtqBjMGNxy1qAONHu7ZoORI5xMvnvuNiIHtB9cqM3swS4uK-7PN_QszVI0JFdAx1CaJjXDXIT27gL_X-LsFtsQmfl3gXooZTTuXQEU6tv3TRqx7_eU9ejm8SxvmuSZAEHVK_EyccndfkoorHaPMlhz3Jo_ccMvuj5I8YyY_KVmxot67wn6LyuI-GruuG8co93S5qF44fRQe8jk11lcDHRHcIRl8GBp1QaGCRVSrQytcwAqbPoXL4w8H8E8v11dhbbSn2QccInPKu8clQZZ9oW9RiUYbFu0ESNcMkhdhHF7Bp4humtym3UN5KfmDAIlJcupX6lNZJc-AuNM8FaKm13o2TFkyeZa7O_zB_9KrzXilktibh9Ocru_xVsjuHQVX59UyEV2RZ9FX4yeK0ggSho_B11yMe4vltW-FA8lzr1wyB8BD4ERyOmGbN-VJuRv4dNdsuUUfetXOwDCHNFE2LST6zscOuGPxrtBAPcueTEgSF4qXvyA4UdDgSngAOXwP3dwJqFEGn9-dE45i4r6lvoXlXl9UP_ZKVOx3DTD531x2iVdktMYAZoMUemYVXz0_KDui29vHgcjDq9ugnj-YHk-ikMHqBuW3xdITCxkAWzgYM-2gVx6saHJN7IiMeJGcFO7RErX5TJ1bVgnlAjpLmzhDI-L3RCOiCtC1pEU7z8lCUT7-n87Bfm6EyYTRlhTRlFYxN0FjtqYdg=w678-h903-no'
                ]
            },
            {
                desc: 'Ahora echamos un vaso y poco más de caldo por cada vaso de arroz en el tomate. El caldo usado es uno obtenido de una crema de verduras pero se puede usar otro ya hecho. Luego echamos el caldo en el pollo con los ajos y echamos colorante o azafran y sal por encima.',
                imgs: [
                    'https://lh3.googleusercontent.com/yV3f8TGovvHdloIPmdpFpGqKr_cNNniZEy7S7OKr0EObe9TLXE4D2SuD-CMvSDn1k5CclVM4wGqww3odaMc36wVA2MWUm6ssQlqQkYwaeNqwh6VCyMEVEMDRAv_32AEAUPjXhwNv2BmzVVUXviAxD4RkH_1hdrYQqKfI9CfX6mxk5sM8eKrJ-1XDGtBBvctK6ZY1e9XH62Lw4hJCzph0wkH4WegB6C2C-l__SyKg-7c10eHO_fJlVZgWnZxd1IdotZOrI8VpHuL0xoOcEGxZdHQNLE6U0bw1v3SFl2jMxCUWn213bZ3-0xIoCP60yzigUXrB7RcRmGHQ_kAtNvk4HAn1ZbpSaOdmKFj9yOzNf1KW1pCXFuaCkupTRUEtQFQUFH-JeYGAxxfTUgkOLsQ1AB6rPgm_sVl6vuIHieNGOCrE68Q60du49zGR2K8EBMi2X5SWqJ2tNmA94DKLdlP-S-Hn2pSIPZJHJPnWyt3u5OYn7YX9i5gSx87QT_H2m5h0IOsQ4v_ETBaj9FnrwKGmdeWZo3UYJm4Yh6wMzumoUBzj_0MJs5pywsG7mVB4x5Uk8-oK_ULF5XSHBUTtAiGSZbCAVNLi019aE9cCVvwDfpDIJb6A8YWkmrnMV29mhgXsoXHASK7YHDC5L9s9-Xdq5rCSct8JftDdmiPFsFatMb9s6HlIdnP7qeObl2MivsnkIwZq6XhTz4dVLOawtOqT89XJtQ=w678-h903-no',
                    'https://lh3.googleusercontent.com/WnRD2f27O7nCzspwqS_6js36FB4BMg0xf54O2nOQcWZHggCF7J0mdPaIO7ZzmAx2tPIzvhVl2ruaOMy07fPVL2Ocfu4G4taAzkhaeSThv_isfau8rmty_e7JqZFArUlQfdSK1AnqBKy8nq_QM2bVw_xDvVgx_CUHrNPaINAZ31RiyXGKcz86s3heoLHCuunzxHeravHHZfndhLZIyHNVlXzRkNkaU7W3tU5eBqBjW8HsC0gNBf_fMUFVITUbmzWtAHRTN2etkHmVV-IAFzGT7Bb18esO88_SVoqa0gs4rhALDi412048CiqJlRYxY6UpXiN5RYr-CskQ4XJdvD11HkznRduuhUn7df1gJhOnsYT3iJvHy31rTG1n21-cFX4kAVTiV8rEGkQXB_qH31hDUhyWeccanUDCf-DzvWQEQTrzN1_tVtyqcCEiEaRpKF8qroiUChQ0pJ3-8cEdM2XWgI5YRxlCGPPjyqePn4poJw8NJ21mDGTOm2yKSNFME3sN-8loPUQFnhIUHXqnn2VZfxELCHdNPwJb8LVBYpwJ1xIJzakafAjJlCGntgDDTTvNm3lMwkqnipHt3pFpG6UHQ_q_sVEG9lY064Y0v3xFzDZopONosSAEWzU9Xyl0kq8V9uXbTpLV7XA16BZ0_Rfa6POFCmUQg79sJ-mCzE86GLyl1Y47FpVcSIGEKnQ3_MHn10S_keUjaQCdU8hYex2MC9QnWA=w678-h903-no',
                    'https://lh3.googleusercontent.com/7zS9bxi9zCJcw42qmEvHcHehj3Prj2pDavvzbccLPn0n7wq6Wb530TPxuWjtbvNupyVGdpzPM2--ABk5McnIvObmqDKUVtc2H7DhQt_uJnxl05SHF1MRURmmj1jhW3AzeZme4l1rhgXVUeOPfmaoT3Om2n8aXhghmrMM7HAKkc2aXtWiK31tHjq3qaq4SCkdQWUl11MGd6wDTeOv4uSH3LLceP2DBQPYO2iCZ1C_MQtfM1IIeAmE79ZQRSz0vTQhr3UdES4iWfzDqll9RiuNr2eISLBmSaxXlUcNYKOrnGH8cUu4R8oNl4pMPTdkI-YsEqQHZHfd8vskwXw-LQla3AIWvcgVP8FWO_d90hKIg7aULMEly-6fYJxOjv7Faec_mwXGTa9xGpTfJKTM5vhwIlsvyqA6lOhNwIm0TP7mUNuRy9a0QEJNKPNpC03ypiNnwd6qlpNF3FvY7loV5ttbd4wONNBB17Ok4h3xi6IqBq-HmpOOiSN-vrJY45eAt8K_Wu131P-KvsjYV9tf_QZTF7b-f8R1oY077AgAmOdFN8lO9qnPfP7blsZIIg8GWCMBxRIe_w6xlLvENAVesoI2w1YLdzd0atn6dXRSwy_6WM37gZIKNYNEBmyxTj5hohsuPGr8BMR7YIjMzlRTIk3yG7s__tLzIaejoTjbSuDQTgKEY4XGY86RQK1Uu_u2b9tWksDOiA_lhC3qIqZxAQGhiltoDA=w678-h903-no'
                ]
            },
            {
                desc: 'Ahora lo ponemos unos 20-30min a fuego medio y lo tapamos. Al pasar la media hora se puede dejar así hasta que se quiera. Por ejemplo hacerlo por la mañana y dejarlo en este estado hasta la hora de comer. Pero antes de echar el arroz hay que recalentarlo hasta hervir.',
                imgs: [
                    'https://lh3.googleusercontent.com/e-kVHBlL3orEhFhcsf2UwBOhvQoj84cENqEegGvpluLKHxpFP1Ujh8nFZtNLibiHebkYN-z_f5Zv9Y_BfmGDHaaLH3l5xbiEcArJTIj_BnMUw4IkhhPImzjKqGqGi_w0rVHY1qYzeGgPh0R1KQN5IdSpjDmBmbUTOuglH9Ih05rd6WtNPKn7TE0LkGN2mp3TSwB5rgJi3q_5UQyEm4HPw4KeXIEeSp9lFmYw3__d0aNv0R6N_qvdCHTM-ojaikjeqfIGvAHUZX1OTwZUKrP4Z87-1uQFWoard-zqnVYCNu1MwfEUm9leIOsmmXNe2ZvYd6Tls5h2PqmpDfA0ARwRB-OdfehoSQHHoabqSNd_ClVMMEzAsSeS0C1rR4XVbzONxpKwZgQ-a7Bw5ZijSY1Hoq9EFFL7nEkd4bE9Ka3q1vU0k-AgYe285XTqeThKK4DPnS51XyJX4JYHuW759PI8-l7vYNpfFOnYBBgP6xcKFx0MGsoQwW1JZaH2H5Eeyvo5sTxWlX30RZzHW5GuBjvrEwlLoLvc48MryxRMma2eop1WUuxVOozDZzs2eQnEy7nJ1J0g426maHVwhXrjH8yUy7_yXfKB778J14H3zG1CQT2A7LW9G15YwAk_1m7dsxCGbD0939vPFlUSpLDdn1NGoVer0cw1vxqn_nDzD7lVDvtvSbFR5DZKwdqq1w-1NZIgj8gyTS1WkNaLogmxDp-7dtxMCg=w678-h903-no'
                ]
            },
            {
                desc: 'Ahora vamos a hacer los pimientos. Una vez cortados los ponemos en una sartén con aceite, los tapamos y les vamos dando la vuelta.Una vez medio hechos apagamos el fuego y los tapamos.',
                imgs: [
                    'https://lh3.googleusercontent.com/uGQmt8zF9U6beaMCsmju_RZvW5WTKAUIj3E53RMjxHR9OEdeeL1A_6N3tFanhiJmPnnxUiwFBJjjIbQbTfLESMhrk5u7ejFKygRUiU0N_-kBn2FxPElBXzgVvy-vBvdxzpvOGZcSBo5Wfvr06FEtTA5tmYJoVZS9pdnoXSE4F2C4dhOpTjAP_t20OBnXCL5UfuufRmLDnyOkqZ0vuQ2eWxgxX52WTu7U7GY7exNxbu98_NFOCpV12YLNh8F9IQshYAHkA40jDuhNnj1vIxGgZHSImZ_Gl_9XLsZNKY4PuWwUiypssRQq2VPU_u-zj3WhFDy9CsoLh2d_4Wv35metUzvbEd0WgDnAt2y1eXHMOXm3WYVcynni6o4RHdXcH5tJVA0IlNHxtD8ilMrgvcLi6ssKC5monrKjAaSoYCCzR8apl-11V89vA0ghEicQZDddpO6MyyHJ7RxrQ_8mEZJ5_tDMpmixOJenCou7v17D2yQT-glM0BTsUcD1s-h9QT3fkybnZFxtwb-zbfP6bpCYoCrdTE7jgroJtdXaiuL8MZOh0Ov0CdepudYmLSnPzfeebVGlZ1qdJAX_5-ukIiFX18OKCbhG8t88DwyfLRUSY3oiLB-0ViITR2Rw8Si11BrCd9V0d14HaOPGQOJvDuJIqUbpP6mQKBqCfPpeAdDCj5jLOwcjRJUJLrGoSJglOqpZagRCw2IJ6__59adUjlNWT4Dqxg=w678-h903-no',
                    'https://lh3.googleusercontent.com/9z4jbD4YN09_k3ckAYeRknQhD_t2zmcU84pM0xEGwTJY2YUu9zu558HeiP9lfJFcElaIGD6Cx5RRjs4I8uDG2E3WFq4EFqzz2u-5pPVVLX9zZ7wm2-YtWafko1idkROzAsvRnI9eODw5EI632N3r5_X5oC1MNfwB1qv2jLk0cY9tCVqX-X3e66MuFAn6axIVOKtuWuRaCIPqUYIt5AkMJzzT2rnRptwLoCR6h3D_WxHZV1yBE0J7D7M_BO-4GJPCXZ55b1LhNTOvgHj_srSr_DTdoezdtUTyVQxWQlUEleBjdrf9S_Xrz6eiWC27xlLl6XOt71EGE-0xtXtYNbmq333LNI7IPxXSB8fg3i38rmAwEEZrDSvfc_YCn8THSeYpYeJ6CMlgqogh6zTPDQqYSYEVQZipXk5v8hzqrXqMuJ0sWGCcg_nbhP_rP0bbkSSwHBOqya41WXHYVaWpMJUVacGOwEl1MGjD4tHtAk3V8koymwK43Ml9rmfjqPbLZ1uLMi7-OENa1h4rpyMFIBbFx7WJxy3htw1-K5gIj8H8D9rhj5Oz1Z_GvWvUZvNUEUSXa75sJBZaeGK1PkN0iDzFW1oJqGATTm0hUvMvAEtbcQ1aYcTObKtKAYgGT6QghgWesAtUGI1Y5Z8lPFHZijN6ujZ5kU_4jXVxuUUZI0Llmu01ZuwvJ1XQHZxCrc7HaHq0tCjjZftk-C6G7rXBjktkUIeiQw=w678-h903-no',
                    'https://lh3.googleusercontent.com/EJ7fePaR14qEYmdLxHRMP3v2VIK0b98Qz87S96QBHf5u0pkxvNdtg31pjCVb3hZ8VyTNNXnfkfXDTjkQTWN22Cn5QlKzJqQtfjqdW1AlCst5Z-DqpSNEfIL9G8FFEKEIcZvmTVkgJmZFhe8wHwbFMkaHmy1eXrvNE24U2xaXYT4DuipIQohUqmcTDb3vV9b9nldmJubAE-GHRGtKygNInMr8AhEiC4ABVO1gXuHTxjXSVvpSxkGRfDOOo5N97WykmwQESIs8dF3_HfCDGMIjJ02JBRkmxW0w3hwHcoVS7j8LZB3ofFLdqfXG6R5A46wq1TL75qdosWHbJbZkx3gEip6DnXVdBXiDNcNq2madYqKP631gc9foqzn7e77Le-kJrksHLO1dyJb2ccJwg3kF1Tiwv5QTIjMGv66qbE7ByaZUO0wPB0oC9L22tkZihQW2O0gN2AjdWu_W6H1KgD2AvqDxvklMA4UBGW8-UDjrWFqvmrBQObBF6Iuy_gIkFApDMsVeDq5xsb0vyLo5RZfKbQ0FaznBKHN9eWD8XHYAFLtc6StCLPG3kHijmToDszItNvkh9FJImhWA5ggiVenHLLH65qJbkoUfOFfGrkj2PXkgrHCupBNtOIMLuIwEZxzKcsr8vUW822rJ1RDLYeM6w7YTxMmJZbHFgVDb2ZJwSDN64UYAy5zOxrpIWpiuo6nvPC0JqLdpX7Hm5xLsrc5AMnK0AA=w678-h903-no'
                ]
            },
            {
                desc: 'Ahora es el momento del arroz. En un recipiente echamos 4 vasos, 1 por persona. Volcamos el recipiente en la paella y removemos.',
                imgs: [
                    'https://lh3.googleusercontent.com/W55HEpXWNA4sH0Cuw59qIMpE7E7Bvf0luZNPad_xRjYM6NN5rQfbKLe_RgjeCDk2VPLMSuxGX5dmHaUX4TzkJXBB1S0HhwWeo5VBrMrGM5sRAJNJKm3Y0uc-K2r8LZmz9lQ42w2nz8bmGI13RRba6eu1a4eJwvY0IoMl8UfMJHXyTv5L6TNTmvByJ3NDiybNMPoWJscZzKoWo-UD8bv9XpzB1R2LSjAyxiLkqEg1MZHJjtQy0SlUvuRSxf9E2MX4bAkZ5G8u5XTaWEgRyT0FvTthcOJf-i96Fv47Jix5Uaw8oGB9CYsWKPmQ-D8UPdo18Z0_1mZ7eapHBZrWUvx9DQN8pda0ve0dclL2QULOq5RIukjE-RU_2qV7w2pWKz5sEAbMYGNdoiVDhIoFv4SU8bSwkiDZyHysWZXTWbtWVDTIO3-43ZsZubXb6sdNHr1cSflyZ_XVoh4c-qulRws_cy708Od0nR1JJmZj7MzO2oLyjwSg8NlDKaqyxJ9rh9LeuH0cMMGw01MmQddD1gwxytWwuLBeOJu55m93j4IpgGywm8r2kQWL_zFidbrQURbx66ZYKSwtgUugs9CRuwA2UXW6qKkqQeYX-AjWD4jKCXL_HtYf5k-3ldlloWwye4SWjve_-6w8VCBKfk65RRWENxSlxoIYHNwybKSsNiIk-_gAwkBevTFLmo9oyaH-BCWk21tep772ypUdtBEDAXlv8cB4dw=w678-h903-no',
                    'https://lh3.googleusercontent.com/v-jPLT6NII1OLZ8pnzhASa11vnXe4iiPZQ9Ms-k1gKedVTJP5U2vLouSFDhl__io2cT8PEE-s0bE-mciOj3Zoxx5cypdbz2uuLtoaJTnKaCEGy5czNbAs00JjCyEhdbujerJNP7CbvO26WW1kJMha9EupJ9QVXkkwCaefS8E_9O1ycRCN3bINQ4Ql1gDGTpuVGHFsK7FWr3qMnzMYqCr-y4KGtsaw6PMws1DjdPyXYeC6JQe4rKR5GAMEEW6C8e7qZfUTf6uUzEge_ulRIebKSN0A_FnJds-ma3BgOliEio-e-Az_4ffEGJSW9TNQJpoum06vGRu1dyEprq64ERZlAMvQIsd2QvL_RNrRP6sXJki9I5G0sTEbZwgJuhm9mD8XiK0EL6fE_FqCxAK4NX44oiQfXfXtF4es3nd4HZ-nQPX8dbbfpTczFHCJrbh1A-cu4NeWzC8kUES-ur6WaAFA8Hc2N6Mg7LISZrZ-w9uwktKfjibccNA223iKKSyfHvec6_ZfYW42Quh8a8Tvini4IPLXDFv30LjbQ8Sz7Cw404Cl44Cq-KrqWdqA4lDyNszT-1MzvaqzsNzlPlSLLVjudatZs8TEhtHX3YPbVZ-6q7LbZi26IATwc2m9XAMLJqRNDNdC2R3R7-BLwT8yOpS_aBuE2P1HRD7Kswq6ju_vRFYyFNWiMYtCBm5O569_IXMpwcL0ObZArp4ls-S0EdRy6Bn4g=w678-h903-no',
                    'https://lh3.googleusercontent.com/8KH8ls64hyyAgKbJr4fR-z64Uj3ELR13XLtLoUGNMbU7Dy6aeIQTbj8b3tYpA5t_7OU8AmCnguPst3mIfmNsWRGsx-hBjLEVPUFQnOmYnVnUgsXX9DxZ58n9sYCCGmV8pxnqW-hVgLSPdt7VDIKwwGcmRSYWvZTTZy4TlB5fM5SbmR0NICL5Jddvn_xKiCrguVEhL04OdyEzVLvPe1kNg9VfMmH4QUotE2WAcw890kARQmLAi1bRZiP2pKxZiFQW6Ci-me_20RRVhr_mJ5JB4xbozNVlZZk_z3jPdOlKhDxJuV1c7yunH1zoiUZmqYl5nBzLdHA1apneXUBXqqzLPQ8xfH9PpKNOCidgv7RCD3z0svS2lWRWHVcrmnziL4WLn8UWj5yfBZnvxqMlBDpe3clmm4vSShSmlowPwQ08WPpTSVNGS5pIQXFiWmj_W_GqQFSu7_8_GjleaQ49eSeDt9wcSOhLwSMhC36yjMcttDlY5X0D2ztMioeT0eZpRDFMVGHloMe3zoi5ERsNCqTcosbmbnktoIjJrVJoBUljqWeb9NisxHBiREpOU9znPRnIPhKIzF_8CMpZ6pXnupcXTyBYTel3KAsNynzYkxfRe1tVM1AYF_7wN91T8RyKe4m9S7M5zhR3SKmVUGMGk_1f5znLwnPaF6XaCD1d7BjTtuXUxjCKPCBgOgSzpsbEEesfm4SKIDHyw__XpG1FMO0n9SgwzQ=w678-h903-no'
                ]
            },
            {
                desc: 'Ponemos los pimientos por encima y se deja a fuego medio hirviendo unos 15 minutos. En la segunda foto no se ve bien pero está burbujeando. Tras los 15 minutos lo bajamos a fuego lento para que se acabe de hacer.',
                imgs: [
                    'https://lh3.googleusercontent.com/YITyPZnbHD4eATp1KDLWIa8MlZRlv1WjPXLQsoD0rFjIfUuo-t1w6N8T0LyLkv3TT2RJ1iUJSnG8DjWzN54gqxb0r8ZdpL0gSaONA2j_JyF6o9hCtkKGrm6H6NF3nU02v6I5f_XJqU6E_tAXDa0Sc0IeQYSnDbvXnuGhMaC0Xs0o4xtMbPtDmoxJqHd16Q09LIPGB0M8YpQi2lGtMQ2tm8hUDhi9AaKpuvsT08G2NPzPuoC6mUMTLLJMBrM4Y7Ofggck_Zk-qaWYKcP72HQ6nvlDQZVRtbx73rLELXN1M1cBmQ9AXv6cZ22gYssIS_oacs_T6OUpzFbIsRWbldj7uM8eKTP5B8j00l01Fetk0PQmSud_1StDzTcwTUsFxlTqZ8L4SwuB_A0Zd7G0qnZJq1qoOwMuSyepxxl8i9mzkkFHxoaDuogl43eshYiwIcH0RzrTES8vP3WHTkSz1HNn4BBqpqMuJ3HIw7srqTrXtltz0Ornui8KF7Mo5M3sY6P7CjZN9AycjTrRLHdfKVXhPhENEsqpYPMpvIHlEH4eNHMVWbmTdmupZlsVjkrdfEaonnoE2sWQGJ-rgC0XJ5tgBrTKYUFM6lYGNBPBc62pJm3QHwz5TdBEshLWucwB8t0KFDBji4J10ynjp_yZArvUASFFe3av1APV1B_wXkowQnO5V_eTQPt9GO-w3ByuHaaU6PZU8MRK7Jm1Xgpmm-slv9T5pg=w678-h903-no',
                    'https://lh3.googleusercontent.com/28VQrTUku8aL6Fqvv34LyfXXB8LNl1JiRFHHthk2yRBGzqXkkeyU8e2f9r3jLmdqg0oBeFSOT6HvQ5twcrHdXXcH4G1qVlYwT3V7iAGfgNcrUtYUicjvotNG3uoTjOJmHa2_6wI5i7ZMzLp08H8EAX1vf2w_uYVkglTD4PFlp1DHGzBBLn11_-zotAyuVIX4a7YlxVR-w4kVN7gclPGeZGBYpVUKThtlbI81nxnMC15FOzUGJ5qWLXaknLRDp2ZCFahhT7l2ovbPlSrMjWkdCiNe_oeVQbLi-cnP9KDMHpkaUELmHOsuPZk6m9QjiTB5kxGdbhksVZjT3-aD-3vfsN4rUHozduugD9Ph8s5fCHs5KgbhBY3Ox5vINIUrlYgoiOQ-Lk37FMG1U9qsZa-gleoNPMVhdcsY-m-tQTLp5RqxEbI4JkQ5xuIqLiZ7J605TkXviTXjvXJ3sBVEagdOE4r6Q1esHpkkPpDIMuXOSnMCGWNJaLOJAye6RmgULHTPHMxufvQ7BPKrMZQJSh11b_ji8PyKv_tTjaOAbiRZ8eA5bAkyBXqMl4JFOQp9ir8OKPftvfgudVY3mNfwNEp6kgVCTdcGAwvUi-3XsigMVaVdKcxj38dCaX3rdnC8uEXl-0dC66evYf6R3ELKVLU4vilp8BbtcDQAb5-pJnREDLB8qA6j82ns9bLOb5xioeo9wcrcuXwz6f81fjJx9cIm32ri0w=w678-h903-no',
                    'https://lh3.googleusercontent.com/bWxJAMKHrJocGsnipTrtckIfIz58M3OBZFsTURkA02TaAN1Z67V7o0DJhsi0Z65ujZeERWXtTpEey4Gz6ZoF9qE6vEtwpC9A4xdysdBFQbhy_jc5KPCXhJKyTwHxloyhUlldSSfIg2IjOKQ9dBWr03ahIfTF7H639e4HwjBrMuyToHADqx4EJfyCjj9pymwKneqrbxTRnxQM_SVHiZWP4330HjkbCVE38S7KVsvTapEhFWZm_GN6ACob0cUOfbPtq3fSzm0aNU5pw94BzFCYdDlDIIAmvdMFJH2o-JaXxkrflxn6-iHnxF2VrhZVK51hhi1E74D4gif55yLo8QR6bHtH7fNswLmvnvfqMra6pNRVPYJ6J-TsgWqvnYuik3yQDD1dHOF-DpHbUnqmzy4uwclCwtXzLvYI4r3PQ5SEeF0qRWC_ldH7cYS4J79SV-IW53_RLQvhR_UMQu2WrYEdUxXn9OWpDlHZl2Q729XXTLXY-HbrOwPdR41sdaFWp0KqzOtHOA9d-s3775Spc3dlbErVfgfpX5YgW_zDZZGbAtDH7Mg6o3LKbIgzhhIN9Bb5VLvHhzuaSh68J9QvtVuNNqxYVj7q3LJyqWjfwCGaBHiSBIrzWk_KQ5y15kxOrlv-PNorGhKiRSL_vQ0NTxttz3PKGU4GIUfwC5XN4_3Ed7ZqJZ76KcmL2hIPthI0ro114vhwqpiOe4c0mGgF7MYe_ssJSg=w678-h903-no'
                ]
            },
            {
                desc: 'Y ya estaría listo. Solo queda disfrutarlo!',
                imgs: [
                    'https://lh3.googleusercontent.com/q5gxVOjiuH9qaR-m4fjYissc1iRenPPNIHcMAB6sx268f-Qu4nZQEUTzWW5ydq2KlyKyky636Q2ds4AeoAPgWpswrWIwnasGHm2fH76IFEW7UQ4psu4KEAhSdUa76Cz1r1ocaOk0L_KozeOIRhOx1J1dzNofBYbmags6bfmD__3UQBHOR_dQq0d-vpApzxGDrlwdxYN3E1PycYOkZQdUk0Y-7eKlVAe1rS3VwuoZnpfMYT9UXrMtA3Wr4qZ2XGMBeeunaw136wneZInEB0hJmQCnNkMef3mYK22kPOCrOW_BB4pvXYy949BQKjUAn8eM22mwu030IQITVkd9yyb75NOu2IzQmtBlPvHd_sSKRIP3pn3p_ot_9IylH-IikdUC0Koc3XKmQg3moOVOiJgzAR48QSrQ65bX0gqaBYrIm3_wYEi0CYR5zjhj5Z-suROGDoy2Y0WPEKim0Jb-XxyUt4sdIT5561L_rzD4UGi05boqhimZCMZ8s7xnU0xpK5AWSNf_8hrXHjZ8hXMpTj4f2xh-_pzgltyOg1hxRqYn_5ZndO2WrW0YA5MQ2OdBTMEOfCPyju6QwqVWC2AnyGv3jwOfz0i2gdZNflwEdTELZ2wKsgPe7VSr629ZidmDnXaUE7ndyHsNArPEJkBhMTO5NuLJ2NeOVobb_LKcxEg6JE0hO4M4FYX9FBvuCxbExdpBfeUN5Rb9WOhg0AybMwnjEb2v7g=w678-h903-no',
                    'https://lh3.googleusercontent.com/BsCSp0y5phd9KmCo9B06ZRRfv8HjyCEFy2ruz5cvIn6h5oR9lDBkYcAaFYL-iSjbygwNMMznG7qZPzpprRP6es85ZmSyG3GA2HvRZHSrAqnyAktgjPVLHAft8WCbikHrW4iAsIbQFS26Q-dDllryk_LC6pFJMXTgVLAb2KDR0clb6eOSdoXUQr9geVZ2aE96Ks_cKJqBzxjWhIOTjg1R5xSNFcH7LDQnkMFBGLG_duU1jS3li99U_1oanWKHXOeyStp8ICUDxlCnlQnCM3iC8fRD3c1w9MrdU84hiUvc1Eqy570e-XWb2mdHUJ383s1Wv3MeaZbR3CpaLCbK5dR6R4Rva09hiTggXGkZ9j3dV-oS_dCAjPdJUNnu0uCLY9xcxRV3PyJQJopK8MofopNgTqgaXGmO7X89kXZEmHQnQs3jnBYgMjT0fohU2dOF4a0W7k2TzUKtMBOPcy7kDpFt7XEi71e289priZXtr_FOJz53SMsPQRfAX0Nqk5grqBfP0MUIy8UZZlA8uPCGPAri8Cx3o5Ka2DLk7bs-FhZxNdAsnpCSyDFC7UOE_P5bw3ulSspy2puh8Ef_lP_jtgV35dna_G-ljuhs0-Wd3Gx7NDWkBS-TOrh3zAwqagpnS_8u_Z8WnLvJxLEl9A6RopVgPqn_3CFhb1GbB_i3aHEPcbK2ETbd7GflckWBpYoCA2ixQowPUobe0xUfdsEsyN1ViVJZiQ=w678-h903-no',
                    'https://lh3.googleusercontent.com/BvyMqwnAulQRhjcUTf287Z-aKvlz8TT4OZg7XWx-QMYa6NpPQV9YP-KThgl56kCw4sYJgsLODa2pXSLzlzjELx87k8Rd1lMMjjg4ILxdKldpeSl4kiFuZEocyhUQEt_yTiBJt4rsyE1_Fmx179boneA0KfEYGDHJdqNhJSvmlPVp-JAwNzHGeICzS5W1pckKrWKZCwBPLq3va7JHD41MgCn9N95O08KKLlIvrTRPpwHYYzddK68XQr9bzJIAgMK3sl0Ht4kSKqteU-joroj4fRqVIAa6n7dJxw9E5l5vleXs6CbEVf0vtNlxaNHR1_7mwGs1dJ2OR9WRaFiwv0zp0kZMsP3KNv2h1cCM0_3mhEPSFT0hZrrYrMQ72AaA3j2ViTdGQ0iKu__06XomQb7GD-ZTa9eMaz8hZ2Bss5h8SL0_9qgx-9hGId4m0_6ejeOK1iY1_gm64fJo5fxN-nfCBVZKowIkLqK1l0Jp9UJdvEBAr7kgmwsomAuRTvgCJPL0TKNMiEwlgSBQyOTcc3kftFOPDt55dbJIYV2E00IFZH3QTRkluPhRYt4jMB123KpgGw-x7xR2-Odtorw-JD5-_VZN8n6JRJ7N5EhMMkVCULw2g6f2BD1dAaXAcsXOsJNsitXapPiOxWMT1PRZmQarRuOxW1DPdjNL_4LoRwJA1Kex_hkqf2IGOcDrQFRUl0e0EMYIEjfSRDWm2mmHnPvmXGtZ3A=w678-h903-no'
                ]
            }
        ]
    },
    {
        id: 'risotto-calamares',
        title: 'Risotto de calamares',
        dateCreated: new Date('2019-06-24T00:00:00.000Z'),
        author: 'Paloma Cascales',
        img:            './assets/img/recipes/risotto-calamares/risotto_calamares_step9_1.jpg',
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
                imgs: [
                    './assets/img/recipes/risotto-calamares/risotto_calamares_step1_1.jpg',
                    './assets/img/recipes/risotto-calamares/risotto_calamares_step1_2.jpg'
                ]
            },
            {
                desc: 'Mientras tanto cortamos cebolla y la pochamos',
                imgs: [
                    './assets/img/recipes/risotto-calamares/risotto_calamares_step2_1.jpg'
                ]
            },
            {
                desc: 'Añadimos aceite a la sartén, echamos los calamares, un poco de sal y un vaso de vino blanco. Y removemos hasta que se hagan un poco. Al mismo tiempo ponemos el caldo de pescado a calentar a fuego medio-alto',
                imgs: [
                    './assets/img/recipes/risotto-calamares/risotto_calamares_step3_1.jpg',
                    './assets/img/recipes/risotto-calamares/risotto_calamares_step3_2.jpg',
                    './assets/img/recipes/risotto-calamares/risotto_calamares_step3_3.jpg'
                ]
            },
            {
                desc: 'Ponemos 3 vasos de arroz para 4 personas en un cuenco y lo echamos con los calamares una vez estén fritos/hechos',
                imgs: [
                    './assets/img/recipes/risotto-calamares/risotto_calamares_step4_1.jpg',
                    './assets/img/recipes/risotto-calamares/risotto_calamares_step4_2.jpg'
                ]
            },
            {
                desc: 'Echamos un poco de aceite para freír el arroz y removemos hasta que la gran mayoría del arroz tenga un color transparente',
                imgs: [
                    './assets/img/recipes/risotto-calamares/risotto_calamares_step5_1.jpg'
                ]
            },
            {
                desc: 'Una vez el arroz tenga el color descrito anteriormente añadimos el caldo de pescado hasta que cubra el arroz. Entonces Añadimos otro vaso de vino y un poco de sal y removemos( no hay que añadir mucha sal porque luego añadiremos queso ). Si el arroz consume el caldo añadimos más caldo. ',
                imgs: [
                    './assets/img/recipes/risotto-calamares/risotto_calamares_step6_1.jpg'
                ]
            },
            {
                desc: 'Añadimos queso rallado. ',
                imgs: [
                    './assets/img/recipes/risotto-calamares/risotto_calamares_step7_1.jpg'
                ]
            },
            {
                desc: 'Seguimos añadiendo caldo y queso hasta que el arroz este en su punto, más blando y entonces apagamos el fuego y lo dejamos reposar tapado.',
                imgs: [
                    './assets/img/recipes/risotto-calamares/risotto_calamares_step8_1.jpg',
                    './assets/img/recipes/risotto-calamares/risotto_calamares_step8_2.jpg'
                ]
            },
            {
                desc: 'Cuando el arroz ha adquirido su punto, añadimos un trozo de mantequilla, algo más de queso y removemos por última vez. Con la mantequilla el plato adquiere más sabor y brillo. Y por último emplatamos.',
                imgs: [
                    './assets/img/recipes/risotto-calamares/risotto_calamares_step9_1.jpg',
                    './assets/img/recipes/risotto-calamares/risotto_calamares_step9_2.jpg'
                ]
            }
        ]
    },
    {
        id: 'tortilla-patata',
        title: 'Tortilla de patata',
        dateCreated: new Date('2019-07-15T00:00:00.000Z'),
        author: 'Paloma Cascales',
        img:
            './assets/img/recipes/tortilla-patata/tortilla_patata_step7_2.jpg',
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
                imgs: [
                    './assets/img/recipes/tortilla-patata/tortilla_patata_step1_1.jpg'
                ]
            },
            {
                desc: 'Cuando estén un poco blanditas las partimos un poco. Cuando están hechas apagamos el fuego y las dejamos escurriendo',
                imgs: [
                    './assets/img/recipes/tortilla-patata/tortilla_patata_step2_1.jpg',
                    './assets/img/recipes/tortilla-patata/tortilla_patata_step2_2.jpg'
                ]
            },
            {
                desc: 'Partimos 1 cebolla por tortilla. Luego les ponemos un chorro de aceite y las metemos en el microondas unos 10 minutos para pocharlas. Si a los 10 min no están pochadas las ponemos un poco más. Otros modos de pochar la cebolla son válidos también.',
                imgs: [
                    './assets/img/recipes/tortilla-patata/tortilla_patata_step3_1.jpg',
                    './assets/img/recipes/tortilla-patata/tortilla_patata_step3_2.jpg',
                    './assets/img/recipes/tortilla-patata/tortilla_patata_step3_3.jpg'
                ]
            },
            {
                desc: 'Batimos 3 huevos por tortilla y echamos la patata y la cebolla pochada repartida equitativamente. Si sobra cebolla o patata la ponemos en un cuenco aparte.',
                imgs: [
                    './assets/img/recipes/tortilla-patata/tortilla_patata_step4_1.jpg',
                    './assets/img/recipes/tortilla-patata/tortilla_patata_step4_2.jpg'
                ]
            },
            {
                desc: 'Luego ponemos un poco de aceite en la sartén y echamos los huevos con la patata y la cebolla',
                imgs: [
                    './assets/img/recipes/tortilla-patata/tortilla_patata_step5_1.jpg'
                ]
            },
            {
                desc: 'Ahora viene lo más complicado, cuando la parte inferior esté medio hecha le damos la vuelta con un plato y la ponemos boca abajo para que se haga la otra cara.',
                imgs: [
                    './assets/img/recipes/tortilla-patata/tortilla_patata_step6_1.jpg'
                ]
            },
            {
                desc: 'Una vez hechas las dos caras y el interior en el punto deseado la volcamos en un plato y la servimos.',
                imgs: [
                    './assets/img/recipes/tortilla-patata/tortilla_patata_step7_1.jpg',
                    './assets/img/recipes/tortilla-patata/tortilla_patata_step7_2.jpg'
                ]
            }
        ]
    }
];
