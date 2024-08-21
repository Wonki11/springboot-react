package com.kh.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.dto.Chicken;
import com.kh.repository.ChickenRepository;

@Service
public class ChickenService {
	
	@Autowired
	private ChickenRepository chickenRepository;
		
	// 치킨테이블 모두 보기 List 목록 으로 전체보기 어떤 목록을 전체볼거니?
	// List<Chicken> 목록 <주제>
	public List<Chicken> getallChickens(){
		return chickenRepository.findAll(); // find 찾다 all 전체
	}
	
	// 치킨메뉴추가하기
	public Chicken createChicken(Chicken chicken) {
		return chickenRepository.save(chicken); // save가 되는 이유 : 치킨에 대해서 DTO에 작성된 컬럼들에 모두 삽임
	}
	
	// 치킨 메뉴 상세보기 
	public Chicken findById(Integer id) {
		return chickenRepository.findById(id)
				.orElseThrow(() -> new RuntimeException
						("일치하는 정보를 찾을 수 없습니다."))
				;
	}
}
