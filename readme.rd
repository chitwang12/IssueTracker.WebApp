#IssueTracker A full stack app, which helps to track issues/bugs for the Project. Hoisted Link :https://chitwang12-github-io-project.onrender.com

Description
A full stack app, which helps to track issues/bugs for the Project.

Tech Stack
Nodejs , Express, Mongodb , EJS , javaScript , html, css

How to setup the project on local system
Clone this project : https://github.com/chitwang12/IssueTracker.WebApp.git
Start by installing npm if you don't have it already.
Navigate to Project Directory by cd project Name
After reaching the project directory you have to run the following the command.

     npm install 
     node app.js || npm run dev 
```

### Features


# HomePage 
A list of projects will be displayed.A button will be provided to create a new project. Upon the creation of a new project, it will be added to the list.

#CreateProjectPage
The following fields will be accepted to create a project:

Name
Description
Author

#ProjectDetailsPage
Upon clicking on a project on the home page, the user will be redirected to the Project Detail Page, where they will be able to view bugs related to that project. The following actions can be performed by the user on this page:

Multiple labels can be filtered by (i.e., the user can filter by 2 or more labels simultaneously).
Filtering by author is possible.
Title and description can be searched by.
A button will be provided to create an issue.

#CreateIssuePage
The user will be able to create an issue for a project on the Create Issue Page. The following fields will be accepted:

Title
Description
Author

### Folder Structure

```
IssueTracker
 |                               
 | --->assets---->|-->js|--->filterIssues.js
 |                      |-->searchIssues.js
 |--->config-->|-->config.env
 |             |-->db.js
 |                       
 |Controllers--->|-->HomeController.js
 |               |-->ProjectController.js        
 |
 |Models------>|--->Issue.js                  
 |             |--->Project.js
 |      
 |               |
 |--->routes---->|-->index.js
 |               |-->Project.js
 |     
 |
 |              |--->home.ejs
 |              |---> layout.ejs
 |              |---> project_page.ejs
 |              |--->partials-->|
 |--->views---->|                 --->_footer.ejs
 |              |                 --->_header.ejs
 |              |                 --->_issue_form.ejs
 |              |                 --->_issues.ejs
 |              |                 --->_projetc_form.ejs
 |-->node_modules
 |-->.gitignore
 |--> app.js
 |--> package-lock.json
 |-->package.json
 
 ````