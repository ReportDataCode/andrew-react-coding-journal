import "./App.css";
import InputField from "./components/TextArea";
import ToDoList from "./components/ToDoList";
import CodingDate from "./components/Date";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
function App() {
  return (
    <Container className="App">
      <row className="App-header">
        <h1>Andrew's Task List</h1>
        <Col xs={6}>
          <InputField />
        </Col>
        <Col xs={6}>
          <ToDoList submitTitle={"Add TODO"} />
        </Col>
      </row>
      {/*<h2>Date:</h2>*/}
      {/*<CodingDate />*/}
      <div>
        <ToDoList
          title={"Andrew's Coding Journal"}
          submitTitle={"Add your thought"}
        />
        <InputField />
      </div>
    </Container>
  );
}

export default App;
