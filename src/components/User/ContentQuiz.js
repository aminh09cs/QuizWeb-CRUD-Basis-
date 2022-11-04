import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../serviceBE/apiService";
import _ from "lodash";
const ContentQuiz = (props) => {
    const params = useParams();
    const quizID = params.id;
    //const {id} = useParams();
    //const quizID = id;
    console.log(params.id)
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
            console.log("data", data);
        }
    }
    return (
        <div>
            QUIZZZZ
        </div>
    )
}
export default ContentQuiz;