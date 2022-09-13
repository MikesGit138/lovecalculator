function checker(){
    const user = document.getElementById('user').value
    const lover = document.getElementById('lover').value
    let percentage  = document.getElementById('response')
    let answer = document.getElementById('advice')
    console.log(user)
    console.log(lover)

    const fetchInfo = async() => {
        const res = await fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${user}&fname=${lover}`, options)
        const data = await res.json()

        console.log(data);
        percentage.textContent = data.percentage + '% match'
        advice.textContent = data.result 
        console.log('client res is:' + advice)
    }
    fetchInfo()
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'db9399181fmsh50f9c2cb0d76c34p142e0fjsnc086ab2c5da7',
		'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
	}
};



