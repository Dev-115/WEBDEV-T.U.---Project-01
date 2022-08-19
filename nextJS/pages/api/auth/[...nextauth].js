import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import GithubProvider from "next-auth/providers/github"
import TwitterProvider from "next-auth/providers/twitter"
import Auth0Provider from "next-auth/providers/auth0"
import { TypeORMLegacyAdapter } from "@next-auth/typeorm-legacy-adapter"

export default NextAuth({
  // Configure one or more authentication providers
//   adapter: TypeORMLegacyAdapter({
// //     type: 'mysql',
// //     url:'http://127.0.0.1/',
// //     host:"awefawf",
// //     username : "root",
// //   database: 'Magg',
// // //   user:'root',
// // //   password:"",
// //   synchronize: true
//   }),

//   adapter: TypeORMLegacyAdapter("Server=localhost;Database=Magg;username=ptsAdmin;Password=myPassword;"),
//   database: {
//     type: 'mysql',
//     database: 'Magg',
//     synchronize: true
//   },
  providers: [
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
    //      maxAge: 30 * 24 * 60 * 60,
    //    }),
    // ...add more providers here
  ],
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
    session.accessToken = token.accessToken
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