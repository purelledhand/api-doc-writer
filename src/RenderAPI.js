import React, {Component} from 'react';
import './RenderAPI.css';

class RenderAPI extends Component {
  state = {};

  _renderAPI() {
    const {APIs} = this.props;

    return APIs.map(
      (api, index) => (<APIContent method={api.method} endpoint={api.endpoint} description={api.description} key={index}/>)
    );
  }

  render() {
    return (
      <div className={this.props ? "App" : "App--loading"}>
        {this.props ? this._renderAPI() : "Make APIs!"}
      </div>
    );
  }
}

export default RenderAPI;

function APIContent ({method, endpoint, description}) {
  return (
    <div className="ui left action RenderAPI__container">
      <button className="ui teal labeled icon button">
        <i className="angle down icon"></i>
        {method}
      </button>
      <div className="RenderAPI__Content">
        <div className="RenderAPI__Endpoint">/api/{endpoint}</div>
        <div className="RenderAPI__Description">{description}</div>
      </div>
    </div>
  )
}

