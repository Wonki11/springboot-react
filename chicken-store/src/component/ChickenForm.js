import React,{useState,useEffect} from "react";
import axios from "axios";

const ChickenForm = () => {
    const [chickenName, setChickenName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const 전달데이터 = {
        chickenName,
        description,
        price
    }
    // 스프링부트 연결 후 전달
    const 제출버튼 = () => {
        axios.post("http://localhost:8080/api/chicken", 전달데이터)
        .then((response) => {
            //데이터 무사히 전달했을 경우
            alert("메뉴가 성공적으로 등록되었습니다.");
        })
        .catch((e) => {
            alert("메뉴 등록 실패");
        })
        ;
    }

    const 삭제버튼 = () => {
        axios.delete("http://localhost:8080/api/chicken", 전달데이터)
        .then((response) => {
            alert("삭제되었습니다.")
        })
        .catch((e)=>{
            alert("메뉴 삭제 실패")
        })
    }
    return(
        
        <div className="chickenform-container">
 
            <laber>메뉴 이름 : 
                <input type="text" value={chickenName} onChange={(e) => setChickenName(e.target.value)}/>

            </laber>
            <label>메뉴 설명 : 
                <textarea value={description} onChange={(e) => setDescription(e.target.value)}/>

            </label>
            <label>가격 : 
                <input type="number" value={price} onChange={(e)=> setPrice(e.target.value)} />

            </label>
            <button>메뉴 등록하기</button>
            <button>메인으로 돌아가기</button>
            <button onClick={삭제버튼}>메뉴삭제</button>
        </div>
    )
}
export default ChickenForm;
