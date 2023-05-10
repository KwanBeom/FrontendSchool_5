import React from "react";

export default function FormItem({ datas }) {
    return (
        <>
            {datas.map((item) => {
                return (
                    <div key={item.id}>
                        <h2>{item.id}. {item.title}</h2>
                        <time>{item.date}</time>
                        <p>{item.food}</p>
                    </div>
                );
            })}
        </>
    );
}
