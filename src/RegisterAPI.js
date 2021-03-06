import React, {Component} from 'react';
import './RegisterAPI.css';

class RegisterAPI extends Component {
  state = {
    method: '',
    endpoint: '',
    description: '',
    parameters: [],
    returns: [],
  };

  _handleChange = (e) => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value
    })
  };

  _handleButtonChange = (e) => {
    e.preventDefault();

  };

  _handleSubmit = (e) => {
    e.preventDefault();

    this.props.onCreate(this.state);

    this.setState({
      method: '',
      endpoint: '',
      description: '',
    });
  };

  _handleKeyChange = (e) => {
    this.setState({
      parameters: [
        ...this.state.parameters,
        {
          [e.target.name]: e.target.value
        }]
    });
  };

  _Register = () => {
    return (
      <RenderInfo method={this.state.method} endpoint={this.state.endpoint} description={this.state.description}/>
    );

  };

  render() {
    return (
      <div className="RegisterAPI__container">
        <div className="RegisterAPI__title">
          <h2>register API</h2>
        </div>

        <form className="RegisterAPI__form ui form" onSubmit={this._handleSubmit}>

          <div className="RegisterAPI__form__contents">
            <div className="field">
              <label>Method</label>
              <div className="ui buttons">
                <button className="ui button" name='method' value='GET' onClick={this._handleChange}>GET</button>
                <button className="ui button" name='method' value='POST' onClick={this._handleChange}>POST</button>
                <button className="ui button" name='method' value='PUT' onClick={this._handleChange}>PUT</button>
                <button className="ui button" name='method' value='DELETE' onClick={this._handleChange}>DELETE</button>
              </div>
              {this.state.method}
            </div>
          </div>

          <div className="RegisterAPI__form__contents">
            <div className="field">
              <label>Description</label>
              <input type="text"
                     placeholder="Description"
                     name="description"
                     value={this.state.description}
                     onChange={this._handleChange}
              />
            </div>
          </div>

          <div className="RegisterAPI__form__contents">
            <div className="field">
              <label>Endpoint</label>
              <div className="ui labeled input">
                <div className="ui label">
                  /api/
                </div>
                <input type="text"
                       name="endpoint"
                       placeholder="endpoint"
                       value={this.state.endpoint}
                       onChange={this._handleChange}
                />
              </div>
            </div>
          </div>

          <div className="RegisterAPI__form__contents">
            <div className="field">
              <label>Parameters</label>
              <div className="two fields">
                <div className="field">
                  <input type="text"
                         placeholder="KEY"
                         name="key"
                  />
                </div>
                <div className="field">
                  <input type="text"
                         placeholder="Value"
                         name="value"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="RegisterAPI__form__contents">
            <div className="field">
              <label>Returns</label>
              <div className="two fields">
                <div className="field">
                  <input type="text" placeholder="KEY"/>
                </div>
                <div className="field">
                  <input type="text" placeholder="Value"/>
                </div>
              </div>
            </div>
          </div>

          <button className="ui button" tabIndex="0" onClick={this._Register} type="submit">Register API!</button>
        </form>

      </div>
    );
  }
}

export default RegisterAPI;

function RenderInfo({method, endpoint, description}) {
  return (
    <div>
      <div>{method}</div>
      <div>/api/+{endpoint}</div>
      <div>{description}</div>
    </div>
  );
}
