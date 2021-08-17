import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

class InputField extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Description"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            id="inputField"
          />
        </FloatingLabel>
      </>
    );
  }
}

export default InputField;
