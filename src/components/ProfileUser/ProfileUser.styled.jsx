import styled from "@emotion/styled";

export const Profile = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  height: 100%;
  border-radius: 2%;
  box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;
`;

export const Description = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 20px;
`;

export const Tag = styled.p`
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const Location = styled.p`
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
`;

export const Stats = styled.ul`
  display: flex;
  background-color: rgba(0, 0, 0, 0.04);

  li {
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
    text-align: center;

    &:hover {
      background-color: rgb(22 104 163 / 58%);
      cursor: pointer;
    }
  }
`;

export const Label = styled.span`
  display: block;
`;

export const Quantity = styled.span`
  font-weight: 700;
`;
