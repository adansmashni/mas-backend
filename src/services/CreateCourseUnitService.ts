import { getRepository } from "typeorm";
import { CourseUnit } from "../models/CourseUnit";


interface CourseUnitData {
    name: string;
    description: string;
}

class CreateCourseUnitService {
    public async execute({ name, description }: CourseUnitData) {

        const courseunitRepository = getRepository(CourseUnit);

        const courseunit = {
            name,
            description
        }

        return courseunit;
    }
}

export { CreateCourseUnitService }