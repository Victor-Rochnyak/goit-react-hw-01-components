import styled from "@emotion/styled";

export const Statistic = styled.section`
  width: 350px;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
  border-radius: 2%;
  box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;
`;

export const Title = styled.h2`
  text-align: center;
  padding-top:10px;
  margin-bottom:10px;
`;

export const List = styled.ul`
  display: flex;
`;


const setBgColor = (props) => {
    switch (props.id) {
      case "id-1":
        return "DodgerBlue";
      case "id-2":
        return "Violet";
      case "id-3":
        return "MediumSeaGreen";
      case "id-4":
        return "orange";
      case "id-5":
        return "SlateBlue";
      default:
        return "white";
    }
  };
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 70px;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  text-align: center;
  background-color: ${setBgColor};

  &:hover {
    background-color: #babccfbd;;
    border: 1px solid rgb(60, 60, 60);
    cursor:pointer;
  }
`;


export const Label = styled.span`
  font-size: 13px;
`;

export const Percentage = styled.span`
  font-size: 20px;
  font-weight:700;
`;
