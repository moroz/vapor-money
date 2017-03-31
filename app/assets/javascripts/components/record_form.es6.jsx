function InputField (props) {
  return (
    <div className="small-3 columns">
      <input
        type="text"
        name={props.name}
        {...props}
      />
    </div>
  );
}

class RecordForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      date: '',
      amount: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    var obj = {};
    obj[e.target.name] = e.target.value;
    this.setState(obj);
  }

  render () {
    return (
      <form>
        <div className="row">
          <InputField
            name="date"
            value={this.state.date}
            onChange={this.handleChange}
            placeholder="Date"
          />
          <InputField
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Title"
          />
          <InputField
            name="amount"
            value={this.state.amount}
            onChange={this.handleChange}
            placeholder="Amount"
          />
          <div className="small-3 columns">
            <input
              type="submit"
              value="Create record"
              className="button"
            />
          </div>
        </div>
      </form>
    );
  }
}
