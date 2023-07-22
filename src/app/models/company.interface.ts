import { CategoryInterface } from "./category.inteface";
import { MenuItemInterface } from "./menu-item.interface";
import { ColorInterface } from "./color.interface";
import { BannerInterface } from "./banner.interface";
import { AboutUsInterface } from "./about-us.interface";

export interface CompanyInterface {
    name: string,
    categories: CategoryInterface[],
    menu: MenuItemInterface[],
    banners: BannerInterface[],
    logos: string[],
    brandColors: ColorInterface,
    aboutUs?: AboutUsInterface

}