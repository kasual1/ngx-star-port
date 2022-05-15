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

In routes, wrap the component with the `<Starport>` component.

```html
<!-- PageA.vue -->
<script setup>
import { Starport } from 'vue-starport'
</script>

<template>
  <div>
    <!-- ... -->
    <Starport port="my-id" style="height:400px"> 
      <MyComponent :prop="value"/>
    </Starport>
  </div>
</template>
```

On the other page, we do the same thing with **the same `port` id** to identify the instance.

```html
<!-- PageB.vue -->
<script setup>
import { Starport } from 'vue-starport'
</script>

<template>
  <div>
    <!-- ... -->
    <Starport port="my-id" style="height:600px">
      <MyComponent :prop="value"/>
    </Starport>
  </div>
</template>
```

> Note that you might need to apply some styles to `<Starport>` to make it have a defined size indicating the area for the "floating starcraft" to land.

Checkout the [Playground](./playground/) for more examples.



