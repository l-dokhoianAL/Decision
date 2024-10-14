import { BaseAction } from "../actions/baseAction";
import { ActionFactory } from '../services/actionFactory';

export class DecisionTree {
  root: BaseAction;

  constructor(root: BaseAction) {
    this.root = root;
  }

  execute(p0: any) {
    this.root.execute();
  }

  static fromJSON(json: string): DecisionTree {
    const data = JSON.parse(json);
    const rootAction = ActionFactory.createAction(data);
    return new DecisionTree(rootAction);
  }
}
