# viewerjs-soda

[![NPM version](https://img.shields.io/npm/v/viewerjs-soda.svg?style=flat)](https://npmjs.org/package/viewerjs-soda)
[![NPM downloads](https://img.shields.io/npm/dm/viewerjs-soda)](https://npmjs.org/package/viewerjs-soda)

🚀 Functional invocation for viewerjs

## Type

```typescript
/**
 * @param image An image or a group of images.
 * @param options The options of the viewer.
 */
export function view(image: string | string[], options?: ViewerOptions): void
/**
 * @param image A group of images.
 * @param indexOrSrc The index of the image or the src to be displayed.
 * @param options The options of the viewer.
 */
export function view(image: string[], indexOrSrc: number | string, options?: ViewerOptions): void
```

## Usage

```typescript
import { view } from "viewerjs-soda"

const options: ViewerOptions | undefined = {/** your options */}

// view an image directly
view("https://xxx", options)

// view a group of images
view(["https://aaa", "https://bbb", "https://ccc"], options)

// view a group of images, start with an index
view(["https://aaa", "https://bbb", "https://ccc"], 2, options)

// view a group of images, start with a src
view(["https://aaa", "https://bbb", "https://ccc"], "https://ccc", options)
```
