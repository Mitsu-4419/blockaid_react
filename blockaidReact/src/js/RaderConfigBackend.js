export const RadarDataBack = {
    labels: ["Node.js", "Python", "Django","C,C++", "GCP", "Firebase","Solidity"],
    datasets: [
      {
        label: "March",
        backgroundColor: "rgba(34, 236, 88, .2)",
        borderColor: "rgba(34, 236, 88, 1)",
        pointBackgroundColor: "rgba(34, 202, 236, 1)",
        poingBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(34, 202, 236, 1)",
        data: [4,4,4,2,4,5,3]
      }
    ]
  };
  export const RadarOptionsBack = {
    scale:{
      pointLabels:{
        fontSize:15,
      },
      ticks: {
        min: 0,
        max: 5,
        stepSize: 1,
        display:false
      },
    },
    maintainAspectRatio: false,
    responsive: false,
    title:{
      display:true,
      fontSize:25,
      text:'Backend'
    }, 
    legend: {
        display: false
    }
  };

  export const RadarOptionsBack_Mini = {
    scale:{
      pointLabels:{
        fontSize:10,
      },
      ticks: {
        min: 0,
        max: 5,
        stepSize: 1,
        display:false
      },
    },
    maintainAspectRatio: false,
    responsive: false,
    title:{
      display:true,
      fontSize:18,
      text:'Backend'
    }, 
    legend: {
        display: false
    }
  };
  