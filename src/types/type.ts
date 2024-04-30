import { IconType } from "react-icons";

export interface NavLinksType {
    id: number;
    label: string;
    icon: IconType;
}

export  interface ButtonTypes {
    style?:string;
    text:string;
    Icon?:IconType;
}
