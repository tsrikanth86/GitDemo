package stepDefination;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	@Before("@SmokeTest")
	public void beforeValiation()
	{
		System.out.print("Print Before validation");
	}
  @After("@SmokeTest")
  public void afterValidation()
  {
	  System.out.print("Print After validation");
  }
}
