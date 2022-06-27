import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, ColumnSeries, Tooltip, Category, DataLabel} from '@syncfusion/ej2-react-charts'
import { barCustomSeries, barPrimaryYAxis, barPrimaryXAxis} from '../../data/dummy.js'
import { useStateContext } from '../../contexts/ContextProvider.js'

const BarChart = () => {
    const {currentMode} = useStateContext();
  return (
    <ChartComponent
      id='charts'
      height='420px'
      primaryXAxis={barPrimaryXAxis}
      primaryYAxis={barPrimaryYAxis}
      chartArea={{border: {width:0}}}

      background={currentMode==='Dark'? '#33373E': '#fff'}
    >
       <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />

      <SeriesCollectionDirective 

      >
        {barCustomSeries.map((item, index)=> 
          <SeriesDirective key={index} {...item}/>  
        )}

      </SeriesCollectionDirective>
    </ChartComponent>

  )
}

export default BarChart