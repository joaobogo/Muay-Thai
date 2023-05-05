import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${(props) => props.bgimage}) no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default MainContainer;
