import React from "react";
import { UserInfo } from "../App";
import HelloLicatTwo from "./HelloLicatTwo";

export default function HelloLicat() {
    return (
        <UserInfo.Consumer>
            {(value) => (<>
                <div>{value.id}, Hello {value.name}</div>
                <HelloLicatTwo/>
            </>)}
        </UserInfo.Consumer>
    );
}
