<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Leave Management Application

This is a full-stack React application with Express.js backend and PostgreSQL database for leave management.

## Project Structure
- `client/` - React TypeScript frontend application
- `server/` - Express.js Node.js backend API
- Database: PostgreSQL

## Key Features
- User authentication (login/register)
- JWT token-based authentication
- React Context for state management
- Beautiful, responsive UI with gradient design
- Modern CSS with animations and hover effects

## Development Guidelines
- Use TypeScript for all React components
- Follow React hooks patterns
- Use async/await for API calls
- Handle errors gracefully with user feedback
- Maintain consistent styling with the gradient theme
- Use proper form validation
- Implement loading states for better UX

## API Endpoints
- POST `/api/auth/register` - User registration
- POST `/api/auth/login` - User login
- GET `/api/auth/profile` - Get user profile (protected)
- GET `/api/test` - Test server connection

## Security
- Passwords are hashed with bcrypt
- JWT tokens for authentication
- CORS enabled for cross-origin requests
- Environment variables for sensitive data
