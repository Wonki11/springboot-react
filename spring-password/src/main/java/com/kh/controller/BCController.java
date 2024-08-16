package com.kh.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.kh.dto.BCUser;
import com.kh.service.BCUserService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class BCController {
	
	@Autowired
	private BCUserService userService;
	
	@PostMapping("/api/register")
	public String saveUser(@RequestBody BCUser user) {
		userService.saveUser(user);
		return "회원가입이 완료되었습니다.";
		
	}
	

}
