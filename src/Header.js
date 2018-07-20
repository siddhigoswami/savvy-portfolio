export default function Header(state){
    return  `
      <div id="header"> 
            <div class="container"></div>
            <h1 class="imblueify">${state.title}</h1> 
            <img src="https://scontent-ort2-1.cdninstagram.com/vp/30f8f5cd2899059a1a6676567d863fac/5BE5D206/t51.2885-19/s320x320/36797784_276684416243037_5797712426577166336_n.jpg" alt="">
              <div id = greeting>
                  

              </div>
              <input type="text" />
      </div>
  `;
}