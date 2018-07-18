import Header from './src/Header';
import Navigation from './src/Navigation';
import Content from './src/Content';
import Footer from './src/Footer';
import * as State from './store';
import Navigo from 'navigo';


var root = document.querySelector('#root');
var router = new Navigo();

console.log(router);

function render(state){
    var greeting;
    var input;
    var links;
    var i = 0;

     root.innerHTML = `
        ${Navigation(state)}
        ${Header(state)}
        ${Content}
        ${Footer} 
        `;
    
    
    links = document.querySelectorAll('#navigation a');
    
    while(i < links.length){
        links[i].addEventListener(
            'click',
            (event) => {
                var page = event.target.textContent;
    
                    event.preventDefault();
    
                    render(State[page]);
                }
            );
            i++;
        }
}


render(State['Home']);