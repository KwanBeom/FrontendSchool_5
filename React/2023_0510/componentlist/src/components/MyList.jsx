import React from "react";

export default function MyList() {
    const items = [
        { id: 1, name: "고기" },
        { id: 2, name: "과자" },
        { id: 3, name: "떡볶이" },
    ];
    const itemList = [];
    items.forEach((item) => {
        itemList.push(<li key={item.id}>{item.name}</li>);
    });
    return <ul>{itemList}</ul>;
}
