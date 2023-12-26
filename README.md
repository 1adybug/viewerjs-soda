# viewerjs-fun

[![NPM version](https://img.shields.io/npm/v/viewerjs-soda.svg?style=flat)](https://npmjs.org/package/viewerjs-soda)
[![NPM downloads](https://img.shields.io/npm/dm/viewerjs-soda)](https://npmjs.org/package/viewerjs-soda)

Functional invocation for viewerjs

## Usage

```typescript
/**
 * @param image A picture or a set of pictures.
 * @param options The options of the viewer.
 */
export function preview(image: string | string[], options?: Viewer.Options): void
/**
 * @param image A set of pictures.
 * @param indexOrSrc The index of the picture or the src to be displayed.
 * @param options The options of the viewer.
 */
export function preview(image: string[], indexOrSrc: number | string, options?: Viewer.Options): void
```
