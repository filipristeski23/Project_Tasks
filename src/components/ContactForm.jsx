import styled from "styled-components";

const Div = styled.div``;

const Input = styled.input`
  padding: 10px 0 10px 5px;
  border-radius: 0.375rem;
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
const Div3 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Textarea = styled.textarea`
  padding: 10px 0 10px 5px;
  border-radius: 0.375rem;
`;

const Label = styled.label`
  padding: 10px 0 10px 5px;
`;

function ContactForm() {
  return (
    <Div>
      <h2>Contact Us</h2>
      <form>
        <Div2>
          <Div3>
            <Label>Name</Label>
            <Input type="text" name="name" placeholder="Filip " />
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
            <Label>Phone Number</Label>
            <Input type="number" name="phone" placeholder="+389 077 777 777" />
          </Div3>
          <Div3>
            <Label>Your Company</Label>
            <Input type="text" name="company" placeholder="filip enterprises" />
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
        <button type="submit">Submit</button>
      </form>
    </Div>
  );
}

export default ContactForm;
