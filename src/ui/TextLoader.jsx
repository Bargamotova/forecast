import styled from "styled-components";

const TextWrapper = styled.div`
  display: flex;
  position: relative;
`;
const Text = styled.span`
  font-size: ${(props) => props.$size};
  margin: 0;
  color: inherit;
  color: ${(props) => props.$clr || "inherit"};
  font-family: "Snell Roundhand";
  animation: jump 0.9s infinite alternate;

  @keyframes jump {
    from {
      transform: translateY(-9px);
    }
    to {
      transform: translateY(9px);
    }
  }
`;
const word = ["L", "o", "u", "d", "i", "n", "g", ".", ".", "."];

function TextLoader({ size, clr }) {
  return (
    <TextWrapper>
      {word.map((ch, i) => (
        <Text
          key={i}
          style={{ animationDelay: `${i * 90}ms` }}
          $size={size}
          $clr={clr}
        >
          {ch}
        </Text>
      ))}
    </TextWrapper>
  );
}

export default TextLoader;
