import { e as __nuxt_component_0$1, _ as __nuxt_component_0$2, f as __nuxt_component_2 } from './server.mjs';
import { withAsyncContext, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { u as useFetch } from './fetch.66fe2e88.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import 'ohmyfetch';
import 'ufo';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'defu';
import '@vue/shared';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'fs';
import 'pathe';
import 'url';
import 'remark-emoji';
import 'rehype-slug';
import 'remark-squeeze-paragraphs';
import 'rehype-external-links';
import 'remark-gfm';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'js-yaml';
import 'flat';
import 'unified';
import 'remark-parse';
import 'remark-rehype';
import 'unist-util-visit';
import 'stringify-entities';
import 'parse-entities';
import 'micromark-util-character';
import 'micromark-factory-space';
import 'micromark-factory-whitespace';
import 'micromark-core-commonmark';
import 'mdast-util-to-hast';
import 'detab';
import 'unist-builder';
import 'mdurl';
import 'unist-util-position';
import 'html-tags';
import 'slugify';
import './asyncData.9f16a5a6.mjs';

const _sfc_main = {
  __name: "painting_index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: paintings } = ([__temp, __restore] = withAsyncContext(() => useFetch(`https://cms-una.000webhostapp.com/api/content/items/pinturas?fields={"title":true}`, "$YLLOW6GoC6")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_headerView = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_footerView = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_headerView, null, null, _parent));
      _push(`<div class="container"><h3 style="${ssrRenderStyle({ "margin-top": "15px" })}">Informaci\xF3n de pinturas</h3><p>Esta secci\xF3n muestra el listado de pinturas</p><ul><!--[-->`);
      ssrRenderList(unref(paintings), (painting) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/paintings/` + painting._id
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(painting.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(painting.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
      _push(ssrRenderComponent(_component_footerView, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/painting_index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=painting_index.9c9790e7.mjs.map
