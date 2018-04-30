import CreateCallLog from '../callLog.js';

it('should add and return a call', () => {
  let callLog = CreateCallLog();
  callLog.addCall('INCOMING', '085848752597', () => 'bbbbbbb' );
  let recentList = callLog.getRecent();
  
  expect(recentList).toBeInstanceOf(Array);
  expect(recentList.length).toEqual(1);
  expect(recentList[0]).toEqual({
    callType: 'INCOMING',
    phoneNumber: '085848752597',
    timestamp: 'bbbbbbb',
  });
});