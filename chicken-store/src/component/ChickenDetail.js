import ChickenForm from "./ChickenForm";
import React,{useEffect, useState} from "react";
// axios useEffect 활용해서 데이터 불러오기
import axios from "axios";
import { useParams } from "react-router-dom";


const ChickenDetail = () => {
    const {id} = useParams(); //특정값을 받아오는 값은 {}
    const [chicken, setChicken] = useState(null);  // [] = 변수명을 설정

    useEffect(() => {
        axios.get(`http://localhost:8080/api/chicken/${id}`)
        .then(response => {
            setChicken(response.data);
        })
        .catch(e => alert("불러오기 실패"));

    },[] );

    //만약에 치킨 데이터가 없으면 로딩중
    if(!chicken){
        return(
            <div>
                로딩중 . . .
            </div>
        )
    }

    return(
        <div className="chicken-detail-container">
            <h1>{chicken.chickenName}</h1>
            <p>{chicken.description}</p>
            <p>{chicken.price}원</p>
        </div>
    )
}
export default ChickenDetail;