import { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { Mail, Github, Loader2 } from "lucide-react";

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'default',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '1rem' }}>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon"><Mail /></Button>
    </div>
  ),
};