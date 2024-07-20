import styled from "styled-components";

const Title = ({ title }) => {
  return <Container>{title}</Container>;
};

const Container = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

export default Title;
