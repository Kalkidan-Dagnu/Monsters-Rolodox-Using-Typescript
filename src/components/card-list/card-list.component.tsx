import { Monster } from "../../App";
import Card from "../card/card.component";

import "./card-list.styles.css";

type CardListProps = {
  list: Monster[]
}

const CardList = ({ list }:CardListProps) => (
  <div className="card-list">
    {list.map((item) => {
      return <Card monster={item} key={item.id} />;
    })}
  </div>
);

export default CardList;
