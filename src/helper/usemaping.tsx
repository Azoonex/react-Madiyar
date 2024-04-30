import { NavLinksType } from "../types/type";

export default function mapingUi(data:NavLinksType[]) {
    return data.map((i:NavLinksType) => (
       <li style={{cursor:"pointer"}}>
            {i.label ? i.label : (i.icon ? <i.icon /> : null)}
       </li>
    ))
}