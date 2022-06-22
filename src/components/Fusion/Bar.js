import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Medal Tally for 2017",
    subcaption: "Olympics vs Paralympics",
    plottooltext: "$label won <b>$dataValue</b> medals in $seriesName",
    theme: "fusion"
  },
  categories: [
    {
      category: [
        {
          label: "New York"
        },
        {
          label: "Manchester"
        },
        {
          label: "Mumbai"
        },
      ]
    }
  ],
  dataset: [
    {
      seriesname: "Olympics",
      data: [
        {
          value: "121"
        },
        {
          value: "67"
        },
        {
          value: "70"
        },
      ]
    },
    {
      seriesname: "Paralympics",
      data: [
        {
          value: "115"
        },
        {
          value: "147"
        },
        {
          value: "239"
        },
      ]
    },
    {
        seriesname: "Paralympics",
        data: [
          {
            value: "115"
          },
          {
            value: "147"
          },
          {
            value: "239"
          },
        ]
      }
  ]
};

const Bar = () => {
 
    return (
        <div>
            <ReactFusioncharts
            type="msbar3d"
            width="50%"
            height="100%"
            dataFormat="JSON"
            dataSource={dataSource}/>
        </div>
      
    );
}

export default Bar
