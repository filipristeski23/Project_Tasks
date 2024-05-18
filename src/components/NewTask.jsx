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
  flex-direction: column;
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

const H3 = styled.h3`
  margin: 0;
  padding: 0;
  color: green;
  font-weight: 500;
  font-size: 1rem;
`;

const DivLine = styled.div`
  background-color: #5030e5;
  width: 100%;
  height: 1px;
  background-color: black;
  margin-top: 20px;
`;

function NewTask() {
  return (
    <Div>
      <H2>Create Your New Project</H2>
      <Form>
        <Div2>
          <Div3>
            <Label>Project Name</Label>
            <Input
              type="text"
              name="name"
              placeholder="Graham technologies website "
            />
          </Div3>
        </Div2>
        <Div2>
          <DivLine></DivLine>
          <Div3>
            <Label>Task Title</Label>
            <Input
              type="text"
              name="name"
              placeholder="Submit form button needs finishing"
            />
          </Div3>
          <Div3>
            <Label>Explain the task</Label>
            <Textarea
              name="paragraph"
              placeholder="Graham technologies website, submit button color change "
            />
          </Div3>
        </Div2>
        <Button type="submit">Finish Creating</Button>
      </Form>
    </Div>
  );
}

export default NewTask;
