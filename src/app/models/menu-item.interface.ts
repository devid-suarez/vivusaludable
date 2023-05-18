import { CategoryInterface } from "./category.inteface"
export interface MenuItemInterface {
    id: number,
    name: string,
    price: number,
    description: string,
    ingredients: string,
    category: CategoryInterface,
    imageUrl?: string,
}