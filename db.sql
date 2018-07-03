Step 1: Connect to database
C:\>sqlplus system/welcome1@xe

Step2: Create tablespace
CREATE TABLESPACE tbs_infrauser DATAFILE 'tbs_infrauser.dat' SIZE 10M AUTOEXTEND ON;
Note: alter session set "_ORACLE_SCRIPT"=true;  This is required in Oracle 12c

Step3: Create a new user in Oracle
CREATE USER infrauser IDENTIFIED BY welcome1 DEFAULT TABLESPACE tbs_infrauser QUOTA unlimited on tbs_infrauser;
Note: In oracle, a schema is created when a user is created. 

Step4: Grant permissions
GRANT create session TO infrauser;
GRANT create table TO infrauser;
GRANT create sequence TO infrauser;

Step5: Disconnect from system account and connect to infrauser
Sql>exit
C:\>sqlplus infrauser/welcome1@xe

Step6: Create tables and sequences
drop table server_information cascade constraints;
drop sequence server_information_seq;

create table server_information (id number(19) primary key, 
server_name varchar2(255), 
 host_addr varchar2(255),
 port_number varchar2(25),
 created_by varchar2(255),
 created_on Date, 
 modified_by varchar2(255),
 modified_on Date
);

create sequence server_information_seq start with 1 increment by 1;

Step7: Insert records
insert into server_information(id,server_name,host_addr,port_number,created_by,created_on,modified_by,modified_on) values (server_information_seq.nextVal, 'Server 1', 'dev.cts.com', '2020','Admin',sysdate,null,null);
insert into server_information(id,server_name,host_addr,port_number,created_by,created_on,modified_by,modified_on) values (server_information_seq.nextVal, 'Server 2', 'sbx.cts.com', '4040','Admin',sysdate,null,null);

commit;
