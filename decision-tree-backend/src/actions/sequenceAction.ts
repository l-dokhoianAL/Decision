import { BaseAction } from "./baseAction";

export class SequenceAction extends BaseAction {
  constructor(private actions: BaseAction[]) {
    super();
  }

  execute() {
    this.actions.forEach((action: BaseAction) => action.execute());
  }
}
