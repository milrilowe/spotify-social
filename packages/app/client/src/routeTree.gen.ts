/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as CallbackImport } from './routes/callback'

// Create Virtual Routes

const LoginLazyImport = createFileRoute('/login')()
const UsernameLazyImport = createFileRoute('/$username')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const LoginLazyRoute = LoginLazyImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login.lazy').then((d) => d.Route))

const UsernameLazyRoute = UsernameLazyImport.update({
  id: '/$username',
  path: '/$username',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/$username.lazy').then((d) => d.Route))

const CallbackRoute = CallbackImport.update({
  id: '/callback',
  path: '/callback',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/callback': {
      id: '/callback'
      path: '/callback'
      fullPath: '/callback'
      preLoaderRoute: typeof CallbackImport
      parentRoute: typeof rootRoute
    }
    '/$username': {
      id: '/$username'
      path: '/$username'
      fullPath: '/$username'
      preLoaderRoute: typeof UsernameLazyImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/callback': typeof CallbackRoute
  '/$username': typeof UsernameLazyRoute
  '/login': typeof LoginLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/callback': typeof CallbackRoute
  '/$username': typeof UsernameLazyRoute
  '/login': typeof LoginLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/callback': typeof CallbackRoute
  '/$username': typeof UsernameLazyRoute
  '/login': typeof LoginLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/callback' | '/$username' | '/login'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/callback' | '/$username' | '/login'
  id: '__root__' | '/' | '/callback' | '/$username' | '/login'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  CallbackRoute: typeof CallbackRoute
  UsernameLazyRoute: typeof UsernameLazyRoute
  LoginLazyRoute: typeof LoginLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  CallbackRoute: CallbackRoute,
  UsernameLazyRoute: UsernameLazyRoute,
  LoginLazyRoute: LoginLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/callback",
        "/$username",
        "/login"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/callback": {
      "filePath": "callback.tsx"
    },
    "/$username": {
      "filePath": "$username.lazy.tsx"
    },
    "/login": {
      "filePath": "login.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
