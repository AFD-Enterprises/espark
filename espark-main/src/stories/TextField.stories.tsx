import type { Meta, StoryObj } from '@storybook/react';

import CustomizedInputsStyleOverrides from './TextField';

const meta = {
    title: 'Example/CustomizedInputsStyleOverrides',
    component: CustomizedInputsStyleOverrides,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof CustomizedInputsStyleOverrides>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: 'test',
    },
} satisfies Story;