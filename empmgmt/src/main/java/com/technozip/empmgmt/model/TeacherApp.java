package com.technozip.empmgmt.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name="teacher")
public class TeacherApp {

	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY )
	private int id;
	
	@Column(name="first_name")
	private String name;
	
	@Column(name = "age")
	private int age;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getAddress() {
		return Address;
	}
	public void setAddress(String address) {
		Address = address;
	}
	public int getPh_no() {
		return ph_no;
	}
	public void setPh_no(int ph_no) {
		this.ph_no = ph_no;
	}
	@Column(name="address")
	private String Address;
	
	@Column(name="phone_num")
	private int ph_no;
	
	public TeacherApp(String name, int age, String address, int ph_no) {
		super();
		this.name = name;
		this.age = age;
		Address = address;
		this.ph_no = ph_no;
	}
	public TeacherApp() {
		super();
	}
	
	
}
