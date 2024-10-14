import { BaseAction } from "./baseAction";

export class SendEmailAction extends BaseAction {
  constructor(private sender: string, private receiver: string) {
    super();
  }

  execute() {
    console.log(`Sending email from ${this.sender} to ${this.receiver}`);
  }
}