
    btn.onclick = () => {
        const CLEAPI ='ba3e0af2ffd376b524544686e22f6f81';
        const ville= champ.value
        rafraich = function(){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${CLEAPI}&units=metric&lang=fr`)
        .then(reponse => reponse.json())
        .then(data => {
            document.getElementById("entrée").innerHTML="";
            document.getElementById("bouton").innerHTML="";
            output.textContent = "";
            output2.textContent = "";
            output.textContent = `Temperature de ${data.main.temp} °`;
            output2.textContent = `Temperature ressentie de ${data.main.feels_like} °`;
            output3.textContent = ` ${data.weather[0].description}`;
            output4.textContent = `Humidité ${data.main.humidity} %`;
            output5.textContent = `${data.name}`;
            
            setTimeout(rafraich,3600000);
            console.table(data);
        })};
        
     rafraich();   
    } 
 
 