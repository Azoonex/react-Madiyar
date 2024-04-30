import { ButtonTypes } from "../types/type";

export default function Button({ style, text, Icon }: ButtonTypes) {
  return (
    <button className={style}>{text}
      <span><Icon className="i-xs" /></span>
    </button>
  )
}
