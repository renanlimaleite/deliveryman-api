/* eslint-disable camelcase */
import DeliveriesRepository from '../repositories/DeliveriesRepository'

interface IUpdateDeliverymanDTO {
  id_delivery: string
  id_deliveryman: string
}

export class UpdateDeliverymanService {
  constructor(private deliveriesRepository: DeliveriesRepository) {
    this.deliveriesRepository = deliveriesRepository
  }

  async execute({ id_delivery, id_deliveryman }: IUpdateDeliverymanDTO) {
    const result = await this.deliveriesRepository.setDeliveymanToDelivery({
      id_delivery,
      id_deliveryman,
    })

    return result
  }
}
