import React from "react";
import memesData from "../memedata";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        buttonText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImage, setMemeImages] = React.useState(memesData)
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme, randomImage: url
        }))
    }
    return (
        <main>
            <div className="form">
                <input type="text" placeholder="Top text" className="form-input" />
                <input type="text" placeholder="Bottom text" className="form-input" />
                <button className="btn" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <img src={meme.randomImage} className="meme-image" />
        </main>
    )
}