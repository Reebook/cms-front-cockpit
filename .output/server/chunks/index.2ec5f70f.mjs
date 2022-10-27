import { d as _export_sfc, e as __nuxt_component_0$1, _ as __nuxt_component_0$2, f as __nuxt_component_2 } from './server.mjs';
import { withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
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

const _sfc_main = {
  async asyncData({ $content, params }) {
    console.log($content);
    const articles = await $content("blog").only(["title", "slug"]).sortBy("createdAt", "asc").fetch();
    return {
      articles
    };
  },
  components: { HeaderView: __nuxt_component_0$1 }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_headerView = __nuxt_component_0$1;
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_FooterView = __nuxt_component_2;
  _push(`<main${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_headerView, null, null, _parent));
  _push(`<div class="container"><div class="row"><h2 style="${ssrRenderStyle({ "margin-top": "15px" })}"></h2><p>Este sitio muestra la informaci\xF3n sobre artistas y museos.</p><ul><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/artist_index" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Artista`);
      } else {
        return [
          createTextVNode("Artista")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/painting_index" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Pintura`);
      } else {
        return [
          createTextVNode("Pintura")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/museum_index" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Museos`);
      } else {
        return [
          createTextVNode("Museos")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div>`);
  _push(ssrRenderComponent(_component_FooterView, null, null, _parent));
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.2ec5f70f.mjs.map
