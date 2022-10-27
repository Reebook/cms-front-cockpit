import { a as useHead } from './server.mjs';
import { defineComponent, toRefs, useSlots, h } from 'vue';
import { u as useAsyncData } from './asyncData.9f16a5a6.mjs';
import { hash } from 'ohash';
import { j as jsonStringify, u as useCookie } from './json.cec541d9.mjs';
import { w as withContentBase } from './utils.b28e50e4.mjs';
import 'ohmyfetch';
import 'ufo';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'defu';
import '@vue/shared';
import 'vue/server-renderer';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'scule';
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
import 'cookie-es';

const fetchContentNavigation = (queryBuilder) => {
  const params = queryBuilder == null ? void 0 : queryBuilder.params();
  const apiPath = withContentBase(params ? `/navigation/${hash(params)}` : "/navigation");
  {
    useHead({
      link: [
        { rel: "prefetch", href: apiPath }
      ]
    });
  }
  return $fetch(apiPath, {
    method: "GET",
    responseType: "json",
    params: {
      _params: jsonStringify(params || {}),
      previewToken: useCookie("previewToken").value
    }
  });
};
const ContentNavigation = defineComponent({
  props: {
    query: {
      type: Object,
      required: false,
      default: void 0
    }
  },
  async setup(props) {
    const {
      query
    } = toRefs(props);
    const { data, refresh } = await useAsyncData(`content-navigation-${hash(query.value)}`, () => fetchContentNavigation(query.value), "$S4kfQoJwUW");
    return {
      data,
      refresh
    };
  },
  render(ctx) {
    var _a;
    const slots = useSlots();
    const {
      query,
      data,
      refresh
    } = ctx;
    const emptyNode = (slot, data2) => h("pre", null, JSON.stringify({ message: "You should use slots with <ContentNavigation>", slot, data: data2 }, null, 2));
    if ((slots == null ? void 0 : slots.empty) && (!data || !(data == null ? void 0 : data.length))) {
      return ((_a = slots == null ? void 0 : slots.empty) == null ? void 0 : _a.call(slots, { query, ...this.$attrs })) || emptyNode("empty", { query, data });
    }
    return (slots == null ? void 0 : slots.default) ? slots.default({ navigation: data, refresh, ...this.$attrs }) : emptyNode("default", data);
  }
});

export { ContentNavigation as default };
//# sourceMappingURL=ContentNavigation.d9b8df24.mjs.map
