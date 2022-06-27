import React from 'react'
// import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries, Inject, AccumulationDataLabel, AccumulationChart, AccumulationLegend} from '@syncfusion/ej2-react-charts'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject, AccumulationTooltip } from '@syncfusion/ej2-react-charts';

import { pieChartData } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

const PieChart = () => {
  const {currentMode} = useStateContext
  return (
    <AccumulationChartComponent
      id='pie-chart'
      height='full'
      legendSettings={{visible:true, background:'white'}}
      background={currentMode==='Dark'? '#33373E': '#fff'}
      tooltip={{enable:true}}
    >
      {/* <Inject services={[PieSeries, AccumulationDataLabel, AccumulationLegend]} /> */}
      <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />

      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective 
          dataSource= {pieChartData}
          name='Sale'
          xName='x'
          yName='y'
          radius="70%"
          explode
          explodeOffset="10%"
          explodeIndex={2}
          startAngle={0}
          endAngle={360}
          // innerRadius='30'
          dataLabel={{
            visible: true,
            name: 'text',
            position: 'Inside',
            font: {
              fontWeight: '600',
              color: '#fff',
            },
          }}
        />
      </AccumulationSeriesCollectionDirective>
    
    </AccumulationChartComponent>
  )
}

export default PieChart