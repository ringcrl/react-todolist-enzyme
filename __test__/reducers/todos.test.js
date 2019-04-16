import todos from '../../src/reducers/todos';
import * as types from '../../src/constants';

describe('todos reducer', () => {
  it('初始 state 正确', () => {
    expect(todos(undefined, {})).toEqual([
      {
        text: 'Todo1',
        completed: false,
        id: 0
      }
    ]);
  });

  it('ADD_TODO 结果正确', () => {
    expect(
      todos([], {
        type: types.ADD_TODO,
        text: 'Hello World'
      })
    ).toEqual([
      {
        text: 'Hello World',
        completed: false,
        id: 0
      }
    ]);
  });

  it('DELETE_TODO 结果正确', () => {
    expect(
      todos([], {
        type: types.DELETE_TODO,
        id: 0
      })
    ).toEqual([]);
  });
});
