import React from "react";
import Fcard from "./Fcard";
import CardForm from "./CardForm";
import { Header, Grid, Segment,} from "semantic-ui-react";

class Cards extends React.Component {
  state = {
    fcards: [
        {id: 1, term: "JS REACT", definition: "Def1"},
        {id: 2, term: "JS REACT2", definition: "Def2"},
        {id: 3, term: "JS REACT3", definition: "Def3"},
        {id: 4, term: "JS REACT4", definition: "Def4"},
        {id: 5, term: "JS REACT5", definition: "Def5"},
        {id: 6, term: "JS REACT6", definition: "Def6"},
        {id: 7, term: "JS REACT7", definition: "Def7"},
        {id: 8, term: "JS REACT8", definition: "Def8"},
    ]
  };

  editFcard = (fcardData) => {
    const fcards = this.state.fcards.map( fcard => {
      if (fcard.id === fcardData.id)
        return fcardData;
      return fcard
    });
    this.setState({ fcards, });
  }

  renderFcards = () => {
    return this.state.fcards.map( fcard => <Fcard key={fcard.id} {...fcard} edit={this.editFcard} />)
  };
  
  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  
  addFcard = (fcardData) => {
    const { fcards, } = this.state;
    const fcard = { id: this.getId(), ...fcardData, };
    this.setState({ fcards: [fcard, ...fcards], });
  };


  render() {
    return (
      <>
      <Segment>
        <Header as="h1">Cards</Header>
        { this.renderFcards() }
      </Segment>

      <Segment>
        <Header as="h4"> Add New Cards </Header>
        <CardForm add={this.addFcard} />
      </Segment>
      </>
      
    
    )
  }
}

export default Cards;
