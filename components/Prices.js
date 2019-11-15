class Prices extends React.Component {
  state = {
    currency: "USD"
  };

  render() {
    return (
      <div>
        <ul>
          <li>
            Bitcoin rate for {this.props.bpi[this.state.currency].description}
            :
            <br />
            <div className="control">
              <div className="tags has-addons">
                <span className="tag is-primary">
                  {this.props.bpi[this.state.currency].code}
                </span>
                <span className="tag">
                  {this.props.bpi[this.state.currency].rate}
                </span>
              </div>
            </div>
          </li>
        </ul>
        <br />
        <select
          onChange={e => this.setState({currency: e.target.value})}
          className="form-control"
        >
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    );
  }
}

export default Prices;
