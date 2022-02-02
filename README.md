This project contains a skeleton of automated e2e tests for critical paths on https://m.aboutyou.de
In order to run tests on this project you need  nodejs installed and an IDE (example: Visual Studio code)
Tests can be run using : 
    - npx cypress open 
    - Cypress Dashboard will open and you can choose tests to be run
 (FYI: Currently only mainPurchaseFlow contains test that can be run , rest of specs are only TODOs)

SKELETON TESTS 

Registration&login
1. Make sure you can succesfully register on the website
2. Make sure you can register using your Facebook account
3. Make sure you can register with your Applie ID
4. Make sure you cannot register without a valis email
5. Make sure you cannot register without a valid passw (min 6 char)
6. Make sure you can login with a valid user and password
7. Make sure you cannot login with an invalid user or password
8. Make sure you can reset your password 
9. Make sure you can logout

Search button
10. When clicking on the seach bar : 
    - Make sure the input field opens up .
    - Make sure you can input characters, numbers.
    - Make sure suggestion open up if relevant words are inputed -> before hitting enter
    - Make sure that after input in valid words & hitting enter -> result will be available in the page
    - Make sure that after input in valid words & clicking "All result" button -> result will be available in the page
    - Make sure button "Show more" & "Show less" on the suggestin result will display more & less result in the container
    - Make sure that searching for invalid word or characters withh display an Empty result headline

 Top Menu buttons
 11. When Clicking on "Woman|Men|Kids" Top Menu :
     - Make sure all expected sub-menu button are visible & clickable(might be different for each section)
     - Make sure we can click on all sub-menu button separatelly and all will display expected data.

Hamburger Menu (Top left side of the page)
12. When clickin on the top left menu button:
     - Make sure all menu buttons expected are visible and clickable & will display expected results when clicked -> Kids menu button will display submenu -> BABIES, GRILS, BOYS -> Babies submenu button will display sub-sub menus etc.  

Filter buttons 
13. Each section/cathegory of products (example: Men -> Shoes) has a header. Using this as preconditions :
     - Make sure you can switch views, by clicking on the View button
     - Make sure you can sort products, using all available sort options
     - Make sure all filer work: By Color, Brand, Price
     - Make sure you can toggle on and off Sale and Sustainable filters.

Product view 
14. When clicking on any product : 
     - Make sure you can see the photos of the product & can navigate through them.
     - Make sure yoy can share them 
     - Make sure you add them to cart icon in the picture works
     - Make sure you can add them to favorite 
     - Make sure you can see the price 
     - Make sure you can  you can select size 
     - Make sure you can "Add to basket" button works 
     - Make sure you can extend and retract the produc details 


Buttom links 
15. Make sure you can sign up for the newsletter as both "For woman"  & "For men".
16. Make sure all the links, on the buttom of the page work. Cathegory "WOMAN|MAN|KIDS", "BRANDS FOR WOMAN | BRANDS FOR MEN | BRANDS FOR KIDS", "ABOUT YOU X INTERNATIONA", "MORE INTERESTING THEMES" , "POPULAR COLORS IN THIS CATHEGORY", "POPULAR BRANCDS IN THIS CATHEGORY"

Contact section
17. Make sure all buttons and links under the Contact section can be accessed (phone no., Contact us button, Social media links )
18. Make sure all Customer Care link work

Purchase 
19. Make sure that when adding a product into the cart, it is available when opening the cart page.
20. Make sure you can remove items from cart
21. Make sure you can add more items of the same type - using the drop down button
22. Make sure you cannot finalize an oder witthout beeing logged in 
23. Make sure you can finalize an oder after login. 
24.  Make sure all payment methods can be used 
 