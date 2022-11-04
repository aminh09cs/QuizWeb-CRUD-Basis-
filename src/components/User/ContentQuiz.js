import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../serviceBE/apiService";
import _ from "lodash";
import './ContentQuiz.scss'
import { useLocation } from "react-router-dom";
const ContentQuiz = (props) => {
    const params = useParams();
    const quizID = params.id;
    const location = useLocation();
    console.log(location);
    //const {id} = useParams();
    //const quizID = id;
    useEffect(() => {
        fletchQuestionQuiz();
    }, [quizID]);
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
                    })
                    return { quesID: key, answers: answers, quesDescription: quesDescription, quesImage: quesImage }
                }
                )
                .value()
        }
    }
    return (
        <div className="content-quiz-container container">
            <div className="left-content">
                <div className="content-title">
                    {location?.state?.quizTitle ? `MINI TEST ${quizID}` : "QUIZ"}
                </div>
                <div className="content-body">
                    Image
                </div>
                <div className="content-main">
                    <div className="content-question">
                        How many are there in room?
                    </div>
                    <div className="content-answer">
                        <div>A. SO</div>
                        <div>B. 40</div>
                        <div>C. SO</div>
                        <div>D. SO</div>
                    </div>
                </div>
                <div className="content-footer">
                    <button className="btn-back">BACK</button>
                    <button className="btn-next">NEXT</button>
                </div>
            </div>
            <div className="right-content">
                s
            </div>
        </div>
    )
}
export default ContentQuiz;