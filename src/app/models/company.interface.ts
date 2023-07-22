import { CategoryInterface } from "./category.inteface";
import { MenuItemInterface } from "./menu-item.interface";

export interface CompanyInterface{
    name: string,
    categories: CategoryInterface[],
    menu:MenuItemInterface[],
}