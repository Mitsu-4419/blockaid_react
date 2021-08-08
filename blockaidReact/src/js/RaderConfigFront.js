export const RadarDataFront = {
    labels: ["Finger Strength", "Power", "Endurance", "Stability", "Flexability"],
    datasets: [
      {
        label: "March",
        backgroundColor: "rgba(34, 202, 236, .2)",
        borderColor: "rgba(34, 202, 236, 1)",
        pointBackgroundColor: "rgba(34, 202, 236, 1)",
        poingBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(34, 202, 236, 1)",
        data: [5,2,3,4,5]
      }
    ]
  };
  export const RadarOptionsFront = {
    scale:{
      pointLabels:{
        fontSize:16,
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
  