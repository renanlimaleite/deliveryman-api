/* eslint-disable camelcase */
import ClientRepository from '../repositories/ClientRepository'

export class ClientFindAllDeliveriesService {
  constructor(private clientRepository: ClientRepository) {
    this.clientRepository = clientRepository
  }

  async execute(id_client: string) {
    const deliveries = await this.clientRepository.getDeliveriesByIdClient(
      id_client,
    )

    return deliveries
  }
}
