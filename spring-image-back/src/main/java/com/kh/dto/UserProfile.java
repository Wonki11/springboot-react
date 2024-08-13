package com.kh.dto;

import java.time.LocalDateTime;

import lombok.*;

@Getter
@Setter
@ToString // Db에서 값이 제대로 넘어왔는지 체크
@AllArgsConstructor
@NoArgsConstructor

public class UserProfile {
	private int userId; // 언더바있으면 없애고 그 뒤 알파벳 대문자로 바꾸기
	private String username;
	private String porfileImageUrl;
	private LocalDateTime createAt;
}
