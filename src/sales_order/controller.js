import SoService from './service'
import DoService from '../delivery_order/service';

const SoController = {
  Query: {
    salesOrders: (root, args, context) => {
      return SoService.getAllData()
    },
    salesOrder: (root, args, context) => {
      return  SoService.getDatabySoIdSap(args)
    },
  },
  SalesOrder: {
    do_item: ( async (root, args, context) =>  {
      console.log('SoController root', root);
      return root.so_id_sap ? DoService.getDoItemDatabySoIdSap({so_id_sap: root.so_id_sap}) : null
    })
  }
}



export default SoController;