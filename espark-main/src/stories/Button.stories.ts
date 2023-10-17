import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Filled: Story = {
  args: {
    type: 'filled',
    label: 'Filled',
    action:()=>{console.log("hi")}
  },
} satisfies Story;

export const Outlined: Story = {
  args: {
    type: 'outlined',
    label: 'Outlined',
  },
} satisfies Story;

export const Elevated: Story = {
  args: {
    type: 'elevated',
    label: 'Elevated',
  },
} satisfies Story;

export const FilledTonal: Story = {
  args: {
    type: 'filled-tonal',
    label: 'Filled Tonal',
  },
} satisfies Story;
