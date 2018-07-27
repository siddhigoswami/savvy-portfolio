import Header from './src/Header';
import Navigation from './src/Navigation';
import Content from './src/Content';
import Footer from './src/Footer';
import * as State from './store';
import Navigo from 'navigo';
import { capitalize } from 'lodash';
import axios from 'axios';


var root = document.querySelector('#root');
var router = new Navigo(location.origin);

State.posts = [];



function render(state){
    var greeting;
    var input;
    

    console.log(router);

     root.innerHTML = `
        ${Navigation(state)}
        ${Header(state)}
        ${Content(state, State.posts)}
        ${Footer} 
        `;

        greeting = document.querySelector('#greeting');
        input = document.querySelector('#header input');

        input.addEventListener(
            'keyup',
            (event) => greeting.innerHTML = `
                <div>
                    <h3>Welcome to my Home Page,</h3>
                    <h4>${event.target.value}</h4>
                </div>
            `
        );

        router.updatePageLinks();
    }

    function handleRoute(params){
        var page = capitalize(params.page);
        
        console.log(params);
        console.log(page);
        
        render(State[page]);
    }

        router
            .on('/:page', handleRoute)
            .on('/' , () => handleRoute({ 'page' : 'home'}))
            .resolve();
        

    axios('https://jsonplaceholder.typicode.com/posts').then((response) => {
            var params = router.lastRouteResolved().params;

            State.posts = response.data;

            if(params){
            handleRoute(params);
            }
        });