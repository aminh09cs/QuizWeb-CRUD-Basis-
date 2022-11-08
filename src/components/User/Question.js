import _ from "lodash";
import imgNotFound from '../../Img/img-notfound.png'

const Question = (props) => {
    if (_.isEmpty(props.data)) {
        return (<>
        </>)
    }
    const handleCheckbox = (e, answerID, quesID) => {
        props.handleCheckbox_2(answerID, quesID);
    }
    return (
        <>
            {
                // props.data.quesImage &&
                // <div className="content-image" style={{}}>
                //     <img src={`data:image/jpeg;base64,${props.data.quesImage}`} />
                // </div>
                <div className="content-image" style={{}}>
                    {
                        _.isNull(props.data.quesImage) ?
                            <img src={imgNotFound} /> :
                            <img src={`data:image/jpeg;base64,${props.data.quesImage}`} />
                    }
                </div>

            }
            <div className="content-question">
                Question {props.data.quesID}: {props.data.quesDescription}
            </div>
            <div className="content-answer">
                {
                    props.data.answers && props.data.answers.length &&
                    props.data.answers.map((answer, index) => {
                        return (
                            <div
                                key={`answer-${index}`}
                                className="answer-child"
                            >
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        onChange={(e) => handleCheckbox(e, answer.id, props.data.quesID)}
                                        id="flexCheckDefault"
                                        checked={answer.isSelected}
                                    />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        {index + 1}. {answer.description}
                                    </label>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Question;