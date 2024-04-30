//ICONS
import {
    IHeart,
    Ishop,
    Iperson,
    Iperfume,
    Iglasses,
    IPropanTank,
    Ibage,
    Ihome,
    Icatego,
} from "../assets/icons/icons";

const navLink = [
    { id: 1, label: "خانه" },
    { id: 2, label: "بلاگ" },
    { id: 3, label: "داستان ها" },
    { id: 4, label: "تماس با ما" },
];

const titleProdocts = [
    { id: 1, text: "پرفروش‌ترین‌ها" },
    { id: 2, text: "جدیدترین" },
    { id: 3, text: "محبوب‌ترین‌ها" },
];

const iconsheader = [
    { id: 1, icon: IHeart },
    { id: 2, icon: Ishop },
    { id: 3, icon: Iperson },
];

const cardFooter = [
    { id: 1, Icon: Iperfume, label: "زیبایی و سلامتی" },
    { id: 2, Icon: Iglasses, label: "مد فشن" },
    { id: 3, Icon: IPropanTank, label: "لوازم خانگی" },
    { id: 3, Icon: Ibage, label: "ورزش سلامتی" },
];

const navLinkBodyProducts = [
    { id: 1, Icon: Ihome, label: "خانه" },
    { id: 2, Icon: Icatego, label: "دسته بندی ها" },
    { id: 3, Icon: Ishop, label: "سبد خرید" },
    { id: 4, Icon: Iperson, label: "پرفایل" },
];

export { navLink, iconsheader, cardFooter, titleProdocts, navLinkBodyProducts };
