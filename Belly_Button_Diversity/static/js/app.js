function buildMetadata(sample) {

    // @TODO: Complete the following function that builds the metadata panel
  
  // Use `d3.json` to fetch the metadata for a sample
  d3.json(`/metadata/${sample}`).then( (metadata) => {
    console.log(metadata)
    // Use d3 to select the panel with id of `#sample-metadata`
    var metadataCard = d3.select("#sample-metadata");

    // Use `.html("")` to clear any existing metadata
    metadataCard.html("");

    // Use `Object.entries` to add each key and value pair to the card
    for ([key, value] of Object.entries(metadata)) {
      console.log(`${key}: ${value}`);

      // append new 'p' element with text showing item of metadata
      metadataCard.append("p").text(`${key}: ${value}`);
    }
  
    // BONUS: Build the Gauge Chart
    buildGauge(metadata.WFREQ);
  });
}
  
  function buildCharts(sample) {
  
    // Use `d3.json` to fetch the sample data for the plots
    d3.json(`/samples/${sample}`).then( (data) => {
      console.log(data)
      
      // Build a Bubble Chart using the sample data
      //-------------------------------------------
      var traceBubble = {
        type: 'scatter',
        x: data.otu_ids,
        y: data.sample_values,
        mode: 'markers',
        marker: {
          opacity: 0.6,
          size: data.sample_values,
          color: data.otu_ids,
          text: data.otu_labels
        }
      };

      var dataBubble = [traceBubble];

      var layoutBubble = {
        title: '<b>Prevalence of Organisms</b>',
        xaxis: {
          title: 'OTU ID'
        }
      };

      Plotly.newPlot('bubble', dataBubble, layoutBubble);

      // Build a Pie Chart
      // --------------------------
      // Step one: convert data object into JSON
      var newData = [];

      for (i=0; i < data.otu_ids.length; i++) {
        
        // create temporary object storing id, label, and value
        var tempObject = {
          id: data.otu_ids[i],
          label: data.otu_labels[i],
          value: data.sample_values[i]
        };
        // push to newData
        newData.push(tempObject);
      }
      console.log(newData);

      // sort newData by sample values (descending)
      newData.sort(function(a, b) {
        return parseFloat(b.value) - parseFloat(a.value);
      });
      
      // use slice() to grab the top 10
      newData = newData.slice(0, 10);

      var tracePie = {
        type: 'pie',
        labels: newData.map( row => row.id ),
        values: newData.map( row => row.value ),
        hovertext: newData.map( row => row.label )
      };

      var dataPie = [tracePie];

      var layoutPie = {
        title: "<b>Top 10 Organisms</b>",
      };

      Plotly.newPlot('pie', dataPie, layoutPie);
    });
  }
  
  function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
  
    // Use the list of sample names to populate the select options
    d3.json("/names").then((sampleNames) => {
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  
      // Use the first sample from the list to build the initial plots
      const firstSample = sampleNames[0];
      buildCharts(firstSample);
      buildMetadata(firstSample);
    });
  }
  
  function optionChanged(newSample) {
    // Fetch new data each time a new sample is selected
    buildCharts(newSample);
    buildMetadata(newSample);
  }
  
  // Initialize the dashboard
  init();
  