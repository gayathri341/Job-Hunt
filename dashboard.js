document.addEventListener('DOMContentLoaded', function() {
  // Sample chart data
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Sunday','Monday','Tuesday','Wenesday','Thursday','Friday','Saturday','Sunday','Monday','Tuesday','Wenesday','Thursday','Friday','Saturday'],
      datasets: [{
        label: 'Earnings',
        data: [5, 1, 3, 5, 5, 3,9,9,8,3,11,10,6,9],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value, index, values) {
              return value + 'k';
            }
          }
        }
      }
    }
  });
});


