const getForecast = async () =>{
let api = "https://api.weatherapi.com/v1/forecast.json?key=ff0eb5ef6c8d488987a230507210608&q=94970&days=10&aqi=yes&alerts=yes"

try {
  const forecast = await fetch(api, {
    method: "GET"
  })
  if (forecast.ok) {
    const jsonResponse = await forecast.json();
    let day1Temp = jsonResponse.forecast.forecastday[0].day.maxtemp_f

    let day2Temp = jsonResponse.forecast.forecastday[1].day.maxtemp_f

    let day3Temp = jsonResponse.forecast.forecastday[2].day.maxtemp_f

      let day1WindArray= [jsonResponse.forecast.forecastday[0].hour[9].wind_mph, jsonResponse.forecast.forecastday[0].hour[10].wind_mph, jsonResponse.forecast.forecastday[0].hour[11].wind_mph, jsonResponse.forecast.forecastday[0].hour[12].wind_mph, jsonResponse.forecast.forecastday[0].hour[13].wind_mph, jsonResponse.forecast.forecastday[0].hour[14].wind_mph, jsonResponse.forecast.forecastday[0].hour[15].wind_mph, jsonResponse.forecast.forecastday[0].hour[16].wind_mph, jsonResponse.forecast.forecastday[0].hour[17].wind_mph]

      let maxWind1= 0
      for (let counter = 0; counter < day1WindArray.length; counter++) {
        if (day1WindArray[counter] > maxWind1) {
          maxWind1 = day1WindArray[counter]
        } 
      }


      let day2WindArray= [jsonResponse.forecast.forecastday[1].hour[9].wind_mph, jsonResponse.forecast.forecastday[1].hour[10].wind_mph, jsonResponse.forecast.forecastday[1].hour[11].wind_mph, jsonResponse.forecast.forecastday[1].hour[12].wind_mph, jsonResponse.forecast.forecastday[1].hour[13].wind_mph, jsonResponse.forecast.forecastday[1].hour[14].wind_mph, jsonResponse.forecast.forecastday[1].hour[15].wind_mph, jsonResponse.forecast.forecastday[1].hour[16].wind_mph, jsonResponse.forecast.forecastday[1].hour[17].wind_mph]

      let maxWind2= 0
      for (let counter = 0; counter < day2WindArray.length; counter++) {
        if (day2WindArray[counter] > maxWind2) {
          maxWind2 = day2WindArray[counter]
        } 
      }


      let day3WindArray= [jsonResponse.forecast.forecastday[2].hour[9].wind_mph, jsonResponse.forecast.forecastday[2].hour[10].wind_mph, jsonResponse.forecast.forecastday[2].hour[11].wind_mph, jsonResponse.forecast.forecastday[2].hour[12].wind_mph, jsonResponse.forecast.forecastday[2].hour[13].wind_mph, jsonResponse.forecast.forecastday[2].hour[14].wind_mph, jsonResponse.forecast.forecastday[2].hour[15].wind_mph, jsonResponse.forecast.forecastday[2].hour[16].wind_mph, jsonResponse.forecast.forecastday[2].hour[17].wind_mph]

      let maxWind3= 0
      for (let counter = 0; counter < day3WindArray.length; counter++) {
        if (day3WindArray[counter] > maxWind3) {
          maxWind3 = day3WindArray[counter]
        } 
      }
  const day1Score = perfectRating(day1Temp,maxWind1)
  const day2Score = perfectRating(day2Temp,maxWind2)
  const day3Score = perfectRating(day3Temp,maxWind3)

  var d = new Date();
    var n = d.getDay();
      if (n === 0) {
        let day = "Sunday"
        document.getElementById(day).style.border="2px solid black";
        changeColor(day1Score, day, 0)   
        document.getElementById("SunDeets").innerHTML =  `High: ${day1Temp}˚ F <br> Wind: ${maxWind1} mph <br>`   
      }
      if (n === 1) {
        let day = "Monday"
        document.getElementById(day).style.color = "#157";
        changeColor(day1Score, day, 0)   
        document.getElementById("MonDeets").innerHTML =  `High: ${day1Temp}˚ F <br> Wind: ${maxWind1} mph <br>`   
      }
      if (n === 2) {
        let day = "Tuesday"
        document.getElementById(day).style.color = "#157";
        changeColor(day1Score, day, 0)
        document.getElementById("TuesDeets").innerHTML =  `High: ${day1Temp}˚ F <br> Wind: ${maxWind1} mph <br>`
      }
      if (n === 3) {
        let day = "Wednesday"
        document.getElementById(day).style.color = "#157";
        changeColor(day1Score, day, 0)
        document.getElementById("WedDeets").innerHTML =  `High: ${day1Temp}˚ F <br> Wind: ${maxWind1} mph <br>`
      }
      if (n === 4) {
        let day = "Thursday"
        document.getElementById(day).style.color = "#157";
        changeColor(day1Score, day, 0)
        document.getElementById("ThursDeets").innerHTML =  `High: ${day1Temp}˚ F <br> Wind: ${maxWind1} mph <br>`
      }
      if (n === 5) {
        let day = "Friday"
        document.getElementById(day).style.color = "#157";
        changeColor(day1Score, day, 0)
        document.getElementById("FriDeets").innerHTML =  `High: ${day1Temp}˚ F <br> Wind: ${maxWind1} mph <br>`
      }
      if (n === 6) {
        let day = "Saturday"
        document.getElementById(day).style.color = "#157";
        changeColor(day1Score, day, 0)
        document.getElementById("SatDeets").innerHTML =  `High: ${day1Temp}˚ F <br> Wind: ${maxWind1} mph <br>`
      }


      let day2Day = 'temp'
        if (n < 6) {
          day2Day = n + 1
        } else {
          day2Day = 0
        }
            
      if (day2Day === 0) {
        changeColor(day2Score, "Sunday", 1)
        document.getElementById("SunDeets").innerHTML =  `High: ${day2Temp}˚ F <br> Wind: ${maxWind2} mph <br>`
      }
      if (day2Day === 1) {
        changeColor(day2Score, "Monday", 1)
        document.getElementById("MonDeets").innerHTML =  `High: ${day2Temp}˚ F <br> Wind: ${maxWind2} mph <br>`
      }
      if (day2Day === 2) {
        changeColor(day2Score, "Tuesday", 1) 
        document.getElementById("TuesDeets").innerHTML =  `High: ${day2Temp}˚ F <br> Wind: ${maxWind2} mph <br>`     
      }
      if (day2Day === 3) {
        changeColor(day2Score, "Wednesday", 1)
        document.getElementById("WedDeets").innerHTML =  `High: ${day2Temp}˚ F <br> Wind: ${maxWind2} mph <br>`      
      }
      if (day2Day === 4) {
        changeColor(day2Score, "Thursday", 1)   
        document.getElementById("ThursDeets").innerHTML =  `High: ${day2Temp}˚ F <br> Wind: ${maxWind2} mph <br>`   
      }
      if (day2Day === 5) {
        changeColor(day2Score, "Friday", 1)
        document.getElementById("FriDeets").innerHTML =  `High: ${day2Temp}˚ F <br> Wind: ${maxWind2} mph <br>`      
      }
      if (day2Day === 6) {
        changeColor(day2Score, "Saturday", 1)
        document.getElementById("SatDeets").innerHTML =  `High: ${day2Temp}˚ F <br> Wind: ${maxWind2} mph <br>`      
      }

      let day3Day = 'temp'
        if (n < 5) {
          day3Day = n + 2
        } 
        else if (n === 5){
          day3Day = 0
        }
        else if (n === 6){
          day3Day = 1
        }
     
      if (day3Day === 0) {
        changeColor(day3Score, "Sunday", 2)
        document.getElementById("SunDeets").innerHTML =  `High: ${day3Temp}˚ F <br> Wind: ${maxWind3} mph <br>`      }
      if (day3Day === 1) {
        changeColor(day3Score, "Monday", 2)
        document.getElementById("MonDeets").innerHTML =  `High: ${day3Temp}˚ F <br> Wind: ${maxWind3} mph <br>`      }
      if (day3Day === 2) {
        changeColor(day3Score, "Tuesday", 2)
        document.getElementById("TuesDeets").innerHTML =  `High: ${day3Temp}˚ F <br> Wind: ${maxWind3} mph <br>`      
      }
      if (day3Day === 3) {
                changeColor(day3Score, "Wednesday", 2)

        document.getElementById("WedDeets", 2).innerHTML =  `High: ${day3Temp}˚ F <br> Wind: ${maxWind3} mph <br>`      }
      
      if (day3Day === 4) {
                changeColor(day3Score, "Thursday", 2)

              document.getElementById("ThursDeets").innerHTML =  `High: ${day3Temp}˚ F <br> Wind: ${maxWind3} mph <br>`      }

      if (day3Day === 5) {
                changeColor(day3Score, "Friday", 2)

        document.getElementById("FriDeets").innerHTML =  `High: ${day3Temp}˚ F <br> Wind: ${maxWind3} mph <br>`      }
      
      if (day3Day === 6) {
        changeColor(day3Score, "Saturday", 2)      
              document.getElementById("SatDeets").innerHTML =  `High: ${day3Temp}˚ F <br> Wind: ${maxWind3} mph <br>`      }
  
      
      
      function changeColor (dayScore, dayDay, whichOf3Days) {
        document.getElementById(dayDay + "img").src = jsonResponse.forecast.forecastday[whichOf3Days].day.condition.icon;
        if (dayScore === 4) {
            document.getElementById(dayDay).style.backgroundColor = "rgb(0, 204, 0)";
            document.getElementById(dayDay).style.border="3px solid yellow";
          }
          else if (dayScore === 3) {
            document.getElementById(dayDay).style.backgroundColor = "rgb(102, 204, 102)";
          }
          else if (dayScore === 2) {
            document.getElementById(dayDay).style.backgroundColor = "rgb(165, 204, 165)";
          }
            else if (dayScore === 1) {
            document.getElementById(dayDay).style.backgroundColor = "rgb(245, 238, 177)";
          }
          else if (dayScore === 0) {
            document.getElementById(dayDay).style.backgroundColor = "rgb(226, 112, 112)";
          }
      }

  } else {
      throw new Error('Request failed!');
    }
  }catch(error) {
    console.log(error.message)
  }
}

getForecast()
    
function perfectRating (temp, wind) {
  let score = 0
  if (wind >= 0 && wind <= 7) {
    score = score +2
  }
  else if (wind > 7 && wind <= 11) {
    score++
  }

  if (temp >= 75) {
    score = score +2
  }
  else if (temp >= 70 && temp < 75) {
    score++
  }
  return(score)
}
