import { Specification } from "../model/Specification";
import {
  ISpecificationRepository,
  ISpecificationRepositoryDTO
} from "./ISpecificationRepository";

export class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[];

  private static INSTANCE: SpecificationRepository;

  constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationRepository {
    if (!SpecificationRepository.INSTANCE) {
      SpecificationRepository.INSTANCE = new SpecificationRepository();
    }
    return SpecificationRepository.INSTANCE;
  }

  create({ name, description }: ISpecificationRepositoryDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date().toLocaleString("pt-BR"),
    });

    this.specifications.push(specification);
  }

  findByName(name: string): Specification {
    const existsSpecification = this.specifications.find(
      (specification) => specification.name === name
    );
    if (existsSpecification) {
      throw new Error("Specification already exists");
    }
    return existsSpecification;
  }

  listAll(): Specification[] {
    const allSpecifications = this.specifications;
    return allSpecifications;
  }
}
