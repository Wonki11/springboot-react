package com.kh.service;

import org.apache.ibatis.annotations.Param;

import com.kh.dto.NaverUser;

public interface LoginService {
	NaverUser login(@Param("id") String id,@Param("password") String password);

}
