import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  padding-left: 3.031rem;
`;

const Input = styled.input`
  border-radius: 0.375rem;
  padding: 0.313rem 0.313rem 0.313rem 0.626rem;
  border: 0.5px solid #0d062d;
  height: 2.5rem;

  &::placeholder {
    color: #787486;
  }
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  padding-top: 15px;
`;
const Div3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Textarea = styled.textarea`
  padding: 0.626rem 0.313rem 0.313rem 0.626rem;
  border-radius: 0.375rem;
  border: 0.5px solid #0d062d;
  height: 6.25rem;

  &::placeholder {
    color: #787486;
  }
`;

const Label = styled.label`
  padding: 15px 0 15px 0px;
  font-size: 1.125rem;
  color: #0d062d;
  font-weight: 600;
`;

const H2 = styled.h2`
  margin: 0;
  font-size: 2.875rem;
  font-weight: 600;
  color: #0d062d;
  padding-bottom: 1.625rem;
`;

const Form = styled.form`
  width: 75%;
`;

const Button = styled.button`
  background-color: black;
  border-radius: 0.25rem;
  text-decoration: none;
  color: white;
  font-weight: 600;
  margin-top: 1.875rem;
  font-size: 0.875rem;
  padding: 0.75rem 1.688rem;
  border: 1px solid black;
  cursor: pointer;
`;

function ContactForm() {
  return (
    <Div>
      <H2>Contact Us</H2>
      <Form>
        <Div2>
          <Div3>
            <Label>First Name</Label>
            <Input type="text" name="name" placeholder="Filip " />
          </Div3>
          <Div3>
            <Label>Last Name</Label>
            <Input type="text" name="last name" placeholder="Risteski" />
          </Div3>
        </Div2>
        <Div2>
          <Div3>
            <Label>Phone Number</Label>
            <Input type="number" name="phone" placeholder="+389 077 777 777" />
          </Div3>
          <Div3>
            <Label>Email</Label>
            <Input
              type="text"
              name="email"
              placeholder="filipristeski30@gmail.com"
            />
          </Div3>
        </Div2>
        <Div2>
          <Div3>
            <Label>Your Message</Label>
            <Textarea
              name="paragraph"
              placeholder="Write your message here .."
            />
          </Div3>
        </Div2>
        <Button type="submit">Submit</Button>
      </Form>
    </Div>
  );
}

export default ContactForm;
