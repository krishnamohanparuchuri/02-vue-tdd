import { shallowMount } from '@vue/test-utils';
import Decrement from './Decrement.vue';

it('decrement the value when button is clicked', async () => {
  const expectedLabel = '9';
  const wrapper = shallowMount(Decrement);
  let button = wrapper.find('button');
  let div = wrapper.find('div')
  await button.trigger('click');
  let content = div.text();
  expect(content).toBe(expectedLabel)
})
