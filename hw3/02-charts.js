

const backgroundColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(210, 199, 199, 0.8)',
  'rgba(78, 52, 199, 0.8)',
];

const borderColors = [
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(159, 159, 159, 1)',
  'rgba(83, 102, 255, 1)',
  'rgba(40, 159, 64, 1)',
  'rgba(210, 199, 199, 1)',
  'rgba(78, 52, 199, 1)',
];

// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';


// async function to fetch the data from a given url
const fetchData = async function fetchDataFromApi(url) {
  try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
  }
  catch {
      console.error('Error', error);
  }
};

// function to count family names
const getFam = function getFamilyNames(data) {

  let familyNames = [];

  data.forEach(element => {
    if(!familyNames.some(name => name.name === element.lastName)) {
      familyNames.push(
        {
          'name': element.lastName,
          'count': 1
        });
    }
    else {
      let nameIndex = familyNames.findIndex(name => name.name === element.lastName);
      familyNames[nameIndex].count++;
    }
  });

  let filteredNames = [];
  familyNames.forEach(element => {
    if(element.name === 'Targaryan')
    {
      let tarName = familyNames.findIndex(name => name.name === 'Targaryen');
      familyNames[tarName].count += element.count;
    }
    else if(element.name === '' || element.name === 'None') {
      let unName = familyNames.findIndex(name => name.name === 'Unknown');
      familyNames[unName].count += element.count;
    }
    else {
      filteredNames.push(element);
    }
  });

  return filteredNames;
}

// function to render the chart of families
// returns a list of last names with only one entry
const renderFamilyChart = (nameData) => {
  const donutChart = document.querySelector('.donut-chart');

  let labelNames = ['No Family Gang :('];
  let nameCounts = [0];
  let noFamily = [];
  nameData.forEach(element => {

    if(element.count > 1){
      labelNames.push(element.name);
      nameCounts.push(element.count);  
    }
    else {
      nameCounts[0]++;
      noFamily.push(element.name);
    }

  });

  new Chart(donutChart, {
    type: 'doughnut',
    data: {
      labels: labelNames,
      datasets: [
        {
          label: 'My First Dataset',
          data: nameCounts,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    },
  });

  return noFamily;
};

// function that prints a list of people with no family members
const noFamList = function displaynoFamily(list) {
  let header = document.createElement('h2');
  header.innerText = 'These are the last names that have no family :(';
  let lackFam = document.createElement('ul');
  list.forEach(element => {
    let listItem = document.createElement('li');
    listItem.innerText = element;
    lackFam.appendChild(listItem);
  });

  document.getElementById('noFamily').appendChild(header);
  document.getElementById('noFamily').appendChild(lackFam);
}

//async main function used for wrapping other async functions.
const main = async function main() {

  let characterArray = [];
  characterArray = await fetchData(url);
  
  let familyNames = getFam(characterArray);
  let lackingFamily = renderFamilyChart(familyNames);
  
  noFamList(lackingFamily);

};

main();
