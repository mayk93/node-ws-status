import { StatusCode, OpCode } from '../src';

describe('node-ws-status', () => {
  it('StatusCode', () => {
    expect(StatusCode.NORMAL_CLOSURE).toEqual(1000);
    expect(StatusCode[1000]).toEqual('Normal closure');
  });

  it('OpCode', () => {
    expect(OpCode.CONTINUATION).toEqual(0);
    expect(OpCode[0]).toEqual('Continuation frame');
  });
});
