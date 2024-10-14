import { BaseAction } from "./baseAction";

export class ConditionAction extends BaseAction {
  constructor(private expression: string, private trueAction: BaseAction, private falseAction: BaseAction | null) {
    super();
  }

  execute() {
    const result = eval(this.expression); 
    if (result) {
      this.trueAction.execute();
    } else if (this.falseAction) {
      this.falseAction.execute();
    }
  }
}
