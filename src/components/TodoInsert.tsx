import React, { useState } from "react";

type TodoInsertProps = {
    onSubmit: (form: {date: string; work: string}) => void
}


export const TodoInsert = ({onSubmit}:TodoInsertProps) => {
    
    const [form, setForm] = useState({
        date:'',
        work:''
    })
    // form에서 date, work 비구조 할당 
    const {date, work} = form;
    

    // input 값 변경 
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        // 구조분해 할당 
        setForm({
            ...form,
            [name]:value,
        })
    }
    // onSubmit 후 form 초기화 용
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(form) ;
        setForm({
            date:'',
            work:'',
        })

    }

    const TodayTime = () => {
        let now = new Date();
        let todayYear = now.getFullYear();
        let todayMonth = now.getMonth() +1; 
        let todayDate = now.getDate();
        const week = ['일','월','화','수','목','금','토']
        let dayOfWeek = week[now.getDay()];       
        return todayYear+'-'+todayMonth+'-'+todayDate+dayOfWeek
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={form.work} onChange={onChange} placeholder="오늘의 일정을 입력해주세요"></input>
                <input
                placeholder="일정을 수행할 날짜를 입력해주세요 "
                value={form.date} onChange={onChange}
                />
                <button type="submit">저장</button>
            </form>
        </div> 
    )
}