import { SpecificationRepository } from "../../repositories/SpecificationRepository";
import { ListSpecificationsController } from "./ListSpecificationsController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

const specificationRepository = SpecificationRepository.getInstance();
const listSpecificationsUseCase = new ListSpecificationsUseCase(
  specificationRepository
);
export const listSpecificationsController = new ListSpecificationsController(
  listSpecificationsUseCase
);
