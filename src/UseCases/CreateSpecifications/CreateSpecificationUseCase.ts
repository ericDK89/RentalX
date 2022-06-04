import { SpecificationRepository } from "../../repositories/SpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateSpecificationUseCase {
  constructor(private specificationRepository: SpecificationRepository) {}

  execute({ name, description }: IRequest): void {
    this.specificationRepository.findByName(name);

    this.specificationRepository.create({ name, description });
  }
}
