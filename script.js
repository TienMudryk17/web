/*var barChartOptions = {
    series: [{
        data: [10, 8, 6, 4, 2],
        name: "Productos",
    }],
    chart: {
        type: "bar",
        background: "transparent",
        height: 350,
        toolbar: {
            show: false,
        },
    },
    colors: [
        "#2998ff",
        "#d50680",
        "#1e9872",
        "#ff9800",
        "#5832b3",
    ],
    plotOptions: {
        bar: {
            distributed: true,
            borderRadius: 4,
            horizontal: false,
            columnWidth: "40%",
        }
    },
    dataLabels: {
        enabled: false,
    },
    fill: {
        opacity: 1,
    },
    grid: {
        borderColor: "#55596e",
        yaxis: {
            lines: {
                show: true,
            },
        },
        xaxis: {
            lines: {
                show: true,
            },
        },
    },
    legend: {
        labels: {
            colors: "#f5f7ff",
        },
        show: true,
        position: "top",
    },
    stroke: {
        colors: ["transparent"],
        show: true,
        width: 2
    },
    tooltip: {
        shared: true,
        intersect: false,
        theme: "dark",
    },
    xaxis: {
        categories: ["Teclado", "Laptop", "Monitor", "Mouse", "Parlante"],
        title: {
            style: {
                color: "#f5f7ff",
            },
        },
        axisBorder: {
            show: true,
            color: "#55596e",
        },
        axisTicks: {
            show: true,
            color: "#55596e",
        },
        labels: {
            style: {
                colors: "#f5f7ff",
            },
        },
    },
    yaxis: {
        title: {
            text: "Total",
            style: {
                color: "#f5f7ff",
            },
        },
        axisBorder: {
            color: "#55596e",
            show: true,
        },
        axisTicks: {
            color: "#55596e",
            show: true,
        },
        labels: {
            style: {
                colors: "#f5f7ff",
            },
        },
    }
};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();
*/

// AREA CHART
var areaChartOptions = {
    series: [{
        name: "Ordenes de Compra",
        data: [31, 40, 28, 51, 42, 109, 100],
    }, {
        name: "Ordenes de venta",
        data: [11, 32, 45, 32, 34, 52, 41],
    }],
    chart: {
        type: "area",
        background: "transparent",
        height: 350,
        stacked: false,
        toolbar: {
            show: false,
        },
    },
    colors: ["#00ab57", "#d50000"],
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul"],
    dataLabels: {
        enabled: false,
    },
    fill: {
        gradient: {
            opacityFrom: 0.4,
            opacityTo: 0.1,
            shadeIntensity: 1,
            stops: [0, 100],
            type: "vertical",
        },
        type: "gradient",
    },
    grid: {
        borderColor: "#55596e",
        yaxis: {
            lines: {
                show: true,
            },
        },
        xaxis: {
            lines: {
                show: true,
            },
        },
    },
    legend: {
        labels: {
            colors: "#f5f7ff",
        },
        show: true,
        position: "top",
    },
    markers: {
        size: 6,
        strokeColors: "#1b2635",
        strokeWidth: 3,
    },
    stroke: {
        curve: "smooth",
    },
    xaxis: {
        axisBorder: {
            color: "#55596e",
            show: true,
        },
        axisTicks: {
            color: "#55596e",
            show: true,
        },
        labels: {
            offsetY: 5,
            style: {
                colors: "#f5f7ff",
            },
        },
    },
    yaxis: [{
        title: {
            text: "Ordenes de compra",
            style: {
                color: "#f5f7ff",
            },
        },
        labels: {
            style: {
                colors: ["#f5f7ff"],
            },
        },
    }, {
        opposite: true,
        title: {
            text: "Ordenes de venta",
            style: {
                color: "#f5f7ff",
            },
        },
        labels: {
            style: {
                colors: ["#f5f7ff"],
            },
        },
    }, ],
    tooltip: {
        shared: true,
        intersect: false,
        theme: "dark",
    }
};

var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
areaChart.render();

// tạo ngẫu nhiên + đổi màu ngẫu nhiên
function getColorBasedOnTemperatureValue(value, min, max) {
    const range = max - min;
    const percent = value / range;

    // Tùy thuộc vào percent, bạn có thể xác định màu nền tương ứng.
    if (percent < 0.3) {
        return "#009298"; // <18 xanh dương
    } else if (percent < 0.416) {
        return "#99D1D3"; // <25 xanh dương nhạt
    } else if (percent < 0.5) {
        return "#5BBD2B"; // <30 xanh lá
    } else if (percent < 0.583) {
        return "#F9F400"; // < 35 vàng
    } else if (percent < 0.65) {
        return "#EB7153"; // <39 cam
    } else if (percent < 0.75) {
        return "#E54646"; // <45 đỏ hồng
    } else if (percent < 0.833) {
        return "#8B0016"; // < 50 đỏ đậm
    } else {
        return "#A2007C"; // 51-60 tím
    }
}

function getColorBasedOnHumidityValue(value, min, max) {
    const range = max - min;
    const percent = (value - min) / range;

    // Tùy thuộc vào percent, bạn có thể xác định màu nền tương ứng.
    if (percent < 0.1) {
        return "red";
    } else if (percent < 0.5) {
        return "yellow";
    } else {
        return "green";
    }
}

