import React, { Component } from "react";

class DemoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      comment: "",
      language: "angular",
      selectedOption: "",
      isAgree: true,
      isCorrect: true,
    };
  }

  handleUserChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handleCommentChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  handleLangChange = (e) => {
    this.setState({
      language: e.target.value,
    });
  };

  handleChange = (e) => {
    this.setState({
      selectedOption: e.target.value,
    });
  };

  handleChanger = (e)=>{
    this.setState({
      isAgree : e.target.type ==="checkbox" ? e.target.checked : e.target.value
    })
  }
  handleChanger1 = (e)=>{
    this.setState({
      isCorrect : e.target.type ==="checkbox" ? e.target.checked : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="username">Username </label>
          <input
            type="text"
            id="username"
            value={this.state.username}
            onChange={this.handleUserChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="comment">Comment </label>
          <textarea
            id="comment"
            value={this.state.comment}
            onChange={this.handleCommentChange}
          ></textarea>
        </div>
        <br />
        <div>
          <label htmlFor="language">Language</label>
          <select
            id="language"
            value={this.state.language}
            onChange={this.handleLangChange}
          >
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="reactnative">React Native</option>
          </select>
        </div>
        <br />
        <div>
          <label>Male : </label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={this.handleChange}
          />
          <label>Female : </label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={this.handleChange}
          />
        </div>
      <br/>
        <div>
          <input type="checkbox" name="isAgree" checked={this.state.isAgree} onChange={this.handleChanger}/>

          <label>My name is Abhishek</label>
        </div>

        <div>
          <input type="checkbox" name="isCorrect" checked={this.state.isCorrect} onChange={this.handleChanger1}/>
          <label>Now I am 21 years old</label>
        </div>
        <br />
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default DemoForm;
