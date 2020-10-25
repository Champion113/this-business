INSERT INTO department
  (departName, id )
VALUES
  ('LEO', 369);
INSERT INTO department
  (departName, id )
VALUES
  ('EMT', 100);
INSERT INTO department
  (departName, id)
VALUES
  ('PFD', 200);
INSERT INTO department
  (departName, id)
VALUES
  ('CO', 300);

INSERT INTO role (jobTitle, id, departRole, salary ) 
VALUES
  ('Patrol', 369, 'LEO', 80,000 );
INSERT INTO role (jobTitle, id, departRole, salary ) 
VALUES
  ('Sergeant', 369, 'LEO', 100,000 );
INSERT INTO role (jobTitle, id, departRole, salary ) 
VALUES
  ('Medic', 100, 'EMT', 60,000 );
INSERT INTO role (jobTitle, id, departRole, salary ) 
VALUES
  ('fireman', 200, 'PFD', 90,000 );
INSERT INTO role (jobTitle, id, departRole, salary ) 
VALUES
  ('Lieutenant', 200, 'PFD', 120,000 );  
INSERT INTO role (jobTitle, id, departRole, salary ) 
VALUES
  ('Guard', 300, 'CO', 50,000 ); 


INSERT INTO employee (id, firstName, lastName, jobTitle, departName, salary, manager ) 
VALUES
  (369, 'John', 'Brown', 'Patrol', 'LEO', 80,000, 'Grace' );
INSERT INTO employee (id, firstName, lastName, jobTitle, departName, salary, manager ) 
VALUES
  (369, 'Grace', 'Townes', 'Sergeant', 'LEO', 100,000, NULL ); 
INSERT INTO employee (id, firstName, lastName, jobTitle, departName, salary, manager ) 
VALUES
  (100, 'Mike', 'Johnson', 'Medic', 'EMT', 80,000, NULL );
INSERT INTO employee (id, firstName, lastName, jobTitle, department, salary, manager ) 
VALUES
  (200, 'Brian', 'Taylor', 'fireman', 'PFD', 90,000, 'Stephanie' ); 
INSERT INTO employee (id, firstName, lastName, jobTitle, department, salary, manager ) 
VALUES
  (200, 'Stephanie', 'Moore', 'Lieutenant', 'PFD', 120,000, NULL);        
INSERT INTO employee (id, firstName, lastName, jobTitle, department, salary, manager ) 
VALUES
  (200, 'Donald', 'Smith', 'Guard', 'CO', 50,000, NULL );  