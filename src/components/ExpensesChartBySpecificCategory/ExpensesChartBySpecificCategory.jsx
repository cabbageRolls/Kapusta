import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';
import Styles from './ExpensesChartBySpecificCategory.module.css';
import './barRadius';

Chart.defaults.global.defaultFontColor = '#7a7974';
Chart.defaults.global.defaultFontFamily =
  "Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
Chart.defaults.global.defaultFontSize = 16;
Chart.defaults.global.defaultFontStyle = '500';

const mapper = json => {
  return json
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

const renderChart = ({ dom, data, isMobile = false }) => {
  const backgroundColor = bgColor(data.length, '#f67626cc', '#f5cfb8cc');
  const res = mapper(data);
  const ctx = document.getElementById(dom).getContext('2d');

  new Chart(ctx, {
    type: isMobile ? 'horizontalBar' : 'bar',
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
          const chartInstance = this.chart;
          const ctx = chartInstance.ctx;
          let data;
          ctx.font = Chart.helpers.fontString(
            Chart.defaults.global.defaultFontSize,
            Chart.defaults.global.defaultFontStyle,
            Chart.defaults.global.defaultFontFamily,
          );
          ctx.fillStyle = Chart.defaults.global.defaultFontColor;
          if (isMobile) {
            ctx.textAlign = 'left';
            chartInstance.aspectRatio =
              chartInstance.width < 500
                ? chartInstance.width < 400
                  ? chartInstance.width < 300
                    ? 0.3
                    : 0.4
                  : 0.5
                : 0.6;
            Chart.defaults.global.defaultFontSize = 14;
            this.data.datasets.forEach(function (dataset, i) {
              const meta = chartInstance.controller.getDatasetMeta(i);
              meta.data.forEach(function (bar, index) {
                data = `${costFormat(dataset.data[index]) + ' грн'}`;
                ctx.fillText(
                  bar._view.label,
                  20,
                  bar._model.y -
                    bar._view.height +
                    Chart.defaults.global.defaultFontSize,
                );
                ctx.fillText(
                  data,
                  bar._model.x -
                    (data.length * Chart.defaults.global.defaultFontSize) / 2 <
                    bar._view.label.length *
                      Chart.defaults.global.defaultFontSize
                    ? bar._view.label.length *
                        Chart.defaults.global.defaultFontSize
                    : bar._model.x -
                        (data.length * Chart.defaults.global.defaultFontSize) /
                          2,
                  bar._model.y -
                    bar._view.height +
                    Chart.defaults.global.defaultFontSize,
                );
              });
            });
          } else {
            ctx.textAlign = 'center';
            this.data.datasets.forEach(function (dataset, i) {
              var meta = chartInstance.controller.getDatasetMeta(i);
              meta.data.forEach(function (bar, index) {
                data = costFormat(dataset.data[index]) + ' грн';
                ctx.fillText(
                  data,
                  bar._model.x,
                  bar._model.y - Chart.defaults.global.defaultFontSize / 2,
                );
              });
            });
          }
        },
      },
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 10,
        },
      },
      maintainAspectRatio: true,
      scales: {
        xAxes: [
          {
            maxBarThickness: 40,
            barPercentage: 0.9,
            categoryPercentage: 0.55,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              display: true,
            },
          },
        ],
        yAxes: [
          {
            barPercentage: 0.9,
            categoryPercentage: 0.55,
            gridLines: {
              display: true,
              drawBorder: false,
            },
            display: true,
            ticks: {
              display: false,
              min: 0,
              stepSize: 1000,
            },
          },
        ],
      },
    },
  });
};

export default class ExpensesChartBySpecificCategory extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        cost: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
    isMobile: PropTypes.bool,
  };

  componentDidMount() {
    renderChart({
      dom: 'canvas',
      data: this.props.data,
      isMobile: this.props.isMobile,
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
