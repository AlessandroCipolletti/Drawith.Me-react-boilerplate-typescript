/**
 * page Generator
 */

const componentExists = require('../utils/componentExists')

module.exports = {
  description: 'Add a app page',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Form',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container or page with this name already exists'
            : true
        }

        return 'The name is required'
      },
    },
    {
      type: 'confirm',
      name: 'memo',
      default: false,
      message: 'Do you want to wrap your component in React.memo?',
    },
    {
      type: 'confirm',
      name: 'wantHeaders',
      default: false,
      message: 'Do you want headers?',
    },
    {
      type: 'confirm',
      name: 'wantActionsAndReducer',
      default: true,
      message:
        'Do you want an actions/constants/selectors/reducer tuple for this page?',
    },
    {
      type: 'confirm',
      name: 'wantSaga',
      default: true,
      message: 'Do you want sagas for asynchronous flows? (e.g. fetching data)',
    },
    {
      type: 'confirm',
      name: 'wantMessages',
      default: true,
      message: 'Do you want i18n messages (i.e. will this component use text)?',
    },
    {
      type: 'confirm',
      name: 'wantLoadable',
      default: true,
      message: 'Do you want to load resources asynchronously?',
    },
  ],
  actions: data => {
    // Generate index.js and index.test.js
    const actions = [
      {
        type: 'add',
        path: '../../app/pages/{{properCase name}}/index.js',
        templateFile: './page/index.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../app/pages/{{properCase name}}/tests/index.test.js',
        templateFile: './page/test.js.hbs',
        abortOnFail: true,
      },
    ]

    // If component wants messages
    if (data.wantMessages) {
      actions.push({
        type: 'add',
        path: '../../app/pages/{{properCase name}}/messages.js',
        templateFile: './page/messages.js.hbs',
        abortOnFail: true,
      })
    }

    // If they want actions and a reducer, generate actions.js, constants.js,
    // reducer.js and the corresponding tests for actions and the reducer
    if (data.wantActionsAndReducer) {
      // Actions
      actions.push({
        type: 'add',
        path: '../../app/pages/{{properCase name}}/actions.js',
        templateFile: './page/actions.js.hbs',
        abortOnFail: true,
      })
      actions.push({
        type: 'add',
        path: '../../app/pages/{{properCase name}}/tests/actions.test.js',
        templateFile: './page/actions.test.js.hbs',
        abortOnFail: true,
      })

      // Constants
      actions.push({
        type: 'add',
        path: '../../app/pages/{{properCase name}}/constants.js',
        templateFile: './page/constants.js.hbs',
        abortOnFail: true,
      })

      // Selectors
      actions.push({
        type: 'add',
        path: '../../app/pages/{{properCase name}}/selectors.js',
        templateFile: './page/selectors.js.hbs',
        abortOnFail: true,
      })
      actions.push({
        type: 'add',
        path:
          '../../app/pages/{{properCase name}}/tests/selectors.test.js',
        templateFile: './page/selectors.test.js.hbs',
        abortOnFail: true,
      })

      // Reducer
      actions.push({
        type: 'add',
        path: '../../app/pages/{{properCase name}}/reducer.js',
        templateFile: './page/reducer.js.hbs',
        abortOnFail: true,
      })
      actions.push({
        type: 'add',
        path: '../../app/pages/{{properCase name}}/tests/reducer.test.js',
        templateFile: './page/reducer.test.js.hbs',
        abortOnFail: true,
      })
    }

    // Sagas
    if (data.wantSaga) {
      actions.push({
        type: 'add',
        path: '../../app/pages/{{properCase name}}/saga.js',
        templateFile: './page/saga.js.hbs',
        abortOnFail: true,
      })
      actions.push({
        type: 'add',
        path: '../../app/pages/{{properCase name}}/tests/saga.test.js',
        templateFile: './page/saga.test.js.hbs',
        abortOnFail: true,
      })
    }

    if (data.wantLoadable) {
      actions.push({
        type: 'add',
        path: '../../app/pages/{{properCase name}}/Loadable.js',
        templateFile: './component/loadable.js.hbs',
        abortOnFail: true,
      })
    }

    actions.push({
      type: 'prettify',
      path: '/pages/',
    })

    return actions
  },
}
