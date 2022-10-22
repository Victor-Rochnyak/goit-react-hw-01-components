import PropTypes from "prop-types";

// імпорт стилів
import { Profile,Description,Img ,Name,Tag ,Location, Stats,Label,Quantity } from "./ProfileUser.styled";

export default function ProfileUser({
  username,
  tag,
  location,
  avatar,
  stats,
}) {
  return (
    <Profile>
      <Description>
        <Img src={avatar} alt="User avatar"/>
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <li>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </li>
      </Stats>
    </Profile>
  );
}

ProfileUser.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
