import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  background-color: #f5f5f5;
  border-radius: 1rem;
  gap: 1.375rem;
  max-width: 12.875rem;
  padding-top: 1.813rem;
  padding-bottom: 1.25rem;
`;

const H3 = styled.h3`
  color: #000000;
  font-weight: 500;
  font-size: 0.875rem;
  margin: 0;
`;

const H4 = styled.h4`
  color: #787486;
  font-weight: 400;
  font-size: 0.75rem;
  text-align: center;
  margin: 0;
  padding: 0rem 1.25rem;
`;

const A = styled.a`
  background-color: white;
  border-radius: 0.25rem;
  text-decoration: none;
  color: black;
  font-weight: 500;
  margin-top: 1.375rem;
  font-size: 0.875rem;
  padding: 0.75rem 1.688rem;
  border: 1px solid black;
`;

const Div4 = styled.div`
  max-width: 12.844rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-bottom: 1.875rem;
`;

function Contact() {
  return (
    <Div4>
      <Div>
        <H3>Thoughts Time</H3>
        <H4>
          We dont have any notice for you, till then you can share your thoughts
          with your peers.
        </H4>
        <A href="www.google.com">Write a message</A>
      </Div>
    </Div4>
  );
}

export default Contact;
