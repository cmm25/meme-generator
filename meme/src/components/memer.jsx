import Data from "../memesData";
import { useState } from "react";
function Memes(){
    const[meme,setMeme]= useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    });
    const [allMemeImages, setAllMemeImages]= useState(Data)
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    /**
     * const[state,setState]=useState(boxes);
     *  setState(prevState=>(
     * prevState.map(<div></div>)))
     */
    return(
        <>
            <main>
                <div className="maker">
                    <input type="text" placeholder="Top text"className="formInputs"/>
                    <input type="text" placeholder="Bottom text" className="formInputs"/>   
                    <button className="formBtn" onClick={getMemeImage}>Get a new meme image</button> 
                    <img src={meme.randomImage} alt="" className="meme--img"/>
                </div>
            </main>
        </>
    )
}
export default Memes;