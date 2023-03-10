/* eslint-disable camelcase */
import { prisma } from '../../../database/prismaClient'

interface ICreateDeliveryServiceDTO {
  item_name: string
  id_client: string
}

interface IUpdateDeliverymanDTO {
  id_delivery: string
  id_deliveryman: string
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

  async findDeliveryWithEndDateNull() {
    return await prisma.deliveries.findMany({
      where: {
        end_at: null,
        id_deliveryman: null,
      },
    })
  }

  async setDeliveymanToDelivery({
    id_delivery,
    id_deliveryman,
  }: IUpdateDeliverymanDTO) {
    return await prisma.deliveries.update({
      where: {
        id: id_delivery,
      },
      data: {
        id_deliveryman,
      },
    })
  }

  async updateEndDate({ id_delivery, id_deliveryman }: IUpdateDeliverymanDTO) {
    const { count } = await prisma.deliveries.updateMany({
      where: {
        id: id_delivery,
        id_deliveryman,
      },
      data: {
        end_at: new Date(),
      },
    })

    if (count <= 0) {
      throw new Error('No records updated')
    }

    return await prisma.deliveries.findMany({
      where: {
        id: id_delivery,
        id_deliveryman,
      },
    })
  }
}

export default DeliveriesRepository
