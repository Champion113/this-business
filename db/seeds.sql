INSERT INTO departments
  (departName )
VALUES
  ('PPD');
INSERT INTO departments
  (departName )
VALUES
  ('PES');
INSERT INTO departments
  (departName )
VALUES
  ('PFD');
INSERT INTO departments
  (departName )
VALUES
  ('PPS');

INSERT INTO roles (jobTitle, departRole, salaryRole ) 
VALUES
  ('Patrol', 'LEO', 80000 );
INSERT INTO roles (jobTitle, departRole, salaryRole  ) 
VALUES
  ('Sergeant', 'LEO', 100000 );
INSERT INTO roles (jobTitle, departRole, salaryRole  ) 
VALUES
  ('Medic', 'EMT', 60000 );
INSERT INTO roles (jobTitle, departRole, salaryRole  ) 
VALUES
  ('fireman', 'FIREBOARD', 90000 );
INSERT INTO roles (jobTitle, departRole, salaryRole  ) 
VALUES
  ('Lieutenant', 'FIREBOARD', 120000 );  
INSERT INTO roles (jobTitle, departRole, salaryRole  ) 
VALUES
  ('Guard', 'CO', 50000 ); 


INSERT INTO employees (firstName, lastName, jobTitle, manager ) 
VALUES
  ('John', 'Brown', 'Patrol', 'Grace' );
INSERT INTO employees (firstName, lastName, jobTitle, manager ) 
VALUES
  ('Grace', 'Townes', 'Sergeant', NULL ); 
INSERT INTO employees (firstName, lastName, jobTitle, manager ) 
VALUES
  ('Mike', 'Johnson', 'Medic', NULL );
INSERT INTO employees (firstName, lastName, jobTitle, manager ) 
VALUES
  ('Brian', 'Taylor', 'fireman', 'Stephanie' ); 
INSERT INTO employees (firstName, lastName, jobTitle, manager ) 
VALUES
  ('Stephanie', 'Moore', 'Lieutenant', NULL);        
INSERT INTO employees (firstName, lastName, jobTitle, manager ) 
VALUES
  ('Donald', 'Smith', 'Guard', NULL );  