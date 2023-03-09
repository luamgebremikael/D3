const resultContainer =  document.getElementById('result')

async function getStandings(year,round){
    const response = await fetch(`https://ergast.com/api/f1/${year}/${round}/driverStandings.json`)
    const data = await response.json()



    resultContainer.innerHTML=`
<div id="result">
<table class="table">
        <thead>
            <tr>
                <th scope="col">Position</th>
                <th scope="col">Name</th>
                <th scope="col">Nationality</th>
                <th scope="col">Sponsor</th>
                <th scope="col">Points</th>
              </tr>
        </thead>
        <tbody>
          <tr>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].position}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName},${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.familyName}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.nationality}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Constructors[0].name}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].points}</td>
          </tr>
          <tr>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].position}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.givenName},${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.familyName}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.nationality}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Constructors[0].name}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].points}</td>
          </tr>
          <tr>
            <td >${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].position}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.givenName},${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.familyName}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.nationality}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Constructors[0].name}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].points}</td>
          </tr>
          <tr>
            <td >${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].position}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Driver.givenName},${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Driver.familyName}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Driver.nationality}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Constructors[0].name}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].points}</td>
          </tr>
          <tr>
            <td >${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].position}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver.givenName},${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver.familyName}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver.nationality}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Constructors[0].name}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].points}</td>
          </tr>
          <tr>
            <td >${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].position}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Driver.givenName},${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Driver.familyName}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Driver.nationality}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Constructors[0].name}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].points}</td>
          </tr>
          <tr>
            <td >${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].position}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Driver.givenName},${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Driver.familyName}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Driver.nationality}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Constructors[0].name}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].points}</td>
          </tr>
        </tbody>
      </table>
</div>
`
}



const raceSearchForm = document.getElementById('raceSearch')
raceSearchForm.addEventListener('submit', function(e){
    e.preventDefault()
    const yearInput= raceSearchForm.querySelector('#year')
    const roundInput= raceSearchForm.querySelector('#round')
    getStandings(yearInput.value, roundInput.value)
    yearInput.value=''
    roundInput.value=''
})