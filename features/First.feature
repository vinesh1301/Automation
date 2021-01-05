Feature: Test case with the help of Cucumber with Protractor


Scenario Outline: Login
    
Given I launch the url
When I click on bank manager Login
And I click on Add Customer
And I give the customer details "<FirstName>","<LastName>","<PostCode>"
And I click on add customer button
Then I should get the popup

Examples:
    | FirstName  | LastName  | PostCode  |
    | Vinesh  | Kumar  | 700046  |


Scenario Outline: Customer Login

Given I launch the url again
When I click on customer Login
And I click on your name dropdown 
And I give your name "<cust>"
Then I click on Login button

Examples:
    | cust |
    | Vinesh Kumar | 


Scenario Outline: Bank Manager Login Part 2

Given I launch the url again again
When I click on bank manager Login again
And I click on your open account 
And I give customer name "<customer>"
And I give currency "<currency>"
Then I click on process button

Examples:
    | customer | currency |
    | Vinesh Kumar | Dollar |


Scenario Outline: Bank Manager Login Part 3

Given I launch the url again again again
When I click bank manager login
When I click on customer 
When I give the details "<Name>"
Then I click on delete


Examples:
    | Name | 
    | Vinesh | 



