import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getQuizByUser } from "../serviceBE/apiService";
import './ListQuiz.scss'
const ListQuiz = (props) => {
    const navigate = useNavigate();
    const [listQuiz, setListQuiz] = useState([]);
    useEffect(() => {
        getQuizData();
    }, []);
    const getQuizData = async () => {
        const res = await getQuizByUser();
        if (res && res.EC === 0) {
            setListQuiz(res.DT);
        }
    }
    return (
        <div className="list-quiz-container">
            {
                listQuiz && listQuiz.length > 0 &&
                listQuiz.map((item, index) => {
                    return (
                        <div key={index + "quiz"} className="card" style={{ width: "18rem" }}>
                            <img src={`data:image/jpeg;base64, ${item.image}`} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Quiz Test {index + 1}</h5>
                                {/* <p className="card-text">{item.description}</p> */}
                                <a href="#" className="btn btn-primary" onClick={() => navigate(`/quiz/${item.id}`)}>Start Quiz</a>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}
export default ListQuiz;