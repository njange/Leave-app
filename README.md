# Leave Management System

A full-stack React and Express.js application with PostgreSQL authentication system.

## 🚀 Features

- **Modern React Frontend**: Built with TypeScript and beautiful UI components
- **Express.js Backend**: RESTful API with JWT authentication
- **PostgreSQL Database**: Secure user management and data storage
- **Responsive Design**: Works on desktop and mobile devices
- **JWT Authentication**: Secure token-based authentication
- **User Registration & Login**: Complete authentication flow

## 🛠️ Tech Stack

### Frontend
- React 18 with TypeScript
- CSS3 with modern animations
- Axios for HTTP requests
- Context API for state management

### Backend
- Node.js with Express.js
- PostgreSQL database
- JWT for authentication
- bcryptjs for password hashing
- CORS enabled

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **PostgreSQL** (v12 or higher)

## 🔧 Installation & Setup

### 1. Clone the repository
```bash
git clone <repository-url>
cd "Leave app"
```

### 2. Install dependencies for all packages
```bash
npm run install-all
```

### 3. Database Setup

1. Install PostgreSQL and create a database:
```sql
CREATE DATABASE leave_app;
```

2. Run the database setup script:
```bash
cd server
psql -d leave_app -f database.sql
```

3. Update the database configuration in `server/.env`:
```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=leave_app
DB_USER=your_username
DB_PASSWORD=your_password
```

### 4. Environment Configuration

#### Server Environment (`server/.env`)
```env
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=leave_app
DB_USER=postgres
DB_PASSWORD=password
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

#### Client Environment (`client/.env`)
```env
REACT_APP_API_URL=http://localhost:5000/api
```

## 🚀 Running the Application

### Development Mode (Recommended)
Run both client and server concurrently:
```bash
npm run dev
```

This will start:
- React development server on `http://localhost:3000`
- Express.js server on `http://localhost:5000`

### Run Individually

#### Start the server only:
```bash
npm run server
```

#### Start the client only:
```bash
npm run client
```

## 📁 Project Structure

```
Leave app/
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── contexts/      # React contexts
│   │   ├── services/      # API services
│   │   └── ...
│   ├── package.json
│   └── .env
├── server/                # Express.js backend
│   ├── index.js          # Main server file
│   ├── database.sql      # Database schema
│   ├── package.json
│   └── .env
├── .github/
│   └── copilot-instructions.md
├── package.json          # Root package.json
└── README.md
```

## 🔐 API Endpoints

### Authentication Routes

#### POST `/api/auth/register`
Register a new user
```json
{
  "username": "string",
  "email": "string", 
  "password": "string"
}
```

#### POST `/api/auth/login`
Login user
```json
{
  "username": "string",
  "password": "string"
}
```

#### GET `/api/auth/profile`
Get user profile (requires authentication)
- Headers: `Authorization: Bearer <token>`

#### GET `/api/test`
Test server connection

## 🎨 UI Features

- **Beautiful Login/Register Forms**: Modern design with smooth animations
- **Responsive Layout**: Works on all screen sizes
- **Error Handling**: User-friendly error messages
- **Loading States**: Visual feedback during API calls
- **Dashboard**: Clean user interface after login

## 🔒 Security Features

- Password hashing with bcryptjs
- JWT token authentication
- CORS protection
- Input validation
- SQL injection prevention with parameterized queries

## 📱 Usage

1. **Registration**: Create a new account with username, email, and password
2. **Login**: Sign in with your credentials
3. **Dashboard**: Access your personalized dashboard after authentication
4. **Logout**: Securely log out from the application

## 🛠️ Development

### Adding New Features

1. **Frontend**: Add new components in `client/src/components/`
2. **Backend**: Add new routes in `server/index.js`
3. **Database**: Update schema in `server/database.sql`

### Building for Production

```bash
npm run build
```

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Ensure PostgreSQL is running
   - Check database credentials in `.env`
   - Verify database exists

2. **CORS Issues**
   - Check if server is running on port 5000
   - Verify REACT_APP_API_URL in client/.env

3. **JWT Token Issues**
   - Clear localStorage in browser
   - Check JWT_SECRET in server/.env

## 📝 License

This project is licensed under the ISC License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📞 Support

For support, please create an issue in the repository or contact the development team.
