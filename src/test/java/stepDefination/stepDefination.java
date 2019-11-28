package stepDefination;



import java.util.List;

import org.junit.runner.RunWith;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
public class stepDefination {

    @Given("^user is on loading page$")
    public void user_is_on_loading_page() {
        // write code for landing page
    	System.out.println("user in loading page");
    }

    
    @When("^user enters username  and password$")
    public void user_enters_username_and_password()  {
        System.out.println("user  has entered username and password");
    }
    @When("^user enters username \"([^\"]*)\" and password \"([^\"]*)\"$")
    public void user_enters_username_something_and_password_something(String strArg1, String strArg2) throws Throwable {
        System.out.println(strArg1);
        System.out.println(strArg2);
    }
    @When("^user enters fills in form details$")
    public void user_enters_fills_in_form_details(DataTable table) throws Throwable {
    List<List<String>> colls  =  table.raw();
     System.out.println(colls.get(0).get(0));
     System.out.println(colls.get(0).get(1));
     System.out.println(colls.get(0).get(2));
     System.out.println(colls.get(0).get(3));
    }
    @When("^user enters Para name User(\\d+) and pass Pass(\\d+)$")
    public void user_enters_para_name_and_pass(String username, String password) throws Throwable {
        System.out.println(username);
        System.out.println(password);
    }
    
    @Then("^Home page is populated$")
    public void home_page_is_populated() {
       // write code to verify user navigated to home page.
    	System.out.println("Home page is populated");
    }

    @And("^cards are displayed$")
    public void cards_are_displayed() {
      // write code to verify that cards are populated.
    	System.out.println("Verify cards are displayed");
    }

    @Given("^Validate the Browser$")
    public void validate_the_browser() throws Throwable {
        System.out.print("Validate the browser");
    }

    @When("^Browser is triggered$")
    public void browser_is_triggered() throws Throwable {
       System.out.print("browser is trigerred");
    }

    @Then("^Check if the browser is started$")
    public void check_if_the_browser_is_started() throws Throwable {
        System.out.print("check if browser has started");
    }

    
}