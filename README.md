# CarServiceClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Create Owner Service

Use `ng g s shared/owners` to create the service. implements the crud metods to send requests.

- `getAll()` -> return all owners.
- `getId(dni: string)` -> return the owner with id.
- `get(id: number)` -> return the owner with _links.
- `save(owner: any)` -> edit or create one owner.
- `remove(href: string)` -> remove one owner.

## Create Owner List Component
Use `ng g c owner-list` to create the component.

In the ngOnInit use the function `getAll()` from the ownerService and save to a local variable.

In the HTML file, use *ngFor directive to print all owners and create a link to edit component.

## Create Owner Edit Component
use `ng g c owner-edit` to create the component.
### Methods
- `goList()` -> return to the owner list component.
- `saveOwner(form: ngForm)` -> send form values to a services to create or edit an owner;
- `deleteOwner(href: string)` -> send the href of owner to delete.

This component is used to create and edit a component. The action depends of the url paramethers.

If dni exist means that is an edition. use function `getId(dni: string)` and `get(id: number)` from the ownerService to obtain the owner and print in the HTML.

## Changes in Car Edit Component
To link the cars with the owners, is necesary obtain the owners from the owner service using `getAll()`, save in a local variable and print this in a HTML selection with the `*ngForm` directive.

This HTML tag is linked to the car model using `[(ngModel)]="car.ownerDni"` and the options tags contain a link to owner model using `[value]="owner.dni"`
