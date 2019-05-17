import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import OneTask from '../components/OneTask';
import './Grammar.scss';

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

  submitTest = () => {
    window.console.log('submitTest');
  }

  render() {
    const { questions } = this.state;
    return (
      <div className="test-container">
        <h2>Grammar tasks</h2>
        {
          questions.map((question, i) => <OneTask number={i + 1} key={question.id} {...question} />)
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
