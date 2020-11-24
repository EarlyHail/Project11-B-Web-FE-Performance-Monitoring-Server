import Router from 'koa-router';

import controllers from './controllers';

export default async () => {
  const router = new Router();
  const controll: any = await controllers();

  //   get
  router.get('/test', controll.getTest);

  //   post
  router.post('/test', controll.addTest);

  //   put
  //   delete
  return router;
};