// @flow

type CallType = 'INCOMING' | 'OUTGOING' | 'MISSED';

type Call = {
  callType: CallType,
  phoneNumber: string,
  timestamp: string,
};

type TimeStampFunction = () => string;

let defaultCreateTimestamp = () => new Date().toISOString();

function createCallLog(createTimestamp: TimeStampFunction = defaultCreateTimestamp) {
  let callLog: Array<Call> = [];

  function addCall(callType: CallType, phoneNumber: string) {
    callLog.push({
      callType,
      phoneNumber,
      timestamp: createTimestamp(),
    });
  }

  function getRecent() {
    return callLog;
  }

  return {
    addCall,
    getRecent,
  };
}

export default createCallLog;