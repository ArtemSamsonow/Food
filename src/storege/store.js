import {defineStore} from "pinia";
import {ref} from "vue";

import pizzaBurbecu from "@/assets/pizza-barbecu.png"
import burgerTwoCheese from "@/assets/burger-two-cheese.png"
import sushi from "@/assets/sushi.png"
import mors from "@/assets/mors.png"
import suprime from "@/assets/suprime.png"
import rollYme from "@/assets/roll-yme.png"

export const useVivatStore = defineStore('vivatStore', {
    state: () => ({
        basket: ref([
            {id: Date.now() + 1, image: pizzaBurbecu, name: "Пицца барбекю", description:"Соус коктейль, фарш из отборной говядины, маринованные огурцы, спелые томаты, сыр моцарелла, сыр чеддер, соус барбекю, хрустящий лук", callories: "K – 79.8 ккал; Б – 2.4 г; Ж – 5.4 г; У – 5.4 г", price: 930, discount: 0, counts: 1, size: 0, dough: 0, addIngredient: [], gift: false},

            {id: Date.now() + 2, image: suprime, name: "Суприм", description:"Соус томатный, сыр моцарелла, колбаса пепперони, ветчина, лук, сладкий перец, грибной микс, свинина, говядина, оливки черные", callories: "K – 426,38 ккал; Б – 19,45 г; Ж – 18,15 г; У – 46,72 г", price: 690, discount: 0, counts: 1, size: 0, dough: 0, addIngredient: [], gift: false},

            {id: Date.now() + 3, image: burgerTwoCheese, name: "Бургер «Два сыра»", description:"Ароматная котлета из мраморной говядины с сыром чеддер и моцарелла, хрустящим луком, маринованными корнишонами, свежими томатами, соусом коктейль и барбекю в мягкой пшеничной булочке. Картофель и соус приобретается отдельно", callories: "K – 736.0 ккал; Б – 21.0 г; Ж – 48.0 г; У – 52,0 г", price: 180, discount: 0, counts: 1, size: 0, dough: 0, addIngredient: [], gift: false},

            {id: Date.now() + 4, image: sushi, name: "Суши Унаги", description:"Угорь", callories: "K – 66.0 ккал; Б – 3.0 г; Ж – 4.0 г; У – 10,0 г", price: 120, discount: 0, counts: 1, size: 0, dough: 0, addIngredient: [], gift: false},

            {id: Date.now() + 5, image: rollYme, name: "Умэ", description:"Лосось, угорь, авокадо, сливочный сыр, тобико, острый соус, соус унаги", callories: "K – 389.0 ккал; Б – 17.0 г; Ж – 18.0 г; У – 52,0 г", price: 420, discount: 35, counts: 1, size: 0, dough: 0, addIngredient: [], gift: false},

            {id: Date.now() + 6, image: mors, name: "Морс «Смародина»", description:"Домашний морс из ягод черной смородины собственного приготовления 1л", callories: "K – 253.0 ккал; Б – 1.0 г; Ж – 0.0 г; У – 43,0 г", price: 195, discount: 0, counts: 1, size: 0, dough: 0, addIngredient: [], gift: true}
        ]),
        sizes: ref([
            {id: 0, name: "Большая"},
            {id: 1, name: "Средняя"},
            {id: 2, name: "Маленькая"}
        ]),
        dough: ref([
            {id: 0, name: "Тонкое"},
            {id: 1, name: "Пышное"}
        ]),
        addIngredients: ref([
            {id: 0, name: "Говядина варёно-копченная, 50г", icon: "", price: 70, newPrice: 70},
            {id: 1, name: "Филе копченого цыпленка, 50г", icon: "", price: 77, newPrice: 77},
            {id: 2, name: "Фарш из мраморной говядины, 50г", icon: "", price: 99, newPrice: 99},
            {id: 3, name: "Карбонад из свинины, 50г", icon: "", price: 70, newPrice: 70},
            {id: 4, name: "Ветчина, 50г", icon: "", price: 70, newPrice: 70},
            {id: 5, name: "Колбаски пепперони, 50г", icon: "", price: 115, newPrice: 115},
            {id: 6, name: "Бекон, 50г", icon: "", price: 100, newPrice: 100}
        ])
    }),
    getters: {
        finalPrice(state){
            return state.basket.reduce((currentPrice,item) => {
                if (!item.gift) return currentPrice + ((item.price - item.discount) * item.counts)
                return currentPrice
            }, 0)
        },
    }
})