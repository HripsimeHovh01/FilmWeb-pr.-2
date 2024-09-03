
"use strict";
//Task 1:
// 1) Удалить все рекламные блоки со страницы (правая часть сайта)
// 2) Изменить жанр фильма, поменять "комедия" на "драма"
// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS
// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 
// 5) Добавить нумерацию выведенных фильмов */


//Task 2
// 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
// новый фильм добавляется в список. Страница не должна перезагружаться.
// Новый фильм должен добавляться в movieDB.movies.
// Для получения доступа к значению input - обращаемся к нему как input.value;
// P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

// 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

// 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

// 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
// "Добавляем любимый фильм"

// 5) Фильмы должны быть отсортированы по алфавиту

document.addEventListener("DOMContentLoaded", function () {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    const promo = document.querySelectorAll(".promo__adv img");
    promo.forEach(item => item.remove());
    const genre = document.querySelector(".promo__genre")
    genre.textContent = "драма";
    const bg = document.querySelector(".promo__bg");
    bg.style.backgroundImage = "url(img/bg.jpg)";
    const moviesList = document.querySelector(".promo__interactive-list");

    const addForm = document.querySelector("form.add");
    const addInput = addForm.querySelector(".adding__input");
    const addCheckBox = addForm.querySelector("[type='checkbox']");

    addForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let newFilm = addInput.value.trim();
    const isFavorite = addCheckBox.checked;
    if (newFilm) {
        if (newFilm.length > 21) {
newFilm = `${newFilm.slice(0, 22)}...`;
        }

        if (isFavorite) {
console.log(`${newFilm} is favorite !`);
        }
        movieDB.movies.push(newFilm);
        createMoviesList(movieDB.movies, moviesList);
        e.target.reset();
    };
  
    });

createMoviesList(movieDB.movies, moviesList);

function createMoviesList(moviesArr, parent) {
    parent.innerHTML = "";
    moviesArr.sort().forEach((movie, index) => {
        parent.innerHTML += `
        <li class="promo__interactive-item">
        ${index + 1}.
        ${movie}
        <div class="delete"></div>
        </li> 
        `;
    });

document.querySelectorAll(".delete").forEach((btn, i) => {
    btn.addEventListener ("click", () => {
        btn.parentElement.remove();
        moviesArr.splice(i, 1);
        createMoviesList(moviesArr, parent);
        console.log(moviesArr);
        
    });
});

}
});











