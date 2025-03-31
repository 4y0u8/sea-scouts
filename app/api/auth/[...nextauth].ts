// app/api/auth/[...nextauth].ts
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

// Define a User type
interface User {
  id: string; // Change id to string
  email: string;
  password: string;
}

// In-memory user storage (for demonstration purposes)
const users: User[] = [];

// Example user for testing (you can remove this in production)
users.push({
  id: '1', // Use string for id
  email: 'test@example.com',
  password: bcrypt.hashSync('password', 10), // Hash the password for testing
});

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error('No credentials provided');
        }

        const user = users.find(user => user.email === credentials.email);
        if (user && await bcrypt.compare(credentials.password, user.password)) {
          return { id: user.id, email: user.email }; // Return user object with id as string
        }
        return null; // Return null if user not found or password doesn't match
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',
  },
};

export default NextAuth(authOptions);