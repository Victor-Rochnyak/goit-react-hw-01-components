import PropTypes from "prop-types";
//імпорт стилів
import {Item, FriendsStatus, Img, Name } from "./Friend.styled";

export const FriendListItem = ({id,isOnline,avatar,name})=>{
    return(
        <Item key={id}>
            <FriendsStatus status = {isOnline}>{isOnline}</FriendsStatus>
            <Img src={avatar} alt='User avatar' width='48'/>
            <Name>{name}</Name>
        </Item>
    )
}

FriendListItem.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };