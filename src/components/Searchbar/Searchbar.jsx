import { Header, Form, Button, Input } from './Searchbar.styled';

export const Searchbar = ({ handleSubmit }) => {
  return (
    <Header>
      <Form action="submit" onSubmit={handleSubmit}>
        <Button type="submit">Search</Button>

        <Input
          type="text"
          name="query"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
};
