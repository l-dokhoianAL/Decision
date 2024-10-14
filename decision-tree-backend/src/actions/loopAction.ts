import { BaseAction } from "./baseAction";

export class LoopAction extends BaseAction {
  constructor(private iterations: number, private action: BaseAction) {
    super();
  }

  execute() {
    for (let i = 0; i < this.iterations; i++) {
      this.action.execute();
    }
  }
}
