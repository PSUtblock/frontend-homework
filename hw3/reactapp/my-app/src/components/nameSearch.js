// async function to fetch the data from a given url
export const fetchData = async function fetchDataFromApi() {
    let url = 'https://thronesapi.com/api/v2/Characters';
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }
    catch(error){
        console.error('Error', error);
    }
};

// function to count family names
export const getFam = function getFamilyNames(data) {

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

