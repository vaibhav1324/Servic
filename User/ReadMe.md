# Servic - User

## ⬇️ Install

### Requirements

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

### Installation Steps

1. Clone the repo
2. Install dependencies by running `yarn` inside the project folder

## 🎉 Running the app

- Development

  `yarn start`

- Production

  `yarn start:prod`

## 📂 Project Structure

```
Root
├── plop-templates/     (code generator templates)
│   ├── component
│   └── route
├── src/                (project source files)
│   ├── components/     (resuable components)
│   |   ├── core
│   |   ├── layouts
│   |   ├── modules
│   |   ├── primitives
│   ├── routes          (contains all the pages / routes)
│   |   ├── index.tsx   (decides the routes)
│   |   ├── Auth   (Auth Navigator)
│   |   ├── Main   (Main Navigator)
│   └── App.tsx
│
├── .env                (generated file based on script run)
├── .env.prod           (production env to generate .env)
├── plopfile.ts         (code generator setup)
└── package.json
```

## 📋 Coding Standards

### Components

The components are separated into four(4) categories to further organize the project.

**core** - core UI components e.g. Header

**layouts** - components that display `children` or contents in a certain manner, e.g. Container, Card, Grid, Column, Row

**modules** - components specific to a feature that can be reused on other places e.g. BuyCard, SellRequestModal

**primitives** - core UI components e.g. Inputs, Buttons

### Screens/Components structure

- Use hooks: for state and lifecycle
- Separate the complex/stateful logic into the 'MyComponent.container.tsx' file
- Define template with minimal logic in 'MyComponent.view.tsx' file
- Define the props in your 'MyComponent.props.ts' file
- For readability, reduce the lines of code in view or container files by storing configurations, functions, and other constants that can be outside the component on 'MyComponent.utils.ts' file. For example:
  - formik validation schema
  - data transform functions
  - enums / objects only relevant to the component or route

## 📇 Code generator

`yarn plop`

**Components**

_example_

![alt text](./assets/docs/component-example.png)

This will create

```
└── components
    └── <component category>
        └── MyNewComponent (New)
            ├── MyNewComponent.container.tsx (optional)
            ├── MyNewComponent.props.ts
            ├── MyNewComponent.view.tsx
            └── index.tsx
```

**Routes**

_example_

`yarn plop route Example Main`

This will create

```
└── routes
    └── <route root>
        └── Example (New)
            ├── Example.container.tsx
            ├── Example.props.ts
            ├── Example.view.tsx
            └── index.tsx
```

and entries in `src/constants/routes.ts` as well as in `src/routes/<root>/index.tsx`

## ⤵️ Data Flow

Listed below are the approach for data flow.

- react-query for api calls
- formik for forms
- simple passing of props from parent to child components
- react navigation - for simple transfer of data to another screen
