package com.cognizant.serverInfra.ServerInfraApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.serverInfra.ServerInfraApp.component.ServerInformationComponent;
import com.cognizant.serverInfra.ServerInfraApp.entity.ServerInformation;

@RestController
@CrossOrigin
@RequestMapping("/serverInformation")
public class ServerInformationController {
	@Autowired
	ServerInformationComponent serverInformationComponent;

	@GetMapping
	public List<ServerInformation> getServerInfo(){
		return serverInformationComponent.getServerInfo();
		
	}
	
	@GetMapping("/{id}")
	public ServerInformation getServerInfoById(@PathVariable("id") long id){
		return serverInformationComponent.getServerInfoById(id);
		
	}
	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	public void create(@RequestBody ServerInformation srvrInfo) {
		serverInformationComponent.create(srvrInfo);		
	}
	@PutMapping
	@ResponseStatus(HttpStatus.OK)
	public void update(@RequestBody ServerInformation srvrInfo) {
		serverInformationComponent.update(srvrInfo);		
	}
}
