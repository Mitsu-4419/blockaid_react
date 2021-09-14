export const RadarDataFront = {
    labels: ["Vue/nuxt","Quasar","Flutter","GraphQL", "WASM", "Typescript","React.js"],
    datasets: [
      {
        label: "March",
        backgroundColor: "rgba(34, 202, 236, .2)",
        borderColor: "rgba(34, 202, 236, 1)",
        pointBackgroundColor: "rgba(34, 202, 236, 1)",
        poingBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(34, 202, 236, 1)",
        data: [5,4,4,3,2,4,4]
      }
    ]
  };
  export const RadarOptionsFront = {
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
      text:'Frontend'
    }, 
    legend: {
        display: false
    }
  };

  export const RadarOptionsFront_Mini = {
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
      text:'Frontend'
    }, 
    legend: {
        display: false
    }
  };
  