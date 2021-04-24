INSERT INTO department (department_name)
VALUES
('distribution'),
('manufacturing'),
('retail'),
('accounts_payable'),
('marketing'),
('sales'),
('human_resources');

INSERT INTO roles (title, salary, departments_id)
VALUES
('manager', 60000, 5),
('assistant_manager', 55000, 5),
('stocker', 50000, 1),
('drivers', 50000, 1),
('assembly', 50000, 2),
('cashier', 50000, 3),
('overnight_stocker', 50000, 3),
('accountant', 80000, 4),
('data_analyst', 90000, 4),
('bookkeeper', 170000, 4),
('design_specialist', 80000, 5),
('value_sales', 50000, 6) ,
('premier_sales', 70000, 6),
('sales_lead', 90000, 6),
('hr_representative', 70000, 7),
('head_of_hr', 80000, 7);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('James', 'Fraser', 1, NULL),
  ('Jack', 'London', 2, 1),
  ('Robert', 'Bruce', 12, 1),
  ('Peter', 'Greenaway', 12, 5),
  ('Derek', 'Jarman', 1, NULL),
  ('Paolo', 'Pasolini', 2, 5),
  ('Heathcote', 'Williams', 3, 10),
  ('Sandy', 'Powell', 3, 15),
  ('Emil', 'Zola', 4, 20),
  ('Sissy', 'Coalpits', 1, NULL),
  ('Antoinette', 'Capet', 2, 10),
  ('Samuel', 'Delany', 3, 25),
  ('Tony', 'Duvert', 4, 30),
  ('Dennis', 'Cooper', 13, 35),
  ('Monica', 'Bellucci', 1, NULL),
  ('Samuel', 'Johnson', 2, 15),
  ('John', 'Dryden', 4, 1),
  ('Alexander', 'Pope', 4, 5),
  ('Lionel', 'Johnson', 5, 10),
  ('Aubrey', 'Beardsley', 1, NULL),
  ('Tulse', 'Luper', 2, 20),
  ('William', 'Morris', 5, 15),
  ('George', 'Shaw', 5, 20),
  ('Arnold', 'Bennett', 5, 25),
  ('Algernon', 'Blackwood', 1, NULL),
  ('Rhoda', 'Broughton', 2, 25),
  ('Hart', 'Crane', 6, 30),
  ('Vitorio', 'DeSica', 6, 35),
  ('Wilkie', 'Collins', 6, 1),
  ('Elizabeth', 'Gaskell', 1, NULL),
  ('George', 'Sand', 2, 30),
  ('Vernon', 'Lee', 7, 5),
  ('Arthur', 'Machen', 13, 10),
  ('Frederick', 'Marryat', 12, 15),
  ('Harriet', 'Martineau', 1, NULL),
  ('George', 'Meredith', 2, 35),
  ('Margaret', 'Oliphant', 15, 20),
  ('Anthony', 'Trollope', 15, 25),
  ('Charlotte', 'Yonge', 10, 30),
  ('Horace', 'Walpole', 10, 35),
  ('Matthew', 'Lewis', 8, 1),
  ('William', 'Bedford', 9, 5),
  ('Anne', 'Radcliffe', 10, 10),
  ('Charles', 'Brown', 11, 15),
  ('Eliza', 'Parsons', 3, 20),
  ('Susan', 'Hill', 6, 25),
  ('Sydney', 'Owenson', 6, 30),
  ('Hubert', 'Crackanthorpe', 16, 35),
  ('William', 'Carleton', 6, 1),
  ('Gerald', 'Griffin', 14, 10);