
/* ----------------------------------------------------------------------------
　Chart.js グラフ描画機能
---------------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", function() {
    // Sample data for different graph types
    const data = {
        population: {
            type: 'bar', // Specify 'bar' as string
            labels: ['Label 1', 'Label 2', 'Label 3'],
            datasets: [{
                label: '人口（ダミー）',
                data: [5, 10, 15],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        population_by_age: {
            type: 'pie', // Specify 'bar' as string
            labels: ['Label 4', 'Label 5', 'Label 6'],
            datasets: [{
                label: '年代別人口（ダミー）',
                data: [50, 10, 150],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        visitors: {
            type: 'line', // Specify 'line' as string
            labels: ['Label 1', 'Label 2', 'Label 3'],
            datasets: [{
                label: '人口推移（ダミー）',
                data: [5, 10, 15],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            }]
        }
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
        });
    }

    // Initial chart render
    const initialGraphType = document.querySelector('input[name="graphType"]:checked').value;
    renderChart(initialGraphType);
});