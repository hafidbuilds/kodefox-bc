// @flow

type CallType = 'INCOMING' | 'OUTGOING' | 'MISSED';

type Call = {
  callType: CallType,
  phoneNumber: string,
  timestamp: string
}

type TimestampFunc = () => string;

class CreateCallLog {
  callLog: Array<Call> = []

  // constructor() {
  //   this.callLog = []
  // }

  createTimestamp() {
    return new Date().toISOString()
  }

  addCall(callType: CallType, phoneNumber: string, defaultTimestampFunc: TimestampFunc = this.createTimestamp) {
    this.callLog.push(
      {
        callType: callType, 
        phoneNumber: phoneNumber,
        timestamp: defaultTimestampFunc()
      }
    )
  }

  getRecent() {
    return this.callLog
  }
}

export default CreateCallLog
// const callLog = new createCallLog()
// callLog.addCall('INCOMING', '085848752597')
// console.log(callLog.getRecent())