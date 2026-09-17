import { Router } from 'express';
import healthRoutes from './health.routes.js';
import adminRoutes from './admin.routes.js';
import blogRoutes from './blog.routes.js';
import knowledgeRoutes from './knowledge.routes.js';
import uploadRoutes from './upload.routes.js';

const apiRouter = Router();

// Mount individual feature routes
apiRouter.use('/', healthRoutes);
apiRouter.use('/admin', adminRoutes);
apiRouter.use('/blogs', blogRoutes);
apiRouter.use('/knowledge', knowledgeRoutes);
apiRouter.use('/upload', uploadRoutes);

export default apiRouter;

