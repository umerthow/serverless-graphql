import DoService from './service';
import SoService from '../sales_order/service'

const DoController = {
  Query: {
    deliveryOrders: (root, args, context) => {
      return DoService.getAllData()
    },
    deliveryOrder: (root, args, context) => {
      return  DoService.getDatabyDoIdSap(args)
    },
    getSoByDeliveryOrder: (root, args, context) => {
      return  DoService.getDatabyDoIdSap(args)
    },
  },
  DeliveryOrder: {
    sales_order_item: ( async (root, args, context) =>  {
      console.log('DoController root', root);
      return root.so_id_sap ? SoService.getSoItemDatabySoIdSap({so_id_sap: root.so_id_sap}) : null
    })
  }
};


export default DoController;