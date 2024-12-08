const base_api="http://api.weatherapi.com/v1"
const key="ccf0ce9e90bf4881b9a101104241408"

const getWeather = async() => {
    let = result=''
    const city = winp.value
    const res = await fetch(`${base_api}/current.json?key=${key}&q=${city}`)
    const jres = await res.json()
    console.log(jres)
    result = `
        <h3>${jres.location.name},${jres.location.region},${jres.location.country}</h3>
        <img src="${jres.current.condition.icon}">
        <h5>${jres.current.condition.text}</h5>
    `
    cnt.innerHTML=result
}

;ofsghvj ;vh8aerrp9b sepr08tyrw0pvW
