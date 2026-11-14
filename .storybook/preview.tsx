import type { Preview } from "@storybook/nextjs-vite";
import { useEffect } from "react";
import "../app/globals.css";

const preview: Preview = {
  globalTypes: {
    theme: {
      name: "Theme Mode",
      description: "Figma Foundation color mode",
      defaultValue: "user-light",
      toolbar: {
        icon: "mirror",
        items: [
          { value: "user-light", title: "User - Light" },
          { value: "user-dark", title: "User - Dark" },
          { value: "panel-light", title: "Panel - Light" },
          { value: "panel-dark", title: "Panel - Dark" },
        ],
        dynamicTitle: true,
      },
    },
    direction: {
      name: "Direction",
      description: "Text direction",
      defaultValue: "rtl",
      toolbar: {
        icon: "paragraph",
        items: [
          { value: "rtl", title: "RTL (fa)" },
          { value: "ltr", title: "LTR (en)" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = (context.globals.theme as string) || "user-light";
      const dir = (context.globals.direction as string) || "rtl";

      useEffect(() => {
        const root = document.documentElement;
        root.setAttribute("data-theme", theme);
        root.setAttribute("dir", dir);
      }, [theme, dir]);

      return (
        <div
          data-theme={theme}
          dir={dir}
          className="bg-sf-primary text-text-primary p-xs rounded-md"
        >
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
