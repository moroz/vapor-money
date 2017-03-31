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
    this.onChange = this.onChange.bind(this);
  }

  onChange (e) {
    var obj = this.props.new_record;
    obj[e.target.name] = e.target.value;
    this.props.handleChange({
      new_record: obj
    });
  }

  render () {
    return (
      <form onSubmit={this.props.handleFormSubmit} >
        <div className="row">
          <InputField
            name="date"
            value={this.props.new_record.date}
            onChange={this.onChange}
            placeholder="Date"
          />
          <InputField
            name="description"
            value={this.props.new_record.description}
            onChange={this.onChange}
            placeholder="Description"
          />
          <InputField
            name="amount"
            value={this.props.new_record.amount}
            onChange={this.onChange}
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

let Types = React.PropTypes;
RecordForm.propTypes = {
  handleChange: Types.func.isRequired,
  new_record: Types.object.isRequired
}
