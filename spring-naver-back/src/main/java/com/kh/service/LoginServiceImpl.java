package com.kh.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.kh.dto.NaverUser;
import com.kh.mapper.LoginMapper;

public class LoginServiceImpl implements LoginService{
	
	@Autowired
	private LoginMapper loginMapper;
	
	@Override
	public NaverUser login(String id, String password) {
		
		return loginMapper.login(id, password);
	}

}
