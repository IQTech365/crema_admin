import React from 'react';
import {Navigate} from 'react-router-dom';
import {RoutePermittedRole} from 'shared/constants/AppConst';
const Mail = React.lazy(() => import('./Mail'));
const ToDo = React.lazy(() => import('./ToDo'));
const Contact = React.lazy(() => import('./Contact'));
const ScrumBoard = React.lazy(() => import('./ScrumBoard'));
const Chat = React.lazy(() => import('./Chat'));
const Wall = React.lazy(() => import('./Wall'));

export const appsConfig = [
  {
    permittedRole: RoutePermittedRole.user,
    path: [
      '/apps/mail/label/:label',
      '/apps/mail/label/:label/:id',
      '/apps/mail/:folder',
      '/apps/mail/:folder/:id',
    ],
    element: <Mail />,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/apps/mail',
    element: <Navigate to='/apps/mail/inbox' />,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: [
      '/apps/todo/label/:label',
      '/apps/todo/label/:label/:id',
      '/apps/todo/:folder',
      '/apps/todo/:folder/:id',
    ],
    element: <ToDo />,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/apps/todo',
    element: <Navigate to='/apps/todo/all' />,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: ['/apps/contact/folder/:name', '/apps/contact/label/:name'],
    element: <Contact />,
  },
  {
    path: '/apps/contact',
    element: <Navigate to='/apps/contact/folder/all' />,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: ['/apps/chat'],
    element: <Chat />,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: ['/apps/scrum-board/:id', '/apps/scrum-board'],
    element: <ScrumBoard />,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: ['/apps/wall'],
    element: <Wall />,
  },
];
