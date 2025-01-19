# Engage360 UI Library 🚀

![npm version](https://img.shields.io/npm/v/engage360-ui?color=16a34a&style=flat-square)
![license](https://img.shields.io/npm/l/engage360-ui?color=16a34a&style=flat-square)
![downloads](https://img.shields.io/npm/dw/engage360-ui?color=16a34a&style=flat-square)

Engage360 UI is a modern React-based UI components library designed for the Engage360 project. Built with **Tailwind CSS** and **TypeScript**, it provides scalable, reusable, and customizable components for seamless integration in your React applications.

---

## ✨ Features

- **Reusable Components**: Ready-to-use UI components like Buttons, Avatars, and Inputs.
- **Tailwind CSS**: Fully styled with Tailwind for consistent design and easy customization.
- **Storybook Integration**: Preview and test components interactively.
- **TypeScript Support**: Type-safe components for better developer experience.
- **Tree-Shakable**: Optimized for performance and scalability.

---

## 📦 Installation

Install the package via npm:

```bash
npm install engage360-ui
```

or with yarn:

```bash
yarn add engage360-ui
```

---

## 🚀 Usage

Here's an example of how to use the `Button` component:

```tsx
import React from "react";
import { Button } from "engage360-ui";

export default function App() {
  return <Button label="Click Me!" />;
}
```

### Components Available
- `Avatar`: For user profile images.
- `Button`: Styled buttons with different states.
- `Input`: Form input fields.

Each component is documented and previewable in the [Storybook](#storybook).

---

## 📖 Storybook

Engage360 UI comes with an integrated Storybook for interactive component development. To view the Storybook:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the Storybook server:
   ```bash
   npm run storybook
   ```

Storybook will open at `http://localhost:6006` in your browser.

---

## 🔧 Project Structure

```plaintext
src/
├── components/
│   ├── Avatar/
│   │   ├── Avatar.tsx
│   │   ├── Avatar.module.css
│   │   └── Avatar.stories.tsx
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.module.css
│   │   └── Button.stories.tsx
│   └── Input/
│       ├── Input.tsx
│       ├── Input.module.css
│       └── Input.stories.tsx
├── index.ts
└── index.css
```

---

## 🛠️ Development

To set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/arin-paliwal/Engage360-CustomUI-NPM-Package.git
   ```
2. Navigate to the project folder:
   ```bash
   cd Engage360-CustomUI-NPM-Package
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.

---

## 🌟 Show Your Support

If you find this library useful, please ⭐️ the repository and share it with others!

---

## 📭 Contact

For any questions or feedback, feel free to open an [issue](https://github.com/arinpaliwal/engage360-ui/issues) or contact the author directly.
