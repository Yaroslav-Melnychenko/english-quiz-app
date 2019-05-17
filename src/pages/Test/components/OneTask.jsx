import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './OneTask.scss';

const OneTask = (props) => {
  const { options, title, number } = props;
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
                control={
                  <Checkbox color="primary" style={checkboxStyles} />
                }
                label={option}
              />
            </li>
          ))
        }
      </ul>
    </div>
  );
};
export default OneTask;
