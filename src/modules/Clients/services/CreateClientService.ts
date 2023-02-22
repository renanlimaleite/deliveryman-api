import ClientRepository from '../repositories/ClientRepository'
import { hash } from 'bcrypt'

interface ICreateClientDTO {
  username: string
  password: string
}

export class CreateClientService {
  constructor(private clientRepository: ClientRepository) {
    this.clientRepository = clientRepository
  }

  async execute({ username, password }: ICreateClientDTO) {
    const clientExists = await this.clientRepository.findByUsername()

    if (clientExists) {
      throw new Error('Client already exists')
    }

    const hashPassword = await hash(password, 10)

    const client = await this.clientRepository.create({
      username,
      hashPassword,
    })

    return client
  }
}
