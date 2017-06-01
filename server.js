var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.manage().window().maximize();

driver.manage().deleteAllCookies();

driver.get("http://google.com");


//Closes Window
driver.quit();




// OTHER NOTES

////Find an element using an id
// driver.findElement(webdriver.By.id("idExample"));
// var idElement = driver.findElement(webdriver.By.id("idExample"));
// idElement.click();

// var xpathElement = driver.findElement(webdriver.By.xpath("/html/body/a"));

// xpathElement.click();

// driver.findElement(webdriver.By.name('q')).sendKeys('elisha kay rocks');

// var submit = driver.findElement({name: 'btnK'});

// submit.click();

// driver.navigate().back();


           
      