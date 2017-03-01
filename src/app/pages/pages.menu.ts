export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'chamados',
        data: {
          menu: {
            title: 'Chamados',
            icon: 'ion-ios-compose',
            selected: false,
            expanded: false,
            order: 100,
          }
        }
      },
      {
        path: 'equipamentos',
        data: {
          menu: {
            title: 'Equipamentos',
            icon: 'ion-mouse',
            selected: false,
            expanded: false,
            order: 100,
          }
        }
      },
      {
        path: 'editors',
        data: {
          menu: {
            title: 'Pagamentos',
            icon: 'ion-card',
            selected: false,
            expanded: false,
            order: 100,
          }
        }
      },
      {
        path: 'gestao-chamados',
        data: {
          menu: {
            title: 'Gestão de Chamados',
            icon: 'ion-card',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'chamados',
            data: {
              menu: {
                title: 'Chamados',
                selected: false,
                expanded: false,
                order: 100,
              }
            }
          },
          {
            path: 'clientes',
            data: {
              menu: {
                title: 'Clientes',
                selected: false,
                expanded: false,
                order: 100,
              }
            }
          }
        ]
      },
      {
        path: 'sms',
        data: {
          menu: {
            title: 'SMS',
            icon: 'ion-mouse',
            selected: false,
            expanded: false,
            order: 100,
          }
        }
      },
      {
        path: 'messages',
        data: {
          menu: {
            title: 'Mensagens',
            icon: 'ion-mouse',
            selected: false,
            expanded: false,
            order: 100,
          }
        }
      }
      //{
      //  path: 'components',
      //  data: {
      //    menu: {
      //      title: 'Components',
      //      icon: 'ion-gear-a',
      //      selected: false,
      //      expanded: false,
      //      order: 250,
      //    }
      //  },
      //  children: [
      //    {
      //      path: 'treeview',
      //      data: {
      //        menu: {
      //          title: 'Tree View',
      //        }
      //      }
      //    }
      //  ]
      //},

    ]
  }
];
