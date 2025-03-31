// app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../../../lib/mongodb'; // Adjust the path based on your structure
import bcrypt from 'bcryptjs'; // Ensure this import is correct

const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const client = await clientPromise;
        const db = client.db();

        const user = await db.collection('users').findOne({ email: credentials?.email });

        if (user && (await bcrypt.compare(credentials?.password || '', user.password))) {
          return { id: user._id.toString(), email: user.email }; // Convert ObjectId to string
        }
        return null;
      },
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  pages: {
    signIn: '/auth/signin', // Custom sign-in page
  },
  session: {
    strategy: 'jwt' as const, // Ensure TypeScript understands this is a constant
  },
  secret: process.env.NEXTAUTH_SECRET || 'default_secret', // Provide a default secret
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };