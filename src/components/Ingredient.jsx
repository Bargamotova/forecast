import styled from "styled-components";
import Heading from "../ui/Heading";

const Item = styled.li`
  font-family: "Architext";
  display: grid;
  grid-template-columns: 2fr 20px 40px;
  gap: 25px;
  align-items: center;
  padding: 10px;

  &:nth-child(even) {
    background: rgba(149, 0, 255, 0.4);
  }
  &:nth-child(odd) {
    color: var(--mint);
  }

  @media only screen and (max-width: 490px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
const ItemText = styled.div`
  font-family: "Architext";
  font-weight: bold;
  display: inline-block;
  font-size: 1.2rem;
  line-height: 1.2;
  display: inline-block;
  color: inherit;
`;
function Ingredient({ description, quantity, unit }) {
  return (
    <Item>
      <Heading as="h4" $secondary>
        {description}
      </Heading>
      <ItemText>{quantity}</ItemText>
      <ItemText>{unit}</ItemText>
    </Item>
  );
}

export default Ingredient;
