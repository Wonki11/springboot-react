import React, {useState} from "react";
import LoginContext from './components/LoginContext';
import Signup from './components/SignUp';
import TodoList from './components/TodoList';
import Login from './components/Login'
import './App.css';
import './components/LoginContext'
import TodoListContext from './components/TodoListContext';


function App() {
  //회원 가입창 보이기 / 숨기기
  const [signUpview , setSignUpView] = useState(false);

  //로그인한 회원 정보 저장
  const [loginMember , setLoginMember] = useState(null);
  
  
  //로그인한 회원 할 일 목록 저장
  const [todoList , setTodoList] = useState([]);


  return (
   <LoginContext.Provider value={ {loginMember , setLoginMember , todoList,setTodoList} }>
    <button onClick={ () => {setSignUpView(!signUpview)}}>
      {signUpview ? ('회원 가입 닫기') : ('회원 가입 열기')}
    </button>
    <div className="signup-wrapper">
      {signUpview === true && (<Signup/>)}
    </div>

    <h1>Todo List</h1>
    <Login/>

    <hr/>
    {loginMember && (<TodoList/> )}
   </LoginContext.Provider>
  );
}

export default App;
