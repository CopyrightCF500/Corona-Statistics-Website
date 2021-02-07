google.charts.load('current', {
    'packages':['geochart'],
    'mapsApiKey': 'AIzaSyBdyguiJCHnuYwggUusE7ipwA7bK0MhWRc'
});
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
    var data = google.visualization.arrayToDataTable([
        ['Provinces', 'Popularity'],
        ['DE-SH', 100],
        ['DE-MV', 200],
        ['DE-BE', 300],
        ['DE-ST', 400],
        ['DE-BB', 500],
        ['DE-SN', 600],
        ['DE-TH', 700],
        ['DE-HE', 800],
        ['DE-BY', 900],
        ['DE-BW', 1100],
        ['DE-SL', 1200],
        ['DE-RP', 1300],
        ['DE-NW', 1400],
        ['DE-NI', 1500],
        ['DE-HB', 1600],
        ['DE-HH', 1700],
    ]);

    var options = {
        region: 'DE',
        //displayMode: 'regions',
        colorAxis: {colors: ['green', 'blue']},
        resolution:'provinces'
    };

    var geochart = new google.visualization.GeoChart(
        document.getElementById('regions_div'));
    geochart.draw(data, options,  {width: 556, height: 347});
}