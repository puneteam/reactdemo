
import axios from "axios";
const TEACHER_API_BASE_URL="http://localhost:8080/api/v2/teacher";
class TeacherService
{
    getTeachers()
    {
        return axios.get(TEACHER_API_BASE_URL);
    }
   
    getTeacherById(teacherId){
        return axios.get(TEACHER_API_BASE_URL + '/' + teacherId);
    }
    createTeacher(teacher)
    {
   return axios.post(TEACHER_API_BASE_URL,teacher);
    }
    updateTeacher(teacher, teacherId){
        return axios.put(TEACHER_API_BASE_URL + '/' + teacherId,teacher);
    }
    deleteTeacher(teacherId)
    {
        return axios.delete(TEACHER_API_BASE_URL + '/' + teacherId);
    }

}
export default new TeacherService()