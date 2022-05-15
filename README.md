<br>
<br>

<h3 align="center">ngx-star-port</h3>

<p align="center">
Shared Angular components across routes with animations
</p>

<p align="center"><a href="https://www.npmjs.com/package/ngx-star-port"><img src="https://img.shields.io/npm/v/ngx-star-port?color=2c7dd1&amp;label=" alt="NPM version"></a></p>

<p align="center"><a href="https://kasual1.github.io/ngx-star-port/master">Live Demo</a></p>

<br>
<br>

## Introduction

Ngx-star-port enables you to seamlessly transition shape and position of a component from one route to the other. While this might be a common task in native apps, the architectural design of frontend frameworks such as Angular makes this more difficult to achieve. The main concept of this library is inspired by <a href="https://github.com/antfu/vue-starport">VueStarport</a>.

## Install

```
npm i ngx-star-port
```

## Usage

1. Add `NgxStarPortModule` to your imports in your app.module.ts

```typescript
import { NgxStarPortModule } from 'ngx-star-port';

@NgModule({
  declarations: [],
  imports: [
    NgxStarPortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

2. Add the `<ngx-star-port-carrier>` component to the bottom of your `app.component.html`. The `<ngx-star-port-carrier>` component is a layer in which the animations between route changes are beeing performed in.

```html
<!--app.component.html-->

<router-outlet></router-outlet>

<ngx-star-port-carrier></ngx-star-port-carrier>
```

3. Wrap components that should be transitioned between route changes inside the `<ngx-star-port>` component and set a unique id. The id helps `<ngx-star-port>` to identify the origin and the destination of the transitioned component.

```html
<!-- page-a.component.html -->

<ngx-star-port id="my-id">
    <my-component></my-component>
</ngx-star-port>
```
Make sure to use the same id when wrapping the destionation component

```html
<!-- page-b.component.html -->

<ngx-star-port id="my-id">
    <my-component></my-component>
</ngx-star-port>
```



