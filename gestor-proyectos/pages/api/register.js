import bcrypt from 'bcryptjs';
import fs from 'fs';
import path from 'path';

// Define the path to the users.json file
const usersFilePath = path.join(process.cwd(), 'pages/api/utils/users.json');

// Helper function to read users from the file
const readUsersFromFile = () => {
  const fileData = fs.readFileSync(usersFilePath);
  return JSON.parse(fileData);
};

// Helper function to write users to the file
const writeUsersToFile = (users) => {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));  // Pretty-print JSON
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Read the users from the file
    const users = readUsersFromFile();

    // Check if the user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user and add to the users array
    const newUser = { id: users.length + 1, email, password: hashedPassword };
    users.push(newUser);

    // Write the updated users array to the file
    writeUsersToFile(users);

    res.status(201).json({ message: 'User registered successfully' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
