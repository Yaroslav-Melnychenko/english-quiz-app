import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import OneTask from '../components/OneTask';
import { ifObjectIdExistInArray, findArrayIndex } from '../functions';
import '../Test.scss';

class Grammar extends Component {
  state = {
    questions: [
      {
        id: 1,
        title: 'Which one 1?',
        options: [
          'this',
          'or this',
          'no, this',
          'no no no',
        ],
      },
      {
        id: 2,
        title: 'Which one 2?',
        options: [
          'this or this no, this no no no',
          'or this no, this',
          'no, this',
          'no no no no no no no no no',
        ],
      },
      {
        id: 3,
        title: 'Which one 3?',
        options: [
          'this',
          'or this',
          'no, this',
          'no no no',
        ],
      },
      {
        id: 4,
        title: 'Which one 4?',
        options: [
          'this',
          'or this',
          'no, this',
          'no no no',
        ],
      },
      {
        id: 5,
        title: 'Which one 5?',
        options: [
          'this',
          'or this',
          'no, this',
          'no no no',
        ],
      },
    ],
  }

  answers = [];

  handleCheckbox = ({ answer }) => {
    if (ifObjectIdExistInArray(answer, this.answers)) {
      const index = findArrayIndex(answer, this.answers);
      this.answers[index] = answer;
    } else {
      this.answers.push(answer);
    }
  }

  submitTest = () => {
    window.console.log(this.answers);
  }

  render() {
    const { questions } = this.state;
    return (
      <div className="test-container">
        <h2>Grammar tasks</h2>
        {
          questions.map((question, i) => (
            <OneTask
              number={i + 1}
              key={question.id}
              {...question}
              handleCheckbox={this.handleCheckbox}
            />
          ))
        }
        <div className="btn-container">
          <Button variant="contained" color="primary" onClick={this.submitTest}>
            Submit grammar answers
          </Button>
        </div>
      </div>
    );
  }
}

export default Grammar;
