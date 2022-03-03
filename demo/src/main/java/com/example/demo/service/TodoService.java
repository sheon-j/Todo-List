package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.TodoEntity;
import com.example.demo.persistance.TodoRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class TodoService {
	
	@Autowired
	private TodoRepository repository;
	
	
	// 서비스 테스트
	public String testService() {
		TodoEntity entity = TodoEntity.builder().title("My First Todo Item").build();
		repository.save(entity);
		TodoEntity savedEntity = repository.findById(entity.getId()).get();
		return savedEntity.getTitle();
	}
	
	
	// 조회 기능
	public List<TodoEntity> retrieve(final String userId) {
		return repository.findByUserId(userId);
	}
	
	
	// 생성 기능
	public List<TodoEntity> create(final TodoEntity entity) {
		// 1 엔티티 검증
		validate(entity);
		// 2 엔티티 저장
		repository.save(entity);
		log.info("Entity Id: {} is saved.", entity.getId());
		return repository.findByUserId(entity.getUserId());
	}

	
	// 수정 기능
	public List<TodoEntity> update(final TodoEntity entity) {
		// 1 엔티티 검증
		validate(entity);
		// 2 넘겨받은 엔티티 id를 이용해 TodoEntity 호출(존재하지 않는 엔티티는 업데이트 불가 NPE!)
		final Optional<TodoEntity> original = repository.findById(entity.getId());
		// 3 반환된 TodoEntity가 존재하면 값을 새 entity 덮어 씌우고 저장
		original.ifPresent(todo -> {
			todo.setTitle(entity.getTitle());
			todo.setDone(entity.isDone());
			repository.save(todo);
		});
		// 4 모든 Todo 리스트 조회
		return retrieve(entity.getUserId());
	}
	
	
	// 삭제 기능
	public List<TodoEntity> delete(final TodoEntity entity) {
		// 1 엔티티 검증
		validate(entity);
		// 2 엔티티 삭제
		try {
			repository.delete(entity);
		} catch(Exception e) {
			log.error("Error deleting entity", entity.getId(), e);					// 에러 발생시 id, e 로깅 
			throw new RuntimeException("Error deleting entity" + entity.getId());	// 컨트롤러로 exception 전
		}
		// 3 모든 Todo 리스트 조회
		return retrieve(entity.getUserId());
	}
	
	
	// 검증
	public void validate(final TodoEntity entity) {		// 검증 리팩토링
		if(entity == null) {							// No Input Value
			log.warn("Entity cannot be null.");
		}
		if(entity.getUserId() == null) {				// No Exist in DB
			log.warn("Unknown user.");
			throw new RuntimeException("Unknown user.");
		}
	}
}
