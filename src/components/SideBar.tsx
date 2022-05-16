import { Button } from "./Button";
import '../styles/sidebar.scss';
import { GenreResponseProps } from "../App";

type SideBarProps = {
  genres: GenreResponseProps[]
  onClickButton: (id: number) => void
  genreId: number
}

export function SideBar(props: SideBarProps) {
  // Complete aqui
  return(
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.onClickButton(genre.id)}
            selected={props.genreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}