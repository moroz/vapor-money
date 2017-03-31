function ErrorCallout (props) {
  return (
    <div className="callout alert">
      {String(props.errors)}
    </div>
  );
}

class Records extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      records: this.props.data,
      new_record: {
        description: '',
        date: '',
        amount: ''
      },
      errors: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addNewRecord = this.addNewRecord.bind(this);
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
    }).catch(err => {
      this.setState({
        errors: err
      });
    });
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
      <table>
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
      </table>
    </div>;
  }
}

Records.defaultProps = {
  records: []
}
