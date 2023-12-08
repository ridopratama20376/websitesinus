  // Fungsi untuk memperbarui grafik sinus
  function updateGraph() {
      // Mendapatkan nilai sudut dari input pengguna
      var angle = parseFloat(document.getElementById('angleInput').value);
      // Memastikan sudut yang dimasukkan adalah angka
      if (isNaN(angle)) {
          alert('Masukkan sudut yang valid.');
          return;
      }

      // Array untuk menyimpan nilai x dan y
      var xValues = [];
      var yValues = [];
      var step = 0.1;

      // Mengisi nilai x dan y
      for (var i = 0; i <= 360; i += step) {
          xValues.push(i);
          yValues.push(Math.sin((i + angle) * (Math.PI / 180)));
      }

      // Membuat objek trace untuk plot
      var trace = {
          x: xValues,
          y: yValues,
          type: 'scatter',
          mode: 'lines',
          name: 'Sinus'
      };

      // Konfigurasi layout plot dengan latar belakang putih dan transparan
      var layout = {
          title: 'Grafik Sinus',
          xaxis: {
              title: 'Sudut (derajat)'
          },
          yaxis: {
              title: 'Nilai Sinus'
          },
          plot_bgcolor: 'rgba(255, 255, 255, 0)', // Warna latar belakang transparan
          paper_bgcolor: 'rgba(255, 255, 255, 0)' // Warna kertas (border) transparan
      };

      // Membuat plot menggunakan Plotly
      Plotly.newPlot('sinusGraph', [trace], layout);
  }