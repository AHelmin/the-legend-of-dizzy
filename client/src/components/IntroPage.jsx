import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../output.css";
import "../assets/css/intro.css";
import { useTypedMessage } from "../hooks";
import { wait } from '../shared';
import garyImg from "../assets/images/gary-pixelated-small.png";
import sactownImg from "../assets/images/sactown-pixelated.png";
import noteImg from "../assets/images/note.png";
import katyRastaImg from "../assets/images/katy-rasta.png";

import { useDispatch } from 'react-redux';

export const IntroPage = ({ onStartClick }) => {
  const dispatch = useDispatch()
  let [currentSlide, setCurrentSlide] = useState(0);


  useEffect(() => {
    const introSlide = document.getElementById("introSlide");
    introSlide.addEventListener("click", (e) => {
      const introSlide = document.getElementById("introSlide");
      const introImg = document.getElementById("introImg");
      const introText = document.getElementById("introText");

      if (currentSlide !== (slideArray.length - 1)) {
        let newSlide = currentSlide + 1;
      
        setCurrentSlide(newSlide);
        introImg.setAttribute("src", slideArray[newSlide].image);
        introText.innerHTML = slideArray[newSlide].text;
      }

      else {
        dispatch({ type: 'SET_STAGENAME', payload: 'stage1'})
      }
      
    })
    ,
      [];
  });


  const text1 =
    `Once upon a time, there was a TA named Katy and her beloved companion Dizzy.  They lived in the shining Capital City in the Golden State.`;

  let text2 =
    `Katy's boss…The Evil Gary…was constantly leaning on her to Concatenate for him because he was scared of it. He made her do all the heavy lifting and never sent her the Starbucks he promised after she would fix his errors.`;

  let text3 = `Worst of all, Gary was extremely jealous of Dizzy. Gary became so jealous of Dizzy that he took a trek all the way from Crab Wire City to Capital City in the Golden State and KIDNAPPED DIZZY!`;

    let text4 = 
    `Since our hero Katy was at a Reggae Festival at the time, Dizzy was all alone (and legally blind), so he was easily taken by The Evil Gary.`;

    let text5 = `Katy returned home, shook off the fog and realized Dizzy was nowhere to be found!  In his dog bed was this note:`;

const slideArray = [{image: sactownImg, text: text1}, {image: garyImg, text: text2}, {image: garyImg, text: text3}, {image: katyRastaImg, text: text4}, {image: katyRastaImg, text: text5}, {image: noteImg, text: ""},]


  return (
    <div>
      <div className="mx-auto" id="introSlide">
        <div className="mt-8">
          <img
            src={slideArray[currentSlide].image}
            alt="Centered Image"
            className="mx-auto rounded-lg object-scale-down"
            id="introImg"
          />
        </div>
        <div className="container mt-8 px-8 mx-auto max-w-sm">
          <div
            className="text-lg mt-2 mb-8 mx-auto press-start text-white"
            id="introText"
          >
            {slideArray[currentSlide].text}
            {/* {useTypedMessage(text1)[1] === true && (
              <p className="mt-8 mx-auto">---Click anywhere to continue---</p>
            )} */}
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col h-screen">
      <p className="mt-8 text-center press-start text-white click-anywhere">-- click anywhere to continue --</p>
      </div>
    </div>
  );
};
