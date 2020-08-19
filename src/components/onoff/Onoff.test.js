import { shallowMount } from '@vue/test-utils';
import Onoff from './Onoff.vue'


it('should display "on" when rendered', () => {

  //arrange
  const expectedLabel = 'On'
  const wrapper = shallowMount(Onoff);
  let button = wrapper.find('button');

  //act
  let content = button.text();

  // assert
  expect(content).toBe(expectedLabel)
})

it('should display "off" when clicked', async () => {
  const expectedLabel = 'Off'
  const wrapper = shallowMount(Onoff);
  let button = wrapper.find('button');
  await button.trigger('click');
  let content = button.text();
  expect(content).toBe(expectedLabel)
})

it('should display "on" when clicked again', async () => {
  const expectedLabel = 'On'
  const wrapper = shallowMount(Onoff);
  let button = wrapper.find('button');
  await button.trigger('click');
  await button.trigger('click');

  let content = button.text();
  expect(content).toBe(expectedLabel)
})
