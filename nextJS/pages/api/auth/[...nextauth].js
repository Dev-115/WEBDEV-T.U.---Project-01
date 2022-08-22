import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import GithubProvider from "next-auth/providers/github"
import TwitterProvider from "next-auth/providers/twitter"
import Auth0Provider from "next-auth/providers/auth0"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import CredentialsProvider from "next-auth/providers/credentials"



const prisma = new PrismaClient()

// export const AppDataSource = new DataSource({
//     type: "mysql",
//     host: "localhost",
//     port: 3306,
//     username: "ptsAdmin",
//     password: "nomorePTS01",
//     database: "Magg",
//     synchronize: true,
//     logging: true,
//     entities: [Post, Category],
//     subscribers: [],
//     migrations: [],
// })



export default NextAuth({
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),

  secret: "NEXTJSMAG123#@!",
 

  providers: [
    //    EmailProvider({
    //     server: {
    //         host: process.env.EMAIL_SERVER_HOST,
    //         port: process.env.EMAIL_SERVER_PORT,
    //         auth: {
    //           user: process.env.EMAIL_SERVER_USER,
    //           pass: process.env.EMAIL_SERVER_PASSWORD
    //         }
    //       },
    //      from: process.env.EMAIL_FROM,
    //    }),

       CredentialsProvider({
        // The name to display on the sign in form (e.g. 'Sign in with...')
        name: 'Local Account',
        // The credentials is used to generate a suitable form on the sign in page.
        // You can specify whatever fields you are expecting to be submitted.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          username: { label: "Email", type: "text", placeholder: "user" },
          password: {  label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          // You need to provide your own logic here that takes the credentials
          // submitted and returns either a object representing a user or value
          // that is false/null if the credentials are invalid.
          // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
          // You can also use the `req` object to obtain additional parameters
          // (i.e., the request IP address)
          const res = await fetch("http://localhost:3000/api/dbcall/credCheck", {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" }
          })
          const user = await res.json()
    
          // If no error and we have user data, return it
          if (res.ok && user) {
            if(user.Password == credentials.password){
              return user
            }else{
              return null
            }
          }
          // Return null if user data could not be retrieved
          return null
        }
      }),
      FacebookProvider({
        clientId: process.env.FACEBOOK_ID,
        clientSecret: process.env.FACEBOOK_SECRET,
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      }),
      TwitterProvider({
        clientId: process.env.TWITTER_ID,
        clientSecret: process.env.TWITTER_SECRET,
      }),
    // ...add more providers here
  ],

  session: {
    // Choose how you want to save the user session.
    // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
    // If you use an `adapter` however, we default it to `"database"` instead.
    // You can still force a JWT session by explicitly defining `"jwt"`.
    // When using `"database"`, the session cookie will only contain a `sessionToken` value,
    // which is used to look up the session in the database.
    strategy: "jwt",
  
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days
  
    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    updateAge: 24 * 60 * 60, // 24 hours
  },
callbacks: {
  async jwt({ token, account }) {
    // Persist the OAuth access_token to the token right after signin
    if (account) {
      token.accessToken = account.access_token
    }
    return token
  },
  async session({ session, token, user }) {
    // Send properties to the client, like an access_token from a provider.
    session.accessToken = token.accessToken;
    // session.user.role = user.role; // Add role value to user object so it is passed along with session
    return session
  },
  async signIn({ user, account, profile, email, credentials }) {
    const isAllowedToSignIn = true
    if (isAllowedToSignIn) {
      return true
    } else {
      // Return false to display a default error message
      return false
      // Or you can return a URL to redirect to:
      // return '/unauthorized'
    }
  }
}
})