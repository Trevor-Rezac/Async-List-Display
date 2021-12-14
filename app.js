// import functions and grab DOM elements
import { getCars, getDesigners, getTeams, getMovies } from './fetch-utils.js';
import { renderCar, renderDesigner, renderTeam, renderMovie } from './render-utils.js';

const carList = document.querySelector('.car-list');
const designerList = document.querySelector('.designer-list');
const teamsList = document.querySelector('.teams-list');
const moviesList = document.querySelector('.movies-list');

window.addEventListener('load', async() => {

    const cars = await getCars();

    for (let car of cars) {
        const carEl = renderCar(car);
        carList.append(carEl);
    }
});


window.addEventListener('load', async() => {

    const designers = await getDesigners();

    for (let designer of designers) {
        const designerEl = renderDesigner(designer);
        designerList.append(designerEl);
    }
});

window.addEventListener('load', async() => {

    const teams = await getTeams();

    for (let team of teams) {
        const teamEl = renderTeam(team);
        teamsList.append(teamEl);
    }
});

window.addEventListener('load', async() => {

    const movies = await getMovies();

    for (let movie of movies) {
        const movieEl = renderMovie(movie);
        moviesList.append(movieEl);
    }
});

