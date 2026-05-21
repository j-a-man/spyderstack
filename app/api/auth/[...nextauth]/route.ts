
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Internal Access',
      credentials: {
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Fallback to 'admin' if env var is not set, as per previous implementation logic request found in search
        // specific user request was to use INTERNAL_PASSWORD.
        const internalPassword = process.env.INTERNAL_PASSWORD || 'admin';
        
        if (credentials?.password === internalPassword) {
          // Return a dummy user object
          return { id: "1", name: "Internal User", email: "internal@spyderstack.com" }
        }
        return null
      }
    })
  ],
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60, // 7 days
  },
  pages: {
    signIn: '/internal/login',
  },
  callbacks: {
    async jwt({ token, user }) {
        if (user) {
            token.id = user.id;
        }
        return token;
    },
    async session({ session, token }) {
        return session;
    }
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
