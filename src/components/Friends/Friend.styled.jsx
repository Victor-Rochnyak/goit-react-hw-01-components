import styled from "@emotion/styled";

export const Friends = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-around;
  margin-top: 30px;
`;

export const Item = styled.li`
  display: flex;
  width: 200px;
  height: 100%;
  padding: 10px 10px 10px 10px;
  box-shadow: rgb(0 0 0 / 23%) 0px 3px 6px;
  align-items: center;
  margin-bottom: 10px;
`;

export const FriendsStatus = styled.span`
  width: 15px;
  height: 15px;
  background-color: ${(props) => (props.status ? "green" : "red")};
  border-radius: 50%;
  margin-right: 15px;
`;
export const Img = styled.img`
  margin-right: 20px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
