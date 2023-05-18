import React from "react";
import { UserInfo } from "../App";
import { useContext } from "react";

export default function HelloLicatTwo() {
    const value = useContext(UserInfo, "hello")
    return (
        <p>{value.name}{value.id}{value.age}</p>
    );
}
