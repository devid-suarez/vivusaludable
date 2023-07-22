import { CategoryInterface } from 'src/app/models/category.inteface';
import { CompanyInterface } from '../models/company.interface';

const COMPANIES: CompanyInterface[] = [
    {
        name: "default",
        categories: [
            { id: 0, name: "Todo" },
            { id: 1, name: 'Carnes' },
            { id: 2, name: 'Entradas' },
            { id: 3, name: 'Jugos' }],
        menu: [
            { id: 1, price: 15, name: 'Cebolla apanada', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation", ingredients: "", category: { id: 2, name: "" }, imagePath: "./assets/menu/default/cebolla.png" },
            { id: 2, price: 20, name: 'Costillitas de res', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation", ingredients: "", category: { id: 1, name: "" }, imagePath: "./assets/menu/default/costilla.png" },
            { id: 3, price: 8, name: 'Limonada de coco', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation", ingredients: "", category: { id: 3, name: "" }, imagePath: "./assets/menu/default/jugo.png" },
            { id: 4, price: 25, name: 'Nuguets de pollo', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation", ingredients: "", category: { id: 2, name: "" }, imagePath: "./assets/menu/default/nuguet.png" },
            { id: 5, price: 22, name: 'Sandwich', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation", ingredients: "", category: { id: 1, name: "" }, imagePath: "./assets/menu/default/sandwich.png" },
        ]
    },
    {
        name: "vivu",
        categories: [
            { id: 0, name: "Todo" },
            { id: 1, name: 'Ensaladas' },
            { id: 2, name: 'Desayunos' },
            { id: 3, name: 'Bebidas' }],
        menu: [
            { id: 1, price: 12000, name: 'Ensalada de Quinoa', description: "Quinoa, aguacate, maíz, tomates, cebolla, menta , aceite oliva, limón y perejil", ingredients: "", category: { id: 1, name: "" }, imagePath: "./assets/menu/vivu/ensalada_quinoa.webp" },
            { id: 2, price: 12000, name: 'Ensalada Morada', description: "Remolacha, zanahoria, cebolla , rugula, queso, arandanos, vinagre y aceite de oliva.", ingredients: "", category: { id: 1, name: "" }, imagePath: "./assets/menu/vivu/ensalada_morada.webp" },
            { id: 3, price: 12000, name: 'Ensalada Campestre Huerto', description: "Pepino , lechuga, brócoli, plamitos, semillas, yogurt , naranja y aceite de oliva.", ingredients: "", category: { id: 1, name: "" }, imagePath: "./assets/menu/vivu/ensalada_campestre_huerto.webp" },
            { id: 4, price: 12000, name: 'Ensalada mediterranea con Pasta', description: "Pasta corta, tomates, aceitunas, jamón, huevo, albahaca, crema de leche, aceite de oliva.", ingredients: "", category: { id: 1, name: "" }, imagePath: "./assets/menu/vivu/ensalada_mediterranea_pasta.webp" },
            { id: 5, price: 15000, name: 'Ensalada London', description: "", ingredients: "Papa, champiñon, lechuga, pimentón, tocineta, pechuga, yogurt, mayonesa, perejil", category: { id: 1, name: "" }, imagePath: "./assets/menu/vivu/ensalada_mediterranea_pasta.webp" },
        ]
    }
];


export const Data = {
    COMPANIES: COMPANIES
}