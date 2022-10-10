function loadDetails() {
    $.ajax({
    type: "POST",
    url: "/",
    data: {},
    success: function(result) {
        var months = Object.keys(result);
        console.log(months);
        var values = Object.values(result);
        console.log(values);
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
    })
}