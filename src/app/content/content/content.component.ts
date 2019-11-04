import { Component, OnInit } from '@angular/core';
import { Routes, Router, NavigationEnd, Route, ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/core';
import { MenuItem } from 'primeng/api';

const MENUITEMS: Array<MenuItem> = [
  {
    label: '账号管理',
    routerLink: '/content/account-manager',
    items: [
      {
        label: '账号列表',
        routerLink: '/content/account-manager/list'
      },
      {
        label: '新增账号',
        routerLink: '/content/account-manager/add'
      }
    ]
  },
  {
    label: '角色管理',
    routerLink: '/content/role-manager',
    items: [
      {
        label: '角色列表',
        routerLink: '/content/role-manager/list'
      },
      {
        label: '创建角色',
        routerLink: '/content/role-manager/add'
      }
    ]
  },
  {
    label: '权限管理',
    routerLink: '/content/auth-manager',
    items: [
      {
        label: '权限列表',
        routerLink: '/content/auth-manager/list'
      },
      {
        label: '增加权限',
        routerLink: '/content/auth-manager/add'
      }
    ]
  },
  {
    label: '商品管理',
    routerLink: '/content/goods-manager',
    items: [
      {
        label: '在售商品',
        routerLink: '/content/goods-manager/on-sale'
      },
      {
        label: '待售商品',
        routerLink: '/content/goods-manager/for-sale'
      }
    ]
  },
  {
    label: '订单管理',
    routerLink: '/content/order-manager',
    items: [
      {
        label: '订单管理',
        routerLink: '/content/order-manager/list'
      },
      {
        label: '快递管理',
        routerLink: '/content/order-manager/express'
      }
    ]
  }
];

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: [ './content.component.css' ]
})
export class ContentComponent implements OnInit {
  public navItems = [];
  public lastNavParams: any = {};
  public leftNavs: Array<MenuItem> = MENUITEMS;
  constructor(private router: Router, private activeRouter: ActivatedRoute, private stateServ: AppState) {
    this.lastNavParams = stateServ.get('routerCache') || {};
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // console.log(router.config);
        const url = event.urlAfterRedirects || event.url;
        const queryParams = activeRouter.snapshot.queryParams;
        if (queryParams && Object.keys(queryParams).length) {
          this.lastNavParams[url.split('?')[0]] = queryParams;
        }
        stateServ.set('routerCache', this.lastNavParams);
        const urlTree = (event.urlAfterRedirects || event.url).split('?')[0].split('/').reverse();
        urlTree.pop(); // first is empty string
        this.navItems = [];
        const destRouts = [];
        router.config.forEach((elem) => {
          destRouts.push(this.formatRouter(elem));
        });
        this.buildNavItems(urlTree, destRouts, [ '' ]);
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    });
  }

  private formatRouter(route: any) {
    const destRouter: any = Object.assign({}, route);
    if (route.children) {
      destRouter.children = [];
      route.children.forEach((elem) => {
        const formatRoutes = this.formatRouter(elem);
        destRouter.children.push(formatRoutes);
      });
    }
    if (route._loadedConfig) {
      destRouter.destRouter = { routes: [] };
      route._loadedConfig.routes.forEach((elem) => {
        const formatRoutes = this.formatRouter(elem);
        destRouter.destRouter.routes.push(formatRoutes);
      });
    }
    const paths = destRouter.path.split('/');
    if (paths.length <= 1) {
      return destRouter;
    } else {
      let restRoutes = destRouter;
      paths.forEach((path: string) => {
        restRoutes.path = path;
        const child = Object.assign({}, destRouter);
        if (child.data) {
          child.data = Object.assign({}, child.data);
          child.data.label = null;
        }
        restRoutes.children = restRoutes.children || [];
        restRoutes.children.push(child);
        restRoutes = restRoutes.children[restRoutes.children.length - 1];
      });
      restRoutes.children = null;
    }
    return destRouter;
  }

  ngOnInit() {
    // console.log(this.injector.get(ROUTES));
  }

  private buildNavItems(urlTree: Array<string>, routes: Routes, parentUrls: Array<String>) {
    if (!urlTree.length || !routes || !routes.length) {
      return;
    }
    const root = urlTree.pop();
    let restRoutes;
    routes.some((elem: any) => {
      if (elem.path === root || elem.path.startsWith(':') || elem.path.startsWith('*')) {
        parentUrls.push(root);
        if (elem.children) {
          restRoutes = elem.children;
        } else if (elem._loadedConfig) {
          restRoutes = elem._loadedConfig.routes;
        }
        if (elem.data && elem.data.label) {
          const url = parentUrls.join('/');
          this.navItems.push({
            label: this.formartLabel(elem.data.label, url, elem.data.default),
            routerLink: url,
            command: (itemInfo) => {
              this.router.navigate([ itemInfo.item.routerLink ], {
                queryParams: this.lastNavParams[itemInfo.item.routerLink]
              });
            }
          });
        }
        return true;
      }
    });
    if (!restRoutes && urlTree.length) {
      console.error('there is no route match', urlTree, routes, parentUrls);
    }
    if (!urlTree.length && restRoutes && restRoutes.length) {
      urlTree = [ '' ];
    }
    this.buildNavItems(urlTree, restRoutes, parentUrls);
  }

  private formartLabel(srcLabel: string, url: string, defaultTxt = '') {
    const queryParams = this.lastNavParams[url];
    if (!queryParams) {
      return srcLabel;
    }
    return srcLabel.replace(/\{(\w+)\}/g, (math, key) => {
      if (key in queryParams) {
        return queryParams[key];
      }
      return defaultTxt || key;
    });
  }
}
