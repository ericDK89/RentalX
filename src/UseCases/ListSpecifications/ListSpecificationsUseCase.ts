import { Specification } from "../../model/Specification";
import { SpecificationRepository } from "../../repositories/SpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

export class ListSpecificationsUseCase {
  constructor(private specificationRepository: SpecificationRepository) {}

  execute(): Specification[] {
    return this.specificationRepository.listAll();
  }
}
