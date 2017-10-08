import React, { PureComponent } from "react";
import jsonToGoMap from "../lib/jsonToGoMap";
import { CopyToClipboard } from "react-copy-to-clipboard";

class Converter extends PureComponent {
  state = {
    result: "",
    copied: false
  };

  onChange = ({ target: { value } }) => {
    let result = jsonToGoMap(value);
    this.setState({
      result
    });
  };

  setCopiedToTrue = () => this.setState({ copied: true });

  render() {
    return (
      <div className="result-panel">
        <textarea
          placeholder="Paste your JSON here"
          onChange={this.onChange}
          className="text-box"
        />
        <div className="text-box">
          <pre>{this.state.result}</pre>
          {this.state.result && (
            <CopyToClipboard
              text={this.state.result}
              onCopy={this.setCopiedToTrue}
            >
              <button>Copy to Clipboard</button>
            </CopyToClipboard>
          )}
          {this.state.copied && <span style={{ color: "red" }}>Copied.</span>}
        </div>
      </div>
    );
  }
}

export default Converter;
