import React from 'react';
import TodoItem from '../../../src/components/todo-item/index';
import { shallow } from 'enzyme';

const setup = () => {
  // 模拟 props
  const props = {
    todo: {
      id: 1,
      text: 'TEST',
      completed: false
    },
    deleteTodo: jest.fn()
  };

  const wrapper = shallow(<TodoItem {...props} />);

  return {
    props,
    wrapper
  };
};

describe('components', () => {
  describe('TodoItem', () => {
    it('Todo item 被正确渲染', () => {
      const { wrapper } = setup();

      expect(wrapper.find('input').length).toBe(1);
      expect(wrapper.find('span').length).toBe(1);
    });

    it('input 改变时删除 item', () => {
      const { wrapper, props } = setup();

      wrapper.find('input').simulate('change');
      expect(props.deleteTodo).toBeCalledWith(1);
    });

    it('渲染 item 的 title', () => {
      const { wrapper, props } = setup();

      expect(wrapper.find('.todo-title').text()).toBe(props.todo.text);
    });
  });
});
