import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { fetchData, getFam } from './nameSearch';


const Houses = () => {

    //colors for chart
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

    
    fetchData()
    .then(res => res.json())
    .then(dataset => {
        let data = [];
        data = dataset;
        let results = getFam(data);
        let familyNames = [];
        let famCounts = []
        results.forEach(element => {
            familyNames.push(element.name);
            famCounts.push(element.count);
        });

        let parameters =  {
                labels: ['Red', 'Blue', 'Yellow'],
                datasets: [
                  {
                    data: [300, 50, 100],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                  },
                ],
              };
        
              return(
                <div>
                    <Doughnut data={parameters}></Doughnut>
                </div>
              )

    })


};

export default Houses;
