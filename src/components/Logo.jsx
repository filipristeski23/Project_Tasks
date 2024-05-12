import styled from "styled-components";

const Img = styled.img`
  max-width: 8.188rem;
`;

const Div = styled.div`
  border-bottom: 0.063rem solid #dbdbdb;
  padding: 2rem 0rem;
  padding-left: 1.375rem;
`;
function Logo() {
  return (
    <Div>
      <Img src="./public/Group 8.svg" alt="Logo"></Img>
    </Div>
  );
}

export default Logo;
