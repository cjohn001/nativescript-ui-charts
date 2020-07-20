import { isAndroid } from '@nativescript/core';
import { optionsBuilder } from '../helpers/helpers';

export function plotOptionsHandler(plotOptionsOptions) {
  const plotOptions = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIPlotOptions() : new HIPlotOptions();

  const plotOptionsSchema = {
    area: 'HIArea',
    arearange: 'HIArearange',
    areaspline: 'HIAreaspline',
    areasplinerange: 'HIAreasplinerange',
    bar: 'HIBar',
    bellcurve: 'HIBellcurve',
    boxplot: 'HIBoxplot',
    bubble: 'HIBubble',
    bullet: 'HIBullet',
    column: 'HIColumn',
    columnpyramid: 'HIColumnpyramid',
    columnrange: 'HIColumnrange',
    cylinder: 'HICylinder',
    dependencywheel: 'HIDependencywheel',
    dumbbell: 'HIDumbbell',
    errorbar: 'HIErrorbar',
    funnel: 'HIFunnel',
    funnel3d: 'HIFunnel3d',
    gauge: 'HIGauge',
    heatmap: 'HIHeatmap',
    histogram: 'HIHistogram',
    item: 'HIItem',
    line: 'HILine',
    lollipop: 'HILollipop',
    networkgraph: 'HINetworkgraph',
    organization: 'HIOrganization',
    packedbubble: 'HIPackedbubble',
    pareto: 'HIPareto',
    pie: 'HIPie',
    polygon: 'HIPolygon',
    pyramid: 'HIPyramid',
    pyramid3d: 'HIPyramid3d',
    sankey: 'HISankey',
    scatter: 'HIScatter',
    scatter3d: 'HIScatter3d',
    series: 'HISeries',
    solidgauge: 'HISolidgauge',
    spline: 'HISpline',
    streamgraph: 'HIStreamgraph',
    sunburst: 'HISunburst',
    tilemap: 'HITilemap',
    timeline: 'HITimeline',
    treemap: 'HITreemap',
    variablepie: 'HIVariablepie',
    variwide: 'HIVariwide',
    vector: 'HIVector',
    venn: 'HIVenn',
    waterfall: 'HIWaterfall',
    windbarb: 'HIWindbarb',
    wordcloud: 'HIWordcloud',
    xrange: 'HIXrange'
  };

  return optionsBuilder(plotOptionsSchema, plotOptionsOptions, plotOptions);
}
