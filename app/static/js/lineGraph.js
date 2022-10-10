function apiCall() {
    $.ajax({
    type: "POST",
    url: "/",
    data: {},
    success: function(result) {
        var keys = Object.keys(result);
        console.log(months);
        var values = Object.values(result);
        console.log(values);
        loadDetails(keys, values);
    }
    })
}

function loadDetails(months, values) {
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
        }
});
}