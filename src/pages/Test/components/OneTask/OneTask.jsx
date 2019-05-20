import React, { Component } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './OneTask.scss';

class OneTask extends Component {
  state = {
    answer: {
      id: null,
      title: null,
      selected: null,
    },
  };

  onCheckboxChange = (e) => {
    const { id, title, handleCheckbox } = this.props;
    this.setState({
      answer: {
        id,
        title,
        selected: e.target.name,
      },
    }, () => { handleCheckbox(this.state); });
  }

  render() {
    const {
      options, title, number,
    } = this.props;

    const { answer } = this.state;

    const checkboxStyles = {
      padding: '2px 5px 2px 0',
    };
    return (
      <div className="one-task">
        <h3>{`${number})  ${title}`}</h3>
        <ul className="answers">
          {
            options.map(option => (
              <li key={option}>
                <FormControlLabel
                  control={(
                    <Checkbox
                      checked={answer.selected === option}
                      name={option}
                      onChange={this.onCheckboxChange}
                      color="primary"
                      style={checkboxStyles}
                    />
                  )}
                  label={option}
                />
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
export default OneTask;
