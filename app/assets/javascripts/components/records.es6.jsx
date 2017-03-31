function ErrorCallout (props) {
  let msg = Object.keys(props.errors).map(key => (
    <li key={key}>
      { key.capitalize() + ' ' + props.errors[key] }
    </li>
  ));
  return (
    <div className="callout alert">
      <h3>Errors:</h3>
      {msg}
    </div>
  );
}

class Records extends React.Component {
  constructor (props) {
    super (props);
    this.state = this.initialState();
    this.state.records = this.props.data;
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addNewRecord = this.addNewRecord.bind(this);
    this.getBalance = this.getBalance.bind(this);
  }

  initialState () {
    return {
      new_record: {
        description: '',
        date: '',
        amount: ''
      },
      errors: null
    };
  }

  handleChange (obj) {
    this.setState(obj);
  }

  addNewRecord (record) {
    var records = React.addons.update(
      this.state.records,
      { $push: [record] });
    this.setState({
      records: records
    });
  }

  handleFormSubmit (e) {
    e.preventDefault();
    axios.request({
      method: 'post',
      url: '/records',
      data: {
        record: this.state.new_record
      },
      headers: CSRF.getHeaders()
    }).then(res => {
      this.addNewRecord(res.data);
      this.setState(this.initialState());
    }).catch(res => {
      this.setState({
        errors: res.response.data
      });
    });
  }

  getBalance () {
    return this.state.records.reduce((acc, record) => (
      acc + Number(record.amount)), 0);
  }

  render () {
    return <div className="records">
      <h2 className="description">
        Records
      </h2>
      {this.state.errors ? <ErrorCallout errors={this.state.errors} /> : '' }
      <RecordForm
        handleChange={this.handleChange}
        new_record={this.state.new_record}
        handleFormSubmit={this.handleFormSubmit}
      />
      <table className="unstriped">
        <thead>
          <tr>
            <td>Date</td>
            <td>Description</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          {this.state.records.map(rec => (
            <Record record={rec} key={rec.id} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">Balance:</td>
            <td>{amountFormat(this.getBalance())}</td>
          </tr>
        </tfoot>
      </table>
    </div>;
  }
}

Records.defaultProps = {
  data: []
}
