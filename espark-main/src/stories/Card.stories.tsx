import type { Meta, StoryObj } from '@storybook/react';
import MediaCard from './Card';

const meta = {
    title: 'Example/MediaCard',
    component: MediaCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MediaCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        name:"Data Science",
        source:"/static/images/cards/contemplative-reptile.jpg",
        children:"Data science is the study of data to extract meaningful insights for business. It is a multidisciplinary approach that combines principles and practices from the fields of mathematics, statistics, artificial intelligence, and computer engineering to analyze large amounts of data."
    },
} satisfies Story;