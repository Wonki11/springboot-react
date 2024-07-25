package com.kh.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor //필수생정자
@NoArgsConstructor //기본생성자
@ToString
public class User {
	private int id; 
	private String name;
	private String email;
}
