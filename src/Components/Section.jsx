import Table from "react-bootstrap/Table";

function Section({ users }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {users.map((person) => (
          <tr>
            <td>{person.id}</td>
            <td>{person.name}</td>
            <td>{person.lastName}</td>
            <td>{person.age}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Section;
