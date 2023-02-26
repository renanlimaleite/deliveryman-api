/* eslint-disable camelcase */
import DeliverymanRepository from '../repositories/DeliverymanRepository'

export class FindAllDeliveriesService {
  constructor(private deliverymanRepository: DeliverymanRepository) {
    this.deliverymanRepository = deliverymanRepository
  }

  async execute(id_deliveryman: string) {
    const deliveries =
      await this.deliverymanRepository.getDeliveriesByIdDeliveryman(
        id_deliveryman,
      )

    return deliveries
  }
}