function getColorBasedOnLightValue(value, min, max) {
    const range = max - min;
    const percent = (value - min) / range;

    // Tùy thuộc vào percent, bạn có thể xác định màu nền tương ứng.
    if (percent < 0.3) {
        return "#009298";
    } else if (percent < 0.416) {
        return "#00CDCD";
    } else if (percent < 0.5) {
        return "#5BBD2B";
    } else if (percent < 0.583) {
        return "#F9F400";
    } else if (percent < 0.65) {
        return "#EB7153";
    } else if (percent < 0.75) {
        return "#EE0000";
    } else if (percent < 0.833) {
        return "#DC143C";
    } else {
        return "#A2007C";
    }
}

function updateEnvironment() {
    // Tạo giá trị ngẫu nhiên cho nhiệt độ, độ ẩm và ánh sáng.
    const minTemperature = -10;
    const maxTemperature = 50;
    const randomTemperature = Math.floor(Math.random() * (maxTemperature - minTemperature + 1)) + minTemperature;

    const minHumidity = 40;
    const maxHumidity = 100;
    const randomHumidity = Math.floor(Math.random() * (maxHumidity - minHumidity + 1)) + minHumidity;

    const minLight = 100;
    const maxLight = 10000;
    const randomLight = Math.floor(Math.random() * (maxLight - minLight + 1)) + minLight;

    // Cập nhật giá trị vào thẻ HTML.
    const temperatureValueElement = document.getElementById("temperatureValue");
    const humidityValueElement = document.getElementById("humidityValue");
    const lightValueElement = document.getElementById("lightValue");

    temperatureValueElement.textContent = `${randomTemperature} °C`;
    humidityValueElement.textContent = `${randomHumidity} %`;
    lightValueElement.textContent = `${randomLight} lux`;

    // Xác định màu nền dựa trên giá trị và áp dụng màu nền cho từng cột.
    const temperatureColumnElement = document.getElementById("temperatureColumn");
    const humidityColumnElement = document.getElementById("humidityColumn");
    const lightColumnElement = document.getElementById("lightColumn");

    temperatureColumnElement.style.backgroundColor = getColorBasedOnTemperatureValue(randomTemperature, minTemperature, maxTemperature);
    humidityColumnElement.style.backgroundColor = getColorBasedOnHumidityValue(randomHumidity, minHumidity, maxHumidity);
    lightColumnElement.style.backgroundColor = getColorBasedOnLightValue(randomLight, minLight, maxLight);
}

// Gọi hàm cập nhật ban đầu và sau mỗi 1 giây.
updateEnvironment();
setInterval(updateEnvironment, 1000); // Cập nhật sau mỗi 1 giây.

// Đồ thị
const canvas = document.getElementById('sensorChart');
const ctx = canvas.getContext('2d');

// Tạo biểu đồ đa dạng để hiển thị nhiệt độ, độ ẩm và ánh sáng
const sensorChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Temperature (°C)',
            data: [],
            backgroundColor: 'red',
            borderColor: '#A52A2A',
            borderWidth: 2,
            fill: false
        }, {
            label: 'Humidity (%)',
            backgroundColor: '#556b2f',
            data: [],
            borderColor: 'green',
            borderWidth: 2,
            fill: false
        }, {
            label: 'Light Intensity (Lux)',
            backgroundColor: 'yellow',
            data: [],
            borderColor: 'orange',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: false,
        scales: {
            x: {
                type: 'category',
                position: 'bottom'
            },
            y: {
                beginAtZero: true,
                suggestedMax: 1000
            }
        }
    }
});

function updateSensorData() {
    // Tạo các giá trị ngẫu nhiên cho nhiệt độ, độ ẩm và ánh sáng
    const minTemperature = -20;
    const maxTemperature = 40;
    const randomTemperature = Math.floor(Math.random() * (maxTemperature - minTemperature + 1)) + minTemperature;

    const minHumidity = 0;
    const maxHumidity = 100;
    const randomHumidity = Math.floor(Math.random() * (maxHumidity - minHumidity + 1)) + minHumidity;

    const minLightIntensity = 0;
    const maxLightIntensity = 1000;
    const randomLightIntensity = Math.floor(Math.random() * (maxLightIntensity - minLightIntensity + 1)) + minLightIntensity;

    // Lấy thời gian hiện tại để làm nhãn trên trục x
    const currentTime = new Date().toLocaleTimeString();

    // Thêm giá trị mới vào các mảng dữ liệu
    sensorChart.data.labels.push(currentTime);
    sensorChart.data.datasets[0].data.push(randomTemperature);
    sensorChart.data.datasets[1].data.push(randomHumidity);
    sensorChart.data.datasets[2].data.push(randomLightIntensity);

    // Giới hạn số lượng điểm trên đồ thị (nếu cần)
    const maxDataPoints = 10;
    if (sensorChart.data.labels.length > maxDataPoints) {
        sensorChart.data.labels.shift();
        sensorChart.data.datasets[0].data.shift();
        sensorChart.data.datasets[1].data.shift();
        sensorChart.data.datasets[2].data.shift();
    }

    // Cập nhật biểu đồ
    sensorChart.update();
}

// Cập nhật dữ liệu cả 3 loại sensor ban đầu
updateSensorData();

// Cập nhật dữ liệu sau mỗi 1 giây
setInterval(updateSensorData, 1000);