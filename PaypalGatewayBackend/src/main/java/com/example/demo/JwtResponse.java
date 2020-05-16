package com.example.demo;

import java.io.Serializable;

public class JwtResponse implements Serializable {

	private static final long serialVersionUID = -2400425140107044025L;
	private final String jwttoken;
	private final boolean status;
	private final String message;
	private final Object data;
	
	public JwtResponse(String jwttoken, boolean status, String message, Object data) {
		this.jwttoken = jwttoken;
		this.status = status;
		this.message = message;
		this.data = data;
	}
	
	
	public boolean isStatus() {
		return status;
	}


	public String getMessage() {
		return message;
	}


	public String getToken() {
		return this.jwttoken;
	}
	
	public Object getData() {
		return this.data;
	}
	
}