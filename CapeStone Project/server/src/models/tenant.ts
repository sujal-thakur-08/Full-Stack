import mongoose, { Document, Schema } from 'mongoose';

interface Tenant {
  name: string;
  domain: string;
  theme: {
    primaryColor: string;
    secondaryColor: string;
    logo?: string;
    font: string;
  };
  features: {
    modules: string[];
    limits: {
      users: number;
      storage: number;
    };
  };
}

interface TenantDocument extends Omit<Tenant, 'id'>, Document {}

const tenantSchema = new Schema<TenantDocument>({
  name: { type: String, required: true },
  domain: { type: String, required: true, unique: true },
  theme: {
    primaryColor: { type: String, default: '#000000' },
    secondaryColor: { type: String, default: '#ffffff' },
    logo: { type: String },
    font: { type: String, default: 'Arial' }
  },
  features: {
    modules: [{ type: String }],
    limits: {
      users: { type: Number, default: 5 },
      storage: { type: Number, default: 1024 } // in MB
    }
  }
}, {
  timestamps: true
});

// Create compound indexes for better query performance
tenantSchema.index({ domain: 1 });

export const TenantModel = mongoose.model<TenantDocument>('Tenant', tenantSchema);