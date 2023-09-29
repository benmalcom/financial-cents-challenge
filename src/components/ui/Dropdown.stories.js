import Dropdown from './Dropdown.vue';
import Button from './Button.vue';

const listItemClass =
  'flex px-4 pt-1 h-8 text-base cursor-pointer items-center box-border hover:bg-gray-20 hover:text-gray-60';
export default {
  components: { Dropdown },
  title: 'Components/UI/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered'
  }
};

const Template = (args) => ({
  components: { Dropdown, Button },
  setup: () => ({ args }),
  template: `<Dropdown v-bind="args">'
               <template v-if="args.trigger" #triggerElement='{toggleDropdown}'>
                 <Button variant='success' @click='toggleDropdown' 
                         class='story-dropdown-menu-trigger'>${args.trigger}</Button>
               </template>
               <template v-if="args.default" #default>${args.default}</template>
           </Dropdown>`
});

export const Default = Template.bind({});
Default.args = {
  default: `<ul class="story-dropdown-menu">
             <li class="${listItemClass}">First item</li>
             <li class="${listItemClass}">Second item</li>
        </ul>
  `,
  trigger: `<span>Click me</span>`
};
