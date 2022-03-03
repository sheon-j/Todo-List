package com.example.demo.dto;

import com.example.demo.model.TodoEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class TodoDTO {		 // 아이템 생성, 수정, 삭제
	private String id;
//	private String userId;  	사용 안함(스프링 시큐리티를 이용해 인증 구현)
	private String title;
	private boolean done;
	
	public TodoDTO(final TodoEntity entity) {	// DTO 오브젝트 생성
		this.id = entity.getId();
		this.title = entity.getTitle();
		this.done = entity.isDone();
	}
	
	public static TodoEntity toEntity(final TodoDTO dto) {
		return TodoEntity.builder()
				.id(dto.getId())
				.title(dto.getTitle())
				.done(dto.isDone())
				.build();
	}
}
