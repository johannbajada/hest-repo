import React from "react"
import "./Header.scss"
import Nav from "./Nav"


const Header = () => {

    window.addEventListener('load',function(){
        initSlider(
          'title', //id
          ['BEAR','THE','RAGE'], 
          200, //duration
          1700 //delay
        );
      });
      
      var createText = function(text,id,duration){
        document.getElementById(id).innerHTML = '';
        for(let i = 0; i < text.length; i++){
          setTimeout(()=>{
            let newText = text.substr(0,(i+1));
            document.getElementById(id).innerHTML = newText;
          },duration*i);
        }
      }
      var clearText = function(id,duration){
        let text = document.getElementById(id).innerHTML;
        for(let i = text.length; i > 0; i--){
          setTimeout(()=>{
            let newText = text.substr(0,text.length-i);
            document.getElementById(id).innerHTML = newText;
          },duration*i);
        }
      }
      var initSlider = function(id,texts,duration,delay){
        let durs = [];
        for(let i = 0; i < texts.length-1; i++){
          let beforeDur;
          if(i==0){
            beforeDur = 0;
          }
          else{
            beforeDur=durs[i-1];
          }
          durs.push((texts[i].length*duration*2) + (2*delay) + beforeDur);
        }
        
        let allTime = 0;
        for (let i = 0; i < texts.length; i++){
          allTime += (texts[i].length*duration*2) + (2*delay);
        }
        let mainSlider = function(){
          for(let i = 0; i < texts.length; i++){
            setTimeout(()=>{
              createText(texts[i],id,duration);
              setTimeout(()=>{
                clearText(id,duration);
              },texts[i].length*duration + delay);
            },i === 0 ? 0 : durs[i-1]);
          }
        }
        mainSlider();
        setInterval(()=>{
          mainSlider();
        },allTime);  
      }
      

    return(
        <header>
            <Nav />
            <div class="header-title">
                <h1 id="title"></h1>

            </div>
        </header>

    )
}

export default Header
