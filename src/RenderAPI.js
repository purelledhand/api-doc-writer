import React, {Component} from 'react';
import './RenderAPI.css';

class RenderAPI extends Component {
  state = {
    isLoaded: true,
  };

  _getAPI() {
    return (
        <div className="ui left action RenderAPI__container">
          <button className="ui teal labeled icon button">
            <i className="angle down icon"></i>
            GET
          </button>
          <div className="RenderAPI__Content">
            <div className="RenderAPI__Endpoint">/api/menu</div>
            <div className="RenderAPI__Description">get menu information</div>
          </div>
        </div>
    )
  }

  render() {
    const isLoaded = this.state.isLoaded;
    return (
      <div className={isLoaded ? "App" : "App--loading"}>
        {isLoaded ? this._getAPI() : "Loading"}
      </div>
    );

  }
}

export default RenderAPI;