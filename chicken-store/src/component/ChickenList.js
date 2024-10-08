import React, {useState,useEffect} from "react";
import axios from "axios";
import "./ChickenForm.css";
import "./ChickenList.css";
import { useNavigate } from "react-router-dom";

const ChickenList = () =>{
    const [ chickens, setChickens] = useState([]);
    const navigate = useNavigate();

    // 최초 1회 실행 useEffect 이용해서 처음에 치킨리스트.js 시작하자마자 DB에 저장된 치킨메뉴들 가져오기
    //useEffect(()=> {기능설정}, [언제 다시 기능을 동작 시킬 것인가])
    
    /*useEffect(()=> {
        axios.get("http://localhost:8080/api/chicken")
        .then(response => setChickens(response.data)) // 가져온 데이터를 chickens 변수에 저장하는 과정
        console.log("chickens : " , chickens);
        .then
        .catch(e => alert("불러오는데 문제 발생"));
    }, [])
*/

useEffect(() => {
    axios.get("http://localhost:8080/api/chicken")
    .then(response => {
        setChickens(response.data); 
    })
    .catch(e => alert("불러오는데 문제가 발생했습니다."));
}, []);

useEffect(() => {
    console.log("chickens : ", chickens);
}, [chickens]);

    return(
        <div className="chicken-container">
            <h1>치킨 메뉴</h1>
        <ul>
            {chickens.map(chicken => (
    
                <li key={chicken.id} className="chicken-item">
                    <div className="chicken-name">{chicken.chickenName}</div>
                    <div className="chicken-description">{chicken.description}</div>
                    <div className="chicken-price">₩{chicken.price}원</div>
                    <button className="detail-button"onClick={() => navigate(`/chicken-detail/${chicken.id}`)}>상세보기</button>

                    {/** 
                     * navigate와 link 사용에 있어 태그를 사용하느냐, 기능을 사용하느냐의 차이 
                    <button className="detail-button"onClick={() => navigate(`/chicken-detail/${chicken.id}`)}>상세보기</button>
                    <button className="detail-button"><Link to={`/chicken-detail/${chicken.id}`}>상세보기</Link></button>*/}
                </li>
            ))}
        </ul>
            

        </div>
    )
}

export default ChickenList;