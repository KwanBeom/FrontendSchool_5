import React from "react";
import "./EventForm.css";
import { useState } from "react";

export default function EventForm({addData}) {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [food, setFood] = useState("짜장");

    function resetForm(){
        setTitle('')
        setDate('')
        setFood('짜장')
    }

    function handleSubmit(e){
        e.preventDefault()
        const formData = {
            id: Math.floor(Math.random() * 10000),
            title: title,
            date: date,
            food: food,
        }

        addData(formData)
        resetForm()
    }
    

    return (
        <form className="event-form" onSubmit={handleSubmit}>
            <label>
                <strong>Event Title : </strong>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </label>
            <label>
                <strong>Event Date : </strong>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </label>
            <label>
                <select onChange={(e) => setFood(e.target.value)} value={food}>
                    <option value="짜장">짜장</option>
                    <option value="짬뽕">짬뽕</option>
                    <option value="간짜장">간짜장</option>
                </select>
            </label>
            <button type="submit" onClick={handleSubmit}>제출하기</button>
            <button type="reset" onClick={resetForm}>초기화</button>
        </form>
    );
}
