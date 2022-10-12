function apiCall() {
    var companyName = document.getElementById('cname').value;
    var scripName = companyName.split(",");
    console.log(scripName);
    $.ajax({
    type: "POST",
    url: "/",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify({scripname: scripName}),
    success: function(result) {
        // console.log(result);
        createChart(result);
    }
    })
}

function createChart(result) {
    console.log(result)
    var keys = Object.keys(result);
    console.log(keys);
    var values = Object.values(result);
    console.log(values);
    var dataset = [];
    for (i=0; i<keys.length; i++) {
        var dates = Object.keys(values[i]);
        let ltp = Object.values(values[i]);
        console.log(dates, ltp);
        r = Math.floor(Math.random() * 255);
        g = Math.floor(Math.random() * 255);
        b = Math.floor(Math.random() * 255);
        dataset.push({
            fill: false,
            label: keys[i],
            lineTension: 0,
            backgroundColor: `rgb(${r}, ${g}, ${b})`,
            borderColor: `rgb(${r}, ${g}, ${b})`,
            data: ltp
        })
    }
    if (dataset.length != 0) {
        new Chart("myChart", {
            type: "line",
            data: {
            labels: dates,
            datasets: dataset
            },
            options: {
                responsive: true,
                legend: {display: true},
                scales: {
                    yAxes: [{
                        scaleLabel: {
                          display: true,
                          labelString: 'LTP',
                          fontColor: "red"
                        }
                      }],
                    xAxes: [{
                        scaleLabel: {
                          display: true,
                          labelString: 'Last 1 Month Dates',
                          fontColor: "red",
                        }
                      }]  
                    }     
            }
        })
        document.getElementById("div4").innerHTML = "";
    } 
    else {
        document.getElementById("div4").innerHTML = "Entered scripname doesn't exists.";
        const canvas = document.getElementById('myChart');
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        // document.getElementById("chart-container").innerHTML = "";
    }
}
