# Turistsites

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Add More Site

this example use static information of file `sites.ts`. For add more site only create a new object en `site.ts`, following before structures.

```
   export const sites : [
       ... others object sites,
        {
            id: 7,
            name: 'Title of site',
            desc:'Description Site',
            lng: longitude,
            lat: latitude,
            image: [
                { image: 'assets/image-name.ext' },
                { image: 'assets/image-name.ext' },
                { image: 'assets/image-name.ext' },
            ],
            virtualTourURL: '',
        },
   ]
```
