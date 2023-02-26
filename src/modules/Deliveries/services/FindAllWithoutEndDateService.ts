import DeliveriesRepository from '../repositories/DeliveriesRepository'

export class FindAllWithoutEndDateService {
  constructor(private deliveriesRepository: DeliveriesRepository) {
    this.deliveriesRepository = deliveriesRepository
  }

  async execute() {
    const deliveriesWithoutEndDate =
      await this.deliveriesRepository.findDeliveryWithEndDateNull()

    return deliveriesWithoutEndDate
  }
}
