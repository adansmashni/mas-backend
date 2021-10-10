import { getRepository } from "typeorm";
import { Activy } from "../models/Activy";

interface ActivyData {
    name: string; 
    activy_date: string;
    course_unity_id: string;
}

class CreateActivyService {
    public async execute({ name, activy_date, course_unity_id }: ActivyData) {

        const activyRepository = getRepository(Activy);

        const activy = {
            name,
            activy_date,
            course_unity_id
        }

        await activyRepository.save(activy);

        return activy;
    }
}

export { CreateActivyService }