import React, {Component} from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';
import './QuizMain.css';
import {evolveSections} from "../../../data/data";
import MenuItem from "../../../components/menu-item/menu-item";

export default class Quiz extends Component {

    // initiating the local state
    state = {
        questions: {
            1: 'What is the main architecture used by Jenkins?',
            2: 'Which of the following CLI commands can be used to rename files?',
            3: 'What are the benefits of of using IAC?'
        },
        answers: {
            1: {
                1: 'Master-Slave',
                2: 'Master of puppeteer',
                3: "Chef's Slave"
            },
            2: {
                1: 'git rm',
                2: 'git mv',
                3: 'git rm -r'
            },
            3: {
                1: "There aren't any, it's just another way of configuration",
                2: 'Code can be maintained better than UI (VCS, Code review, easy setup)',
                3: 'It is less common nowadays to use it since the emergance of GIT actions'
            }
        },
        correctAnswers: {
            1: '1',
            2: '2',
            3: '2'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }


    // the method that checks the correct answer
    checkAnswer = answer => {
        const {correctAnswers, step, score} = this.state;
        if (answer === correctAnswers[step]) {
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        } else {
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }

    // method to move to the next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }

    render(props) {
        let devopsSection = evolveSections.find((section) => section.title === 'devops');
        let devopPageMenuItem = {...devopsSection};
        devopPageMenuItem.subtitle = '';
        let {questions, answers, correctAnswer, clickedAnswer, step, score} = this.state;
        return (
            <div>
                <MenuItem id={devopPageMenuItem.id} {...devopPageMenuItem}/>

                <div className="Content">
                    {step <= Object.keys(questions).length ?
                        (<>
                            <Question
                                question={questions[step]}
                            />
                            <Answer
                                answer={answers[step]}
                                step={step}
                                checkAnswer={this.checkAnswer}
                                correctAnswer={correctAnswer}
                                clickedAnswer={clickedAnswer}
                            />
                            <button
                                className="NextStep"
                                disabled={
                                    clickedAnswer && Object.keys(questions).length >= step
                                        ? false : true
                                }
                                onClick={() => this.nextStep(step)}>Next
                            </button>
                        </>) : (
                            <div className="finalPage">
                                <h1>You have completed the quiz!</h1>
                                <p>Your score is: {score} of {Object.keys(questions).length}</p>
                                <p>Thank you!</p>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}