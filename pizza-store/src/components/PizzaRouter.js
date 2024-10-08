// 메뉴 등록 버튼 검색 버튼

import Modal from "./Modal";
import PizzaForm from "./PizzaForm";

const PizzaRouter = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // false는 닫음 처리
    const openModal = () => {

    }
    const closeModal = () => {
        
    }
    return(
        <div className="app-container">
            <h1>치킨 메뉴 검색하기</h1>
            <div className="search-container">
                <input type="text" placeholder="검색하고 싶은 피자 메뉴를 작성해주세요."
                value={}
                onChange={}
                />
                <button>검색하기</button>
            </div>

            <button onClick={{openModal}}>메뉴 등록하기</button>
            {/* 모달을 열면 피자메뉴 설명 가격 작성 창이 나오고 닫으면 작성 창이 사라짐 */}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <PizzaForm/>
            </Modal>
        </div>
    )
}

export default PizzaRouter;