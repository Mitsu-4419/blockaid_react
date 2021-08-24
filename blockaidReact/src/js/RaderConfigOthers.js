export const RadarDataOthers = {
    labels: ["Medical", "Statistics", "docker","AI", "DataScience","BlockChain"],
    datasets: [
      {
        label: "March",
        backgroundColor: "rgba(236, 68, 34, .2)",
        borderColor: "rgba(236, 68, 34, 1)",
        pointBackgroundColor: "rgba(34, 202, 236, 1)",
        poingBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(34, 202, 236, 1)",
        data: [5,3,3,3,3,3]
      }
    ]
  };
  export const RadarOptionsOthers = {
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
      text:'Others'
    }, 
    legend: {
        display: false
    }
  };
  