# Getting Started with Angular

Angular is one of a well-known TypeScript Web App framework which aims to display everything in a web app as a `COMPONENT`.  To create an Angular project needs a module [Angular CLI](https://github.com/angular/angular-cli).  Its latest version is version 13.0.2.

## Installing Angular-CLI

To install Angular-CLI, it's required to have NodeJs and NPM installed on the host.  Run the following command on your terminal to install Angular-CLI
```
# npm install -g @angular/cli
```


## Create a New Project
At your desired directory (folder), open the terminal and run the following command. `<ProjectName>` means the name of your desired project name.
```
# ng new <ProjectName>
```
You will be asked if you want to add `Angular Routing`.  Answer `Yes` (press `y` and `Enter`).  Then select the stylesheet format as `CSS` which you are familiar with.  Finally, wait for a few minutes for downloading the necessary files for your project.

When the project creation is finished.  Use the following command to open the project folder via `VS Code`
```
# cd <ProjectName>
# code .
```

## Serving a Project (Run)

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
