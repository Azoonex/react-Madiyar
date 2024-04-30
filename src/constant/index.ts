import {
    IHeart,
    Ishop,
    Iperson,
    Iperfume,
    Iglasses,
    IPropanTank,
    Ibage,
} from "../assets/icons/icons";

//ICONS

const navLink = [
    { id: 1, label: "خانه" },
    { id: 2, label: "بلاگ" },
    { id: 3, label: "داستان ها" },
    { id: 4, label: "تماس با ما" },
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

export { navLink, iconsheader, cardFooter };
