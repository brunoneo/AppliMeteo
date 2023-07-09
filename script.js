function appelAPI(city) {
        let url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=ba3e0af2ffd376b524544686e22f6f81&units=metric&lang=fr';
    
        fetch(url)
        .then((response) => response.json()
        .then((data) => {
            temp.textContent = `Temperature de \n${data.main.temp} °`;
            tempRessent.textContent = `Temperature ressentie de \n${data.main.feels_like} °`;
            descript.textContent = ` ${data.weather[0].description}`;
            document.querySelector('#humidité').innerHTML =`Humidité ${data.main.humidity} %`;
            ville.textContent = `METEO DE ${data.name}`;
    
            setTimeout(appelJson,3600000);

        }));}

function appelJson(){
        fetch('./conf.json')
        .then((resp) =>resp.json()
        .then((data) => appelAPI(data.ville))
            );
            }
        
        appelJson(); 
 
 
