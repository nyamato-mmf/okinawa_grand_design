Chart.defaults.font.size = 20;


/* ----------------------------------------------------------------------------
　認知度（recognition）
---------------------------------------------------------------------------- */
const pieChartCanvas_recognition = document.getElementById('recognition');
const ctx_recognition = pieChartCanvas_recognition.getContext('2d');

// Initialize pie chart with default data
let pieChart_recognition = new Chart(ctx_recognition, {
    type: 'pie',
    data: {
        labels: ['YES', 'NO'],
        datasets: [{
            label: 'Response',
            data: [75, 25],
            backgroundColor: [
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 99, 132, 0.8)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            legend: {
                position: 'bottom'
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += context.formattedValue + '%';
                        return label;
                    }
                }
            },
            title: {
                display: true,
                text: 'Q. 沖縄（日本）を知っていますか？', // Title for the pie chart,
            }
        }
    }
});

// Update pie chart based on selected city
document.getElementById('cityList').addEventListener('change', function() {
    const selectedCity = this.value;
    // Assuming you have a function to fetch data for the selected city

    fetch("./json/recognition.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Process the JSON data
            //console.log(data);

            for (const item of data) {
                if (item["City"] === selectedCity) {
                    pieChart_recognition.data.datasets[0].data = [item["Yes"], item["No"]];
                    pieChart_recognition.update();
                    break; // Exit the loop once city data is found
                }
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});


/* ----------------------------------------------------------------------------
　訪問経験（visit）
---------------------------------------------------------------------------- */
const pieChartCanvas_visit = document.getElementById('visit');
const ctx_visit = pieChartCanvas_visit.getContext('2d');

// Initialize pie chart with default data
let pieChart_visit = new Chart(ctx_visit, {
    type: 'pie',
    data: {
        labels: ['YES', 'NO'],
        datasets: [{
            label: 'Response',
            data: [75, 25],
            backgroundColor: [
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 99, 132, 0.8)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            legend: {
                position: 'bottom'
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += context.formattedValue + '%';
                        return label;
                    }
                }
            },
            title: {
                display: true,
                text: 'Q. 沖縄を訪れたことがありますか？', // Title for the pie chart,
            }
        }
    }
});

// Update pie chart based on selected city
document.getElementById('cityList').addEventListener('change', function() {
    const selectedCity = this.value;
    // Assuming you have a function to fetch data for the selected city

    fetch("./json/visit.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Process the JSON data
            //console.log(data);

            for (const item of data) {
                if (item["City"] === selectedCity) {
                    pieChart_visit.data.datasets[0].data = [item["Yes"], item["No"]];
                    pieChart_visit.update();
                    break; // Exit the loop once city data is found
                }
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});



/* ----------------------------------------------------------------------------
　沖縄のイメージ（words_okinawa）
---------------------------------------------------------------------------- */
const ChartCanvas_words_okinawa = document.getElementById('words_okinawa');
const ctx_words_okinawa = ChartCanvas_words_okinawa.getContext('2d');

// Initial data
const keywords = ["beautiful","nice","island","pretty","Okinawa","peaceful"];
const percentages = [41.93548387,12.90322581,11.29032258,9.677419355,8.064516129,6.451612903];

// Initialize pie chart with default data
let Chart_words_okinawa = new Chart(ctx_words_okinawa, {
    type: "bar",
    data: {
            labels: keywords,
            datasets: [{
                data: percentages,
                backgroundColor: 'rgba(54, 162, 235, 0.8)',
                borderColor: 'rgba(255, 99, 132, 0.8)'
            }]
        },
    options: {
            indexAxis: "y",
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Q. 沖縄のイメージは？', // Title for the pie chart,
                }
            }
        }
});

// Update pie chart based on selected city
document.getElementById('cityList').addEventListener('change', function() {
    const selectedCity = this.value;
    // Assuming you have a function to fetch data for the selected city

    fetch("./json/words_okinawa.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Process the JSON data
            //console.log(data);
        
            const keywords = [];
            const percentages = [];
        
            for (const item of data) {
                if (item["Country"] === selectedCity) {
                    keywords.push(item["Words"])
                    percentages.push(item["Percentage"])
                }
            }
            console.log(keywords)
            Chart_words_okinawa.data.labels = keywords; // Corrected variable name
            Chart_words_okinawa.data.datasets[0].data = percentages; // Corrected variable name
            Chart_words_okinawa.update(); // Corrected variable name
        })
        
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});


