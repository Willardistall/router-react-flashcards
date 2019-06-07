import React from "react";
import { Form, } from "semantic-ui-react";

class CardForm extends React.Component {
  state = { term: "", definition: "", };

  componentDidMount() {
    if (this.props.id)
      this.setState({ term: this.props.term, definition: this.props.definition, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      this.props.edit({id: this.props.id, ...this.state});
      this.props.toggleEdit()
    } else {
    this.props.add(this.state);
    }
    this.setState({ term: "", definition: "", });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  }

  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Group display="equal">
          <Form.Input 
            placeholder="Term"
            label="Term"
            name="term"
            onChange={this.handleChange}
            value={this.state.term}
          />
          <Form.Input
            placeholder="Definition"
            label="Definition"
            name="definition"
            onChange={this.handleChange}
            value={this.state.definition}
          />
          <Form.Button color="green">ADD NEW</Form.Button>
        </Form.Group>
      </Form>
    )
  }
};

export default CardForm;