import { FC, useState } from "react"
import Link from "../../router/Link"
import { RoutePath } from "../../router/Routes"
import TriangleSvg from "../../svg/TriangleSvg"
import "./themes.css"

interface Theme {
    num: number
    title: string,
    lessons: Array<{
      title: string
    }>
}
  
const Theme : FC<Theme> = ({ num, title, lessons }) => {
  const [isOpen, setOpen] = useState(false)
  const toggleHandler = () => setOpen(b => !b)

  return (
    <div className={'theme'+ (isOpen ? " _open" : "")}>
      <div className="theme__label">Тема {num}</div>
      <div className="theme__title" onClick={toggleHandler}>
        <TriangleSvg/>
        <span>{title}</span>
      </div>
      <div className="theme__dropdown">
        <div className="theme__lessons">
          <span className="theme__lessons-label">Уроки</span>
          <div className="theme__lessons-list">
            {
              lessons.map(({ title }) => <Link className="theme__lessons-item" to={{path: RoutePath.lesson}}>
                                                <span>{title}</span>
                                              </Link>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}
export default Theme