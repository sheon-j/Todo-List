# todo-list

## [spring initializr](https://start.spring.io/#!type=gradle-project&language=java&platformVersion=2.5.10&packaging=jar&jvmVersion=1.8&groupId=com.example&artifactId=demo&name=demo&description=Demo%20project%20for%20Spring%20Boot&packageName=com.example.demo&dependencies=web,data-jpa,h2,lombok,devtools,mysql)

* Gradle Project
* Java 8 
* Spring Boot 2.5.10
* Jar Packaging
* Dependencies
  * Spring Web
  * Spring Data JPA 
  * H2 Database
  * Lombok
  * Spring Boot DevTools
  * MySQL Driver

---

## application.properties

```
server.port=80
```

---

## Package

* com.example.demo
  * DemoApplication.java
* com.example.demo.controller
  * TodoController.java
* com.example.demo.service
  * TodoService.java
* com.example.demo.persistance
  * TodoRepository.java
* com.example.demo.dto
  * TodoDTO.java
  * ResponseDTO.java
* com.example.demo.model
  * TodoEntity.java

---

