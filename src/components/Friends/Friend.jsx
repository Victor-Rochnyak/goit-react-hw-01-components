import PropTypes from "prop-types";

// імипорт стилів
import { Friends, Item, FriendsStatus, Img, Name } from "./Friend.styled";

export default function FriendList({ friends }) {
  return (
    <Friends>
      {friends.map((friend) => (
        <Item key={friend.id}>
          <FriendsStatus status={friend.isOnline}>
            {friend.isOnline}
          </FriendsStatus>
          <Img src={friend.avatar} alt="User avatar" width="48" />
          <Name>{friend.name}</Name>
        </Item>
      ))}
    </Friends>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
