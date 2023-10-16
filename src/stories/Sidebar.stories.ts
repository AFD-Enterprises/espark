import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar, SidebarItem } from './Sidebar';

const meta = {
    title: 'Example/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

let sidebarItems = [
    {
        label: 'Workspace',
        icon: 'workspaces',
        link: '#',
    } satisfies SidebarItem,
    {
        label: 'Resources',
        icon: 'folder_copy',
        link: '#',
    } satisfies SidebarItem,
    {
        label: 'My Account',
        icon: 'person',
        link: '#',
    } satisfies SidebarItem,
] satisfies SidebarItem[];

export const Default: Story = {
    args: {
        items: sidebarItems,
        fabIcon: 'design_services'
    },
} satisfies Story;