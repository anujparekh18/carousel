import React, { Component } from 'react';

class CarouselForm extends Component {
  constructor ( props ){
    super ( props );
    this.state = {
      ticketForm: {
        fromInput:"",
        toInput:"",
        dateInput:"",
        pnrInput:"",
        motInput:"",
        potInput:""
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const{ name, value } = event.target;
    const{ ticketForm } = this.state;

    console.log(name)
    ticketForm[name] = value;
    this.setState({ ticketForm });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { ticketForm } = this.state;
    console.log(ticketForm);
  }

  render() {
    const { ticketForm } = this.state;
    return (
      <form className="form" onSubmit= { this.handleSubmit }>
        <div className="field">
          <label className="label">From:</label>
            <div className="control">
              <input className="input" name="fromInput" type="text" value={ticketForm.fromInput} onChange={this.handleChange} />
            </div>
        </div>
        <div className="field">
          <label className="label">To:</label>
            <div className="control">
              <input className="input" name="toInput" type="text" value={ticketForm.toInput} onChange={this.handleChange} />
            </div>
        </div>
        <div className="field">
          <label className="label">Dt:</label>
            <div className="control">
              <input className="input" name="dateInput" type="date" value={ticketForm.dateInput} onChange={this.handleChange} />
            </div>
        </div>
        <div className="field">
          <label className="label">PNR:</label>
            <div className="control">
              <input className="input" name="pnrInput" type="text" value={ticketForm.pnrInput} onChange={this.handleChange} />
            </div>
        </div>
        <div className="control">
          <p className="label">Please select a mode of travel:</p>
              <label className="radio">
                Flight &emsp;
                <input name="modInput" type="radio" value="flight" checked={ticketForm.modInput === "flight"} onChange={this.handleChange} />
              </label>
              <label className="radio">
                Train &emsp;
                <input name="modInput" type="radio" value="train" checked={ticketForm.modInput === "train"} onChange={this.handleChange} />
              </label>
              <label className="radio">
                Bus &emsp;
                <input name="modInput" type="radio" value="bus" checked={ticketForm.modInput === "bus"} onChange={this.handleChange} />
              </label>
        </div>
        <div className="field">
          <label className="label">Purpose of travel:</label>
            <div className="control">
              <input className="input" name="potInput" type="text" value={ticketForm.potInput} onChange={this.handleChange} />
            </div>
        </div>
        <input className="button" type="submit" value="submit" />
      </form>
    );
  }
}
export default CarouselForm;
