-- INNER JOIN
SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;

-- LEFT JOIN
SELECT column_name(s)
FROM table1
LEFT JOIN table2
ON table1.column_name = table2.column_name;

-- RIGHT JOIN
SELECT column_name(s)
FROM table1
RIGHT JOIN table2
ON table1.column_name = table2.column_name;

-- FULL OUTER JOIN
SELECT column_name(s)
FROM table1
FULL OUTER JOIN table2
ON table1.column_name = table2.column_name
WHERE condition;

id emp_id   name  tech_stack  skill
1    1	    john  backend     java
2    2	    jane  frontend    react
3    1	    john  backend     nodejs
4    2	    jane  backend     python

Employee 1 john is a backend engineer skilled in java | nodejs
Employee 2 jane is a frontend+backend engineer skilled in react | python


WHERE
HAVING
LIMIT
JOIN
FROM
ORDER BY
SELECT
OFF SET
GROUP BY


-- Partitioning - 1-100, 101-200
-- Sharding - Based on column value 


-- After the execution of ‘DELETE’ operation, 
-- COMMIT and ROLLBACK statements can be performed to retrieve the lost data.

-- After the execution of ‘TRUNCATE’ operation, 
-- COMMIT, and ROLLBACK statements cannot be performed to retrieve the lost data.

-- ‘DROP’ command is used to drop the table or key like the primary key/foreign key.

Design a database for a use case, where 