
async function api() {
    try {
      let data = await fetch("https://restcountries.com/v3.1/all");
      let res = await data.json();
      //console.log(res);
      foo(res);
    }
    catch (error) {
      console.log(error);
    }
  
  }
  
  
  
  var container = document.createElement("div");
  container.className = "container";
  
  var row = document.createElement("div");
  row.className = "row";
  api();
  
  function foo(data1) {
  
    for (var i = 0; i < data1.length; i++) {
      var x = data1[i];
      var lat_lon = x.latlng;
      var lat = lat_lon[0], lng = lat_lon[1];
      var col = document.createElement("div");
  
      col.className = "col-lg-4 col-sm-12";
      col.innerHTML = `<h1 class="text-center" id="title"><div class="card border-primary mb-3" style="max-width: 18rem; text-align: center;background: linear-gradient(90deg,rgb(231, 234, 187),grey);font-size: 15px;">
          <div class="card-header" style="background-color: black;color: white;">${x.name.common}</div>
          <div class="card-body" >
            <img src="${x.flags.png}">
            <div class ="card-text">
              <p>Capital: ${x.capital}</p>
              <p>Region: ${x.region}</p>
              <p>Country-Code: ${x.cca3}</p>
            </div>
          </div>
          <button type="button" class="btn btn-primary"  onclick="weather_report(${lat}, ${lng})" >Click for weather</button>
        </div></h1>`;
      row.append(col);
      
    }
    
  
  
    container.append(row);
    document.body.append(container);
    console.log(data1)
  }
  
  async function weather_report(x, y) {
    
    //use alert function to display the weather
    try {
      let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${x}&lon=${y}&appid=051db8c176d4abf806297e51cf31d18d`);
      let res = await data.json();
      console.log(res,res.weather[0].main,res.wind.speed, res.main.temp);
      alert(`Country Name: ${res.name}
  Wind Speed: ${res.wind.speed}
  Weather: ${res.weather[0].main}
  Temperature: ${res.main.temp}`)
    }
    catch (error) {
      console.log(error);
    }
  
  
  }
  