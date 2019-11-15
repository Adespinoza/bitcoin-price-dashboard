class Prices extends React.Component {
  state = {
    currency: "USD"
  };

  render() {
    return (
      <div>
        <ul>
          <li>
            Bitcoin rate for {this.props.bpi[this.state.currency].description}:
            <br />
            <span className="inline-block bg-teal-500 text-white text-xs px-2 rounded-full">
              {this.props.bpi[this.state.currency].code}
            </span>
            <strong> {this.props.bpi[this.state.currency].rate}</strong>
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
