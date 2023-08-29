/* eslint-disable @next/next/no-img-element */

import React, { useContext } from "react";
import AppMenuitem from "./AppMenuitem";
import { LayoutContext } from "./context/layoutcontext";
import { MenuProvider } from "./context/menucontext";
import Link from "next/link";
import { AppMenuItem } from "../../types/types";

const AppMenu = () => {
  const { layoutConfig } = useContext(LayoutContext);

  // ko or en
  const locale = layoutConfig.locale.code;
  // : AppMenuItem[]
  const menuItemsByLocale = {
    ko: [
      {
        label: "Home",
        items: [{ label: "대시보드", icon: "pi pi-fw pi-home", to: "/" }],
      },
      {
        label: "Pages",
        icon: "pi pi-fw pi-briefcase",
        to: "/pages",
        items: [
          {
            label: "랜딩",
            icon: "pi pi-fw pi-globe",
            to: "/landing",
          },
          {
            label: "인증",
            icon: "pi pi-fw pi-user",
            items: [
              {
                label: "로그인",
                icon: "pi pi-fw pi-sign-in",
                to: "/auth/login",
              },
              {
                label: "에러",
                icon: "pi pi-fw pi-times-circle",
                to: "/auth/error",
              },
              {
                label: "접근 불가",
                icon: "pi pi-fw pi-lock",
                to: "/auth/access",
              },
            ],
          },
          {
            label: "Crud",
            icon: "pi pi-fw pi-pencil",
            to: "/pages/crud",
          },
          {
            label: "타임라인",
            icon: "pi pi-fw pi-calendar",
            to: "/pages/timeline",
          },
          {
            label: "Not Found",
            icon: "pi pi-fw pi-exclamation-circle",
            to: "/pages/notfound",
          },
          {
            label: "Empty",
            icon: "pi pi-fw pi-circle-off",
            to: "/pages/empty",
          },
        ],
      },
      {
        label: "계층",
        items: [
          {
            label: "서브메뉴 1",
            icon: "pi pi-fw pi-bookmark",
            items: [
              {
                label: "서브메뉴 1.1",
                icon: "pi pi-fw pi-bookmark",
                items: [
                  { label: "서브메뉴 1.1.1", icon: "pi pi-fw pi-bookmark" },
                  { label: "서브메뉴 1.1.2", icon: "pi pi-fw pi-bookmark" },
                  { label: "서브메뉴 1.1.3", icon: "pi pi-fw pi-bookmark" },
                ],
              },
              {
                label: "서브메뉴 1.2",
                icon: "pi pi-fw pi-bookmark",
                items: [
                  { label: "서브메뉴 1.2.1", icon: "pi pi-fw pi-bookmark" },
                ],
              },
            ],
          },
          {
            label: "서브메뉴 2",
            icon: "pi pi-fw pi-bookmark",
            items: [
              {
                label: "서브메뉴 2.1",
                icon: "pi pi-fw pi-bookmark",
                items: [
                  { label: "서브메뉴 2.1.1", icon: "pi pi-fw pi-bookmark" },
                  { label: "서브메뉴 2.1.2", icon: "pi pi-fw pi-bookmark" },
                ],
              },
              {
                label: "서브메뉴 2.2",
                icon: "pi pi-fw pi-bookmark",
                items: [
                  { label: "서브메뉴 2.2.1", icon: "pi pi-fw pi-bookmark" },
                ],
              },
            ],
          },
        ],
      },
    ],
    en: [
      {
        label: "Home",
        items: [{ label: "Dashboard", icon: "pi pi-fw pi-home", to: "/" }],
      },
      {
        label: "Pages",
        icon: "pi pi-fw pi-briefcase",
        to: "/pages",
        items: [
          {
            label: "Landing",
            icon: "pi pi-fw pi-globe",
            to: "/landing",
          },
          {
            label: "Auth",
            icon: "pi pi-fw pi-user",
            items: [
              {
                label: "Login",
                icon: "pi pi-fw pi-sign-in",
                to: "/auth/login",
              },
              {
                label: "Error",
                icon: "pi pi-fw pi-times-circle",
                to: "/auth/error",
              },
              {
                label: "Access Denied",
                icon: "pi pi-fw pi-lock",
                to: "/auth/access",
              },
            ],
          },
          {
            label: "Crud",
            icon: "pi pi-fw pi-pencil",
            to: "/pages/crud",
          },
          {
            label: "Timeline",
            icon: "pi pi-fw pi-calendar",
            to: "/pages/timeline",
          },
          {
            label: "Not Found",
            icon: "pi pi-fw pi-exclamation-circle",
            to: "/pages/notfound",
          },
          {
            label: "Empty",
            icon: "pi pi-fw pi-circle-off",
            to: "/pages/empty",
          },
        ],
      },
      {
        label: "Hierarchy",
        items: [
          {
            label: "Submenu 1",
            icon: "pi pi-fw pi-bookmark",
            items: [
              {
                label: "Submenu 1.1",
                icon: "pi pi-fw pi-bookmark",
                items: [
                  { label: "Submenu 1.1.1", icon: "pi pi-fw pi-bookmark" },
                  { label: "Submenu 1.1.2", icon: "pi pi-fw pi-bookmark" },
                  { label: "Submenu 1.1.3", icon: "pi pi-fw pi-bookmark" },
                ],
              },
              {
                label: "Submenu 1.2",
                icon: "pi pi-fw pi-bookmark",
                items: [
                  { label: "Submenu 1.2.1", icon: "pi pi-fw pi-bookmark" },
                ],
              },
            ],
          },
          {
            label: "Submenu 2",
            icon: "pi pi-fw pi-bookmark",
            items: [
              {
                label: "Submenu 2.1",
                icon: "pi pi-fw pi-bookmark",
                items: [
                  { label: "Submenu 2.1.1", icon: "pi pi-fw pi-bookmark" },
                  { label: "Submenu 2.1.2", icon: "pi pi-fw pi-bookmark" },
                ],
              },
              {
                label: "Submenu 2.2",
                icon: "pi pi-fw pi-bookmark",
                items: [
                  { label: "Submenu 2.2.1", icon: "pi pi-fw pi-bookmark" },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  const model = menuItemsByLocale[locale] || [];

  return (
    <MenuProvider>
      <ul className="layout-menu">
        {model.map((item, i) => {
          return !item?.seperator ? (
            <AppMenuitem item={item} root={true} index={i} key={item.label} />
          ) : (
            <li className="menu-separator"></li>
          );
        })}
      </ul>
    </MenuProvider>
  );
};

export default AppMenu;
