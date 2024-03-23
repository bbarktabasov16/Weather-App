



// const APIKey = "a6cba3dfe0ff10b63c57a3f7715cf03d";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bishkek";

// async function checkWeather() {
//   const response = await fetch(apiUrl + `&appid=${APIKey}`);
//   var data = await response.json();

//   console.log(data)
// }

// checkWeather();


let container = document.querySelector('.container');
let search = document.querySelector('.search-box');
let weatherBox = document.querySelector('.weather-box');
let weatherDetails = document.querySelector('.weather-details');
let error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {

    const APIKey = "a6cba3dfe0ff10b63c57a3f7715cf03d";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bishkek";



    let city = document.querySelector('.search-box input').value;

    if (city === '') {
        return;
    } 

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`)
        .then(response => response.json())
        .then(json => {

            if (json.cod === '404') {
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }

            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            let image = document.querySelector('.weather-box img');
            let temperature = document.querySelector('.weather-box .temperature');
            let description = document.querySelector('.weather-box .description');
            let humidity = document.querySelector('.weather-details .humidity span');
            let wind = document.querySelector('.weather-details .wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src= 'img/clear.png';
                    break;
                case 'Rain':
                    image.src= 'img/rain.png';
                    break;
                case 'Snow':
                    image.src= 'img/snow.png';
                    break;
                case 'Clouds':
                    image.src= 'img/cloud.png';
                    break;
                case 'Mist':
                    image.src= 'img/mist.png';
                    break;
            
                default:
                    image.src = ''
                    break;
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Км/час`;

            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '590px';

        });

});






particlesJS("particles-js", {
  particles: {
    number: { value: 100, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);