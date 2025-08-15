const ctxTemp = document.getElementById('tempChart').getContext('2d');

// Creando gráfico de temperatura
const tempChart = new Chart(ctxTemp, {
    type: 'line',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [{
            label: 'Temperatura Máxima', // Datos para la temperatura máxima
            data: [30, 32, 34, 35, 37, 36, 38, 39, 34, 33, 31, 30],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 1
        }, {
            label: 'Temperatura Mínima', // Datos para la temperatura mínima
            data: [15, 16, 17, 18, 19, 20, 21, 20, 18, 17, 16, 15],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctxPrecip = document.getElementById('precipChart').getContext('2d');

// Creando gráfico de precipitaciones
const precipChart = new Chart(ctxPrecip, {
    type: 'bar',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [{
            label: 'Precipitaciones (mm)', // Datos de precipitaciones en milímetros
            data: [70, 60, 80, 100, 150, 200, 80, 40, 60, 80, 90, 70],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});