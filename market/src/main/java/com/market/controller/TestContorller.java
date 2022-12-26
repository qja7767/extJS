package com.market.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestContorller {

	@Autowired
	private JdbcTemplate sql;

	@RequestMapping(value = "/testAPI")
	public Map<String, Object> testAPI() {
		String query = "SELECT test_seq, test_name, test_id FROM test";
		
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("data", sql.queryForList(query));
		return result;
	}
}
