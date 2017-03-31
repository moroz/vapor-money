class RecordForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      date: '',
      amount: ''
    }
  }

  render () {
    return (
      <form>
        <div className="row">
          <div className="small-3 columns">
            <input type="text" name="date" value={this.state.date} />
          </div>
          <div className="small-3 columns">
            <input type="text" name="title" value={this.state.title} />
          </div>
          <div className="small-3 columns">
            <input type="text" name="amount" value={this.state.amount} />
          </div>
          <div className="small-3 columns">
            <input type="submit" className="button" value="Submit" />
          </div>
        </div>
      </form>
    );
  }
}
