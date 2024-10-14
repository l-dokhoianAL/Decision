import { BaseAction } from "./baseAction";

export class SendSMSAction extends BaseAction {
  constructor(private phoneNumber: string) {
    super();
  }

  execute() {
    console.log(`Sending SMS to ${this.phoneNumber}`);
  }
}