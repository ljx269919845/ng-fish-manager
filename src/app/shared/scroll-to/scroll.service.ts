import { Injectable, ElementRef, RendererType2, Renderer2, RendererFactory2 } from '@angular/core';
import scrollIntoView from 'dom-scroll-into-view';

function computedStyle(el, prop) {
  const getComputedStyle = window.getComputedStyle;
  const style =
    // If we have getComputedStyle
    getComputedStyle
      ? // Query it
        // TODO: From CSS-Query notes, we might need (node, null) for FF
        getComputedStyle(el)
      : // Otherwise, we are in IE and use currentStyle
        el.currentStyle;
  if (style) {
    return style[
      // Switch to camelCase for CSSOM
      // DEV: Grabbed from jQuery
      // https://github.com/jquery/jquery/blob/1.9-stable/src/css.js#L191-L194
      // https://github.com/jquery/jquery/blob/1.9-stable/src/core.js#L593-L597
      prop.replace(/-(\w)/gi, (word, letter) => {
        return letter.toUpperCase();
      })
    ];
  }
  return undefined;
}

function getScrollableContainer(n: Node) {
  let node = n;
  let nodeName;
  /* eslint no-cond-assign:0 */
  while ((nodeName = node.nodeName.toLowerCase()) !== 'body') {
    const overflowY = computedStyle(node, 'overflowY');
    // https://stackoverflow.com/a/36900407/3040605
    if (
      node !== n &&
      (overflowY === 'auto' || overflowY === 'scroll') &&
      (node as HTMLElement).scrollHeight > (node as HTMLElement).clientHeight
    ) {
      return node;
    }
    node = node.parentNode;
  }
  return nodeName === 'body' ? node.ownerDocument : node;
}

function getClientPosition(elem) {
  let box;
  let x;
  let y;
  const doc = elem.ownerDocument;
  const body = doc.body;
  const docElem = doc && doc.documentElement;
  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
  box = elem.getBoundingClientRect();

  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

  x = box.left;
  y = box.top;

  // In IE, most of the time, 2 extra pixels are added to the top and left
  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
  // IE6 standards mode, this border can be overridden by setting the
  // document element's border to zero -- thus, we cannot rely on the
  // offset always being 2 pixels.

  // In quirks mode, the offset can be determined by querying the body's
  // clientLeft/clientTop, but in standards mode, it is found by querying
  // the document element's clientLeft/clientTop.  Since we already called
  // getClientBoundingRect we have already forced a reflow, so it is not
  // too expensive just to query them all.

  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
  // 窗口边框标准是设 documentElement ,quirks 时设置 body
  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
  // 标准 ie 下 docElem.clientTop 就是 border-top
  // ie7 html 即窗口边框改变不了。永远为 2
  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;

  return {
    left: x,
    top: y
  };
}

function getScroll(w, top = false) {
  let ret = w[`page${top ? 'Y' : 'X'}Offset`];
  const method = `scroll${top ? 'Top' : 'Left'}`;
  if (typeof ret !== 'number') {
    const d = w.document;
    // ie6,7,8 standard mode
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }
  return ret;
}

function getScrollLeft(w) {
  return getScroll(w);
}

function getScrollTop(w) {
  return getScroll(w, true);
}

function getOffset(el) {
  const pos = getClientPosition(el);
  const doc = el.ownerDocument;
  const w = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w);
  pos.top += getScrollTop(w);
  return pos;
}

function getWindow(node) {
  const doc = node.ownerDocument || node;
  return doc.defaultView || doc.parentWindow;
}

@Injectable()
export class ScrollService {
  private scrollTabs = [];
  private scrollElems: any = {};
  private scrollContainer: Element;
  renderer: Renderer2;
  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.scroll = this.scroll.bind(this);
  }

  registerScrollAnchor(scrollElem: ElementRef, scrollName: string) {
    this.scrollElems[scrollName] = scrollElem;
    if (Object.keys(this.scrollElems).length === 1) {
      let container = getScrollableContainer(scrollElem.nativeElement);
      if (container.nodeType === 9) {
        container = getWindow(container);
      }
      this.setContainerAndListenScroll(container as Element);
    }
  }

  unregisterScrollAnchor(scrollName: string) {
    delete this.scrollElems[scrollName];
    if (Object.keys(this.scrollElems).length === 0) {
      this.scrollContainer.removeEventListener('scroll', this.scroll);
    }
  }

  registerScrollTab(scrollTab: ElementRef, destScroll: any) {
    const index = this.scrollTabs.findIndex((elem) => elem.scrollTab === scrollTab);
    if (index === -1) {
      this.scrollTabs.push({ scrollTab, destScroll });
    }
  }

  unregisterScrollTab(scrollTab: ElementRef) {
    const index = this.scrollTabs.findIndex((elem) => elem.scrollTab === scrollTab);
    if (index !== -1) {
      this.scrollTabs.splice(index, 1);
    }
  }

  scrollTo(scrollName: string) {
    if (!this.scrollElems[scrollName]) {
      throw new Error(`${scrollName} not exists`);
    }
    scrollIntoView(this.scrollElems[scrollName].nativeElement, this.scrollContainer, {
      onlyScrollIfNeeded: false,
      allowHorizontalScroll: false,
      offsetTop: 204,
      alignWithTop: true
    });
  }

  setContainerAndListenScroll(constainer: Element) {
    this.scrollContainer = constainer;
    constainer.addEventListener('scroll', this.scroll);
  }

  setScrollTabActive(scrollName) {
    let index = 0;
    for (const scrollTab of this.scrollTabs) {
      index++;
      if (scrollTab.destScroll === scrollName || (!scrollName && index === 1)) {
        this.renderer.addClass(scrollTab.scrollTab.nativeElement, 'active');
      } else {
        this.renderer.removeClass(scrollTab.scrollTab.nativeElement, 'active');
      }
    }
  }

  scroll() {
    const scrollTop = getScrollTop(this.scrollContainer) + 354;
    let find = null;
    for (let name in this.scrollElems) {
      const offsetTop = getOffset(this.scrollElems[name].nativeElement).top;
      if (scrollTop > offsetTop) {
        find = name;
      }
    }
    this.setScrollTabActive(find);
  }
}
