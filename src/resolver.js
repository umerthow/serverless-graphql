import DoController from './delivery_order/controller';
import SoController from './sales_order/controller';
import MasterStatusController from './tms_master_status/controller';

const rootResolvers = {
  Query: {
    ...DoController.Query,
    ...SoController.Query,
    ...MasterStatusController.Query

  },
  Mutation: {
    ...MasterStatusController.Mutation
  },
  DeliveryOrder: DoController.DeliveryOrder,
  SalesOrder: SoController.SalesOrder
}

export const resolvers =  rootResolvers;