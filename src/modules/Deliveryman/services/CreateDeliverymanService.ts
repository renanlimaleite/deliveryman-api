import { hash } from 'bcrypt'
import DeliverymanRepository from '../repositories/DeliverymanRepository'

interface ICreateDeliverymanDTO {
  username: string
  password: string
}

export class CreateDeliverymanService {
  constructor(private deliverymanRepository: DeliverymanRepository) {
    this.deliverymanRepository = deliverymanRepository
  }

  async execute({ username, password }: ICreateDeliverymanDTO) {
    const deliverymanExist = await this.deliverymanRepository.findByUsername(
      username,
    )

    if (deliverymanExist) {
      throw new Error('Deliveryman already exists')
    }

    const hashPassword = await hash(password, 10)

    const deliveryman = await this.deliverymanRepository.create({
      username,
      hashPassword,
    })

    return deliveryman
  }
}
