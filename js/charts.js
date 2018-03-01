

function drawChart(canvasId,data,count){
  // console.log(data.data.values);
  let ctx = document.getElementById(canvasId).getContext('2d');
  let options={
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
      }
  }

  if (data.graphic.type == 'pie' || data.graphic.type == 'doughnut'){
    options=""

  };
  let myChart = new Chart(ctx, {
      type: data.graphic.type,
      data: {
          labels: data.data.labels,
          datasets: [{
              label: '# of Votes',
              data: data.data.values[count],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1,

          }]
      },
      options:options
  });


}
