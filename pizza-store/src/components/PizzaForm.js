import axios from "axios";
import { useState } from "react";


const PizzaForm = () => {
    const [pizzaName, setPizzaName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const 전달데이터 = {
        pizzaName,
        description,
        price
    }
    // 스프링부트 연결 후 input에 작성한 데이터 전달 
    const handleRegister = () => {
        axios.post("http://localhost:8080/api/pizza", 전달데이터)
        .then((response) => {
            alert("등록성공")
        })
        .catch((e) => {
            alert("등록실패")
        });
    }

    return(
        <div className="pizzaform-container">
            <label>
                메뉴 이름 : 
                <input type="text" value={pizzaName} onChange={(e) => setPizzaName(e.target.value)} />
            </label>
            <label>
                메뉴 설명 : 
                <input type="textarea" value={description} onChange={(e) => setDescription(e.target.value)}/>
            </label>
            <label>
                메뉴 가격 : 
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
            </label>
            <button onClick={handleRegister}>등록하기</button>
        </div>
    )
}

export default PizzaForm;