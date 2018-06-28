package com.cognizant.serverInfra.ServerInfraApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.serverInfra.ServerInfraApp.entity.ServerInformation;


public interface ServerInformationRepository  extends JpaRepository<ServerInformation,Long>{

}
