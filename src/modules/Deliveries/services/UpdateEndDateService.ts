/* eslint-disable camelcase */
import DeliveriesRepository from '../repositories/DeliveriesRepository'

interface IUpdateEndDate {
  id_delivery: string
  id_deliveryman: string
}

export class UpdateEndDateService {
  constructor(private deliveriesRepository: DeliveriesRepository) {
    this.deliveriesRepository = deliveriesRepository
  }

  async execute({ id_delivery, id_deliveryman }: IUpdateEndDate) {
    const result = await this.deliveriesRepository.updateEndDate({
      id_delivery,
      id_deliveryman,
    })

    return result
  }
}
