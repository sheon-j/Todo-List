package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder 						// 오브젝트 생성
@NoArgsConstructor				// 매개변수가 없는 생성자
@AllArgsConstructor				// 멤버 변수를 매개변수로 받는 생성자 
@Data							// Getter/Setter 메소드
@Entity //매개변수 가능				// 앤티티 지정
@Table(name = "Todo")			// 테이블 지정
public class TodoEntity {		// 비즈니스 데이터
	
	@Id							// 기본 키가 될 필드에 지정
	@GeneratedValue(generator = "system-uuid")	// system-uuid 방식의 generator
	@GenericGenerator(name = "system-uuid", strategy = "uuid") // 커스텀 generator
	private String id;
	private String userId;
	private String title;
	private boolean done;
	
}