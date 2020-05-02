import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';
import Styles from './ExpensesChartBySpecificCategory.module.css';
import './barRadius';
const mapper = async json => {
  return await JSON.parse(JSON.stringify(json))
    .sort((a, b) => b.cost - a.cost)
    .reduce(
      (acc, product) => {
        acc.data.push(product.cost);
        acc.labels.push(product.name);
        return acc;
      },
      { data: [], labels: [] },
    );
};
const bgColor = (lenght, firstColor, secondColor) => {
  let backgroundColor = [];
  for (let i = 1; i <= lenght; i++) {
    if (i % 3 === 1) {
      backgroundColor.push(firstColor);
    } else {
      backgroundColor.push(secondColor);
    }
  }
  return backgroundColor;
};
const costFormat = cost =>
  cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

Chart.defaults.global.defaultFontColor = '#7a7974';
Chart.defaults.global.defaultFontFamily =
  "Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
Chart.defaults.global.defaultFontSize = 16;
Chart.defaults.global.defaultFontStyle = '500';

export default class ExpensesChartBySpecificCategory extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        cost: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  };
  componentDidMount() {
    const backgroundColor = bgColor(
      this.props.data.length,
      '#f67626cc',
      '#f5cfb8cc',
    );
    mapper(this.props.data).then(res => {
      const ctx = document.getElementById('canvas').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: res.labels,
          datasets: [
            {
              data: res.data,
              datalabels: {
                display: true,
                formatter: function (context, chart_obj) {
                  return 'chart_obj.dataIndex';
                },
              },
              backgroundColor,
            },
          ],
        },
        options: {
          hover: {
            animationDuration: 0,
          },
          animation: {
            duration: 1,
            onComplete: function () {
              var chartInstance = this.chart,
                ctx = chartInstance.ctx;
              ctx.font = Chart.helpers.fontString(
                Chart.defaults.global.defaultFontSize,
                Chart.defaults.global.defaultFontStyle,
                Chart.defaults.global.defaultFontFamily,
              );

              ctx.fillStyle = Chart.defaults.global.defaultFontColor;
              ctx.textAlign = 'center';
              ctx.textBaseline = 'bottom';

              this.data.datasets.forEach(function (dataset, i) {
                var meta = chartInstance.controller.getDatasetMeta(i);
                meta.data.forEach(function (bar, index) {
                  var data = costFormat(dataset.data[index]) + ' грн';
                  ctx.fillText(data, bar._model.x, bar._model.y - 5);
                });
              });
            },
          },
          legend: {
            display: false,
          },
          tooltips: {
            enabled: false,
          },
          scales: {
            responsive: false,
            xAxes: [
              {
                gridLines: {
                  display: false,
                  drawBorder: false,
                },
                ticks: {
                  // fontSize: 16,
                  display: true,
                },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  display: true,
                  // color: '#F1F1F1',
                  drawBorder: false,
                },
                display: true,
                ticks: {
                  // fontSize: 16,
                  display: false,
                  min: 0,
                  stepSize: 1000,
                },
              },
            ],
          },
        },
      });
    });
  }

  render() {
    return (
      <section className={Styles.chart}>
        <canvas id="canvas"></canvas>
      </section>
    );
  }
}
