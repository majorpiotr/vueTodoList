import { shallowMount } from '@vue/test-utils'
import Register from '@/components/Register.vue'

describe('Register.vue Test', () => {
  describe('When Loaded', () => {
    it('It has all elements', () => {
      const wrapper = shallowMount(Register);
      expect(wrapper.find("#email").exists()).toBe(true);
      expect(wrapper.find("#Password").exists()).toBe(true);
      expect(wrapper.find("#Password2").exists()).toBe(true);
      expect(wrapper.find("#submitRegister").exists()).toBe(true);
      expect(wrapper.find("#errorMail").exists()).toBe(true);
      expect(wrapper.find("#errorPassword").exists()).toBe(true);
    })  
    it('After giving correct data, button is enable and there are no erro messages',async  () => {
      const wrapper = shallowMount(Register);    
      expect(wrapper.find("#submitRegister").classes()).toContain('disabled')
      await wrapper.setData({ mail: "NewTestUser@gmail.com" })
      expect(wrapper.find("#errorMail").exists()).toBe(false);
      await wrapper.setData({ passwordConfirm: "123456789" })
      await wrapper.setData({ password: "123456789" })
      expect(wrapper.find("#errorPassword").exists()).toBe(false);
    })  
  })
})