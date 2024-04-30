
export default function mapingUi(data) {
    return data.map(i => (
       <li>
            {i?.label ? i.label : <i.icon />} 
       </li>
    ))
}