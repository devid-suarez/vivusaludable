import { CategoryInterface } from "./category.inteface"
export interface MenuItemInterface {
    id: number,
    name: string,
    price: number,
    imagePath?: string,
    description: string,
    ingredients: string,
    category: CategoryInterface,
}