/* ----------------------------------------------------------------------------
　最近訪問したリゾート（visited_resorts）
---------------------------------------------------------------------------- */
const ChartCanvas_visited_resorts = document.getElementById('visited_resorts');
const ctx_visited_resorts = ChartCanvas_visited_resorts.getContext('2d');

// Initial data
const keywords_visited_resorts = ["Mexico","Bahamas","Cuba","Disney","Florida","Hawaii","Jamaica","not","spring","world",];
const percentages_visited_resorts = [3,2,2,2,2,2,2,2,2,2,];

// Initialize pie chart with default data
let Chart_visited_resorts = new Chart(ctx_visited_resorts, {
    type: "bar",
    data: {
            labels: keywords_visited_resorts,
            datasets: [{
                data: percentages_visited_resorts,
                backgroundColor: 'rgba(54, 162, 235, 0.8)',
                borderColor: 'rgba(255, 99, 132, 0.8)'
            }]
        },
    options: {
            indexAxis: "y",
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Q. 最近訪れたリゾート地は？', // Title for the pie chart,
                }
            }
        }
});

// Update pie chart based on selected city
document.getElementById('cityList').addEventListener('change', function() {
    const selectedCity = this.value;
    // Assuming you have a function to fetch data for the selected city

    fetch("./json/visited_resorts.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Process the JSON data
            //console.log(data);
        
            const keywords_visited_resorts = [];
            const percentages_visited_resorts = [];
        
            for (const item of data) {
                if (item["Country"] === selectedCity) {
                    keywords_visited_resorts.push(item["Words"])
                    percentages_visited_resorts.push(item["Percentage"])
                }
            }
            Chart_visited_resorts.data.labels = keywords_visited_resorts; // Corrected variable name
            Chart_visited_resorts.data.datasets[0].data = percentages_visited_resorts; // Corrected variable name
            Chart_visited_resorts.update(); // Corrected variable name
        })
        
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});


/* ----------------------------------------------------------------------------
　訪れてみたいリゾート（want2visit_resorts）
---------------------------------------------------------------------------- */
const ChartCanvas_want2visit_resorts = document.getElementById('want2visit_resorts');
const ctx_want2visit_resorts = ChartCanvas_want2visit_resorts.getContext('2d');

// Initial data
const keywords_want2visit_resorts = ["Bahamas","Hawaii","Fiji","sandal","Aruba","Caribbean","Disney_land","Disney_world","Jamaica","Las_Vegas"];
const percentages_want2visit_resorts = [8,5,3,3,2,2,2,2,2,2];

// Initialize pie chart with default data
let Chart_want2visit_resorts = new Chart(ctx_want2visit_resorts, {
    type: "bar",
    data: {
            labels: keywords_want2visit_resorts,
            datasets: [{
                data: percentages_want2visit_resorts,
                backgroundColor: 'rgba(54, 162, 235, 0.8)',
                borderColor: 'rgba(255, 99, 132, 0.8)'
            }]
        },
    options: {
            indexAxis: "y",
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Q. 訪れてみたいリゾート地は？', // Title for the pie chart,
                }
            }
        }
});

// Update pie chart based on selected city
document.getElementById('cityList').addEventListener('change', function() {
    const selectedCity = this.value;
    // Assuming you have a function to fetch data for the selected city

    fetch("./json/want2visit_resorts.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Process the JSON data
            //console.log(data);
        
            const keywords_want2visit_resorts = [];
            const percentages_want2visit_resorts = [];
        
            for (const item of data) {
                if (item["Country"] === selectedCity) {
                    keywords_want2visit_resorts.push(item["Words"])
                    percentages_want2visit_resorts.push(item["Percentage"])
                }
            }
            Chart_want2visit_resorts.data.labels = keywords_want2visit_resorts; // Corrected variable name
            Chart_want2visit_resorts.data.datasets[0].data = percentages_want2visit_resorts; // Corrected variable name
            Chart_want2visit_resorts.update(); // Corrected variable name
        })
        
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});

