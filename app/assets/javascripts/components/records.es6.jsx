class Records extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      records: this.props.data
    };
  }

  render () {
    return <div className="records">
      <h2 className="title">
        Records
      </h2>
      <table>
        <tbody>
          {this.state.records.map(rec => (
            <Record record={rec} key={rec.id} />
          ))}
        </tbody>
      </table>
    </div>;
  }
}

Records.defaultProps = {
  records: []
}
