/* eslint-disable prettier/prettier */
import {NodePlopAPI} from 'plop';

module.exports = function (plop: NodePlopAPI): void {
  plop.setHelper('preCurly', (t) => `{${t}`);
  plop.setHelper('postCurly', (t) => `${t}}`);
  plop.setHelper('curly', (t) => `{${t}}`);
  plop.setGenerator('component', {
    description: 'create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Please provide component name:',
      },
      {
        type: 'list',
        name: 'type',
        choices: ['core', 'layouts', 'modules', 'primitives'],
        message: 'Please provide the component type:',
      },
      {
        type: 'confirm',
        name: 'smart',
        message: '',
        default: false,
      },
    ],
    actions: (data) => {
      if (data?.smart) {
        return [
          {
            type: 'add',
            path:
              'src/components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.props.ts',
            templateFile: 'plop-templates/component/props.hbs',
          },
          {
            type: 'add',
            path:
              'src/components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.view.tsx',
            templateFile: 'plop-templates/component/view.hbs',
          },
          {
            type: 'add',
            path:
              'src/components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.index.ts',
            templateFile: 'plop-templates/component/index.hbs',
          },
          {
            type: 'add',
            path:
              'src/components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.container.tsx',
            templateFile: 'plop-templates/component/container.hbs',
          },
        ];
      }
      return [
        {
          type: 'add',
          path:
            'src/components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.props.ts',
          templateFile: 'plop-templates/component/dumbProps.hbs',
        },
        {
          type: 'add',
          path:
            'src/components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.view.tsx',
          templateFile: 'plop-templates/component/dumbView.hbs',
        },
        {
          type: 'add',
          path: 'src/components/{{type}}/{{pascalCase name}}/index.ts',
          templateFile: 'plop-templates/component/dumbIndex.hbs',
        },
      ];
    },
  });

  plop.setGenerator('route', {
    description: 'create a route',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Please provide route name:',
      },
      {
        type: 'list',
        name: 'root',
        choices: ['Auth', 'Main'],
        message: 'Please provide the root route:',
      },
    ],
    actions: (data) => {
      const routeEntryPattern = {
        Auth: /(\/\/ AUTH ROUTE ENTRY)/gi,
        Main: /(\/\/ MAIN ROUTE ENTRY)/gi,
      };
      return [
        {
          type: 'add',
          path:
            'src/routes/{{root}}/{{pascalCase name}}/{{pascalCase name}}.container.tsx',
          templateFile: 'plop-templates/route/container.hbs',
        },
        {
          type: 'add',
          path:
            'src/routes/{{root}}/{{pascalCase name}}/{{pascalCase name}}.props.ts',
          templateFile: 'plop-templates/route/props.hbs',
        },
        {
          type: 'add',
          path:
            'src/routes/{{root}}/{{pascalCase name}}/{{pascalCase name}}.view.tsx',
          templateFile: 'plop-templates/route/view.hbs',
        },
        {
          type: 'add',
          path: 'src/routes/{{root}}/{{pascalCase name}}/index.ts',
          templateFile: 'plop-templates/route/index.hbs',
        },
        {
          type: 'append',
          unique: true,
          path: 'src/routes/{{root}}/index.tsx',
          template:
            "import {{pascalCase name}} from 'routes/{{root}}/{{pascalCase name}}'",
          pattern: /(\/\/ IMPORT ROUTE)/gi,
        },
        {
          type: 'append',
          unique: true,
          path: 'src/routes/{{root}}/index.tsx',
          templateFile: 'plop-templates/route/routeEntry.hbs',
          // @ts-ignore
          pattern: '{/* STACK ENTRY */}',
        },
        {
          type: 'append',
          unique: true,
          path: 'src/constants/routes.ts',
          template:
            `  {{constantCase root}}_{{constantCase name}} = '{{constantCase root}}_{{constantCase name}}',`,
          // @ts-ignore
          pattern: routeEntryPattern[data?.root || 'Auth'],
        },
        {
          type: 'append',
          unique: true,
          path: 'src/types/routes.ts',
          template:
            `  [ROUTES.{{constantCase root}}_{{constantCase name}}]: undefined;`,
          // @ts-ignore
          pattern: routeEntryPattern[data?.root || 'Auth'],
        },
      ];
    },
  });
};
