import { Request, Response, NextFunction } from 'express';

export interface TenantRequest extends Request {
  tenantId?: string;
}

export const tenantMiddleware = (
  req: TenantRequest,
  res: Response,
  next: NextFunction
) => {
  // Get tenant from subdomain
  const host = req.get('host') || '';
  const subdomain = host.split('.')[0];
  
  // Get tenant from header
  const tenantHeader = req.get('X-Tenant-ID');
  
  // Get tenant from URL path
  const tenantPath = req.path.split('/')[1];
  
  // Determine tenant ID from available sources
  const tenantId = tenantHeader || (subdomain !== 'www' ? subdomain : null) || tenantPath;
  
  if (!tenantId) {
    return res.status(400).json({ error: 'Tenant ID is required' });
  }
  
  // Attach tenant ID to request object
  req.tenantId = tenantId;
  
  next();
};