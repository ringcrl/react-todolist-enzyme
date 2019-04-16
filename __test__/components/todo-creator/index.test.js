import React from 'react';
import TodoCreator from '../../../src/components/todo-creator/index';
import { shallow } from 'enzyme';

const setup = () => {
  // 模拟 props
  const props = {
    addTodo: jest.fn()
  };

  const wrapper = shallow(<TodoCreator {...props} />);

  return {
    props,
    wrapper
  };
};

describe('components', () => {
  describe('TodoCreator', () => {
    it('render input 输入框', () => {
      const { wrapper } = setup();

      expect(wrapper.find('input').length).toBe(1);
    });

    it('如果输入框有输入内容，回车后 addTodo reducer 被调用', () => {
      const { wrapper, props } = setup();
      const mockEventObj = {
        key: 'Enter',
        target: {
          value: 'TEST'
        }
      };

      wrapper.find('input').simulate('keydown', mockEventObj);
      expect(props.addTodo).toBeCalled();
    });

    it('如果输入框没有输入内容，回车后 addTodo reducer 不被调用', () => {
      const { wrapper, props } = setup();
      const mockEventObj = {
        key: 'Enter',
        target: {
          value: ''
        }
      };

      wrapper.find('input').simulate('keydown', mockEventObj);
      expect(props.addTodo).not.toBeCalled();
    });

    it('addTodo 之后清空输入框', () => {
      const { wrapper } = setup();
      const mockEventObj = {
        key: 'Enter',
        target: {
          value: 'TEST'
        }
      };

      wrapper.find('input').simulate('keydown', mockEventObj);
      expect(wrapper.find('input').text()).toBe('');
    });
  });
});
