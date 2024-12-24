
/* ----------------------------------------------------------------------------
　Chart.js グラフ描画機能
---------------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", function() {
    // Sample data for different graph types
    const data = {
        airport_passengers_domestic: {
            type: 'bar', // Specify 'bar' as string
            labels: ['那覇','粟国','慶良間','久米島','南大東','北大東','伊江島','宮古','下地島','多良間','石垣','波照間','与那国',],
            datasets: [{
                label: '2023年 国内線旅客者数',
                data: [11777046,646,67,151543,32011,17808,300,1233507,319228,29593,1808473,41,73614,],
                backgroundColor: 'rgba(192, 75, 192, 0.8)',
                borderColor: 'rgba(192, 75, 192, 1)',
                borderWidth: 1
            }]
        },
        airport_passengers_international: {
            type: 'bar', // Specify 'bar' as string
            labels: ['那覇','粟国','慶良間','久米島','南大東','北大東','伊江島','宮古','下地島','多良間','石垣','波照間','与那国',],
            datasets: [{
                label: '2023年 国際線旅客者数',
                data: [1236470,0,0,0,0,0,0,0,0,0,502,0,0,],
                backgroundColor: 'rgba(75, 192, 192, 0.8)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        air_sea: {
            type: 'bar',
              labels: ['2012','2013','2014','2015','2016','2017','2018','2019','2020','2021',],
              datasets: [
                {
                  label: '海路',
                  backgroundColor: 'rgba(255, 99, 132, 0.5)',
                  data: [144000,191500,240400,506800,698300,992500,1197100,1063200,0,0,]
                },
                {
                  label: '空路',
                  backgroundColor: 'rgba(54, 162, 235, 0.5)',
                  data: [238500,435700,745600,1163500,1430800,1699500,1803700,1427200,0,0,]
                },
              ],
            options: {
                plugins: {
                    title: {
                      display: true,
                      text: '2018年 空路・海路入域状況（海外）'
                    }
                },
                scales: {
                    x: {
                    stacked: true
                    },
                    y: {
                    stacked: true
                    }
                }
            }
        },
          passengers_by_port: {
            type: 'bar', // Specify 'bar' as string
            labels: ['那覇','石垣','平良','中城','座間味','本部','辺士名(漁港)','伊江','仲里(久米島)','船浮(西表島)','南大東','祖納(与那国島)',],
            datasets: [{
                label: '2019年 クルーズ船寄港回数',
                data: [260,148,147,21,0,0,1,1,1,1,0,1,],
                backgroundColor: 'rgba(75, 192, 192, 0.8)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
          nationalities: {
            type: 'doughnut', // Specify 'line' as string
            labels: ['台湾','韓国','中国本土','香港','アメリカ','その他',],
            datasets: [{
                data: [917700,553800,694800,233700,38000,562800,],
                borderColor: 'rgba(0, 0, 0, 0.2)',
                backgroundColor:['red', 'blue', 'green', 'orange', 'purple', 'yellow'],
                borderWidth: 2,
                fill: false
            }],
            options: {
                plugins: {
                    title: {
                      display: true,
                      text: '2018年 国籍別入域状況（海外）'
                    }
                },
            }
        },
        school_tourism: {
            type: 'bar', // Specify 'bar' as string
            labels: ['琉球大学','名桜大学','沖縄大学','沖縄キリスト教学院大学','沖縄職業能力開発大学校','宝塚医療大学','専修学校インターナショナルリゾートカレッジ','琉美インターナショナルビューティーカレッジ','専修学校パシフィックテクノカレッジ','専門学校沖縄ブライダルモード学園','沖縄ホテル観光専門学校','沖縄情報経理専門学校','大育ビジネス専門学校',],
            datasets: [{
                label: '観光関連学科設置教育機関',
                data: [60,80,80,90,20,100,105,20,15,25,30,50,40,],
                backgroundColor: 'rgba(75, 192, 192, 0.8)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        startups: {
            type: 'bar', // Specify 'bar' as string
            labels: ['東京都','愛知県','京都府','大阪府','広島県','福岡県','鹿児島県','沖縄県',],
            datasets: [{
                label: 'スタートアップ数',
                data: [6679,191,233,601,52,229,20,63,],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
    };

    // Get the radio buttons and canvas
    const radioButtons = document.querySelectorAll('input[name="graphType"]');
    const canvas = document.getElementById('myChart');
    const ctx = canvas.getContext('2d');

    // Add event listener to radio buttons
    radioButtons.forEach(radioButton => {
        radioButton.addEventListener('change', (event) => {
            const selectedGraphType = event.target.value;
            // Destroy the previous chart
            if (window.myChart) {
                window.myChart.destroy();
            }
            renderChart(selectedGraphType);
        });
    });

    // Function to render the chart based on the selected graph type
    function renderChart(graphType) {
        window.myChart = new Chart(ctx, {
            type: data[graphType].type, // Use the specified chart type
            data: data[graphType],
            options: data[graphType].options,
        });
    }

    // Initial chart render
    const initialGraphType = document.querySelector('input[name="graphType"]:checked').value;
    renderChart(initialGraphType);
});