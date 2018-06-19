import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import Edit from './Edit';
import Read from './Read';

export default class HelloWorld extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */

  state = {
    name: this.props.name,
    selectedOption: '',
    editMode: false,
  }

  updateName = (name) => {
    this.setState({ name });
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    // selectedOption can be null when the `x` (close) button is clicked
    if (selectedOption) {
      console.log(`Selected: ${selectedOption.label}`);
    }
  }

  handleModeChange = () => {
    this.setState(prevState => ({ editMode: !prevState.editMode }));
  }

  render() {
    const { selectedOption, name, editMode } = this.state;

    return (
      <div>
        <h3>
          Hello, {this.state.name}!
        </h3>
        <hr />
        <form >
          <Select
            name="form-field-name"
            value={selectedOption}
            onChange={this.handleChange}
            options={[
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' },
            ]}
          />
          <label htmlFor="name">
            Say hello to:
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => this.updateName(e.target.value)}
          />
        </form>

        <hr />
        {editMode
          ? <Edit handleModeChange={this.handleModeChange} />
          : <Read handleModeChange={this.handleModeChange} />}
      </div>
    );
  }
}
