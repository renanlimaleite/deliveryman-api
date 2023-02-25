/* eslint-disable camelcase */
import { prisma } from '../../../database/prismaClient'

interface ICreateDeliveryServiceDTO {
  item_name: string
  id_client: string
}

class DeliveriesRepository {
  async create({ item_name, id_client }: ICreateDeliveryServiceDTO) {
    return await prisma.deliveries.create({
      data: {
        item_name,
        id_client,
      },
    })
  }
}

export default DeliveriesRepository
