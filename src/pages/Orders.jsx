import React from 'react'
import {GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, Toolbar} from '@syncfusion/ej2-react-grids'
import {ordersData, contextMenuItems, ordersGrid} from '../data/dummy.js'
import {Header} from '../components'
const Orders = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header title="Orders" category="Page" /> 

      <GridComponent 
        id='gridcomp'
        dataSource={ordersData}
        allowPaging
        allowSorting = {true} 
        // toolbar={['PdfExport', 'ExcelExport']}
        allowFiltering
        // // allowPdfExport= 'true'
        // // allowExcelExport= 'true'
        // editSettings={{
        //   allowExcelExport: true,
        //   allowPdfExport: true,
        // }}
      >
        <ColumnsDirective>
          {ordersGrid.map((item,index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Orders