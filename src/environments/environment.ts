// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB9e27wAym8zGGSO_MJa_AeWnIiikdoU5w",
    authDomain: "similagram.firebaseapp.com",
    databaseURL: "https://similagram.firebaseio.com",
    projectId: "similagram",
    storageBucket: "similagram.appspot.com",
    messagingSenderId: "595837258403"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
