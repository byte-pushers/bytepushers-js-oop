var allTestFiles = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/[Ss]pec\.js$/.test(file)) {
            allTestFiles.push(file);
        }
    }
}

require.config({
  baseUrl: '/base',

  paths: {
      'bytepushers': 'src/main/javascript/software.bytepushers.oop',
      'Person': 'src/test/javascript/support/person',
      'Employee': 'src/test/javascript/support/employee'
  },

  shim: {
      bytepushers: {
          exports: 'BytePushers'
      },
      Person: {
          deps: ['bytepushers']
      },
      Employee: {
          deps: ['bytepushers', 'Person']
      }
  },

  deps: allTestFiles,

  callback: window.__karma__.start
});
