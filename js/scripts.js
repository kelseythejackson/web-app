Chart.defaults.global.defaultFontColor = '#7477bf';
var trafficTimeline = document.getElementById('traffic-timeline'),
dailyTraffic = document.getElementById('daily-traffic'),
mobileUsers = document.getElementById('mobile-users'),
chartTimelineData = {

  labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
  datasets: [
    {
      label: '2015',
      fill: true,
      lineTension: 0,
      backgroundColor: 'rgba(116,119,191,0.4)',
      borderColor: '#7477bf',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(116,119,191,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
      data: [100, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2005, 1750, 2000],
    },
    {
      label: '2016',
      fill: true,
      lineTension: 0,
      backgroundColor: 'rgba(129,201,143,0.4)',
      borderColor: '#81c98f',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#81c98f',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
      data: [200, 1275, 1450, 850, 1150, 1450, 1850, 1600, 1800, 1400, 1250, 1300],
    }
  ],
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }],
      xAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
},
trafficChart = new Chart(trafficTimeline, {
  type: 'line',
  data: chartTimelineData
}),
dailyTrafficChart = new Chart(dailyTraffic, {
  type: 'bar',
  data: {
    labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Whovians',
        backgroundColor: '#7477bf',
        borderColor: '#7477bf',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(116,119,191,0.4)',
        hoverBorderColor: '#7477bf',
        data: [65, 59, 80, 81, 56, 55, 75],
      },
      {
        label: 'Gambinos',
        backgroundColor: '#81c98f',
        borderColor: '#81c98f',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(129,201,143,0.4)',
        hoverBorderColor: '#81c98f',
        data: [75, 68, 97, 71, 46, 70, 64],
      }
    ]
  }
}),
mobileUsersChart = new Chart(mobileUsers, {
  type: 'doughnut',
  data: {
    labels: [
      'iOS',
      'Android',
      'Windows',
      'Firefox OS'
    ],
    datasets: [
      {
        data: [300, 50, 100, 25],
        backgroundColor: [
          '#7477bf',
          '#74b1bf',
          '#4d4c72',
          '#81c98f'
        ],
        hoverBackgroundColor: [
          'rgba(116, 119, 191, .4)',
          'rgba(116, 177, 191, .4)',
          'rgba(77, 76, 114, .4)',
          'rgba(129, 201, 143, .4)'
        ]
      }]
    }
  });
var hourly = document.getElementById('hourly'),
    daily = document.getElementById('daily'),
    weekly = document.getElementById('weekly'),
    monthly = document.getElementById('monthly');
hourly.addEventListener('click', function () {
console.log('hourly');
trafficChart.data.datasets[0].data = [500, 650, 800, 700, 900, 1250, 1300, 1525, 1675, 1400, 900, 700];
trafficChart.data.datasets[1].data = [1700, 1300, 1500, 1400, 1250, 1300, 1250, 1600, 1700, 1800, 1650, 1500];
trafficChart.update();
});

daily.addEventListener('click', function () {
console.log('daily');
trafficChart.data.datasets[0].data = [1000, 1650, 1800, 1700, 1900, 1750, 1500, 1800, 1567, 2135, 1750, 1800];
trafficChart.data.datasets[1].data = [200, 1275, 1450, 850, 1150, 1450, 1850, 1600, 1800, 1400, 1250, 1300];
trafficChart.update();
});

weekly.addEventListener('click', function () {
console.log('weekly');
trafficChart.data.datasets[0].data = [100, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2005, 1750, 2000];
trafficChart.data.datasets[1].data = [200, 1275, 1450, 850, 1150, 1450, 1850, 1600, 1800, 1400, 1250, 1300];
trafficChart.update();
});
monthly.addEventListener('click', function () {
console.log('monthly');
trafficChart.data.datasets[0].data = [500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600];
trafficChart.data.datasets[1].data = [400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500];
trafficChart.update();
});
