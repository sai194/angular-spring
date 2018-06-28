package com.cognizant.serverInfra.ServerInfraApp.component;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.cognizant.serverInfra.ServerInfraApp.repository.ServerInformationRepository;
import com.cognizant.serverInfra.ServerInfraApp.entity.*;


@Service 
public class ServerInformationComponent {
	private static final Logger logger = LoggerFactory.getLogger(ServerInformationComponent.class);
	
	@Autowired
	ServerInformationRepository serverInfoRepository;
	
	public ServerInformationComponent() {
		
	}
	
	public List<ServerInformation> getServerInfo() {
		
		return serverInfoRepository.findAll();			
		 
	}
	
	public ServerInformation getServerInfoById(long id) {
		
		return serverInfoRepository.getOne(id);			
		 
	}
	
	
	public void create(ServerInformation srvrInfo) {
		serverInfoRepository.save(srvrInfo);		
	}
	public void update(ServerInformation srvrInfo) {
		serverInfoRepository.save(srvrInfo);		
	}
	
}
