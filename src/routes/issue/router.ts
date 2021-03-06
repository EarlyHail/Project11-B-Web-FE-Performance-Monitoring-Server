import Router from 'koa-router';

import controllers from './controllers';

export default async (): Promise<Record<string, unknown>> => {
  const router = new Router();
  const controller: any = await controllers();

  //   get
  router.get('/issues', controller.getIssues);
  router.get('/issue/:issueId', controller.getIssue);

  return router;
};
