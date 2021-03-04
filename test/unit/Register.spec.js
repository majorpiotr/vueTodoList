import { shallowMount } from '@vue/test-utils'
import Register from '@/components/Register.vue'


describe('Register.vue Test', () => {
  describe('When Loaded', () => {
    it('It has all elements', () => {
    // render the component
    
    const wrapper = shallowMount(Register);

    // check the name of the component
    expect(wrapper.find("#email").exists()).toBe(true);
    expect(wrapper.find("#Password").exists()).toBe(true);
    expect(wrapper.find("#Password2").exists()).toBe(true);



    // check that the title is rendered
    //expect(wrapper.text()).toMatch('Vue Project')
  })

  }
})