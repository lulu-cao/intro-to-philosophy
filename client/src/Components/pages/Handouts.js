import React, { Component } from "react";
import Nav from "../Nav.js";
import Wrapper from "./Wrapper";
import ReadingsCard from "./ReadingsCard";
import handouts from "../handouts.json";

class Handouts extends Component {
  state = { handouts };
  removeReadings = (id) => {
    const readings = this.state.readings.filter((reading) => reading.id !== id);
    this.setState({ readings });
  };
  render() {
    return (
      <div>
        <Nav />
        <Wrapper>
          <div className="container">
            <h1>Handouts</h1>
            <p>
              <strong>Description:</strong> Please thoroughly review each
              handout after class. You can find all answers to final exam here.
            </p>
          </div>
          {this.state.handouts.map((handouts) => (
            <ReadingsCard
              removeReadings={this.removeReadings}
              id={handouts.id}
              key={handouts.id}
              title={handouts.title}
              image={handouts.image}
              author={handouts.author}
              year={handouts.year}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default Handouts;
