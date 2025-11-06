import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { tenantMiddleware } from './middleware/tenant';
import { errorHandler } from './middleware/error';

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());+
// Lightweight health endpoint before tenant resolution so we can verify server is up
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

// Tenant resolution middleware (will validate tenant on incoming requests)
app.use(tenantMiddleware);

// Routes will be added here

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/saas-platform';

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  });

export default app;