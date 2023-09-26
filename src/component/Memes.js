import React from "react";

export default function Meme() {
    return (
        <main>
            <form className="form">
                <input type="text" className="form-input" placeholder="Above text"/>
                <input type="text" className="form-input" placeholder="Below text"/>
                <button className="btn">Get a new image 🖼</button>
            </form>
        </main>
    )
}