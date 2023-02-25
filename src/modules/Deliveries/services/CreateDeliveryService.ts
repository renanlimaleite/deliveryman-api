/* eslint-disable camelcase */
import DeliveriesRepository from '../repositories/DeliveriesRepository'

interface ICreateDeliveryServiceDTO {
  item_name: string
  id_client: string
}

export class CreateDeliveryService {
  constructor(private deliveriesRepository: DeliveriesRepository) {
    this.deliveriesRepository = deliveriesRepository
  }

  async execute({ item_name, id_client }: ICreateDeliveryServiceDTO) {
    const delivery = await this.deliveriesRepository.create({
      item_name,
      id_client,
    })

    return delivery
  }
}
