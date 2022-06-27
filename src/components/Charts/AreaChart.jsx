import { ChartComponent, SplineAreaSeries, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend } from '@syncfusion/ej2-react-charts'
import { areaCustomSeries,areaPrimaryYAxis, areaPrimaryXAxis} from '../../data/dummy.js'
import { useStateContext } from '../../contexts/ContextProvider.js'

const AreaChart = () => {
    const {currentMode} = useStateContext();
  return (
    <ChartComponent
      id='area-chart'
      height='420px'
      primaryXAxis={areaPrimaryXAxis}
      primaryYAxis={areaPrimaryYAxis}
      chartArea={{border: {width:0}}}
      tooltip={{enable: true}}
      background={currentMode==='Dark'? '#33373E': '#fff'}
    >
      <Inject services={[SplineAreaSeries, DateTime, Legend ]} />

      <SeriesCollectionDirective 

      >
        {areaCustomSeries.map((item, index)=> 
          <SeriesDirective key={index} {...item}/>  
        )}

      </SeriesCollectionDirective>
    </ChartComponent>

  )
}

export default AreaChart