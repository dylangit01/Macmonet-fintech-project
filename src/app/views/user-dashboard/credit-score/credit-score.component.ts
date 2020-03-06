import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import {echartStyles} from "../../../shared/echart-styles";
import {SharedAnimations} from "../../../shared/animations/shared-animations";


@Component({
  selector: 'app-credit-score',
  templateUrl: './credit-score.component.html',
  styleUrls: ['./credit-score.component.scss'],
  animations: [SharedAnimations]
})
export class CreditScoreComponent implements OnInit {
  chartOption1: EChartOption;
  chartOption2: EChartOption;
  chartPie1: EChartOption;

  constructor() { }

  ngOnInit() {
    this.chartOption1 = {...echartStyles.lineFullWidth, ...{
        series: [{
          data: [30, 40, 20, 50, 40, 80, 90],
          ...echartStyles.smoothLine,
          markArea: {
            label: {
              show: true
            }
          },
          areaStyle: {
            color: 'rgba(102, 51, 153, .2)',
            origin: 'start'
          },
          lineStyle: {
            color: '#663399',
          },
          itemStyle: {
            color: '#663399'
          }
        }]
      }};
    this.chartOption2 = {...echartStyles.lineFullWidth, ...{
        series: [{
          data: [30, 10, 40, 10, 40, 20, 90],
          ...echartStyles.smoothLine,
          markArea: {
            label: {
              show: true
            }
          },
          areaStyle: {
            color: 'rgba(255, 152, 0, 0.2)',
            origin: 'start'
          },
          lineStyle: {
            color: '#ff9800'
          },
          itemStyle: {
            color: '#ff9800'
          }
        }]
      }};
    // this.chartPie1 = {
    //   ...echartStyles.defaultOptions, ...{
    //     legend: {
    //       show: true,
    //       bottom: 0,
    //     },
    //     series: [{
    //       type: 'gauge',
    //       ...echartStyles.pieRing,
    //
    //       label: echartStyles.pieLabelCenterHover,
    //       data: [{
    //         name: '1Very Good',
    //         value: 800,
    //         itemStyle: {
    //           color: '#4CAF50',
    //         }
    //       }, {
    //         name: '',
    //         value: 100,
    //         itemStyle: {
    //           color: 'transparent',
    //         }
    //       }]
    //     }]
    //   }
    // };

    this.chartPie1 = {

      tooltip : {
        formatter: "{a} <br/>{c} {b}"
      },
      toolbox: {
        show : true,
        feature : {
          mark : {show: true},
          // restore : {show: true},
          // saveAsImage : {show: true}
        }
      },
      series : [
        {
          name:'Credit Score',
          type:'gauge',
          min:300,
          max:900,
          splitNumber:600,
          radius: '100%',
          axisLine: {            // 坐标轴线
            lineStyle: {       // 属性lineStyle控制线条样式
              color: [
                [0.433, 'red'],[0.599, '#ffc107'],[0.708, '#f6f078'],[0.765, 'greenyellow'],[1, '#4CAF50'],
              ],
              width: 20,
              shadowColor : '#fff', //默认透明
              shadowBlur: 10
            }
          },
          axisLabel: {            // 坐标轴小标记
            // distance: -60,     // 不太好看...
            textStyle: {       // 属性lineStyle控制线条样式
              fontWeight: 'bolder',
              color: '#fff',
              shadowColor : '#fff', //默认透明
              shadowBlur: 10
            }
          },
          axisTick: {            // 坐标轴小标记
            length :15,        // 属性length控制线长
            lineStyle: {       // 属性lineStyle控制线条样式
              color: 'transparent',
              shadowColor : 'transparent', //默认透明
              shadowBlur: 10
            }
          },
          splitLine: {           // 分隔线
            show:false,         //important!
            length :25,         // 属性length控制线长
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
              width:3,
              color: '#fff',
              shadowColor : '#fff', //默认透明
              shadowBlur: 10
            }
          },
          pointer: {           // 分隔线
            shadowColor : '#fff', //默认透明
            shadowBlur: 5
          },
          title : {
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontWeight: 'bolder',
              fontSize: 20,
              fontStyle: 'italic',
              color: '#6b48ff',
              shadowColor : 'blue', //默认透明
              shadowBlur: 10
            }
          },
          detail : {
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: 'transparent',
            shadowColor : '#eee', //默认透明
            shadowBlur: 5,
            offsetCenter: [0, '70%'],       // x, y，单位px
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontWeight: 'bolder',
              color: '#39375b'
            }
          },
          data:[{value: 771, name: 'Excellent'}]
        },
      ]
    };

    // setInterval(function (){
    //   this.chartPie1.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
    //   this.chartPie1.series[1].data[0].value = (Math.random()*7).toFixed(2) - 0;
    //   this.chartPie1.series[2].data[0].value = (Math.random()*2).toFixed(2) - 0;
    //   this.chartPie1.series[3].data[0].value = (Math.random()*2).toFixed(2) - 0;
    //   myChart.setOption(this.chartPie1);
    // },2000)
  }

}
