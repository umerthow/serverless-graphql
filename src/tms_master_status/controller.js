import MasterStatusService from './service';

const MasterStatusController = {
  Query: {
    masterStatus: (root, args, context) => {
      return MasterStatusService.getAllData(args)
    },
    masterStatusById: (root, args, context) => {
      return MasterStatusService.getDatabyId(args)
    }
  },
  Mutation: {
    createMasterStatus: (root, args, context) => {
      return MasterStatusService.createData(args).catch(err => {
        throw new Error(err)
      })

    },
  }
}




export default MasterStatusController;