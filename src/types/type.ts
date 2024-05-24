import { IconType } from "react-icons";

export interface NavLinksType {
    id: number;
    label?: string;
    icon?: IconType;
}

export interface ButtonTypes {
    style?: string;
    text: string;
    Icon?: IconType;
}

export type AllStudentTypes = {
    allStudent: {
        id: number;
        title: string;
    }[];
    status: {
        name: string;
        age: number;
        ispending: boolean;
    };
};
