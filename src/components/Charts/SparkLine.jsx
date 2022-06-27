import React from 'react'
import {SparklineComponent, Inject, SparklineTooltip} from '@syncfusion/ej2-react-charts';


const SparkLine = ({currentColor, id, type, height, width, data, color}) => {
  return (
    <SparklineComponent
    id={id}
    height={height}
    width={width}
    lineWidth={1}
    type={type}
    valueType='Numeric'
    fill={color}
    border={{color:currentColor, width:2}}
    dataSource={data}
    tooltipSettings={{
      visible:true, 
      format:'${x} : data ${yval}',
      trackLineSettings:{
        visible:true,
        color:'#fc5070',
        width:2
      }
    }}

      xName='x' yName='yval'
    
      
    >
       <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  )
}

export default SparkLine