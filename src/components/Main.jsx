import styled from "styled-components";
import TopContent from "../ui/TopContent";
import Footer from "../ui/Footer";
import Days from "./Days";
import Search from "./Search";
import Location from "./Location";

const StyledMain = styled.main`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 100vh;
  gap: 1em;
  @media only screen and (min-width: 2000px) {
    max-width: 1800px;
    gap: 3em;
  }
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    height: calc(100vh - 100px);
  }
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    height: calc(100vh - 100px);
    padding: 30px 0;
  }
`;
const Inner = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  @media only screen and (max-width: 1366px) {
    align-items: unset;
  }
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    margin-top: auto;
  }
`;
const Header = styled.header`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  gap: 10px;
  top: 20px;
  padding: 0 20px;
  margin-bottom: 20px;
  @media only screen and (max-width: 1440px) {
    top: 10px;
    margin-bottom: 30px;
  }
  @media only screen and (max-width: 1280px) {
    top: 10px;
  }
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
function Main() {
  return (
    <StyledMain>
      <Header>
        <Search />
        <Location />
      </Header>
      <Inner>
        <TopContent />
        <Days />
      </Inner>
      <Footer />
    </StyledMain>
  );
}

export default Main;
