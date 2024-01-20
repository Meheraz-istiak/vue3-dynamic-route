export default [
  {
    title: 'Dashboards',
    icon: { icon: 'tabler-command' },
    to: 'access-control',

  },
  {

    title: 'User/Role',
    icon: { icon: 'tabler-smart-home' },
    children: [
      {
        title: 'Role',
        to: 'role',
        action: 'read',
        subject: 'AclDemo',
      },
      {
        title: 'User',
        to: 'user',
        action: 'read',
        subject: 'AclDemo',
      },


    ],

    badgeClass: 'bg-primary',
  },

  {
    title: 'Module',
    icon: { icon: 'tabler-command' },
    to: 'module',

  },

  {
    title: 'Content',
    icon: { icon: 'tabler-command' },
    to: 'content',

  },

  {
    title: 'Setting',
    icon: { icon: 'tabler-command' },
    to: 'setting',
    action: 'read',
    subject: 'Demo',
  },
]
