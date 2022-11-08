import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz } from "../serviceBE/apiService";
import _ from "lodash";
import './ContentQuiz.scss'
import Question from "./Question";
const ContentQuiz = (props) => {
    const params = useParams();
    const quizID = params.id;
    const location = useLocation();
    const [dataQuiz, setDataQuiz] = useState([]);
    const [index, setIndex] = useState(0);


    //const {id} = useParams();
    //const quizID = id;
    useEffect(() => {
        fletchQuestionQuiz();
    }, [quizID]);
    const handleBack = () => {
        if (index - 1 < 0) {
            return
        }
        setIndex(index - 1);
    }
    const handleNext = () => {
        if (index + 1 >= dataQuiz.length) {
            return
        }
        setIndex(index + 1);
    }
    const handleSubmit = () => {
        let dataPayload = {
            quizID: +quizID,
            answers: []
        }
        let answers = []
        if (dataQuiz && dataQuiz.length > 0) {
            dataQuiz.map((item) => { //item = question
                let questionId = item.quesID;
                let userAnswerId = [];
                item.answers.map((answer) => {
                    if (answer.isSelected) {
                        userAnswerId.push(answer.id);
                    }
                })
                answers.push({
                    questionId: +questionId,
                    userAnswerId: userAnswerId
                })
            })
            dataPayload.answers = answers;
            console.log("final", dataPayload);
        }
    }
    const handleCheckbox_2 = (answerId, questionId) => {
        let dataQuizClone = _.cloneDeep(dataQuiz);
        let question = dataQuizClone.find(item => +item.quesID === +questionId);
        if (question && question.answers) {
            let temp = question.answers.map(item => {
                if (+item.id === +answerId) {
                    item.isSelected = !item.isSelected;
                }
                return item;
            });
            question.answers = temp;
        }
        let idx = dataQuizClone.findIndex(item => +item.quesID === +questionId);
        if (idx > -1) {
            dataQuizClone[idx] = question;
            setDataQuiz(dataQuizClone);
        }

    }
    const fletchQuestionQuiz = async () => {
        let res = await getDataQuiz(quizID);
        // console.log("data ori", res);
        if (res && res.EC === 0) {
            let raw = res.DT;
            let data = _.chain(raw)
                // Group the elements of Array based on `color` property
                .groupBy("id")
                // `key` is group's name (color), `value` is the array of objects
                .map((value, key) => {
                    let answers = [];
                    let quesDescription, quesImage = null;
                    value.map((item, index) => {
                        if (index === 1) {
                            quesDescription = item.description;
                            quesImage = item.image;
                        }
                        answers.push(item.answers);
                        item.answers.isSelected = false;
                    })
                    return { quesID: key, answers: answers, quesDescription: quesDescription, quesImage: quesImage }
                }
                )
                .value()
            setDataQuiz(data);
        }
    }
    return (
        <div className="content-quiz-container container">
            <div className="left-content">
                <div className="content-title">
                    {location?.state?.quizTitle ? `MINI TEST ${quizID}` : "QUIZ"}
                </div>
                <div className="content-main">
                    <Question
                        data={
                            dataQuiz && dataQuiz.length > 0 ?
                                dataQuiz[index] : []
                        }
                        index={index}
                        handleCheckbox_2={handleCheckbox_2}
                    />
                </div>
                <div className="content-footer">
                    {
                        index === 0 ? <div></div> : <button className="btn-back" onClick={() => handleBack()}>BACK</button>
                    }
                    {
                        index + 1 === dataQuiz.length ? <div></div> : <button className="btn-next" onClick={() => handleNext()}>NEXT</button>
                    }
                    <button className="btn-submit btn btn-success" onClick={() => handleSubmit()}>Submit</button>
                </div>
            </div>
            <div className="right-content">
                s
            </div>
        </div>
    )
}
export default ContentQuiz;