import { Request, Response } from 'express';
import { DecisionTree } from '../models/tree';

export class TreeController {
  static async executeTree(req: Request, res: Response) {
    try {
      const decisionTree = DecisionTree.fromJSON(JSON.stringify(req.body));
      decisionTree.execute(req.body.context || {});
      res.send('Tree executed successfully');
    } catch (err) {
      res.status(500).send(`Error executing tree: ${err instanceof Error ? err.message : 'Unknown error occurred'}`);
    }
  }
}