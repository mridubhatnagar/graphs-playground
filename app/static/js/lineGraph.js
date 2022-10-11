function apiCall() {
    $.ajax({
    type: "POST",
    url: "/",
    data: {},
    success: function(result) {
        var keys = Object.keys(result);
        var values = Object.values(result);
        createChart(keys, values);
    }
    })
}

function createChart(months, values) {
    new Chart("myChart", {
        type: "line",
        data: {
        labels: months,
        datasets: [{
            fill: false,
            lineTension: 0,
            backgroundColor: "white",
            borderColor: "red",
            data: values
        }]
        },
        options: {
            responsive:true,
            legend: {display: true},
          }
});
}