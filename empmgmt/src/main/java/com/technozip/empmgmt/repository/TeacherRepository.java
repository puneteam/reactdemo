package com.technozip.empmgmt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.technozip.empmgmt.model.TeacherApp;

public interface TeacherRepository extends JpaRepository<TeacherApp, Integer>{

}
