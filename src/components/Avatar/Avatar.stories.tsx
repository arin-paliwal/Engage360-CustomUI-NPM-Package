import { Meta, StoryObj } from "@storybook/react";
import Avatar from "./Avatar";

const meta = {
  title: "Avatar",
  component: Avatar,
  tags: ["Avatar", "Component"],
  parameters: {
    controls: { layout: "centered" },
  },
} as Meta;

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    name: "React Tailwind",
    size: "md",
    borderRadius: "md",
  },
};

export const Small: Story = {
  args: {
    name: "Jane Doe",
    size: "sm",
    borderRadius: "full",
  },
};

export const Large: Story = {
  args: {
    name: "Arin Paliwal",
    size: "md",
    borderRadius: "xl",
  },
};

export const NoName: Story = {
  args: {
    name: "",
    size: "md",
    borderRadius: "md",
  },
};
