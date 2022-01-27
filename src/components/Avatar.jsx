import React from "react";

function Avatar (props) {
    return (
        <div className="avatar">
        <img className="circle-img" src={props.img} alt="avatar_img" />
        </div>
    );
}

export default Avatar;