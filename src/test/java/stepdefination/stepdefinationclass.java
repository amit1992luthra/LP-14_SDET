package stepdefination;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utilities.hooks;

public class stepdefinationclass {
	
	WebDriver driver = hooks.driver;
	
	@Given("^User is on the search page$")
	public void user_is_on_the_search_page()  {
		
		
		driver.get("https://www.google.com/");
	    
	}
	
	@When("^user write IBM in search box$")
	public void user_write_IBM_in_search_box()  {
	   String title = driver.getTitle();
	   System.out.println(title);
	   
	}

	@When("^click on seach button$")
	public void click_on_seach_button() {
		  String url = driver.getCurrentUrl();
		  System.out.println(url);
		  }

	@Then("^results should be displayed$")
	public void results_should_be_displayed() {
		 System.out.println("in the 4th step");
	}
	
	@When("^user write \"([^\"]*)\" in search box$")
	public void user_write_in_search_box(String abc)  {
		System.out.println(abc);
	}
	
	@When("^user write \"([^\"]*)\" in \"([^\"]*)\", \"([^\"]*)\" box$")
	public void user_write_in_box(String arg1, String arg2, String arg3) {
		 String title = driver.getTitle();
		   System.out.println(title);
	}

	@Then("^results \"([^\"]*)\" be displayed$")
	public void results_be_displayed(String arg1) {
		 String url = driver.getCurrentUrl();
		  System.out.println(url);
	}



	
}
