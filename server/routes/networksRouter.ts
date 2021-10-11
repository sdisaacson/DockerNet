import express, { Request, Response } from 'express';
import networksController from '../controllers/networksController';
const router = express.Router();
// return array of network objects
router.get(
  '/',
  networksController.getNetworks,
  (req: Request, res: Response) => {
    console.log('pinged networks router');
    res.status(200).json(res.locals.networks);
  }
);

router.post(
  '/',
  networksController.createNetwork,
  networksController.getNetworks,
  (req: Request, res: Response) => {
    console.log('hello from network router post');
    res.status(200).json(res.locals.networks);
  }
);

router.delete(
  '/',
  networksController.deleteNetwork,
  networksController.getNetworks,
  (req: Request, res: Response) => {
    res.status(200).json(res.locals.networks);
  }
);

export default router;
