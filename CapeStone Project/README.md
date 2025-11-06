# Multi-Tenant SaaS Dashboard

A full-stack multi-tenant SaaS application with React frontend and Node.js backend, featuring tenant isolation, dynamic theming, and comprehensive admin capabilities.

## Features

- **Multi-Tenant Architecture**: Complete data isolation between tenants
- **Dynamic Theming**: Per-tenant branding and customization
- **Secure Authentication**: JWT-based auth with tenant context
- **Admin Console**: Tenant management and customization interface
- **API Security**: Middleware for tenant isolation
- **Asset Management**: Tenant-specific asset storage
- **Performance Optimized**: Proper indexing and caching
- **Containerized**: Docker setup for development and deployment

## Tech Stack

- **Frontend**: React with TypeScript
- **Backend**: Node.js with Express and TypeScript
- **Database**: MongoDB
- **Authentication**: JWT
- **Containerization**: Docker
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS

## Getting Started

### Prerequisites

- Node.js >= 16
- Docker and Docker Compose
- MongoDB (local development)

### Development Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development environment:
   ```bash
   # With Docker
   npm run docker:up

   # Without Docker
   npm start
   ```

4. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:4000

## Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── features/      # Feature-based modules
│   │   ├── hooks/        # Custom React hooks
│   │   ├── services/     # API services
│   │   └── theme/        # Theming system
├── server/                # Express backend
│   ├── src/
│   │   ├── controllers/  # Route controllers
│   │   ├── middleware/   # Custom middleware
│   │   ├── models/       # MongoDB models
│   │   └── services/     # Business logic
└── shared/               # Shared types and utilities
```

## Documentation

Detailed documentation for each component is available in their respective directories.

## License

This project is licensed under the MIT License - see the LICENSE file for details.