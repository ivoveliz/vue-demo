import { test, vi, describe, expect } from 'vitest';
import { mount } from '@vue/test-utils'
import HomeView from '../views/HomeView.vue'
import * as todosSetup from '../todosSetup'
import { computed } from 'vue';

const setupMock = {
    todosIncompleted: computed(() => []),
    todosCompleted: computed(() => []),
    toggle: vi.fn(),
    deleteTodo: vi.fn(),
    add: vi.fn(),
  };
  
describe('mi primer test',() =>{

    test('testando componente',() =>{
        const wrapper = mount(HomeView);
        expect(wrapper.text()).toContain('incompletos');
    });

    test('List is empty', () => {
        const spy = vi.spyOn(todosSetup, 'todosFactory').mockReturnValue({
          ...setupMock
        });
        const wrapper = mount(HomeView);
    
        expect(wrapper.text()).toContain('incompletos');
        expect(wrapper.text()).toContain('nada que hacer :)');
      });
    

});