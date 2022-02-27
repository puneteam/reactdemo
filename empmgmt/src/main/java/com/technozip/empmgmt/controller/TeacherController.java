package com.technozip.empmgmt.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.technozip.empmgmt.Teacher;
import com.technozip.empmgmt.exception.ResourceNotFoundException;
import com.technozip.empmgmt.model.Employee;
import com.technozip.empmgmt.model.TeacherApp;
import com.technozip.empmgmt.repository.TeacherRepository;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v2/")
public class TeacherController
{
	@Autowired
private TeacherRepository teacherRepository;
	@GetMapping("/teacher")
	public List<TeacherApp>getAllTeachers()
	{
		return teacherRepository.findAll();
	}
	
	@PostMapping("/teacher")
	public TeacherApp createTeacher(@RequestBody TeacherApp teacher)
	{
		return teacherRepository.save(teacher);
	}
	
	@GetMapping("/teacher/{id}")
	 
		public ResponseEntity<TeacherApp>   getTeacherById(@PathVariable Integer id)
		{
			TeacherApp teacher=teacherRepository.findById(id).
					orElseThrow(()->new ResourceNotFoundException("teacher not exist with id:"+id));
			return ResponseEntity.ok(teacher);
		}
		
	
	 @PutMapping("/teacher/{id}")
	    public ResponseEntity < TeacherApp > updateTeacher(@PathVariable Integer id, @RequestBody TeacherApp teacherDetails) {
		 TeacherApp teacher=teacherRepository.findById(id)
	            .orElseThrow(() -> new ResourceNotFoundException("Teacher not exist with id :" + id));

	        //teacher.setName(teacherDetails.getName());
		 teacher.setName(teacherDetails.getName());
	        teacher.setAddress(teacherDetails.getAddress());
	        teacher.setAge(teacherDetails.getAge());
	        teacher.setPh_no(teacherDetails.getPh_no());
	     
	        TeacherApp updatedTeacher = teacherRepository.save(teacher);
	        return ResponseEntity.ok(updatedTeacher);
	    }
	 
	 @DeleteMapping("/teacher/{id}")
	    public ResponseEntity < Map < String, Boolean >> deleteTeacher(@PathVariable Integer id) {
		 TeacherApp teacher=teacherRepository.findById(id)
	            .orElseThrow(() -> new ResourceNotFoundException("teacher not exist with id :" + id));

	        teacherRepository.delete(teacher);
	        Map < String, Boolean > response = new HashMap < > ();
	        response.put("deleted", Boolean.TRUE);
	        return ResponseEntity.ok(response);
	    }
	 
	
	
}
