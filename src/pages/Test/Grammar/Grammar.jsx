import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
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
    isLoading: false,
  }

  answers = [];

  loadingStyles = {
    width: '20px',
    height: '20px',
    marginRight: '15px',
  }

  handleCheckbox = ({ answer }) => {
    if (ifObjectIdExistInArray(answer, this.answers)) {
      const index = findArrayIndex(answer, this.answers);
      this.answers[index] = answer;
    } else {
      this.answers.push(answer);
    }
  }

  submitTest = () => {
    const { history } = this.props;
    this.setState({ isLoading: true });
    setTimeout(() => {
      // will send answers
      window.console.log(this.answers);
      //
      this.setState({ isLoading: false });
      history.push('/listening');
    }, 3000);
  }

  render() {
    const { questions, isLoading } = this.state;
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
          {!isLoading ? (
            <Button variant="contained" color="primary" onClick={this.submitTest}>
              Submit grammar answers
            </Button>
          ) : (
            <Button variant="contained" color="primary" onClick={this.submitTest} disabled>
              <CircularProgress style={this.loadingStyles} />
              Loading
            </Button>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Grammar);
