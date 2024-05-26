import { ButtonTypes } from "../types/type";

export default function Button({ style, text, Icon }: ButtonTypes) {
  return (
    <button className={style}>{text}
      {Icon && <span><Icon className="i-xs" /></span>}
      <div className="items hello"></div>
    </button>
  )
}
