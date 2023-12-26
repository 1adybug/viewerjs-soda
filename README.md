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
export function preview(image: string | string[], options?: ViewerOptions): void
/**
 * @param image An group of images.
 * @param indexOrSrc The index of the image or the src to be displayed.
 * @param options The options of the viewer.
 */
export function preview(image: string[], indexOrSrc: number | string, options?: ViewerOptions): void
```

## Usage

```typescript
import { preview } from "viewerjs-soda"
import Viewer from "viewerjs"

const options: ViewerOptions | undefined = {/** your options */}

// preview an image directly
preview("https://xxx", options)

// preview a group of images
preview(["https://aaa", "https://bbb", "https://ccc"], options)

// preview a group of images, start with an index
preview(["https://aaa", "https://bbb", "https://ccc"], 2, options)

// preview a group of images, start with a src
preview(["https://aaa", "https://bbb", "https://ccc"], "https://ccc", options)
```
