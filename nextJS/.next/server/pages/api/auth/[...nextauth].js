"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "crypto-js":
/*!****************************!*\
  !*** external "crypto-js" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("crypto-js");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/auth0":
/*!********************************************!*\
  !*** external "next-auth/providers/auth0" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/auth0");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next-auth/providers/email":
/*!********************************************!*\
  !*** external "next-auth/providers/email" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/email");

/***/ }),

/***/ "next-auth/providers/facebook":
/*!***********************************************!*\
  !*** external "next-auth/providers/facebook" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/facebook");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "next-auth/providers/twitter":
/*!**********************************************!*\
  !*** external "next-auth/providers/twitter" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/twitter");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/email */ \"next-auth/providers/email\");\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/facebook */ \"next-auth/providers/facebook\");\n/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/providers/twitter */ \"next-auth/providers/twitter\");\n/* harmony import */ var next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-auth/providers/auth0 */ \"next-auth/providers/auth0\");\n/* harmony import */ var next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\nvar CryptoJS = __webpack_require__(/*! crypto-js */ \"crypto-js\");\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_8__.PrismaClient();\n// export const AppDataSource = new DataSource({\n//     type: \"mysql\",\n//     host: \"localhost\",\n//     port: 3306,\n//     username: \"ptsAdmin\",\n//     password: \"nomorePTS01\",\n//     database: \"Magg\",\n//     synchronize: true,\n//     logging: true,\n//     entities: [Post, Category],\n//     subscribers: [],\n//     migrations: [],\n// })\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    // Configure one or more authentication providers\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_7__.PrismaAdapter)(prisma),\n    secret: \"NEXTJSMAG123#@!\",\n    providers: [\n        //    EmailProvider({\n        //     server: {\n        //         host: process.env.EMAIL_SERVER_HOST,\n        //         port: process.env.EMAIL_SERVER_PORT,\n        //         auth: {\n        //           user: process.env.EMAIL_SERVER_USER,\n        //           pass: process.env.EMAIL_SERVER_PASSWORD\n        //         }\n        //       },\n        //      from: process.env.EMAIL_FROM,\n        //    }),\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_9___default()({\n            // The name to display on the sign in form (e.g. 'Sign in with...')\n            name: \"Local Account\",\n            // The credentials is used to generate a suitable form on the sign in page.\n            // You can specify whatever fields you are expecting to be submitted.\n            // e.g. domain, username, password, 2FA token, etc.\n            // You can pass any HTML attribute to the <input> tag through the object.\n            credentials: {\n                username: {\n                    label: \"Email\",\n                    type: \"text\",\n                    placeholder: \"user\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                // You need to provide your own logic here that takes the credentials\n                // submitted and returns either a object representing a user or value\n                // that is false/null if the credentials are invalid.\n                // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }\n                // You can also use the `req` object to obtain additional parameters\n                // (i.e., the request IP address)\n                const res = await fetch(\"http://localhost:3000/api/dbcall/credCheck\", {\n                    method: \"POST\",\n                    body: JSON.stringify(credentials),\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    }\n                });\n                const user = await res.json();\n                // If no error and we have user data, return it\n                if (res.ok && user) {\n                    var bytes = CryptoJS.AES.decrypt(user.Password, \"TeamMAGG\");\n                    var passwordText = bytes.toString(CryptoJS.enc.Utf8);\n                    if (passwordText == credentials.password) {\n                        return user;\n                    } else {\n                        return null;\n                    }\n                }\n                // Return null if user data could not be retrieved\n                return null;\n            }\n        }),\n        next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_3___default()({\n            clientId: process.env.FACEBOOK_ID,\n            clientSecret: process.env.FACEBOOK_SECRET\n        }),\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET\n        }),\n        next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_5___default()({\n            clientId: process.env.TWITTER_ID,\n            clientSecret: process.env.TWITTER_SECRET\n        })\n    ],\n    pages: {\n        signIn: \"/login\"\n    },\n    session: {\n        // Choose how you want to save the user session.\n        // The default is `\"jwt\"`, an encrypted JWT (JWE) stored in the session cookie.\n        // If you use an `adapter` however, we default it to `\"database\"` instead.\n        // You can still force a JWT session by explicitly defining `\"jwt\"`.\n        // When using `\"database\"`, the session cookie will only contain a `sessionToken` value,\n        // which is used to look up the session in the database.\n        strategy: \"jwt\",\n        // Seconds - How long until an idle session expires and is no longer valid.\n        maxAge: 30 * 24 * 60 * 60,\n        // Seconds - Throttle how frequently to write to database to extend a session.\n        // Use it to limit write operations. Set to 0 to always update the database.\n        // Note: This option is ignored if using JSON Web Tokens\n        updateAge: 24 * 60 * 60\n    },\n    callbacks: {\n        async jwt ({ token , account  }) {\n            // Persist the OAuth access_token to the token right after signin\n            if (account) {\n                token.accessToken = account.access_token;\n            }\n            return token;\n        },\n        async session ({ session , token , user  }) {\n            // Send properties to the client, like an access_token from a provider.\n            session.accessToken = token.accessToken;\n            // session.user.role = user.role; // Add role value to user object so it is passed along with session\n            return session;\n        },\n        async signIn ({ user , account , profile , email , credentials  }) {\n            const isAllowedToSignIn = true;\n            if (isAllowedToSignIn) {\n                return true;\n            } else {\n                // Return false to display a default error message\n                return false;\n            // Or you can return a URL to redirect to:\n            // return '/unauthorized'\n            }\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQztBQUNxQjtBQUNFO0FBQ0k7QUFDSjtBQUNFO0FBQ0o7QUFDSTtBQUNaO0FBQ29CO0FBQ2pFLElBQUlVLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQyw0QkFBVyxDQUFDO0FBSW5DLE1BQU1DLE1BQU0sR0FBRyxJQUFJSix3REFBWSxFQUFFO0FBRWpDLGdEQUFnRDtBQUNoRCxxQkFBcUI7QUFDckIseUJBQXlCO0FBQ3pCLGtCQUFrQjtBQUNsQiw0QkFBNEI7QUFDNUIsK0JBQStCO0FBQy9CLHdCQUF3QjtBQUN4Qix5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCLGtDQUFrQztBQUNsQyx1QkFBdUI7QUFDdkIsc0JBQXNCO0FBQ3RCLEtBQUs7QUFJTCxpRUFBZVIsZ0RBQVEsQ0FBQztJQUN0QixpREFBaUQ7SUFDakRhLE9BQU8sRUFBRU4sd0VBQWEsQ0FBQ0ssTUFBTSxDQUFDO0lBRTlCRSxNQUFNLEVBQUUsaUJBQWlCO0lBR3pCQyxTQUFTLEVBQUU7UUFDVCxxQkFBcUI7UUFDckIsZ0JBQWdCO1FBQ2hCLCtDQUErQztRQUMvQywrQ0FBK0M7UUFDL0Msa0JBQWtCO1FBQ2xCLGlEQUFpRDtRQUNqRCxvREFBb0Q7UUFDcEQsWUFBWTtRQUNaLFdBQVc7UUFDWCxxQ0FBcUM7UUFDckMsU0FBUztRQUVOTixzRUFBbUIsQ0FBQztZQUNuQixtRUFBbUU7WUFDbkVPLElBQUksRUFBRSxlQUFlO1lBQ3JCLDJFQUEyRTtZQUMzRSxxRUFBcUU7WUFDckUsbURBQW1EO1lBQ25ELHlFQUF5RTtZQUN6RUMsV0FBVyxFQUFFO2dCQUNYQyxRQUFRLEVBQUU7b0JBQUVDLEtBQUssRUFBRSxPQUFPO29CQUFFQyxJQUFJLEVBQUUsTUFBTTtvQkFBRUMsV0FBVyxFQUFFLE1BQU07aUJBQUU7Z0JBQy9EQyxRQUFRLEVBQUU7b0JBQUdILEtBQUssRUFB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TUFBTSxFQUFDLEVBQUV0QixJQUFJLEdBQUU4QixPQUFPLEdBQUVHLE9BQU8sR0FBRUMsS0FBSyxHQUFFakQsV0FBVyxHQUFFLEVBQUU7WUFDM0QsTUFBTWtELGlCQUFpQixHQUFHLElBQUk7WUFDOUIsSUFBSUEsaUJBQWlCLEVBQUU7Z0JBQ3JCLE9BQU8sSUFBSTthQUNaLE1BQU07Z0JBQ0wsa0RBQWtEO2dCQUNsRCxPQUFPLEtBQUs7WUFDWiwwQ0FBMEM7WUFDMUMseUJBQXlCO2FBQzFCO1NBQ0Y7S0FDRjtDQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIlxyXG5pbXBvcnQgRW1haWxQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9lbWFpbFwiXHJcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIlxyXG5pbXBvcnQgRmFjZWJvb2tQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9mYWNlYm9va1wiXHJcbmltcG9ydCBHaXRodWJQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWJcIlxyXG5pbXBvcnQgVHdpdHRlclByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL3R3aXR0ZXJcIlxyXG5pbXBvcnQgQXV0aDBQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9hdXRoMFwiXHJcbmltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tIFwiQG5leHQtYXV0aC9wcmlzbWEtYWRhcHRlclwiXHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiXHJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCJcclxudmFyIENyeXB0b0pTID0gcmVxdWlyZShcImNyeXB0by1qc1wiKTtcclxuXHJcblxyXG5cclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXHJcblxyXG4vLyBleHBvcnQgY29uc3QgQXBwRGF0YVNvdXJjZSA9IG5ldyBEYXRhU291cmNlKHtcclxuLy8gICAgIHR5cGU6IFwibXlzcWxcIixcclxuLy8gICAgIGhvc3Q6IFwibG9jYWxob3N0XCIsXHJcbi8vICAgICBwb3J0OiAzMzA2LFxyXG4vLyAgICAgdXNlcm5hbWU6IFwicHRzQWRtaW5cIixcclxuLy8gICAgIHBhc3N3b3JkOiBcIm5vbW9yZVBUUzAxXCIsXHJcbi8vICAgICBkYXRhYmFzZTogXCJNYWdnXCIsXHJcbi8vICAgICBzeW5jaHJvbml6ZTogdHJ1ZSxcclxuLy8gICAgIGxvZ2dpbmc6IHRydWUsXHJcbi8vICAgICBlbnRpdGllczogW1Bvc3QsIENhdGVnb3J5XSxcclxuLy8gICAgIHN1YnNjcmliZXJzOiBbXSxcclxuLy8gICAgIG1pZ3JhdGlvbnM6IFtdLFxyXG4vLyB9KVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XHJcbiAgLy8gQ29uZmlndXJlIG9uZSBvciBtb3JlIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVyc1xyXG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSxcclxuXHJcbiAgc2VjcmV0OiBcIk5FWFRKU01BRzEyMyNAIVwiLFxyXG4gXHJcblxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgLy8gICAgRW1haWxQcm92aWRlcih7XHJcbiAgICAvLyAgICAgc2VydmVyOiB7XHJcbiAgICAvLyAgICAgICAgIGhvc3Q6IHByb2Nlc3MuZW52LkVNQUlMX1NFUlZFUl9IT1NULFxyXG4gICAgLy8gICAgICAgICBwb3J0OiBwcm9jZXNzLmVudi5FTUFJTF9TRVJWRVJfUE9SVCxcclxuICAgIC8vICAgICAgICAgYXV0aDoge1xyXG4gICAgLy8gICAgICAgICAgIHVzZXI6IHByb2Nlc3MuZW52LkVNQUlMX1NFUlZFUl9VU0VSLFxyXG4gICAgLy8gICAgICAgICAgIHBhc3M6IHByb2Nlc3MuZW52LkVNQUlMX1NFUlZFUl9QQVNTV09SRFxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICB9LFxyXG4gICAgLy8gICAgICBmcm9tOiBwcm9jZXNzLmVudi5FTUFJTF9GUk9NLFxyXG4gICAgLy8gICAgfSksXHJcblxyXG4gICAgICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XHJcbiAgICAgICAgLy8gVGhlIG5hbWUgdG8gZGlzcGxheSBvbiB0aGUgc2lnbiBpbiBmb3JtIChlLmcuICdTaWduIGluIHdpdGguLi4nKVxyXG4gICAgICAgIG5hbWU6ICdMb2NhbCBBY2NvdW50JyxcclxuICAgICAgICAvLyBUaGUgY3JlZGVudGlhbHMgaXMgdXNlZCB0byBnZW5lcmF0ZSBhIHN1aXRhYmxlIGZvcm0gb24gdGhlIHNpZ24gaW4gcGFnZS5cclxuICAgICAgICAvLyBZb3UgY2FuIHNwZWNpZnkgd2hhdGV2ZXIgZmllbGRzIHlvdSBhcmUgZXhwZWN0aW5nIHRvIGJlIHN1Ym1pdHRlZC5cclxuICAgICAgICAvLyBlLmcuIGRvbWFpbiwgdXNlcm5hbWUsIHBhc3N3b3JkLCAyRkEgdG9rZW4sIGV0Yy5cclxuICAgICAgICAvLyBZb3UgY2FuIHBhc3MgYW55IEhUTUwgYXR0cmlidXRlIHRvIHRoZSA8aW5wdXQ+IHRhZyB0aHJvdWdoIHRoZSBvYmplY3QuXHJcbiAgICAgICAgY3JlZGVudGlhbHM6IHtcclxuICAgICAgICAgIHVzZXJuYW1lOiB7IGxhYmVsOiBcIkVtYWlsXCIsIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJ1c2VyXCIgfSxcclxuICAgICAgICAgIHBhc3N3b3JkOiB7ICBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzLCByZXEpIHtcclxuICAgICAgICAgIC8vIFlvdSBuZWVkIHRvIHByb3ZpZGUgeW91ciBvd24gbG9naWMgaGVyZSB0aGF0IHRha2VzIHRoZSBjcmVkZW50aWFsc1xyXG4gICAgICAgICAgLy8gc3VibWl0dGVkIGFuZCByZXR1cm5zIGVpdGhlciBhIG9iamVjdCByZXByZXNlbnRpbmcgYSB1c2VyIG9yIHZhbHVlXHJcbiAgICAgICAgICAvLyB0aGF0IGlzIGZhbHNlL251bGwgaWYgdGhlIGNyZWRlbnRpYWxzIGFyZSBpbnZhbGlkLlxyXG4gICAgICAgICAgLy8gZS5nLiByZXR1cm4geyBpZDogMSwgbmFtZTogJ0ogU21pdGgnLCBlbWFpbDogJ2pzbWl0aEBleGFtcGxlLmNvbScgfVxyXG4gICAgICAgICAgLy8gWW91IGNhbiBhbHNvIHVzZSB0aGUgYHJlcWAgb2JqZWN0IHRvIG9idGFpbiBhZGRpdGlvbmFsIHBhcmFtZXRlcnNcclxuICAgICAgICAgIC8vIChpLmUuLCB0aGUgcmVxdWVzdCBJUCBhZGRyZXNzKVxyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2RiY2FsbC9jcmVkQ2hlY2tcIiwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY3JlZGVudGlhbHMpLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgXHJcbiAgICAgICAgICAvLyBJZiBubyBlcnJvciBhbmQgd2UgaGF2ZSB1c2VyIGRhdGEsIHJldHVybiBpdFxyXG4gICAgICAgICAgaWYgKHJlcy5vayAmJiB1c2VyKSB7XHJcbiAgICAgICAgICAgIHZhciBieXRlcyAgPSBDcnlwdG9KUy5BRVMuZGVjcnlwdCh1c2VyLlBhc3N3b3JkLCAnVGVhbU1BR0cnKTtcclxuICAgICAgICAgICAgdmFyIHBhc3N3b3JkVGV4dCA9IGJ5dGVzLnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTtcclxuICAgICAgICAgICAgaWYocGFzc3dvcmRUZXh0ID09IGNyZWRlbnRpYWxzLnBhc3N3b3JkKXtcclxuICAgICAgICAgICAgICByZXR1cm4gdXNlclxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBSZXR1cm4gbnVsbCBpZiB1c2VyIGRhdGEgY291bGQgbm90IGJlIHJldHJpZXZlZFxyXG4gICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIH0pLFxyXG4gICAgICBGYWNlYm9va1Byb3ZpZGVyKHtcclxuICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuRkFDRUJPT0tfSUQsXHJcbiAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5GQUNFQk9PS19TRUNSRVQsXHJcbiAgICAgIH0pLFxyXG4gICAgICBHb29nbGVQcm92aWRlcih7XHJcbiAgICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9JRCxcclxuICAgICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9TRUNSRVQsXHJcbiAgICAgIH0pLFxyXG4gICAgICBUd2l0dGVyUHJvdmlkZXIoe1xyXG4gICAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5UV0lUVEVSX0lELFxyXG4gICAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuVFdJVFRFUl9TRUNSRVQsXHJcbiAgICAgIH0pLFxyXG4gICAgLy8gLi4uYWRkIG1vcmUgcHJvdmlkZXJzIGhlcmVcclxuICBdLFxyXG4gIHBhZ2VzOiB7XHJcbiAgICBzaWduSW46ICcvbG9naW4nLFxyXG4gIH0sXHJcblxyXG4gIHNlc3Npb246IHtcclxuICAgIC8vIENob29zZSBob3cgeW91IHdhbnQgdG8gc2F2ZSB0aGUgdXNlciBzZXNzaW9uLlxyXG4gICAgLy8gVGhlIGRlZmF1bHQgaXMgYFwiand0XCJgLCBhbiBlbmNyeXB0ZWQgSldUIChKV0UpIHN0b3JlZCBpbiB0aGUgc2Vzc2lvbiBjb29raWUuXHJcbiAgICAvLyBJZiB5b3UgdXNlIGFuIGBhZGFwdGVyYCBob3dldmVyLCB3ZSBkZWZhdWx0IGl0IHRvIGBcImRhdGFiYXNlXCJgIGluc3RlYWQuXHJcbiAgICAvLyBZb3UgY2FuIHN0aWxsIGZvcmNlIGEgSldUIHNlc3Npb24gYnkgZXhwbGljaXRseSBkZWZpbmluZyBgXCJqd3RcImAuXHJcbiAgICAvLyBXaGVuIHVzaW5nIGBcImRhdGFiYXNlXCJgLCB0aGUgc2Vzc2lvbiBjb29raWUgd2lsbCBvbmx5IGNvbnRhaW4gYSBgc2Vzc2lvblRva2VuYCB2YWx1ZSxcclxuICAgIC8vIHdoaWNoIGlzIHVzZWQgdG8gbG9vayB1cCB0aGUgc2Vzc2lvbiBpbiB0aGUgZGF0YWJhc2UuXHJcbiAgICBzdHJhdGVneTogXCJqd3RcIixcclxuICBcclxuICAgIC8vIFNlY29uZHMgLSBIb3cgbG9uZyB1bnRpbCBhbiBpZGxlIHNlc3Npb24gZXhwaXJlcyBhbmQgaXMgbm8gbG9uZ2VyIHZhbGlkLlxyXG4gICAgbWF4QWdlOiAzMCAqIDI0ICogNjAgKiA2MCwgLy8gMzAgZGF5c1xyXG4gIFxyXG4gICAgLy8gU2Vjb25kcyAtIFRocm90dGxlIGhvdyBmcmVxdWVudGx5IHRvIHdyaXRlIHRvIGRhdGFiYXNlIHRvIGV4dGVuZCBhIHNlc3Npb24uXHJcbiAgICAvLyBVc2UgaXQgdG8gbGltaXQgd3JpdGUgb3BlcmF0aW9ucy4gU2V0IHRvIDAgdG8gYWx3YXlzIHVwZGF0ZSB0aGUgZGF0YWJhc2UuXHJcbiAgICAvLyBOb3RlOiBUaGlzIG9wdGlvbiBpcyBpZ25vcmVkIGlmIHVzaW5nIEpTT04gV2ViIFRva2Vuc1xyXG4gICAgdXBkYXRlQWdlOiAyNCAqIDYwICogNjAsIC8vIDI0IGhvdXJzXHJcbiAgfSxcclxuY2FsbGJhY2tzOiB7XHJcbiAgYXN5bmMgand0KHsgdG9rZW4sIGFjY291bnQgfSkge1xyXG4gICAgLy8gUGVyc2lzdCB0aGUgT0F1dGggYWNjZXNzX3Rva2VuIHRvIHRoZSB0b2tlbiByaWdodCBhZnRlciBzaWduaW5cclxuICAgIGlmIChhY2NvdW50KSB7XHJcbiAgICAgIHRva2VuLmFjY2Vzc1Rva2VuID0gYWNjb3VudC5hY2Nlc3NfdG9rZW5cclxuICAgIH1cclxuICAgIHJldHVybiB0b2tlblxyXG4gIH0sXHJcbiAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuLCB1c2VyIH0pIHtcclxuICAgIC8vIFNlbmQgcHJvcGVydGllcyB0byB0aGUgY2xpZW50LCBsaWtlIGFuIGFjY2Vzc190b2tlbiBmcm9tIGEgcHJvdmlkZXIuXHJcbiAgICBzZXNzaW9uLmFjY2Vzc1Rva2VuID0gdG9rZW4uYWNjZXNzVG9rZW47XHJcbiAgICAvLyBzZXNzaW9uLnVzZXIucm9sZSA9IHVzZXIucm9sZTsgLy8gQWRkIHJvbGUgdmFsdWUgdG8gdXNlciBvYmplY3Qgc28gaXQgaXMgcGFzc2VkIGFsb25nIHdpdGggc2Vzc2lvblxyXG4gICAgcmV0dXJuIHNlc3Npb25cclxuICB9LFxyXG4gIGFzeW5jIHNpZ25Jbih7IHVzZXIsIGFjY291bnQsIHByb2ZpbGUsIGVtYWlsLCBjcmVkZW50aWFscyB9KSB7XHJcbiAgICBjb25zdCBpc0FsbG93ZWRUb1NpZ25JbiA9IHRydWVcclxuICAgIGlmIChpc0FsbG93ZWRUb1NpZ25Jbikge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gUmV0dXJuIGZhbHNlIHRvIGRpc3BsYXkgYSBkZWZhdWx0IGVycm9yIG1lc3NhZ2VcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIC8vIE9yIHlvdSBjYW4gcmV0dXJuIGEgVVJMIHRvIHJlZGlyZWN0IHRvOlxyXG4gICAgICAvLyByZXR1cm4gJy91bmF1dGhvcml6ZWQnXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbn0pIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiRW1haWxQcm92aWRlciIsIkdvb2dsZVByb3ZpZGVyIiwiRmFjZWJvb2tQcm92aWRlciIsIkdpdGh1YlByb3ZpZGVyIiwiVHdpdHRlclByb3ZpZGVyIiwiQXV0aDBQcm92aWRlciIsIlByaXNtYUFkYXB0ZXIiLCJQcmlzbWFDbGllbnQiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiQ3J5cHRvSlMiLCJyZXF1aXJlIiwicHJpc21hIiwiYWRhcHRlciIsInNlY3JldCIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsInVzZXJuYW1lIiwibGFiZWwiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInJlcSIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwidXNlciIsImpzb24iLCJvayIsImJ5dGVzIiwiQUVTIiwiZGVjcnlwdCIsIlBhc3N3b3JkIiwicGFzc3dvcmRUZXh0IiwidG9TdHJpbmciLCJlbmMiLCJVdGY4IiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiRkFDRUJPT0tfSUQiLCJjbGllbnRTZWNyZXQiLCJGQUNFQk9PS19TRUNSRVQiLCJHT09HTEVfSUQiLCJHT09HTEVfU0VDUkVUIiwiVFdJVFRFUl9JRCIsIlRXSVRURVJfU0VDUkVUIiwicGFnZXMiLCJzaWduSW4iLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJtYXhBZ2UiLCJ1cGRhdGVBZ2UiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsImFjY291bnQiLCJhY2Nlc3NUb2tlbiIsImFjY2Vzc190b2tlbiIsInByb2ZpbGUiLCJlbWFpbCIsImlzQWxsb3dlZFRvU2lnbkluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();