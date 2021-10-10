import { Request, Response } from 'express';
import { CreateCourseUnitService } from '../services/CreateCourseUnitService';

class CourseUnitController {
    async create(request: Request, response: Response) {
        const courseunitData = request.body;
        const createCourseUnit = new CreateCourseUnitService();
        const activy = await createCourseUnit.execute(courseunitData);
        return response.json(activy);
    }
}
export { CourseUnitController };