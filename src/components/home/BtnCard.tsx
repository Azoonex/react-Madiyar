import classes from "../../styles/cardfooter.module.css"

export default function BtnCard(props) {
    const { Icon,label } = props;
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
