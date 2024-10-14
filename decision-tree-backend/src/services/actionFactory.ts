import { BaseAction } from '../actions/baseAction';
import { SendSMSAction } from '../actions/sendSMSAction';
import { SendEmailAction } from '../actions/sendEmailAction';
import { ConditionAction } from '../actions/conditionAction';
import { LoopAction } from '../actions/loopAction';
import { SequenceAction } from '../actions/sequenceAction';

export class ActionFactory {
  static createAction(actionData: any): BaseAction {
    switch (actionData.type) {
      case 'Sequence':
        const actions = actionData.actions.map((action: BaseAction) => ActionFactory.createAction(action))
      return new SequenceAction(actions)
      case 'SendSMS':
        return new SendSMSAction(actionData.phoneNumber);
      case 'SendEmail':
        return new SendEmailAction(actionData.sender, actionData.receiver);
      case 'Condition':
        const trueAction = ActionFactory.createAction(actionData.trueAction);
        const falseAction = actionData.falseAction ? ActionFactory.createAction(actionData.falseAction) : null;
        return new ConditionAction(actionData.expression, trueAction, falseAction);
      case 'Loop':
        const loopAction = ActionFactory.createAction(actionData.actions);
        return new LoopAction(actionData.iterations, loopAction);
      default:
        throw new Error('Unknown action type');
    }
  }
}
