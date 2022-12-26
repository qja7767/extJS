CREATE TABLE test(
	test_seq INT PRIMARY KEY,
	test_name VARCHAR(20),
	test_id VARCHAR(20)
);

CREATE SEQUENCE seq START WITH 0 INCREMENT BY 1 MAXVALUE 999999 CYCLE NOCACHE;

INSERT INTO test(test_seq, test_name, test_id) VALUES(seq.NEXTVAL, 'tom', 'abc')
INSERT INTO test(test_seq, test_name, test_id) VALUES(seq.NEXTVAL, 'mike', 'def')

SELECT * FROM test;
!DROP TABLE test;