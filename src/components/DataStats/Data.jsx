import PropTypes from "prop-types";
// імпорт стилів
import { Statistic,Title,List,Item,Label,Percentage } from "./DataStats.styled";

export default function Statistics({title, stats}) {
  return (
    <Statistic>
      <Title>{title}</Title>

      <List>
        {stats.map((stats) => (
          <Item id={stats.id} key ={stats.id}>
            <Label>{stats.label}</Label>
            <Percentage>{stats.percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </Statistic>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};


