import classes from "../../styles/cardfooter.module.css"
import { IconType } from "react-icons";

interface BtnCardProps {
    Icon: IconType;
    label: string;
}

export default function BtnCard(props: BtnCardProps) {
    const { Icon, label } = props;
    return (
        <div className={classes.btncard}>
            <li>
                <Icon className="i-md" />
            </li>
            <li>
                {label}
            </li>
        </div>
    )
}
