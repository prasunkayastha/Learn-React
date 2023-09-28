import React from "react";
import memesData from "../memedata";

export default function Meme() {
    const [memeImage, setImage] = React.useState("")
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
         setImage(memesArray[randomNumber].url)
    }
    return (
        <main>
            <div className="form">
                <input type="text" placeholder="Top text" className="form-input" />
                <input type="text" placeholder="Bottom text" className="form-input" />
                <button className="btn" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <img src={memeImage} className="meme-image" />
        </main>
    )
}