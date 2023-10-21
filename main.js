function updateTemperature() {
    // Tạo giá trị ngẫu nhiên cho nhiệt độ trong khoảng -10 đến 40 độ Celsius
    var temperature = Math.floor(Math.random() * 51) - 10; // Số nguyên từ -10 đến 40

    // Hiển thị giá trị nhiệt độ trên trang web
    document.getElementById("temperature").textContent = temperature;
}

// Cập nhật nhiệt độ mỗi 5 giây
setInterval(updateTemperature, 5000);

// Gọi hàm cập nhật nhiệt độ ban đầu
updateTemperature();

function updateHumidity() {
    // Tạo giá trị ngẫu nhiên cho nhiệt độ trong khoảng 50 đến 100 độ Celsius
    var humidity = Math.floor(Math.random() * 51) + 50; // Số nguyên từ 50 đến 100

    // Hiển thị giá trị nhiệt độ trên trang web
    document.getElementById("humidity").textContent = humidity;
}

// Cập nhật nhiệt độ mỗi 5 giây
setInterval(updateHumidity, 5000);

// Gọi hàm cập nhật nhiệt độ ban đầu
updateHumidity();

function updateLight() {
    // Tạo giá trị ngẫu nhiên cho nhiệt độ trong khoảng 100 đến 1000 độ Celsius
    var light = Math.floor(Math.random() * 901) + 100; // Số nguyên từ 100 đến 1000

    // Hiển thị giá trị nhiệt độ trên trang web
    document.getElementById("light").textContent = light;
}

// Cập nhật nhiệt độ mỗi 5 giây
setInterval(updateLight, 5000);

// Gọi hàm cập nhật nhiệt độ ban đầu
updateLight();
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

// Cập nhật dữ liệu sau mỗi 5 giây
setInterval(updateSensorData, 5000);

//đổi màu nhiệt độ
const temperatureRanges = [{
        min: -10,
        max: 0,
        color: '#E0FFFF'
    }, {
        min: 1,
        max: 10,
        color: '#54FF9F'
    }, {
        min: 11,
        max: 15,
        color: '#33cc33'
    },

    {
        min: 16,
        max: 20,
        color: '#76EE00'
    }, {
        min: 21,
        max: 25,
        color: '#FFFF00'
    }, {
        min: 26,
        max: 30,
        color: '#EEAD0E'
    }, {
        min: 31,
        max: 35,
        color: '#CD2626'
    }, {
        min: 36,
        max: 40,
        color: '#8B3A3A'
    },
];

const temperatureElement = document.getElementById('temperature');
const temperatureContainer = document.getElementById('temperature-container');

function updateTemperatureBackgroundColor(temperature) {
    for (const range of temperatureRanges) {
        if (temperature >= range.min && temperature <= range.max) {
            temperatureContainer.style.backgroundColor = range.color;
            return;
        }
    }
    // Nếu không tìm thấy khoảng nào phù hợp, sử dụng mặc định
    temperatureContainer.style.backgroundColor = '#f0f0f0';
}

function generateRandomTemperature() {
    // Tạo một giá trị nhiệt độ ngẫu nhiên từ -10 đến 40 độ C
    const minTemperature = -10;
    const maxTemperature = 40;
    const randomTemperature = Math.floor(Math.random() * (maxTemperature - minTemperature + 1)) + minTemperature;

    // Cập nhật giá trị nhiệt độ và màu nền trên trang
    temperatureElement.textContent = randomTemperature;
    updateTemperatureBackgroundColor(randomTemperature);
}

// Gọi hàm ban đầu để hiển thị giá trị ban đầu
generateRandomTemperature();

// Sau mỗi 5 giây, gọi hàm để cập nhật giá trị nhiệt độ và màu nền mới
setInterval(generateRandomTemperature, 5000); // 5000 milliseconds = 5 seconds

//Đổi màu độ ẩm
const humidityRanges = [{
        min: 50,
        max: 60,
        color: '#B0E2FF'
    }, {
        min: 61,
        max: 70,
        color: '#54FF9F'
    }, {
        min: 71,
        max: 80,
        color: '#00FFFF'
    },

    {
        min: 81,
        max: 90,
        color: '#0000FF'
    }, {
        min: 91,
        max: 100,
        color: '#0000CD'
    },
];

const humidityElement = document.getElementById('humidity');
const humidityContainer = document.getElementById('humidity-container');

function updateHumidityBackgroundColor(humidity) {
    for (const range of humidityRanges) {
        if (humidity >= range.min && humidity <= range.max) {
            humidityContainer.style.backgroundColor = range.color;
            return;
        }
    }
    // Nếu không tìm thấy khoảng nào phù hợp, sử dụng mặc định
    humidityContainer.style.backgroundColor = '#f0f0f0';
}

function generateRandomHumidity() {
    // Tạo một giá trị độ ẩm ngẫu nhiên từ 50% đến 100%
    const minHumidity = 50;
    const maxHumidity = 100;
    const randomHumidity = Math.floor(Math.random() * (maxHumidity - minHumidity + 1)) + minHumidity;

    // Cập nhật giá trị độ ẩm và màu nền trên trang
    humidityElement.textContent = randomHumidity;
    updateHumidityBackgroundColor(randomHumidity);
}

// Gọi hàm ban đầu để hiển thị giá trị ban đầu
generateRandomHumidity();

// Sau mỗi 5 giây, gọi hàm để cập nhật giá trị độ ẩm và màu nền mới
setInterval(generateRandomHumidity, 5000); // 5000 milliseconds = 5 seconds


//Đổi màu ánh sáng
const lightRanges = [{
        min: 100,
        max: 300,
        color: '#EEE8AA'
    },
    {
        min: 301,
        max: 500,
        color: '#FFDEAD'
    },
    {
        min: 501,
        max: 700,
        color: '#F4A460'
    },
    {
        min: 701,
        max: 800,
        color: '#FFD700'
    },
    {
        min: 801,
        max: 900,
        color: '#FFA500'
    },
    {
        min: 901,
        max: 1000,
        color: '#FFFF00'
    },
];

const lightElement = document.getElementById('light');
const lightContainer = document.getElementById('light-container');

function updateLightBackgroundColor(light) {
    for (const range of lightRanges) {
        if (light >= range.min && light <= range.max) {
            lightContainer.style.backgroundColor = range.color;
            return;
        }
    }
    // Nếu không tìm thấy khoảng nào phù hợp, sử dụng mặc định
    lightContainer.style.backgroundColor = '#f0f0f0';
}

function generateRandomLight() {
    // Tạo một giá trị độ ẩm ngẫu nhiên từ 50% đến 100%
    const minLight = 100;
    const maxLight = 1000;
    const randomLight = Math.floor(Math.random() * (maxLight - minLight + 1)) + minLight;

    // Cập nhật giá trị độ ẩm và màu nền trên trang
    lightElement.textContent = randomLight;
    updateLightBackgroundColor(randomLight);
}

// Gọi hàm ban đầu để hiển thị giá trị ban đầu
generateRandomLight();

// Sau mỗi 5 giây, gọi hàm để cập nhật giá trị độ ẩm và màu nền mới
setInterval(generateRandomLight, 5000); // 5000 milliseconds = 5 seconds