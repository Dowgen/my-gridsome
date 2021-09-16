<template>
  <div class="layout sticky-header">
    <header class="header">
      <div class="header-content">
        <strong>
          <g-link to="/">
            <img class="logo" src="../assets/logo.svg" />
          </g-link>
        </strong>
        <nav class="nav">
          <g-link class="nav__link" to="/journal">Journal</g-link>
          <g-link class="nav__link" to="/contact">Say Hi!</g-link>
        </nav>
      </div>
    </header>
    <slot/>
    <CopyRight />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import CopyRight from "~/components/CopyRight.vue";

export default {
  components: {
    CopyRight,
  },
}
</script>
<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
  padding: 0 6rem;
}

.logo {
  max-width: 100%; 
  height: 1.5rem;
}

.nav__link {
    font-size: .9rem;
    font-weight: 600;
    text-decoration: none;
    margin-top: 4px;
    margin-right: 3rem;
    padding-bottom: 4px;
    border-bottom: 1px solid;
    border-color: transparent;
    transition: border .15s;
}

.home-links a {
  margin-right: 1rem;
}
.home-link {
  text-decoration: none;
}
.site-name {
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-decoration: none;
  text-transform: uppercase;
}
.nav > * {
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  margin-top: 4px;
  margin-right: 3rem;
  padding-bottom: 4px;
  border-bottom: 1px solid;
  border-color: transparent;
  transition: border 0.15s;
}
.nav > :last-of-type {
  margin: 0;
}
.nav > .active,
.nav > div:hover {
  border-color: inherit;
}
* {
  box-sizing: border-box;
}
body {
  --color-base: #fff;
  --color-base-1: #f3f3f3;
  --color-contrast: #000;
  --color-contrast-1: #2b2b2b;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, sans-serif;
  margin: 0;
  padding: 0;
  font-size: 16px;
  background: var(--color-base);
  color: var(--color-contrast);
  transition: background 0.5s ease;
}
body.dark {
  --color-base: #000;
  --color-base-1: #2b2b2b;
  --color-contrast: #fff;
  --color-contrast-1: #f3f3f3;
}
h1 {
  letter-spacing: -0.01em;
}
.layout {
  padding: 0;
}
.layout.sticky-header {
  padding: 6rem 0 0;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}
@media (min-width: 860px) {
  .container {
    padding: 0 6rem;
  }
}
a {
  color: inherit;
}
img {
  max-width: 100%;
}
.label {
  display: block;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
code[class*="language-"],
pre[class*="language-"] {
  color: #000;
  background: none;
  font-family: Space Mono, SFMono-Regular, Menlo, Monaco, Consolas,
    Liberation Mono, Courier New, monospace;
  font-size: 0.9rem;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  -webkit-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}
code[class*="language-"]::-moz-selection,
code[class*="language-"] ::-moz-selection,
pre[class*="language-"]::-moz-selection,
pre[class*="language-"] ::-moz-selection {
  text-shadow: none;
  background: var(--color-base-1);
}
code[class*="language-"]::selection,
code[class*="language-"] ::selection,
pre[class*="language-"]::selection,
pre[class*="language-"] ::selection {
  text-shadow: none;
  background: var(--color-base-1);
}
@media print {
  code[class*="language-"],
  pre[class*="language-"] {
    text-shadow: none;
  }
}
pre[class*="language-"] {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
}
:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  background: var(--color-base-1);
}
:not(pre) > code[class*="language-"] {
  padding: 0.1em;
  border-radius: 0.3em;
  white-space: normal;
}
.token.cdata,
.token.comment,
.token.doctype,
.token.prolog {
  color: #708090;
}
.token.punctuation {
  color: #999;
}
.namespace {
  opacity: 0.7;
}
.token.boolean,
.token.constant,
.token.deleted,
.token.number,
.token.property,
.token.symbol,
.token.tag {
  color: #905;
}
.token.attr-name,
.token.builtin,
.token.char,
.token.inserted,
.token.selector,
.token.string {
  color: #690;
}
.language-css .token.string,
.style .token.string,
.token.entity,
.token.operator,
.token.url {
  color: #a67f59;
  background: hsla(0, 0%, 100%, 0.5);
}
.token.atrule,
.token.attr-value,
.token.keyword {
  color: #07a;
}
.token.function {
  color: #dd4a68;
}
.token.important,
.token.regex,
.token.variable {
  color: #e90;
}
.token.bold,
.token.important {
  font-weight: 700;
}
.token.italic {
  font-style: italic;
}
.token.entity {
  cursor: help;
}
p {
  line-height: 1.5;
  font-size: 1.15rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.5rem;
}
h4,
h5,
h6 {
  font-size: 1.15rem;
}
</style>
