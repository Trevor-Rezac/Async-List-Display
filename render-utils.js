export function renderCar(car) {
    const carDiv = document.createElement('div');
    const makeEl = document.createElement('p');
    const modelEl = document.createElement('p');
    const yearEl = document.createElement('p');

    carDiv.classList.add('car-container');
    makeEl.classList.add('make');
    modelEl.classList.add('model');
    yearEl.classList.add('year');

    makeEl.textContent = car.Manufacturer;
    modelEl.textContent = car.Model;
    yearEl.textContent = car.Year;
    
    carDiv.append(yearEl, makeEl, modelEl);

    return carDiv;
}

export function renderDesigner(designer) {
    const designerDiv = document.createElement('div');
    const nameEl = document.createElement('p');
    const yearEl = document.createElement('p');
    const decksEl = document.createElement('p');

    designerDiv.classList.add('designer-container');
    nameEl.classList.add('designer-name');
    yearEl.classList.add('year-established');
    decksEl.classList.add('decks-owned');

    nameEl.textContent = designer.Designer;
    yearEl.textContent = `Established: ${designer.Established}`;
    decksEl.textContent = `Decks owned - ${designer.decks_owned}`;

    designerDiv.append(nameEl, yearEl, decksEl);

    return designerDiv;
}

export function renderTeam(team) {
    const teamDiv = document.createElement('div');
    const sportEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const titlesEl = document.createElement('p');

    teamDiv.classList.add('team-container');
    sportEl.classList.add('sport');
    nameEl.classList.add('team-name');
    titlesEl.classList.add('titles');

    sportEl.textContent = `Sport: ${team.Sport}`;
    nameEl.textContent = team.Team;
    titlesEl.textContent = `Titles: ${team.Titles}`;

    teamDiv.append(sportEl, nameEl, titlesEl);

    return teamDiv;
}

export function renderMovie(movie) {
    const movieDiv = document.createElement('div');
    const titleEl = document.createElement('p');
    const yearEl = document.createElement('p');
    const genreEl = document.createElement('p');
    const directorEl = document.createElement('p');

    movieDiv.classList.add('movie-container');
    titleEl.classList.add('title');
    yearEl.classList.add('release-year');
    genreEl.classList.add('genre');
    directorEl.classList.add('director');

    
    titleEl.textContent = movie.Title;
    yearEl.textContent = `Released: ${movie.Released}`;
    genreEl.textContent = `Genre: ${movie.Genre}`;
    directorEl.textContent = `Director: ${movie.Director}`;

    movieDiv.append(titleEl, yearEl, genreEl, directorEl);

    return movieDiv;
}