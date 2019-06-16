import { makeExecutableSchema } from 'graphql-tools'; 
import resolvers from './resolver';

const schema = `

type MetaDataQ {
  affectedRows: Int
  changedRows: Int
  fieldCount: Int
  message: String
}


type SalesOrder {
  id: ID
  so_id_sap: String!
  order_type_code: String
  so_item: Int
  material_code: String
  material_descriptions: String
  do_item: [DeliveryOrder]

}

type DeliveryOrder {
  id: ID
  do_id_sap: String!
  so_id_sap: String
  do_creation_date: String
  reference_item: Int
  sales_order_item: [SalesOrder]
}

#*************** master status sap *****************#

type MasterStatus {
  id: ID!
  code: String
  title: String
  description: String
  created_at: String
  updated_at: String
}

type Query {

  deliveryOrder( do_id_sap: String! ): DeliveryOrder
  deliveryOrders : [DeliveryOrder]
  salesOrder( so_id_sap: String! ): SalesOrder
  salesOrders: [SalesOrder]
  masterStatus : [MasterStatus]
  masterStatusById( id: ID!) : MasterStatus
  getSoByDeliveryOrder( do_id_sap: String! ): DeliveryOrder

}

type Mutation {
    createMasterStatus (code: String, title: String, description: String ): MetaDataQ
}






schema {
  query: Query,
  mutation: Mutation
}

`;


export { schema };
